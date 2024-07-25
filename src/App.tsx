import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Application from "./Application";
import { Toaster } from "react-hot-toast";
import store from "./Redux/Store";
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
        <Application />
      </PersistGate>
    </Provider>
  );
}

export default App;
