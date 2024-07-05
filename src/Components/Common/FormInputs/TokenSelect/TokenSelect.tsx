import React, { useState } from "react";
import "./TokenSelect.scss";
import gthIcon from "../../../../Assets/Images/Icons/tokens/gth.svg";
import { Dropdown } from "react-bootstrap";
import {
  DownArrow,
  SearchIcon,
} from "../../../../Assets/Images/Icons/SvgIcons";


const TokenSelect = ({
  className,
  setSelectedToken,
  selectedToken,
  tokenList,
}: {
  className?: string;
  setSelectedToken?: any;
  selectedToken?: any;
  tokenList?: any;
}) => {
  return (
    <>
      <Dropdown className={`token_select ${className}`}>
        <Dropdown.Toggle id={"dropdown-basic"}>
          <div className="token_option">
            <img
              src={
                tokenList.find((item) => item?.value === selectedToken)?.icon
              }
              alt="token"
            />{" "}
            <p>
              {
                tokenList.find((item) => item?.value === selectedToken)
                  ?.shortName
              }
            </p>
          </div>
          <span className="down_arrow">
            <DownArrow />
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {/* <InputCustom
            placeholder="Search"
            leftIcon={<SearchIcon />}
          /> */}
          {tokenList.map((item) => (
            <Dropdown.Item
              className={selectedToken === item.value ? "active" : ""}
              onClick={() => setSelectedToken(item.value)}
            >
              <div className={`token_option`}>
                <img src={item.icon} alt="token" /> <p>{item.title}</p>
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default TokenSelect;
