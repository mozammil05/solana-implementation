import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socketId: "",
};

export const socketSlice = createSlice({
  name: "socket",
  initialState,

  reducers: {
    setSocketConnection: (state, action) => {
      state.socketId = action.payload;
    },
  },
});

export const { setSocketConnection } = socketSlice.actions;

export default socketSlice.reducer;
