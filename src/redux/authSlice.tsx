import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "@/redux/store";

interface UserState {
  authUser: string;
}

const initialState: UserState = {
  authUser:
    typeof window !== "undefined" ? localStorage.getItem("user") || "" : "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setAuthUser } = authSlice.actions;
export const selectAuthUser = (state: AppState) => state.auth.authUser;
export default authSlice;
