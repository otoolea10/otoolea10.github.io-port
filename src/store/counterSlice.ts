import { createSlice } from "@reduxjs/toolkit";

//  state object
const initialState = {
  count: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // actions
    increment: (state) => {
      state.count += 1;
    }
  }
});
export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
