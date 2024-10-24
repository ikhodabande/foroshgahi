import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductQuantity(state, action) {
      const { productId, quantity } = action.payload;
      if (!state[productId]) {
        state[productId] = { quantity: 0 };
      }
      state[productId].quantity = Math.max(0, quantity); // Prevent negative inventory
    },
  },
});

export const { setProductQuantity } = productsSlice.actions;

export default productsSlice.reducer;
