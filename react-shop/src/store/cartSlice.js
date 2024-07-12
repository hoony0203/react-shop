import { createSlice, current } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "white and black", count: 2 },
    { id: 2, name: "grey yordan", count: 1 },
  ],
  reducers: {
    plusCount(state, a) {
      let { id } = a.payload;
      let result = state.find((item) => item.id == id);
      result.count += 1;
    },
    detailOrder(state, a) {
      let { id } = a.payload;
      let result = state.find((item) => item.id == id);
      if (result == undefined) {
        state.push(a.payload);
      } else {
        result.count += 1;
      }
      console.log(current(state));
    },
  },
});

export let { plusCount, cartCheck, detailOrder } = cart.actions;
export default cart;
