import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userWalletAddress: "",
  PhantomWalletAddress: "",
  userStakeAmount: "",
  tabSelected: "buyOrder",
  walletType: "",
  // networkFrom: "",
  // networkTo: "",
  networkFrom: [],
  networkTo: [],
  stakeAmount: "",
  userAddressForNotification: "",
  userConnectedWalletName: "",
  userConnectedChainID: "",
  associatedTokenAddress: "",
};

/** USER DETAILS SLICE */
export const UserSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUserWalletAddress: (state, action) => {
      state.userWalletAddress = action.payload;
    },
    setPhantomWalletAddress: (state, action) => {
      state.PhantomWalletAddress = action.payload;
    },
    setUserATA: (state, action) => {
      state.associatedTokenAddress = action.payload;
    },
    setUserAddressForNotification: (state, action) => {
      state.userAddressForNotification = action.payload;
    },
    setUserWalletType: (state, action) => {
      state.walletType = action.payload;
    },
    setNetworkListFrom: (state, action) => {
      state.networkFrom = action.payload;
    },
    setNetworkListTo: (state, action) => {
      state.networkTo = action.payload;
    },
    // setNetworkList: (state, action) => {
    //   state.networkList = action.payload;
    // },

    setUserStakeAmount: (state, action) => {
      state.userStakeAmount = action.payload;
    },
    setTabSelected: (state, action) => {
      state.tabSelected = action.payload;
    },
    setStakeAmount: (state, action) => {
      state.stakeAmount = action.payload;
    },
    setUserConnectedWalletName: (state, action) => {
      state.userConnectedWalletName = action.payload;
    },
    setUserConnectedChainID: (state, action) => {
      state.userConnectedChainID = action.payload;
    },
    resetUserSlice: () => initialState,
  },
});

export const {
  setIsLoggedIn,
  setUserWalletAddress,
  setUserStakeAmount,
  setTabSelected,
  setUserWalletType,
  setNetworkListFrom,
  setNetworkListTo,
  setUserAddressForNotification,
  resetUserSlice,
  setUserConnectedWalletName,
  setUserConnectedChainID,
  setUserATA,
  setPhantomWalletAddress,
} = UserSlice.actions;

export default UserSlice.reducer;
