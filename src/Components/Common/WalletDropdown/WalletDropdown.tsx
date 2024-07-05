import React, { useEffect } from "react";
import "../../Layouts/MainLayout/MainLayout.scss";
import { useAnchorWallet } from "@solana/wallet-adapter-react";

import { useDispatch, useSelector } from "react-redux";
import { DAPP_URL_METAMASK, DAPP_URL_TRUSTWALLET } from "../../../constants";
import { browserName, isMobile } from "react-device-detect";
import { Connector, useAccount, useDisconnect, useNetwork } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import {
  resetUserSlice,
  setIsLoggedIn,
  setNetworkListFrom,
  setNetworkListTo,
  setPhantomWalletAddress,
  setUserAddressForNotification,
  setUserConnectedChainID,
  setUserConnectedWalletName,
  setUserWalletAddress,
} from "../../../Redux/reducers/user/user";
import toast from "react-hot-toast";
import { formatAddress } from "../../../Services/Helper/helper";
import useIsMounted from "../../../Services/solana/useIsMounted";

const WalletDropdown = ({ dropdownBtnRef, handleClose }) => {
  const dispatch = useDispatch();
  const selectedNetwork = useSelector(
    (state: any) => state.user.networkFrom.name
  );

  const walletAddress = useSelector(
    (state: any) => state?.user?.userWalletAddress
  );

  const PhantomWalletAddress = useSelector(
    (state: any) => state.user.PhantomWalletAddress
  );
  const { chain: CONNECTED_CHAIN_ID }: any = useNetwork();
  const { address } = useAccount();
  const { disconnect: resetConfig } = useDisconnect();

  // Solana

  const wallet: any = useAnchorWallet();
  let phantomWallet = wallet?.publicKey?.toString();

  useEffect(() => {
    if (phantomWallet) {
      dispatch(setPhantomWalletAddress(phantomWallet));
    } else if (address) {
      dispatch(setUserWalletAddress(address));
    }
  }, [phantomWallet]);

  // :: WAGMI ::
  useEffect(() => {
    dispatch(setUserConnectedWalletName(Connector?.name));
    dispatch(setUserConnectedChainID(CONNECTED_CHAIN_ID));
    if (address === undefined) {
      // walletDisconnect();
    } else if (address) {
      dispatch(setUserWalletAddress(address));
      dispatch(setUserAddressForNotification(address));
      dispatch(setIsLoggedIn(true));
    }
  }, [Connector, address, CONNECTED_CHAIN_ID]);

  useEffect(() => {
    if (localStorage.getItem("addressInternalDisconnect") == null) {
      localStorage.setItem("addressInternalDisconnect", "false");
    }
    if (address) {
      localStorage.setItem("addressInternalDisconnect", "true");
    }
    if (
      localStorage.getItem("addressInternalDisconnect") === "true" &&
      !address
    ) {
      localStorage.setItem("addressInternalDisconnect", "false");
      window.location.reload();
    }
  }, [address]);

  const { open } = useWeb3Modal();
  const isMobileButNotDappBrowser =
    isMobile &&
    browserName?.toLowerCase() !== "chrome webview" &&
    isMobile &&
    browserName?.toLowerCase() !== "webkit";

  const isDesktopOrIsMobileButDappBrowser =
    !isMobile ||
    (isMobile && browserName?.toLowerCase() === "chrome webview") ||
    (isMobile && browserName?.toLowerCase() === "webkit");

  const handleConnect = async (index: any) => {
    try {
      switch (index) {
        case 0:
          await connectWithMetamask();
          break;
        case 1:
          await connectWithPhantom();
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Metamask connection function
  const connectWithMetamask = async () => {
    try {
      if (isMobile && browserName.toLowerCase() !== "chrome webview") {
        alert("Please ensure your MetaMask is unlocked");
        const metamaskAppDeepLink = `https://metamask.app.link/dapp/${DAPP_URL_METAMASK}`;
        window.open(metamaskAppDeepLink, "_self");
      } else {
        await open();
      }
      handleClose();
    } catch (error) {
      console.error("Metamask wallet error:", error);
    }
  };

  // Phantom wallet connection function
  const connectWithPhantom = async () => {
    try {
      handleClose();
    } catch (error) {
      console.error("Phantom wallet error:", error);
    } finally {
      handleClose();
    }
  };

  // :: WAGMI ::
  const walletDisconnect = async () => {
    try {
      // await disconnect();
      toast.success("Wallet Disconnected", { id: "walletDisconnected" });
      dispatch(setIsLoggedIn(false));
      dispatch(setUserWalletAddress(""));
      dispatch(setNetworkListFrom(""));
      dispatch(setNetworkListTo(""));
      dispatch(resetUserSlice());
      await resetConfig();
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  return (
    <div className="wallet_connector">
      {phantomWallet ? (
        <>
          {phantomWallet && (
            <div>
              <WalletMultiButton />
            </div>
          )}

          {walletAddress && (
            <button
              className="ButtonCustom connect_wallet bordered-green"
              onClick={walletDisconnect}
            >
              {formatAddress(walletAddress)}
            </button>
          )}
        </>
      ) : (
        <>
          <WalletMultiButton children={"Connect Wallet"} />
        </>
      )}
    </div>
  );
};

export default WalletDropdown;
