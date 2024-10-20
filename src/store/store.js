import counterSlice from "./slices/counteslice/counterSlice"
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    counter: counterSlice, // Add your slices here
  },
});

export default store;
