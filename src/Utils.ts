export const APIURL = {
  USER_ONBOARDING: `/createUser`,
  GET_USER_ONBOARDING: "/getUser",
};
// API Base URL

// export const API_HOST = process.env.REACT_APP_URL_SITE_URL;
export const API_HOST = "https://api-stage.libfi.io/api/v1";
export const CHAIN_ID = 356256156;
export const RPC_URL = "https://testnet.gather.network";
export const NETWORK_NAME = "Gather Testnet";
export const NETWORK_SYMBOL = "GTH";
export const NETWORK_DECIMALS = 18;
export const EXPLORAR_LINK = "https://testnet-explorer.gather.network/";

export const TOKEN_ADDRESS = "0x93aa5b199127887BD0099B7E0A97648b20D0d450";
export const USDT_ADDRESS = "0xac62424c3d7A06ED1065d73102e9805d6B670ad5";
export const ICO_ADDRESS = "0xdb0Bbdb4692bb7a1d334Da0972C590718A98c07f";

export const BICONOMY_API_KEY = "";

export const RESPONSES: any = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NOCONTENT: 204,
  BADREQUEST: 400,
  UN_AUTHORIZED: 401,
  INVALID_REQ: 422,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  TIMEOUT: 408,
  TOOMANYREQ: 429,
  INTERNALSERVER: 500,
  BADGATEWAYS: 502,
  SERVICEUNAVILABLE: 503,
  GATEWAYTIMEOUT: 504,
};
