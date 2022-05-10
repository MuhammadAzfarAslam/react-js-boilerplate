import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("atmToken") || "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToken(state, action) {
      localStorage.setItem("atmToken", action.payload);
      state.token = action.payload;
    },
    setLogout(state, action) {
      localStorage.removeItem("token");
      state.token = action.payload;
    },
  },
});


export const { setToken, setLogout } = appSlice.actions

export default appSlice.reducer