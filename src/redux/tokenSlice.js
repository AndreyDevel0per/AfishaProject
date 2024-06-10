import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || '',
  fullName: localStorage.getItem("fullName") || '',
  email: localStorage.getItem("email") || '',
  id: localStorage.getItem("id") || '',
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setfullName: (state, action) => {
        state.fullName = action.payload
    },
    setEmail: (state, action) => {
        state.email = action.payload
    },
    setId: (state, action) => {
      state.id = action.payload
  },
  },
});

export const { setToken, setEmail, setfullName, setId } = tokenSlice.actions

export default tokenSlice.reducer