import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productsSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
