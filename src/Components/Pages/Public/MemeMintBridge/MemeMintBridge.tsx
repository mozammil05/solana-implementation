import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import { Table } from "react-bootstrap";
import CommonHeading from "../../../Common/Heading/Heading";
import {
  CopyIcon,
  DownArrow,
  SwapIconHorizontal,
} from "../../../../Assets/Images/Icons/SvgIcons";
import bscIcon from "../../../../Assets/Images/Icons/tokens/bsc-blockchain.svg";
import ChooseNetwork from "../../../Common/Modals/ChooseNetwork/ChooseNetwork";
import HistoryModal from "../../../Common/Modals/HistoryModal/HistoryModal";
import TransactionDone from "../../../Common/Modals/TransactionDone/TransactionDone";
import InputCustom from "../../../Common/FormInputs/Input/Input";
import ButtonCustom from "../../../Common/Button/ButtonCustom";
import ethIcon from "../../../../Assets/Images/Icons/tokens/eth.svg";
import gthIcon from "../../../../Assets/Images/Icons/tokens/gth.svg";
import "./MemeMintBridge.scss";
import { useDispatch, useSelector } from "react-redux";
import Deposit from "../../../../Abi/MintDepositAbi.json";
import TokenAbi from "../../../../Abi/MintTokenAbi.json";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

import {
  bigNumberToFixed,
  formatAddress,
} from "../../../../Services/Helper/helper";
import {
  setNetworkListFrom,
  setNetworkListTo,
} from "../../../../Redux/reducers/user/user";

import {
  useContractRead,
  useContractWrite,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";
import { CONTRACT_ADDRESS, TOKEN_ADDRESS } from "../../../../constants";
import { getTransactionsDetails } from "../../../../Services/apis/transactionApi/transactionsAPIS";
import useCopyClipboard from "../../../../hooks/useCopyToClipboard";
import { SolanaServiceTransactions } from "../../../../Services/solana";
import { connection } from "../../../../Services/solana/utils/constants";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const tokenList = [
  {
    icon: gthIcon,
    title: "MemeMint Network",
    value: "MM",
    shortName: "MM",
  },
];
const MemeMintBridge = () => {
  const [fromNetwork, setFromNetwork] = useState<any>("");
  const [toNetwork, setToNetwork] = useState<any>("");
  const [fromNetworkModal, setFromNetworkModal] = useState<any>(false);
  const [toNetworkModal, setToNetworkModal] = useState<any>(false);
  const [showHistory, setShowHistory] = useState(false);
  const [transactionModal, setTransactionModal] = useState(false);
  const [transaction, setTransaction] = useState<any>("");
  const [transactionHistory, setTransactionHistory] = useState<any>("");
  const [selectedToken, setSelectedToken] = useState(tokenList[0].value);
  const [receiveAddress, setReceiveAddress] = useState("");
  const [balance, setBalance] = useState<any>("");
  const [amount, setAmount] = useState<any>("");
  const [hash, setHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(100);
  const [hasMore, setHasMore] = useState(true);
  const [approval, setApproval] = useState("");
  const [staticCopy] = useCopyClipboard();
  const [solanaTransactionResult, setSolanaTransactionResult] =
    useState("null");
  const selectedNetwork: any = useSelector(
    (state: any) => state.user.networkFrom.name
  );

  const dispatch = useDispatch();
  const walletAddress = useSelector(
    (state: any) => state.user.userWalletAddress
  );

  const PhantomWalletAddress = useSelector(
    (state: any) => state.user.PhantomWalletAddress
  );

  const selectedNetworkFrom = useSelector(
    (state: any) => state.user.networkFrom
  );

  const selectedNetworkTo = useSelector((state: any) => state.user.networkTo);

  let convetedAmt = Number(amount) * 10 ** 18;

  type WAGMI_CONTRACT_READ_BALANCEOF = {
    isError: any;
    isLoading: any;
    isSuccess: any;
    refetch: any;
  };

  const { chain: CONNECTED_CHAIN_ID }: any = useNetwork();

  const {
    isError: balanceOfError,
    isLoading: balanceOfLoading,
    isSuccess: balanceOfSuccess,
    refetch: getBalanceOfData,
  }: WAGMI_CONTRACT_READ_BALANCEOF = useContractRead({
    address:
      selectedNetworkFrom.chainId == 97 ? TOKEN_ADDRESS.bsc : TOKEN_ADDRESS.eth,
    abi: TokenAbi,
    functionName: "balanceOf",
    args: [walletAddress],
  });

  const getBalanceOf = async () => {
    if (walletAddress) {
      try {
        const { data } = await getBalanceOfData();
        const formattedBalance = bigNumberToFixed(Number(data) / 10 ** 18);
        setBalance(formattedBalance);
      } catch (error) {
        console.log("Error in getBalanceOf =>", error);
      }
    }
  };
  useEffect(() => {
    getBalanceOf();
  }, [walletAddress, CONNECTED_CHAIN_ID, transaction]);

  // for allowance
  type WAGMI_CONTRACT_READ = {
    isError: any;
    isLoading: any;
    isSuccess: any;
    refetch: any;
  };

  const {
    isError: allowanceError,
    isLoading: allowanceLoading,
    isSuccess: allowanceSuccess,
    refetch: getAllowanceData,
  }: WAGMI_CONTRACT_READ = useContractRead({
    address:
      selectedNetworkFrom.chainId == 97 ? TOKEN_ADDRESS.bsc : TOKEN_ADDRESS.eth,
    abi: TokenAbi,
    functionName: "allowance",
    args: [
      walletAddress,
      selectedNetworkFrom.chainId == 97
        ? CONTRACT_ADDRESS.bsc
        : CONTRACT_ADDRESS.eth,
    ],
  });

  const getAllowance = async () => {
    if (walletAddress) {
      try {
        const data = await getAllowanceData();
        console.log(data, "getAllowance");
        return data?.data;
      } catch (error) {
        console.log("Error in getAllowance =>", error);
      }
    }
  };

  // Approve
  type WAGMI_CONTRACT_WRITE = {
    data: any;
    isError: any;
    status: any;
    isLoading: any;
    isSuccess: any;
    write: any;
    writeAsync: any;
  };

  const {
    data: approvalData,
    isError: approvalError,
    status: approvalStatus,
    isLoading: approvalLoading,
    isSuccess: approvalSuccess,
    write: approve,
    writeAsync: approveAsync,
  }: WAGMI_CONTRACT_WRITE = useContractWrite({
    address:
      selectedNetworkFrom.chainId == 97 ? TOKEN_ADDRESS.bsc : TOKEN_ADDRESS.eth, // token address
    abi: TokenAbi,
    functionName: "approve",
    args: [
      selectedNetworkFrom.chainId == 97
        ? CONTRACT_ADDRESS.bsc
        : CONTRACT_ADDRESS.eth, // deposit contract addres
      // "1000000000000000000000000000000000000000", //amount
      convetedAmt,
    ],
  });
  const approveTokens = async () => {
    try {
      const data = await approveAsync();
      console.log("Approval successful:", data?.hash);
      setApproval(data);

      return data;
    } catch (error) {
      console.error("Error approving tokens:", error);
    }
  };

  type WAGMI_CONTRACT_WRITE_DEPOSIT = {
    data: any;
    isError: any;
    status: any;
    isLoading: any;
    isSuccess: any;
    write: any;
    writeAsync: any;
  };

  const {
    data: mintTokensResult,
    isError: mintTokensError,
    status: mintTokensStatus,
    isLoading: mintTokensLoading,
    isSuccess: mintTokensSuccess,
    write: mintTokens,
    writeAsync: mintTokensAsync,
  }: WAGMI_CONTRACT_WRITE_DEPOSIT = useContractWrite({
    address:
      selectedNetworkFrom.chainId == 97
        ? CONTRACT_ADDRESS.bsc
        : CONTRACT_ADDRESS.eth,
    abi: Deposit,
    functionName: "deposit",
    args: [
      convetedAmt,
      selectedNetworkFrom?.name === "BSC" ? 1 : 2,
      receiveAddress ? receiveAddress : walletAddress,
    ],
  });

  const UserDeposit = async () => {
    setHash("");
    if (walletAddress) {
      try {
        const data = await mintTokensAsync();
        console.log("data", data);
        return data;
      } catch (error) {
        console.log("Error in getUserStakes =>", error);
      }
    }
  };

  const { switchNetwork }: any = useSwitchNetwork();

  const switchNetworkFunction = async (id: any) => {
    await switchNetwork(id);
  };
  const toggleToNetworkModal = async (values: any, { resetForm }: any) => {
    resetForm();
    dispatch(setNetworkListFrom(selectedNetworkTo));
    dispatch(setNetworkListTo(selectedNetworkFrom));
    await switchNetworkFunction(selectedNetworkTo?.chainId);
  };

  const handleFromNetworkSelect = (network: any) => {
    setFromNetwork(network);
    dispatch(setNetworkListFrom(network));
    setFromNetworkModal(false);
  };

  const handleToNetworkSelect = (network: any) => {
    setToNetwork(network);
    dispatch(setNetworkListTo(network));
    setToNetworkModal(false);
  };

  const handleConnectWallet = () => {
    const walletDropdown = document.getElementById("wallet-dropdown");
    if (walletDropdown) {
      walletDropdown.click();
    } else if (!fromNetwork) {
      alert("Select a network");
    }
  };
  const handleTransaction = async (values: any, { resetForm }: any) => {
    try {
      setLoading(true);
      setTransaction("");
      setApproval("");
      const res = await getAllowance();
      if (Number(res) >= Number(amount) * 10 ** 18) {
        const data = await UserDeposit();
        setApproval("");
        if (data) {
          setTransactionModal(true);
          setHash(data?.hash);
          setTransaction(data);
        }
      } else {
        const data: any = await approveTokens();
        setTransactionModal(true);
        if (Number(data) >= Number(amount) * 10 ** 18) {
          let data = await UserDeposit();
          setTransaction(data);
          setApproval("");
          // resetForm();
        }
      }
    } catch (error) {
      console.error("Error in handleTransaction:", error);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      amount: "",
      receiveAddress: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleTransaction(values, { resetForm });
      toggleToNetworkModal(values, { resetForm });
    },
  });

  useEffect(() => {
    if (fromNetwork) {
      setReceiveAddress(formik.values.receiveAddress);
      setAmount(formik?.values?.amount);
    }
  }, [formik.values.receiveAddress, formik?.values?.amount, fromNetwork]);

  const getTransactionHistory = async () => {
    setTransactionHistory("");
    try {
      const response = await getTransactionsDetails({
        walletAddress,
        page,
        limit,
      });
      // const response = await axios.get(
      //   `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      // );
      const newData = response?.data;
      if (newData && Array.isArray(newData)) {
        setTransactionHistory((prevData) => [...prevData, ...newData]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (walletAddress || PhantomWalletAddress) {
      getTransactionHistory();
    }
  }, [page]);

  const handleCopy = () => {
    staticCopy(formik.values.receiveAddress);
  };

  const wallet: any = useAnchorWallet();
  let phantomWallet = wallet?.publicKey?.toString();

  const handleSolanaTransaction = async (values: any, { resetForm }: any) => {
    let amountSol = amount * 10 ** 9;
    const destinationChainId = toNetwork?.chain;
    try {
      setApproval("");
      setTransaction("");
      setSolanaTransactionResult("");
      setTransactionModal(true);
      const result = await SolanaServiceTransactions(
        amountSol,
        destinationChainId,
        // EVM_Target_Address,
        receiveAddress,
        wallet
      );
      setSolanaTransactionResult(result);
    } catch (error) {
      console.error("Solana Transaction error:", error);
    }
  };

  const handleTransactionBasedOnNetwork = (
    selectedNetworkFrom: any,
    values: any,
    resetForm: any
  ) => {
    console.log(
      "Handling transaction based on network:",
      selectedNetworkFrom?.name
    );
    if (selectedNetworkFrom?.name === "Solana") {
      handleSolanaTransaction(values, { resetForm });
    } else {
      handleTransaction(values, { resetForm });
    }
  };

  const getButtonTitle = () => {
    if (loading) return "Processing...";
    if (!walletAddress && !PhantomWalletAddress) return "Connect Wallet";

    if (selectedNetwork === "BSC" || selectedNetwork === "Ethereum") {
      return "Approve and Deposit";
    } else if (selectedNetwork === "Solana") {
      return "Deposit";
    }

    return "Connect Wallet";
  };

  const onePercent = amount * (1 / 100);

  const fetchSolanaBalance = async () => {
    try {
      // setBalance("");
      const wallet = new PublicKey(PhantomWalletAddress);
      const balance = await connection.getBalance(wallet);
      const solBalance = balance / LAMPORTS_PER_SOL;
      setBalance(solBalance);
    } catch (error) {
      console.error("Error fetching Solana balance:", error);
    }
  };
  useEffect(() => {
    if (PhantomWalletAddress) {
      fetchSolanaBalance();
    }
  }, [PhantomWalletAddress]);

  return (
    <>
      <section className="lib_bridge_page">
        <CommonHeading heading="MemeMint Bridge" centered />
        <div className="bridge_card">
          <div className="bridge_card_header">
            {!selectedNetworkFrom?.name && !selectedNetworkTo?.name ? (
              <p className="emphasize">Select your network first</p>
            ) : (
              <p className="emphasize">Choose the chain for Transaction</p>
            )}

            <button
              type="button"
              onClick={() => {
                getTransactionHistory();
                setShowHistory(true);
              }}
            >
              History
            </button>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="bridge_card_inner">
              <div className="select_network">
                <div className="select_network_box">
                  <label>From Network</label>
                  <button
                    type="button"
                    onClick={() => setFromNetworkModal(true)}
                  >
                    {selectedNetworkFrom?.icon && (
                      <img
                        className="btn_inner_icon"
                        src={selectedNetworkFrom?.icon}
                      />
                    )}
                    {selectedNetworkFrom?.name || "Select Network"}{" "}
                    <DownArrow />
                  </button>
                </div>
                <div className="swap_box">
                  <button
                    type="button"
                    onClick={() =>
                      toggleToNetworkModal(formik.values, {
                        resetForm: formik.resetForm,
                      })
                    }
                  >
                    {<SwapIconHorizontal />}
                  </button>
                </div>
                <div className="select_network_box">
                  <label>To Network</label>
                  <button type="button" onClick={() => setToNetworkModal(true)}>
                    {selectedNetworkTo?.icon && (
                      <img
                        className="btn_inner_icon"
                        src={selectedNetworkTo?.icon}
                      />
                    )}
                    {selectedNetworkTo?.name || "Select Network"} <DownArrow />
                  </button>
                </div>
              </div>
              <div className="select_amount">
                <div className="select_amount_left">
                  <InputCustom
                    type="number"
                    onChange={formik.handleChange}
                    name="amount"
                    value={formik.values.amount}
                    className="amount_input"
                    placeholder="0.0"
                  />
                  <p className="amountText">
                    {" "}
                    {amount} {selectedToken.toUpperCase()}
                  </p>
                </div>
                <div className="select_amount_right">
                  <span className="amount_token">
                    <img src={bscIcon} alt="" />
                    {selectedToken}
                  </span>
                  <p className="amountText">
                    Balance:{" "}
                    {walletAddress || PhantomWalletAddress ? (
                      <span>{balance}</span>
                    ) : (
                      "N/A"
                    )}
                  </p>
                </div>
              </div>

              <InputCustom
                // leftIcon={
                //   <span onClick={handleCopy}>
                //     <CopyIcon />
                //   </span>
                // }
                placeholder="Paste or type receiver address here"
                label="Receiving Address"
                value={formik.values.receiveAddress}
                className="receiveAddInput"
                onChange={formik.handleChange}
                name="receiveAddress"
              />

              <div className="previewBox">
                <h4>Preview</h4>
                <Table responsive>
                  <tbody>
                    <tr>
                      <td className="title_text">From</td>
                      <td>{fromNetwork?.name}</td>
                      <td>
                        {formatAddress(walletAddress || PhantomWalletAddress)}
                      </td>
                      <td className="title_text">Amount</td>
                      <td className="text-end">
                        {amount} {selectedToken.toUpperCase()}
                      </td>
                    </tr>
                    <tr>
                      <td className="title_text">To</td>
                      <td>{toNetwork?.name}</td>
                      <td>{formatAddress(receiveAddress)}</td>
                      <td className="title_text">Fee</td>
                      <td className="text-end">{onePercent} GTH</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              {walletAddress || PhantomWalletAddress ? (
                <ButtonCustom
                  title={getButtonTitle()}
                  fluid
                  type="button"
                  disabled={
                    loading ||
                    (!amount && amount !== 0) ||
                    !selectedNetwork ||
                    !selectedNetworkTo?.name
                  }
                  className="approve_btn"
                  onClick={() =>
                    handleTransactionBasedOnNetwork(
                      selectedNetworkFrom,
                      formik.values,
                      formik.resetForm
                    )
                  }
                />
              ) : selectedNetwork === "Solana" ? (
                <div>
                  <WalletMultiButton children={"Connect Wallet"} />
                </div>
              ) : (
                <ButtonCustom
                  title="Connect Wallet"
                  fluid
                  disabled={!toNetwork}
                  type="button"
                  className="approve_btn"
                  onClick={handleConnectWallet}
                />
              )}
            </div>
          </form>
        </div>
        <ChooseNetwork
          networks={[
            { name: "BSC", icon: bscIcon, chainId: "97", chain: "2" },
            {
              name: "Ethereum",
              icon: ethIcon,
              chainId: "11155111",
              chain: "1",
            },
            { name: "Solana", icon: gthIcon, chainId: "97", chain: "3" },
          ]}
          show={fromNetworkModal}
          heading="Select From Network"
          handleClose={() => setFromNetworkModal(false)}
          onSelect={handleFromNetworkSelect}
          disabledNetwork={selectedNetworkTo?.name}
        />
        <ChooseNetwork
          networks={[
            { name: "BSC", icon: bscIcon, chainId: "97", chain: "2" },
            {
              name: "Ethereum",
              icon: ethIcon,
              chainId: "11155111",
              chain: "1",
            },
            { name: "Solana", icon: gthIcon, chainId: "97", chain: "3" },
          ]}
          show={toNetworkModal}
          heading="Select To Network"
          handleClose={() => setToNetworkModal(false)}
          onSelect={handleToNetworkSelect}
          disabledNetwork={selectedNetworkFrom?.name}
        />
        <HistoryModal
          show={showHistory}
          handleClose={setShowHistory}
          transactionHistory={transactionHistory}
          loading={loading}
          getTransactionHistory={getTransactionHistory}
          hasMore={hasMore}
        />
        <TransactionDone
          show={transactionModal}
          handleClose={setTransactionModal}
          transaction={transaction}
          solanaTransactionResult={solanaTransactionResult}
          approval={approval}
        />
      </section>
    </>
  );
};

export default MemeMintBridge;
