import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marketplaceGraphData: "",
};

export const marketplaceGraphDataSlice = createSlice({
  name: "marketplaceGraphData",
  initialState,

  reducers: {
    setMarketplaceGraphData: (state, action) => {
      state.marketplaceGraphData = action.payload;
    },
  },
});

export const { setMarketplaceGraphData } = marketplaceGraphDataSlice.actions;

export default marketplaceGraphDataSlice.reducer;
