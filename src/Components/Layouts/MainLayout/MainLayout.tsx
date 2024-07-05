import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import logo from "../../../Assets/Images/logo/logo.svg";
import WalletDropdown from "../../Common/WalletDropdown/WalletDropdown";
import { useAccount, useNetwork } from "wagmi";
import { ALLOWED_CHAIN_ID, ALLOWED_CHAIN_NAME } from "../../../constants";
import store from "../../../Redux/Store";
import { isMobile, deviceType, browserName } from "react-device-detect";
import { useSelector } from "react-redux";
import { getAccount, disconnect } from "@wagmi/core";
import { toast } from "react-hot-toast";

const MainLayout = () => {
  const dropdownBtnRef = useRef<HTMLButtonElement>(null);
  const [allowedChainNames, setAllowedChainNames] = useState();
  const handleClose = () => {
    dropdownBtnRef.current?.click();
  };
  const selectedNetwork = useSelector((state: any) => state.user.walletType);
  const userConnectedWalletName = useSelector(
    (state: any) => state?.user?.userConnectedWalletName
  );

  const userAddressForNotification = useSelector(
    (state: any) => state?.user?.userAddressForNotification
  );
  const { connector }: any = getAccount();

  const { chain: CONNECTED_CHAIN_ID }: any = useNetwork();
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const isMobileButNotDappBrowser =
    isMobile &&
    browserName?.toLowerCase() !== "chrome webview" &&
    isMobile &&
    browserName?.toLowerCase() !== "webkit";
  const isDesktopBrowserButConnectedViaWalletConnect =
    !isMobile && userConnectedWalletName !== "EIP6963";

  const reloadOnConnect = useCallback(() => {
    setTimeout(() => {
      const USER_CONNECTE_WALLET_NAME =
        store.getState().user.userConnectedWalletName;
      const USER_CONNECTED_CHAIN_ID =
        store.getState().user.userConnectedChainID;
      const W_ADDRESS = store.getState().user?.userWalletAddress;
      if (
        W_ADDRESS &&
        USER_CONNECTED_CHAIN_ID?.id > 0 &&
        USER_CONNECTE_WALLET_NAME == undefined
      ) {
        // window.location.reload();
        toast.success("Wallet Connected", { id: "walletConnected" });
      }
    }, 2000);
  }, []);

  useEffect(() => {
    reloadOnConnect();
  }, [connector?.name]);

  const getAllowedChainNames = () => {
    let result: any;
    let tempArray: any = [];
    ALLOWED_CHAIN_NAME.forEach((item: any) => {
      tempArray.push(item);
      result = tempArray.join(" or ");
    });
    setAllowedChainNames(result);
  };

  useEffect(() => {
    getAllowedChainNames();
  }, []);

  return (
    <>
      <main className="MainLayout">
        <Container fluid="xl">
          <header className="MainLayoutHeader">
            <Link to="/">{/* <img src={logo} alt="logo" /> */}</Link>
            <>
              {/* {address && CONNECTED_CHAIN_ID?.id !== ALLOWED_CHAIN_ID && ( */}
              {address &&
                !ALLOWED_CHAIN_ID.includes(CONNECTED_CHAIN_ID?.id) && (
                  <div className="wrong-network">
                    <h6>
                      <strong>Wrong Network</strong>
                    </h6>
                    <p>
                      Please switch to the {allowedChainNames} in your{" "}
                      {isMobileButNotDappBrowser && " mobile "}
                      wallet{" "}
                      {/* below will come if isMobileButNotDappBrowser or if !isMobile && wc === walletconnect */}
                      {isDesktopBrowserButConnectedViaWalletConnect ||
                        (isMobileButNotDappBrowser &&
                          `and restart the wallet application to use the platform
                seamlessly. Watch the video if you are still facing issues:-`)}
                      {isDesktopBrowserButConnectedViaWalletConnect ||
                        (isMobileButNotDappBrowser && (
                          <a
                            href="https://www.youtube.com/watch?v=Ek8YEuRuxV0"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Click Here
                          </a>
                        ))}
                    </p>
                  </div>
                )}
            </>
            <WalletDropdown
              dropdownBtnRef={dropdownBtnRef}
              handleClose={handleClose}
            />
          </header>
        </Container>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
