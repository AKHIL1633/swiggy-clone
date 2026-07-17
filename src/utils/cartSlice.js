import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    restaurantId: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const idx = state.items.findIndex((item) => item.id === action.payload);
      if (idx !== -1) state.items.splice(idx, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.restaurantId = null;
    },
    setRestaurantId: (state, action) => {
      state.restaurantId = action.payload;
    },
  },
});

export const { addItem, removeItem, clearCart, setRestaurantId } = cartSlice.actions;

export default cartSlice.reducer;
