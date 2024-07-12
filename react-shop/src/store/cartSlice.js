import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "white and black", count: 2 },
    { id: 2, name: "grey yordan", count: 1 },
  ],
  reducers: {
    plusCount(state, a) {
      let { id, i } = a.payload;
      let result = state.find((item) => item.id == id);
      let { count } = result;
      result.count += 1;
    },
  },
});

export let { plusCount } = cart.actions;
export default cart;
