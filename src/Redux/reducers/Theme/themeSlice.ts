import { createSlice } from "@reduxjs/toolkit";

const initialState: { theme: "light" | "dark" } = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
