// import React, { useEffect, useState } from "react";
// import { Modal, ProgressBar } from "react-bootstrap";
// import {
//   CloseIcon,
//   TransactionDoneIcon,
// } from "../../../../Assets/Images/Icons/SvgIcons";
// import "./TransactionDone.scss";
// import { SOL_EXPLORER_URL, TRANSACTION_BASE_URL } from "../../../../constants";
// import { useNetwork, useSwitchNetwork } from "wagmi";
// import { useSocket } from "../../../../context/socket/SocketProvider";
// import { useSelector } from "react-redux";

// interface TransactionDetails {
//   DepositReceived: boolean;
//   validatorSigning: boolean;
//   transactionInitiated: boolean;
//   executed: boolean;
// }

// interface TransactionDoneProps {
//   show: boolean;
//   handleClose: (value: boolean) => void;
//   transaction?: any;
//   solanaTransactionResult?: any;
//   approval: any;
// }

// const TransactionDone: React.FC<TransactionDoneProps> = ({
//   show,
//   handleClose,
//   transaction,
//   approval,
//   solanaTransactionResult,
// }) => {
//   const [done, setDone] = useState<number>(0);
//   const [txnExplorer, setTxnExplorer] = useState<number>(0);
//   const [transactionDetails, setTransactionDetails] =
//     useState<TransactionDetails | null>(null);
//   const socket: any = useSocket();
//   const PhantomWalletAddress = useSelector(
//     (state: any) => state.user.PhantomWalletAddress
//   );

//   const hash = transaction?.hash;

//   const { chain: CONNECTED_CHAIN_ID }: any = useNetwork();
//   useEffect(() => {
//     switch (CONNECTED_CHAIN_ID?.id) {
//       case 97:
//         setTxnExplorer(TRANSACTION_BASE_URL.bsc);
//         break;
//       case 11155111:
//         setTxnExplorer(TRANSACTION_BASE_URL.eth);
//         break;
//       default:
//         break;
//     }
//   }, [CONNECTED_CHAIN_ID]);
//   const handleTransaction = () => {
//     setDone(0);
//     setTxnExplorer(0);
//     setTransactionDetails(null);
//   };
//   const handleCloseModal = () => {
//     handleTransaction();
//     handleClose(false);
//   };
//   useEffect(() => {
//     const hashHandler = (data: any) => {
//       setTransactionDetails(data);
//       console.log(`Received event ${hash}`, data);
//     };
//     socket.on(hash, hashHandler);
//     return () => {
//       socket.off(hash, hashHandler);
//     };
//   }, [hash, socket]);
//   useEffect(() => {
//     if (transactionDetails) {
//       let progress = 0; // Initialize progress
//       if (transactionDetails.DepositReceived) {
//         progress = 1; // 25% complete
//       }
//       if (transactionDetails.validatorSigning) {
//         progress = 2; // 50% complete
//       }
//       if (transactionDetails.transactionInitiated) {
//         progress = 3; // 75% complete
//       }
//       if (transactionDetails.executed) {
//         progress = 4; // 100% complete
//       }
//       setDone(progress);
//     }
//   }, [transactionDetails]);

//   return (
//     <Modal
//       centered
//       className="transModal"
//       show={show}
//       onHide={() => {
//         setDone(0);
//         handleTransaction();
//         handleClose(false);
//       }}
//     >
//       <button
//         onClick={() => {
//           setDone(0);
//           handleClose(false);
//         }}
//         className="modal_close_btn"
//       >
//         <CloseIcon />
//       </button>
//       <Modal.Body>
//         {approval ? (
//           <>
//             {approval && <TransactionDoneIcon />}
//             <h3>Transaction Status</h3>
//             <br />
//             <p>
//               <strong>Transaction Approved</strong>
//             </p>
//             {approval && (
//               <a
//                 href={`${txnExplorer}/${approval.hash}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View on explorer
//               </a>
//             )}
//           </>
//         ) : (
//           <>
//             {done === 4 && <TransactionDoneIcon />}
//             {done !== 4 ? (
//               <h3>Pending Transaction</h3>
//             ) : (
//               <h3>
//                 {transaction
//                   ? "Transaction Complete"
//                   : "Transaction Processing"}
//               </h3>
//             )}
//             <p>
//               Transaction Status <br />
//               {done === 0 && <span>Transaction Pending</span>}
//               {done === 1 && <span>Deposit Received</span>}
//               {done === 2 && <span>Validator Signing</span>}
//               {done === 3 && <span>Transaction Initiated</span>}
//               {done === 4 && <span>Transaction Executed</span>}
//             </p>
//             {transaction && transaction.hash ? (
//               <a
//                 href={`${txnExplorer}/${transaction.hash}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View on explorer
//               </a>
//             ) : solanaTransactionResult && solanaTransactionResult.hash ? (
//               <a
//                 href={`${SOL_EXPLORER_URL}/${solanaTransactionResult.hash}?cluster=devnet`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View on explorer
//               </a>
//             ) : null}

//             <ProgressBar animated max={4} now={done} />
//           </>
//         )}
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default TransactionDone;

import React, { useEffect, useState, useCallback } from "react";
import { Modal, ProgressBar } from "react-bootstrap";
import {
  CloseIcon,
  TransactionDoneIcon,
} from "../../../../Assets/Images/Icons/SvgIcons";
import "./TransactionDone.scss";
import { SOL_EXPLORER_URL, TRANSACTION_BASE_URL } from "../../../../constants";
import { useNetwork } from "wagmi";
import { useSocket } from "../../../../context/socket/SocketProvider";
import { useSelector } from "react-redux";

interface TransactionDetails {
  DepositReceived: boolean;
  validatorSigning: boolean;
  transactionInitiated: boolean;
  executed: boolean;
}

interface TransactionDoneProps {
  show: boolean;
  handleClose: (value: boolean) => void;
  transaction?: any;
  solanaTransactionResult?: any;
  approval: any;
}

interface Socket {
  on(event: string, callback: (data: any) => void): void;
  off(event: string, callback: (data: any) => void): void;
}

const TransactionDone: React.FC<TransactionDoneProps> = ({
  show,
  handleClose,
  transaction,
  approval,
  solanaTransactionResult,
}) => {
  const [done, setDone] = useState<number>(0);
  const [txnExplorer, setTxnExplorer] = useState<string>("");
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionDetails | null>(null);
  const [solanaTransactionDetails, setSolanaTransactionDetails] =
    useState<TransactionDetails | null>(null);
  const socket: Socket = useSocket();
  const PhantomWalletAddress = useSelector(
    (state: any) => state.user.PhantomWalletAddress
  );

  const hash = transaction?.hash;
  const solanaHash = solanaTransactionResult;
  

  const { chain: CONNECTED_CHAIN_ID } = useNetwork();

  const updateTxnExplorer = useCallback(() => {
    switch (CONNECTED_CHAIN_ID?.id) {
      case 97:
        setTxnExplorer(TRANSACTION_BASE_URL.bsc);
        break;
      case 11155111:
        setTxnExplorer(TRANSACTION_BASE_URL.eth);
        break;
      default:
        setTxnExplorer("");
        break;
    }
  }, [CONNECTED_CHAIN_ID]);

  useEffect(() => {
    updateTxnExplorer();
  }, [updateTxnExplorer]);

  const handleTransaction = useCallback(() => {
    setDone(0);
    setTxnExplorer("");
    setTransactionDetails(null);
    setSolanaTransactionDetails(null);
  }, []);

  const handleCloseModal = useCallback(() => {
    handleTransaction();
    handleClose(false);
  }, [handleTransaction, handleClose]);

  useEffect(() => {
    if (hash) {
      const hashHandler = (data: any) => {
        setTransactionDetails(data);
        console.log('data', data)
        console.log(`Received event ${hash}`, data);
      };
      socket.on(hash, hashHandler);
      return () => {
        socket.off(hash, hashHandler);
      };
    }
  }, [hash, socket]);

  useEffect(() => {
    if (solanaHash) {
      const solanaHashHandler = (data: any) => {
        setSolanaTransactionDetails(data);
        console.log(`Received event ${solanaHash}`, data);
      };
      socket.on(solanaHash, solanaHashHandler);
      return () => {
        socket.off(solanaHash, solanaHashHandler);
      };
    }
  }, [solanaHash, socket]);

  const calculateProgress = useCallback(
    (details: TransactionDetails | null) => {
      if (!details) return 0;
      if (details.executed) return 4;
      if (details.transactionInitiated) return 3;
      if (details.validatorSigning) return 2;
      if (details.DepositReceived) return 1;
      return 0;
    },
    []
  );

  useEffect(() => {
    setDone(calculateProgress(transactionDetails));
  }, [transactionDetails, calculateProgress]);

  useEffect(() => {
    setDone(calculateProgress(solanaTransactionDetails));
  }, [solanaTransactionDetails, calculateProgress]);

  return (
    <Modal
      centered
      className="transModal"
      show={show}
      onHide={handleCloseModal}
    >
      <button onClick={handleCloseModal} className="modal_close_btn">
        <CloseIcon />
      </button>
      <Modal.Body>
        {approval ? (
          <>
            <TransactionDoneIcon />
            <h3>Transaction Status</h3>
            <br />
            <p>
              <strong>Transaction Approved</strong>
            </p>
            {approval.hash && (
              <a
                href={`${txnExplorer}/${approval.hash}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on explorer
              </a>
            )}
          </>
        ) : (
          <>
            {done === 4 && <TransactionDoneIcon />}
            <h3>
              {done !== 4 ? "Pending Transaction" : "Transaction Complete"}
            </h3>
            <p>
              Transaction Status <br />
              {done === 0 && <span>Transaction Pending</span>}
              {done === 1 && <span>Deposit Received</span>}
              {done === 2 && <span>Validator Signing</span>}
              {done === 3 && <span>Transaction Initiated</span>}
              {done === 4 && <span>Transaction Executed</span>}
            </p>
            {(transaction?.hash || solanaTransactionResult) && (
              <a
                href={
                  transaction?.hash
                    ? `${txnExplorer}/${transaction?.hash}`
                    : `${SOL_EXPLORER_URL}/${solanaTransactionResult}?cluster=devnet`
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                View on explorer
              </a>
            )}
            <ProgressBar animated max={4} now={done} />
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default TransactionDone;
