import { createSlice } from "@reduxjs/toolkit";
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
});

export const { setAuthUser } = authSlice.actions;
export const selectAuthUser = (state: AppState) => state.auth.authUser;
export default authSlice;
