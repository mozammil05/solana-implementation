// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
// import Application from "./Application";
// import { Toaster } from "react-hot-toast";
// import store from "./Redux/Store";
// import { WagmiProvider } from "wagmi";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { config } from "./config";

// /**CREATE STORE PERSIST INSTANCE */
// let persistor = persistStore(store);

// function App() {
//   // console.log = () => {};
//   console.warn = () => {};
//   console.error = () => {};
//   const queryClient = new QueryClient();

//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         <Provider store={store}>
//           <PersistGate loading={null} persistor={persistor}>
//             <Toaster />
//             <Application />
//           </PersistGate>
//         </Provider>
//       </QueryClientProvider>
//     </WagmiProvider>
//   );
// }

// export default App;

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Application from "./Application";
import { Toaster } from "react-hot-toast";
import store from "./Redux/Store";
import { SocketProvider } from "./context/socket/SocketProvider";
import SolanaWallet from "./SolanaWallet";
/**CREATE STORE PERSIST INSTANCE */
let persistor = persistStore(store);

function App() {
  // console.log = () => {};
  console.warn = () => {};
  console.error = () => {};

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster />
        <SocketProvider>
          <Application />
        </SocketProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
