import { useMemo } from "react";
import CustomTable from "../../../Common/Table/Table";
import {
  CancelIcon,
  CopyIcon,
  FulFillingIcon,
  FulfilledIcon,
  LeftRightArrows,
} from "../../../../Assets/Images/Icons/SvgIcons";
import gnosisIcon from "../../../../Assets/Images/Icons/tokens/gnosisscan.png";
import polygonWhiteIcon from "../../../../Assets/Images/Icons/tokens/polygon-white.png";
import polygonFilledIcon from "../../../../Assets/Images/Icons/tokens/polygon-filled.png";
import xDaiIconWhite from "../../../../Assets/Images/Icons/tokens/xdai-white.png";
import daiIcon from "../../../../Assets/Images/Icons/tokens/dai.png";
import metamaskIcon from "../../../../Assets/Images/Icons/wallets/Metamask-no-filled.png";
import "./TransactionsPage.scss";
import { Container } from "react-bootstrap";
import CommonHeading from "../../../Common/Heading/Heading";

const TransactionsPage = () => {
  const transactions = useMemo(
    () => [
      {
        id: "0xabb375...522f624b",
        status: "FULFILLED",
        initiator: "0xe6cbde...0607fa19",
        receiver: "0xe6cbde...0607fa19",
        asset: "xDAI",
        amount: "0.3 xDAI",
        time: "21 hours ago",
      },
      {
        id: "0xabb375...522f624b",
        status: "FULFILLING",
        initiator: "0xe6cbde...0607fa19",
        receiver: "0xe6cbde...0607fa19",
        asset: "xDAI",
        amount: "0.3 xDAI",
        time: "21 hours ago",
      },
      {
        id: "0xabb375...522f624b",
        status: "CANCELLED",
        initiator: "0xe6cbde...0607fa19",
        receiver: "0xe6cbde...0607fa19",
        asset: "xDAI",
        amount: "0.3 xDAI",
        time: "21 hours ago",
      },
    ],
    []
  );

  return (
    <section className="transaction_page">
      <Container fluid="xl">
        <CommonHeading
          heading={
            <>
              <span>Latest</span> Transactions
            </>
          }
        />
        <div className="filters_box">
          <label htmlFor="">Filters :</label>
          {[
            "PREPARING",
            "PREPARED",
            "FULFILLING",
            "FULFILLED",
            "CANCELLED",
          ].map((status, index) => (
            <button
              key={index}
              className={`filter_btn ${status.toLowerCase()}`}
            >
              {status}
            </button>
          ))}
        </div>
        <CustomTable
          fields={["TX ID", "STATUS", "INITIATOR", "RECEIVER", "ASSET", "TIME"]}
        >
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>
                <h4>
                  <a href="">{transaction.id}</a>
                  <span className="copy_icon">
                    <CopyIcon />
                  </span>
                </h4>
                <p>
                  <a href="">{transaction.id}</a>
                  <span className="copy_icon"><CopyIcon /></span>
                  <a href="" className="token_icon"><img src={gnosisIcon} alt="" /></a>
                </p>
                <p>
                  <a href=""> {transaction.id}</a>
                  <span className="copy_icon"><CopyIcon /></span>
                  <a href="" className="token_icon"><img src={polygonWhiteIcon} alt="" /></a>
                </p>

              </td>
              <td>
                <a href=""
                  className={`status_btn ${transaction.status.toLowerCase()}`}
                >
                  {transaction.status === "FULFILLED" && <FulfilledIcon />}
                  {transaction.status === "FULFILLING" && <FulFillingIcon />}
                  {transaction.status === "CANCELLED" && <CancelIcon />}
                  {transaction.status}
                </a>
              </td>
              <td>
                <h5>
                  <a href="">{transaction.initiator}</a>
                  <span className="copy_icon"><CopyIcon /></span>
                  <a href="" className="token_icon"><img src={gnosisIcon} alt="" /></a>
                </h5>
                <p>
                  <span className='token_icon'><img src={gnosisIcon} alt="" /></span>
                  Gnosis Chain
                </p>
              </td>
              <td>
                <h5>
                  <a href="" target='_blank' >{transaction.receiver}</a>
                  <span className="copy_icon"><CopyIcon /></span>
                  <a href="" className="token_icon"><img src={polygonWhiteIcon} alt="" /></a>
                </h5>
                <p>
                  <span className='token_icon'>
                    <img src={polygonFilledIcon} alt="" /></span>
                  Polygon
                </p>
              </td>

              <td>
                <div className="asset_box">
                  <div className="asset_box_inner">
                    <h4>
                      <span className="token_icon">
                        <img src={xDaiIconWhite} alt="" />
                      </span>
                      {transaction.asset}
                      <a href="" className="token_icon">
                        <img src={gnosisIcon} alt="" />
                      </a>
                    </h4>
                    <p className="amount_text">
                      {transaction.amount}
                      <span>{transaction.asset}</span>
                    </p>
                  </div>
                  <a className="arrows_btn">
                    <LeftRightArrows />
                  </a>
                  <div className="asset_box_inner">
                    <h4>
                      <span className="token_icon">
                        <img src={daiIcon} alt="" />
                      </span>
                      DAI
                      <a href="" className="token_icon">
                        <img src={polygonWhiteIcon} alt="" />
                      </a>
                      <a href="" className="metamask_btn">
                        <img src={metamaskIcon} alt="" />
                      </a>
                    </h4>
                    <p className="amount_text">
                      0.3
                      <span>xDAI</span>
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-end">{transaction.time}</p>
              </td>
            </tr>
          ))}
        </CustomTable>
      </Container>
    </section>
  );
};

export default TransactionsPage;