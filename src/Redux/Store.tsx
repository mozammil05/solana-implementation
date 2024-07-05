import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userSlice from "./reducers/user/user";
import socketSlice from "./reducers/SocketSlice/SocketSlice";
import MarketplaceSlice from "./reducers/MarketplaceSlice/MarketplaceSlice";
import loaderReducer from "./reducers/LoadingSlice/loaderSlice";
import  themeSlice  from "./reducers/Theme/themeSlice";

const rootReducer = combineReducers({
  user: userSlice,
  socket: socketSlice,
  marketplaceGraphData: MarketplaceSlice,
  loader: loaderReducer,
  theme: themeSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: any = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
