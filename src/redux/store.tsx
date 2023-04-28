// store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true,
});

export type AppStore = ReturnType<any>;
export type AppState = ReturnType<AppStore["getState"]>;

export default store;
