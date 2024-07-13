import { configureStore, createSlice, current } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";
import cart from "./store/cartSlice.js";

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let recentStore = createSlice({
  name: "recent",
  initialState: [""],
  reducers: {
    setRecent(state, a) {
      state = a.payload;
    },
  },
});

export { recentStore };
export let setRecent = recentStore.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
