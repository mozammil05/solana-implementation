import { sepolia, bscTestnet, mainnet, bsc } from "viem/chains";
// import { } from "wagmi/chains";

export const projectId = "7e004e9cfa01b95768e4da0375b55f45";
export const RPC_URL: any = process.env.REACT_APP_MATIC_RPC;
export const envType = process.env.REACT_APP_ENVIRONMENT || "development";

export const DAPP_URL_METAMASK = "app.gorilladefi.io";
export const SOL_EXPLORER_URL = "https://solscan.io/tx";

export const DAPP_URL_TRUSTWALLET = "https://app.gorilladefi.io";

export const DAPP_URL_COINBASE = "https%3A%2F%2Fapp.gorilladefi.io";

export const APIURL = {
  GET_TRANSACTION: "/transaction",
};

let STAKING_ADDRESS: any;
let MARKETPLACE_ADDRESS: any;
let USDC_ADDRESS: any;
let GOD_TOKEN_ADDRESS: any;
let TOKEN_ADDRESS: any;
let CONTRACT_ADDRESS: any;
let CHAIN_ID: any;
let DEFAULT_CHAIN_DATA: any;
let SITE_URL: any;
let SOCKET_URL: any;
let DAYS_PER_SECOND_REWARD_DISTRIBUTION: any;
let MINIMUM_TRANSACTION_LIMIT: any;
let ALLOWED_CHAIN_ID: number[];
let ALLOWED_CHAIN_NAME: any;
let TRANSACTION_BASE_URL: any;

// declaring all the constants in stage environment
if (process.env.REACT_APP_NODE_ENV === "stage") {
  SOCKET_URL = "https://stage-socket.mememintbridge.com";
  SITE_URL = "https://stage-api.mememintbridge.com";
  //   // usdc testnet address
  USDC_ADDRESS = "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359";
  // token testnet address
  TOKEN_ADDRESS = {
    bsc: "0x983B0415Bce5323F238F7AAC4537c49fED4BB318",
    eth: "0xD92053E93fbD10D5dC9f1E7f0bB5c31404eDd25e",
  };
  CONTRACT_ADDRESS = {
    bsc: "0x4c255cbb075fe51ADEbe96Ced4d068EAB860C772",
    eth: "0x08DEd461E2d24e9235A58a1Bb4b60111deEd9eD1",
  };
  //marketplace address
  MARKETPLACE_ADDRESS = "0x6eb214f0e3B39A7b176c8BffEBe86A7eC8cd8eF0";
  // staking address
  STAKING_ADDRESS = "0xe1a797FD6A1FfA73dC79B46135d238cbfF404978";
  CHAIN_ID = "";
  DEFAULT_CHAIN_DATA = { bsc: bscTestnet, eth: sepolia };
  ALLOWED_CHAIN_ID = [97, 11155111];
  ALLOWED_CHAIN_NAME = ["BSC Testnet", "Sepolia"];
  DAYS_PER_SECOND_REWARD_DISTRIBUTION = 1800;
  MINIMUM_TRANSACTION_LIMIT = 1;
  TRANSACTION_BASE_URL = {
    bsc: "https://testnet.bscscan.com/tx/",
    eth: "https://sepolia.etherscan.io/tx/",
  };
}

//exporting all the variables
export { USDC_ADDRESS };
export { GOD_TOKEN_ADDRESS };
export { TOKEN_ADDRESS };
export { CONTRACT_ADDRESS };
export { MARKETPLACE_ADDRESS };
export { STAKING_ADDRESS };
export { CHAIN_ID };
export { DEFAULT_CHAIN_DATA };
export { SITE_URL };
export { SOCKET_URL };
export { DAYS_PER_SECOND_REWARD_DISTRIBUTION };
export { MINIMUM_TRANSACTION_LIMIT };
export { ALLOWED_CHAIN_ID };
export { ALLOWED_CHAIN_NAME };
export { TRANSACTION_BASE_URL };

export const WALLET_TYPE = {
  METAMASK: "MetaMask",
  WALLET_CONNECT: "WalletConnect",
  TRUSTWALLET: "TrustWallet",
};

export const selectedNetwork: any = [
  {
    symbol: "MATIC",
    value: "MATIC",
    label: "MATIC",
    chainId: 80001,
    chainidHex: 0x13881,
    rpc: "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78",
    explorerUrl: "https://mumbai.polygonscan.com/",
    decimals: 18,
  },
  {
    symbol: "MATIC",
    value: "MATIC",
    label: "MATIC",
    chainId: 137,
    chainidHex: 0x89,
    rpc: "https://rpc-mainnet.matic.network",
    explorerUrl: "https://explorer-mainnet.maticvigil.com/",
    decimals: 18,
  },
];

export const WALLET_IDS = {
  METAMASK: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
  TRUSTWALLET:
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
  COINBASE: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
  SUBWALLET: "9ce87712b99b3eb57396cc8621db8900ac983c712236f48fb70ad28760be3f6a",
};

// ### CUSTOM RPC URL
export const CUSTOM_RPC_URL_MUMBAI_MATIC: any =
  process.env.REACT_APP_CUSTOM_RPC_URL_ETHEREUM;

export const CUSTOM_RPC_URL_POLYGON: any =
  process.env.REACT_APP_CUSTOM_RPC_URL_POLYGON;
