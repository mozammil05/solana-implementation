import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    unsetLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setLoading, unsetLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
