import React from "react";
import CustomTable from "../../Table/Table";
import CommonCard from "../CommonCard/CommonCard";
import ButtonCustom from "../../Button/ButtonCustom";
import "./MyPositions.scss";
import { TrandingIcon } from "../../../../Assets/Images/Icons/SvgIcons";

const MyPositions = () => {
  const tableData = [
    {
      title: "Gather",
      price: "$0.010100",
      balance: "1,202,356.45 GTH",
      value: "$12,023",
      parcentageicon: "",
      parcentagevalue: "12%",
      chng: "11%",
    },
    {
      title: "MemeMint Bridge",
      price: "$0.020101",
      balance: "987,556.67 LIBX",
      value: "$12,023",
      parcentageicon: "",
      parcentagevalue: "12%",
      chng: "8%",
    },
    {
      title: "Tether",
      price: "$1.06",
      balance: "8,467 USDT",
      value: "$12,023",
      parcentageicon: "",
      parcentagevalue: "12%",
      chng: "2%",
    },
    {
      title: "Ethereum",
      price: "$1,801.66",
      balance: "1.0234 ETH",
      value: "$12,023",
      parcentageicon: "",
      parcentagevalue: "12%",
      chng: "16%",
    },
    {
      title: "Wrapped BTC",
      price: "$28,230.54",
      balance: "0.034 WBTC",
      value: "$12,023",
      parcentageicon: "",
      parcentagevalue: "12%",
      chng: "3%",
    },
  ];
  return (
    <CommonCard
      noHeaderSpacing
      cardTitle="My Positions"
      className="MyPositions"
      viewAllNavigate="/auth/trade/professional/market"
    >
      <CustomTable fields={["Asset", "Price", "Balance", "Value", "24h Chng"]}>
        {tableData.length > 0 &&
          tableData.map((item) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>${item.balance}</td>
              <td className="value_box">
                <h4>{item.value}</h4>
                <h3>
                  <span>
                    <TrandingIcon />
                  </span>
                  {item.parcentagevalue}
                </h3>
              </td>

              <td>
                <span className="change">{item.chng}</span>
              </td>
              <td>
                <ButtonCustom
                  className="tradeBtn bordered-blue"
                  title="Trade"
                />
              </td>
            </tr>
          ))}
      </CustomTable>
    </CommonCard>
  );
};

export default MyPositions;
