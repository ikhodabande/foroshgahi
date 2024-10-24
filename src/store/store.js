import authSlice from "./slices/authslice/authSlice"
import productsSlice from "./slices/productslice/productSlice"
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
  },
});

export default store;
