// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import { Provider } from "react-redux";
// import { store } from "../../../../Redux/Store"
// import MemeMintBridge from "./MemeMintBridge";

// // Mock necessary functions from the Redux reducers
// // jest.mock("@Redux/reducers/user/user", () => ({
// //   setNetworkListFrom: jest.fn(),
// //   setNetworkListTo: jest.fn(),
// // }));

// // Mocking custom hooks and components if needed
// jest.mock("../../../../hooks/useCopyToClipboard", () => ({
//   __esModule: true,
//   default: () => [jest.fn()],
// }));

// jest.mock("wagmi", () => ({
//   useContractRead: () => ({
//     isError: false,
//     isLoading: false,
//     isSuccess: true,
//     refetch: jest.fn(),
//   }),
//   useContractWrite: () => ({
//     data: null,
//     isError: false,
//     status: "idle",
//     isLoading: false,
//     isSuccess: false,
//     write: jest.fn(),
//     writeAsync: jest.fn().mockResolvedValue({ hash: "0x123" }),
//   }),
//   useNetwork: () => ({ chain: { id: 97 } }),
//   useSwitchNetwork: () => ({ switchNetwork: jest.fn() }),
// }));

// test("renders MemeMintBridge component", () => {
//   render(
//     <Provider store={store}>
//       <MemeMintBridge />
//     </Provider>
//   );

//   // Check if the heading is rendered
//   expect(screen.getByText(/MemeMint Bridge/i)).toBeInTheDocument();
// });

// test("renders Connect Wallet button and handles click", () => {
//   render(
//     <Provider store={store}>
//       <MemeMintBridge />
//     </Provider>
//   );

//   const connectWalletButton = screen.getByText(/Connect Wallet/i);
//   expect(connectWalletButton).toBeInTheDocument();

//   fireEvent.click(connectWalletButton);
//   // Add more assertions based on what should happen when the button is clicked
// });

// test("allows network selection", () => {
//   render(
//     <Provider store={store}>
//       <MemeMintBridge />
//     </Provider>
//   );

//   const fromNetworkButton = screen.getByText(/Select Network/i);
//   fireEvent.click(fromNetworkButton);

//   const networkOption = screen.getByText(/BSC/i);
//   fireEvent.click(networkOption);

//   // Add assertions to check if the network was selected
//   expect(screen.getByText(/BSC/i)).toBeInTheDocument();
// });

// test("handles form submission", async () => {
//   render(
//     <Provider store={store}>
//       <MemeMintBridge />
//     </Provider>
//   );

//   const amountInput = screen.getByPlaceholderText(/0.0/i);
//   fireEvent.change(amountInput, { target: { value: "10" } });

//   const receiveAddressInput = screen.getByPlaceholderText(
//     /Paste or type receiver address here/i
//   );
//   fireEvent.change(receiveAddressInput, {
//     target: { value: "0x1234567890abcdef" },
//   });

//   const approveAndDepositButton = screen.getByText(/Approve and Deposit/i);
//   fireEvent.click(approveAndDepositButton);

//   await waitFor(() => {
//     // Add assertions based on what should happen when the form is submitted
//     expect(screen.getByText(/Processing.../i)).toBeInTheDocument();
//   });
// });

// import { render } from "@testing-library/react";
// import { Provider } from "react-redux"; // Assuming you have Provider for Redux
// import store from "../../../../Redux/Store"; // Adjust the path if necessary
// import MemeMintBridge from "./MemeMintBridge";
// import SocketProvider from "../../../../context/socket/SocketProvider";

// jest.mock("../../../../context/socket/SocketProvider", () => ({
//   __esModule: true,
//   default: ({ children }) => children,
// }));

// test("renders MemeMintBridge component", () => {
//   render(
//     <Provider store={store}>
//       <SocketProvider>
//         <MemeMintBridge />
//       </SocketProvider>
//     </Provider>
//   );

// });

import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../Redux/Store";
import MemeMintBridge from "./MemeMintBridge";
import SocketProvider from "../../../../context/socket/SocketProvider";

// Mock or provide a wrapper for WagmiConfig
jest.mock("wagmi", () => {
  const actualWagmi = jest.requireActual("wagmi");
  return {
    ...actualWagmi,
    WagmiConfig: ({ children }) => <>{children}</>, // Mocked WagmiConfig providing necessary context
  };
});

jest.mock("../../../../context/socket/SocketProvider", () => ({
  __esModule: true,
  default: ({ children }) => children,
}));

describe("MemeMintBridge Component", () => {
  test("renders MemeMintBridge component", () => {
    render(
      <Provider store={store}>
        <SocketProvider>
          <MemeMintBridge />
        </SocketProvider>
      </Provider>
    );

    expect(screen.getByText(/MemeMint Bridge/i)).toBeInTheDocument();
  });

});
