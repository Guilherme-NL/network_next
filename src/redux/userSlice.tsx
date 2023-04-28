import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string | null;
}

const initialState: UserState = {
  name:
    typeof window !== "undefined" ? localStorage.getItem("user") || null : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setUserName } = userSlice.actions;
export default userSlice.reducer;
