
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Example slice

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your slices here
  },
});

export default store;
