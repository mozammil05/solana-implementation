import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, useEffect, useMemo } from "react";

import { DEFAULT_CHAIN_DATA, projectId, WALLET_IDS } from "./constants";
import { EIP6963Connector, createWeb3Modal } from "@web3modal/wagmi/react";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { walletConnectProvider } from "@web3modal/wagmi";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";

import { InjectedConnector } from "wagmi/connectors/injected";
import { useSelector } from "react-redux";
import { browserName, isMobile } from "react-device-detect";
import MainLayout from "./Components/Layouts/MainLayout/MainLayout";
import { ErrorBoundary } from "./Components/Common/ErrorBoundary/Errorboundary";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import MemeMintBridge from "./Components/Pages/Public/MemeMintBridge/MemeMintBridge";
import TransactionsPage from "./Components/Pages/Public/TransactionsPage/TransactionsPage";
import Loader from "./Components/Common/Loader/Loader";

// Solana

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { endpoint } from "./Services/solana/utils/constants";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import { endpoint } from "./Services/solana/utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <MemeMintBridge />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "transactions",
        element: <TransactionsPage />,
      },
    ],
  },
]);

function Application() {
  const theme = useSelector((state: any) => state?.theme?.theme);
  let chains = [DEFAULT_CHAIN_DATA?.bsc, DEFAULT_CHAIN_DATA?.eth];

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const { publicClient } = configureChains(
    [DEFAULT_CHAIN_DATA?.bsc, DEFAULT_CHAIN_DATA?.eth],
    [walletConnectProvider({ projectId }), publicProvider()]
  );

  // browser Name List :

  // "Device : Mobile IOS"
  // "Normal Browsers: Mobile Safari, Chrome, Brave"
  // "Dapp Browsers: for metamsk, trustwallet, coinbase wallet browsers - WebKit"

  // "Device : Mobile Android"
  // "Normal Browsers: Mobile Safari, Chrome"
  // "Dapp Browsers: for metamsk, trustwallet, coinbase wallet browsers - Chrome Webview"

  const metadata = {
    name: "Ethereum",
    description: "meme-mint",
    url: "https://app.firechain.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  };

  let wagmiConfig: any;

  // If Mobile browser and not the dapp browser
  if (
    isMobile &&
    browserName?.toLowerCase() !== "chrome webview" &&
    isMobile &&
    browserName?.toLowerCase() !== "webkit"
  ) {
    wagmiConfig = createConfig({
      autoConnect: true,
      connectors: [
        new WalletConnectConnector({
          chains,
          options: { projectId, showQrModal: false, metadata },
        }),
        new EIP6963Connector({ chains }),
        new InjectedConnector({ chains, options: { shimDisconnect: true } }),
      ],
      publicClient,
    });
  }

  // If Mobile Dapp Browser
  if (
    (isMobile && browserName?.toLowerCase() === "chrome webview") ||
    (isMobile && browserName?.toLowerCase() === "webkit")
  ) {
    wagmiConfig = createConfig({
      autoConnect: true,
      connectors: [
        new WalletConnectConnector({
          chains,
          options: { projectId, showQrModal: false, metadata },
        }),
        new EIP6963Connector({ chains }),
        new InjectedConnector({ chains, options: { shimDisconnect: true } }),
      ],
      publicClient,
    });
  }

  // If Desktop Browser
  if (!isMobile) {
    wagmiConfig = createConfig({
      autoConnect: true,
      connectors: [
        new WalletConnectConnector({
          chains,
          options: { projectId, showQrModal: false, metadata },
        }),
        new EIP6963Connector({ chains }),
        // new InjectedConnector({ chains, options: { shimDisconnect: true } }), // This is the Browser wallet options (which is not required incase of desktop browser)
      ],
      publicClient,
    });
  }

  let createModalFunction: any;

  // for mobile normal browsers
  if (
    isMobile &&
    browserName?.toLowerCase() !== "chrome webview" &&
    isMobile &&
    browserName?.toLowerCase() !== "webkit"
  ) {
    createModalFunction = async () =>
      createWeb3Modal({
        wagmiConfig,
        projectId,
        //defaultChain: DEFAULT_CHAIN_DATA,
        chains,
        includeWalletIds: [
          WALLET_IDS?.METAMASK,
          WALLET_IDS?.TRUSTWALLET,
          // WALLET_IDS?.COINBASE,
        ],
      });
  }

  // for mobile Dapp browsers
  if (
    (isMobile && browserName?.toLowerCase() === "chrome webview") ||
    (isMobile && browserName?.toLowerCase() === "webkit")
  ) {
    createModalFunction = async () =>
      createWeb3Modal({
        wagmiConfig,
        projectId,
        //defaultChain: DEFAULT_CHAIN_DATA,
        chains,
        includeWalletIds: [WALLET_IDS?.TRUSTWALLET],
        // includeWalletIds: ["none"],
      });
  }

  // For Desktop Browsers
  else if (!isMobile) {
    createModalFunction = async () =>
      createWeb3Modal({
        wagmiConfig,
        projectId,
        //defaultChain: DEFAULT_CHAIN_DATA,
        chains,
        // excludeWalletIds: [
        //   "9ce87712b99b3eb57396cc8621db8900ac983c712236f48fb70ad28760be3f6a"
        // ],
        includeWalletIds: [
          WALLET_IDS?.METAMASK,
          WALLET_IDS?.TRUSTWALLET,
          // WALLET_IDS?.COINBASE,
        ],
      });
  }

  createModalFunction();

  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const walletsAnchor = useMemo(() => [], [network]);

  return (
    <Suspense
      fallback={
        <>
          <Loader />
        </>
      }
    >
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={walletsAnchor} autoConnect>
          <WalletModalProvider>
            <WagmiConfig config={wagmiConfig}>
              <RouterProvider router={router} />
            </WagmiConfig>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </Suspense>
  );
}

export default Application;
