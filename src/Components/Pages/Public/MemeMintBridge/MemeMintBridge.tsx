import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CommonHeading from "../../../Common/Heading/Heading";
import ButtonCustom from "../../../Common/Button/ButtonCustom";
import "./MemeMintBridge.scss";
import { useDispatch, useSelector } from "react-redux";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { SolanaServiceTransactions } from "../../../../Services/solana";
import { connection } from "../../../../Services/solana/utils/constants";
import InputCustom from "../../../Common/FormInputs/Input/Input";

const MemeMintBridge = () => {
  const [balance, setBalance] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const PhantomWalletAddress = useSelector(
    (state: any) => state.user.PhantomWalletAddress
  );
  console.log("balance", balance);

  const formik = useFormik({
    initialValues: {
      amount: "",
      receiveAddress: "",
    },
    onSubmit: (values, { resetForm }) => {
      // handleTransaction(values, { resetForm });
    },
  });

  useEffect(() => {
    setAmount(Number(formik.values.amount)); // Convert amount to number
  }, [formik.values.amount]);

  const wallet: any = useAnchorWallet();

  const handleStakeTransaction = async () => {
    const amountSol = amount * 10 ** 9; // Adjust this conversion as needed
    try {
      setLoading(true);
      const result = await SolanaServiceTransactions(amountSol, wallet);
      console.log("result", result);
    } catch (error) {
      console.error("Solana Transaction error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUnStakeTransaction = async () => {
    const amountSol = amount * 10 ** 9; // Adjust this conversion as needed
    try {
      setLoading(true);
      const result = await SolanaServiceTransactions(amountSol, wallet);
      console.log("result", result);
      // Handle result if necessary
    } catch (error) {
      console.error("Solana Transaction error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSolanaBalance = async () => {
    try {
      const wallet = new PublicKey(PhantomWalletAddress);
      const balance = await connection.getBalance(wallet);
      setBalance(balance / LAMPORTS_PER_SOL);
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
        <CommonHeading heading="Solana stake" centered />
        <div className="bridge_card">
          <form onSubmit={formik.handleSubmit}>
            <div className="bridge_card_inner">
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
                </div>
                <div className="select_amount_right">
                  <p className="amountText">
                    Balance:{" "}
                    {PhantomWalletAddress ? <span>{balance}</span> : "N/A"}
                  </p>
                </div>
              </div>

              {PhantomWalletAddress && (
                <>
                  <ButtonCustom
                    title="Stake"
                    fluid
                    type="button"
                    disabled={loading || amount <= 0}
                    className="approve_btn"
                    onClick={handleStakeTransaction}
                  />
                  {/* <ButtonCustom
                    title="Unstake"
                    fluid
                    type="button"
                    disabled={loading || amount <= 0}
                    className="approve_btn"
                    onClick={handleUnStakeTransaction}
                  /> */}
                </>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default MemeMintBridge;
