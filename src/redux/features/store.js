import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./cart/cartSlice";
export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
