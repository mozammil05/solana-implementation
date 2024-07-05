import Web3 from "web3";
import store from "../../Redux/Store";
import packageJson from "../../../package.json";
import { disconnect } from "@wagmi/core";
import { resetUserSlice } from "../../Redux/reducers/user/user";

export const bigNumberToFixed = (x: any) => {
  if (x !== undefined) {
    if (Math.abs(x) < 1.0) {
      let e = parseInt(x.toString().split("e-")[1]);
      if (e) {
        x *= Math.pow(10, e - 1);
        x = "0." + new Array(e).join("0") + x.toString().substring(2);
      }
    } else {
      let e = parseInt(x.toString().split("+")[1]);
      if (e > 20) {
        e -= 20;
        x /= Math.pow(10, e);
        x += new Array(e + 1).join("0");
      }
    }
    return parseFloat(x).toFixed(2);
  }
  return x;
};

export function multiplyByPowerOfTenToString(number: number, power: number) {
  let etherAmount = "1";
  if (power === 18) etherAmount = Web3.utils.toWei(String(number), "ether");
  else if (power === 6) etherAmount = Web3.utils.toWei(String(number), "mwei");
  return etherAmount;
}

/** this function decides till which decimal point we want the number
 * @param number, fixed value
 * @returns number
 */
const toCustomFixed = (num: any, fixed: any) => {
  const re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  return num.toString().match(re)[0];
};

export const balanceFormatWithoutRoundOffCrypto = (value: number) => {
  if (value === 0 || value < 0.00000005) {
    return 0.0;
  } else if ((value > 0 && value <= 9) || (value < 0 && value >= -9)) {
    return toCustomFixed(value, 5);
  } else if ((value > 9 && value <= 99) || (value < -9 && value >= -99)) {
    return toCustomFixed(value, 4);
  } else if ((value > 99 && value <= 999) || (value < -99 && value >= -999)) {
    return toCustomFixed(value, 3);
  } else if (
    (value > 999 && value <= 9999) ||
    (value < -999 && value >= -9999)
  ) {
    return toCustomFixed(value, 2);
  } else if ((value > 9999 && value < 99999) || value < -9999) {
    return toCustomFixed(value, 1);
  } else if (value > 99999 || value < -99999) {
    return value.toString().split(".")[0];
  }
};

export const decimalFormatWithRoundOffDollar = (value: any) => {
  let formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
  });

  if (value === 0 || value === "" || value === undefined) {
    return "0.0";
  } else if ((value > 0 && value <= 9) || (value < 0 && value >= -9)) {
    return value?.toFixed(2);
  } else if ((value > 9 && value <= 99) || (value < -9 && value >= -99)) {
    return value?.toFixed(1);
  } else if ((value > 99 && value <= 999) || (value < -99 && value >= -999)) {
    return value?.toFixed();
  } else if (
    (value > 999 && value <= 9999) ||
    (value < -999 && value >= -9999)
  ) {
    return value?.toFixed();
  } else if (value > 9999 || value < -9999) {
    let data;
    data = Number(value?.toFixed());
    data = formatter.format(data);
    return data.replace(/,/g, "");
  }
};

// Automatic cache clearing functionality
export const resetRedux = () => {
  store.dispatch(resetUserSlice());
};

//this functions helps to divide with customize n zeroes
export function divideByPowerOfTenToString(number: number, power: number) {
  let etherAmount = "1";
  if (power === 18) etherAmount = Web3.utils.fromWei(String(number), "ether");
  else if (power === 6)
    etherAmount = Web3.utils.fromWei(String(number), "mwei");
  return etherAmount;
}

export const versionManager = async () => {
  try {
    const version = packageJson.version;
    const react_version = localStorage.getItem("react_version");
    if (react_version && version !== react_version) {
      // await disconnect();
      resetRedux();
      localStorage.clear();
      // window.location.reload();
    }
    if (!react_version) {
      resetRedux();
      localStorage.clear();
      // window.location.reload();
    }
    localStorage.setItem("react_version", version);
  } catch (error) {
    console.log("Error in versionManager =>", error);
  }
};

export const formatBalance = (balance: number): string => {
  if (isNaN(balance)) {
    return "$0.00";
  }

  if (balance === 0) {
    return "0.00";
  }

  const abbreviations = ["", "K", "M", "B", "T"];
  let index = 0;

  // Handle negative numbers separately
  const sign = balance < 0 ? "-" : "";
  balance = Math.abs(balance);

  while (balance >= 1000 && index < abbreviations.length - 1) {
    balance /= 1000;
    index++;
  }

  const formattedBalance =
    balance >= 1 ? balance.toFixed(2) : balance.toFixed(4);

  return `${sign}$${formattedBalance}${abbreviations[index]}`;
};
export const formatBalanceForRewad = (balance: number): string => {
  if (isNaN(balance)) {
    return "0.00";
  }

  if (balance === 0) {
    return "0.00";
  }

  const abbreviations = ["", "K", "M", "B", "T"];
  let index = 0;

  // Handle negative numbers separately
  const sign = balance < 0 ? "-" : "";
  balance = Math.abs(balance);

  while (balance >= 1000 && index < abbreviations.length - 1) {
    balance /= 1000;
    index++;
  }

  const formattedBalance =
    balance >= 1 ? balance.toFixed(2) : balance.toFixed(4);

  return `${sign}${formattedBalance}${abbreviations[index]}`;
};

export const handleErrorMessage = (error: any, customError?: string) => {
  if (
    error?.message?.includes("gas less") ||
    error?.message?.includes("cap less")
  ) {
    return "Please try once with more gas fee.";
  } else if (error?.message?.includes("rejected") || error.code === 4001) {
    return "User rejected the request.";
  } else if (error?.message?.includes("zeroAmount")) {
    return "Either you haven't staked or you are trying with zero amount";
  } else if (error?.message?.includes("AmountGreaterThanStakedAmount")) {
    return "Amount you want to withdraw is greater than staked one";
  } else if (error?.message?.includes("LockinPeriodNotEnded")) {
    return "You have to wait till lockin period";
  } else if (error?.message?.includes("notEnoughRewardBalance")) {
    return "Reward tank is empty";
  } else if (error?.message?.includes("LockinPeriodOver")) {
    return "Please try with simple withdraw";
  } else if (error?.message?.includes("amountGreaterThanStakedAmount")) {
    return "Amount you want to withdraw is greater than staked one";
  } else if (error?.message?.includes("noStakesFound")) {
    return "Staked Amount is not found";
  } else if (error?.message?.includes("zeroAmount")) {
    return "You can't withdraw zero amount";
  } else if (error?.message?.includes("zeroAmount")) {
    return "Reward is not generated yet";
  } else if (error?.message?.includes("zeroAmount")) {
    return "Reward tank is empty";
  } else if (error?.message?.includes("noStakesFound")) {
    return "Staked Amount is not found";
  } else if (error?.message?.includes("zeroAmount")) {
    return "Reward is not generated yet";
  } else if (error?.message?.includes("zeroAmount")) {
    return "Reward tank is empty";
  } else if (error?.message?.includes("ERC20: insufficient allowance")) {
    return "insufficient allowance";
  } else if (error?.message?.includes("rateShouldBeInBetween0to30")) {
    return "Rate Should Be In Between 0 to 30";
  } else if (
    error?.message?.includes("execution reverted") ||
    error.code === -32603
  ) {
    return "Something went wrong. Please try again later.";
  } else if (error?.message?.includes("An internal error was received")) {
    window.location.reload();
  } else if (error?.code === 4001) {
    return "User denied transaction";
  } else if (customError) {
    return customError;
  } else {
    return "Something went wrong.";
  }
  return error;
};

export const formatAddress = (address: string): string => {
  if (!address || address.length < 6) {
    return address;
  }

  const firstTwo = address.slice(0, 4);
  const lastTwo = address.slice(-6);
  const middle = "...";

  return `${firstTwo}${middle}${lastTwo}`;
};
