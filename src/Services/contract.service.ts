import { WALLET_TYPE, projectId, selectedNetwork } from "../constants";
import Web3 from "web3";
import StakingAbi from "../Abi/MintTokenAbi.json";
import UniversalProvider from "@walletconnect/universal-provider";
import { CHAIN_ID, STAKING_ADDRESS } from "../constants";
import store from "../Redux/Store";

let web3Instance: any;

const metadata = {
  name: "Polygon",
  description: "Gorilla staking",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const walletConnectProvider = async () => {
  const providerWalletConnect: any = UniversalProvider.init({
    logger: "info",
    projectId: projectId,
    metadata: metadata,
    client: undefined, // optional instance of @walletconnect/sign-client
  });

  return providerWalletConnect;
};

export const callWeb3 = async () => {
  const { walletType } = store?.getState()?.user;
  const { ethereum, trustwallet }: any = window;
  let web3Object: any;
  if (ethereum && walletType === WALLET_TYPE.METAMASK) {
    web3Object = new Web3(ethereum);
    return web3Object;
  } else if (walletType === WALLET_TYPE.WALLET_CONNECT) {
    const pro = await walletConnectProvider();
    pro.setDefaultChain(`eip155:${CHAIN_ID}`);
    web3Object = new Web3(pro);
    return web3Object;
  } else if (trustwallet && walletType === WALLET_TYPE.TRUSTWALLET) {
    web3Object = new Web3(ethereum);
    return web3Object;
  } else {
    web3Object = new Web3(selectedNetwork[0].rpc);
    return web3Object;
  }
};

export const createInstanceStaking = async () => {
  try {
    web3Instance = await callWeb3();
    const stakingInstance = new web3Instance.eth.Contract(
      StakingAbi,
      STAKING_ADDRESS
    );
    return stakingInstance;
  } catch (error: any) {
    console.error("Error in createInstanceStaking:", error.message);
    throw error;
  }
};

export const commonAbiInstance = async (
  contractAbi: any,
  contractAddress: any
) => {
  try {
    web3Instance = await callWeb3();
    const instance = new web3Instance.eth.Contract(
      contractAbi,
      contractAddress
    );
    return instance;
  } catch (error: any) {
    console.error("Error in commonAbiInstance:", error.message);
    throw error;
  }
};
