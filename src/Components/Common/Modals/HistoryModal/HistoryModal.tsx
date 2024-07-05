import React, { useEffect } from "react";
import "./HistoryModal.scss";
import CommonModal from "../CommonModal/CommonModal";
import CustomTable from "../../Table/Table";
import InfiniteScroll from "react-infinite-scroll-component";
import { formatAddress } from "../../../../Services/Helper/helper";

interface Transaction {
  from: string;
  to: string;
  token: string;
  txnId: string;
  id: number;
}

interface Props {
  show: boolean;
  handleClose: (value: boolean) => void;
  transactionHistory: Transaction[];
  loading: boolean;
  getTransactionHistory: () => void; // Ensure this function takes no arguments
  hasMore: boolean;
}

const HistoryModal: React.FC<Props> = ({
  show,
  handleClose,
  transactionHistory,
  loading,
  getTransactionHistory,
  hasMore,
}) => {
  return (
    <CommonModal
      heading="My History"
      show={show}
      handleClose={() => handleClose(false)}
      className="history_modal"
    >
      <CustomTable
        fields={["From Chain", "To Chain", "Token", "Txn ID", "Txn Status"]}
      >
        {transactionHistory?.length > 0 &&
          transactionHistory?.map((transaction: any) => (
            <tr key={transaction.OrderId}>
              <td>{formatAddress(transaction.addressFrom)}</td>
              <td>{formatAddress(transaction.addressTo)}</td>
              <td>{transaction.chainName}</td>
              <td>{transaction.OrderId}</td>
              <td>{transaction.txnStatus}</td>
            </tr>
          ))}
        {loading && <h1>Loading...</h1>}
      </CustomTable>
    </CommonModal>
  );
};

export default HistoryModal;
