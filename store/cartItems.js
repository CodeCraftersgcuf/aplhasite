import { createSlice } from '@reduxjs/toolkit';

//Accepting data in the following pattern:
// {item: null, size: null, quantity: null,},

const initialState = {
  items: [],
  message: null,
};
export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    resetMessage(state) {
      state.message = null;
    },
    addItem(state, action) {
      const { product, size, quantity } = action.payload;
      // console.log(product);
      state.message = null;

      const itemExists = state.items.some(
        (item) => item.product.id === product.id && item.size === size
      );
      // console.log(itemExists);

      if (itemExists) {
        state.message = 'itemExists';
      } else {
        state.items.push(action.payload);
        state.message = 'itemAdded';
      }
    },
    removeItem(state, action) {
      const { product, size, quantity } = action.payload;
      state.message = null;
      const itemIndex = state.items.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );

      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
        state.message = 'itemRemoved';
      } else {
        state.message = 'Item does not exist';
      }
    },
    increment(state, action) {
      const { product, size, quantity } = action.payload;

      const itemIndex = state.items.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.message = 'Item does not exist';
      }
    },
    decrement(state, action) {
      const { product, size, quantity } = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity === 1) {
          state.items.splice(itemIndex, 1);
          state.message = 'itemRemoved';
        } else {
          state.items[itemIndex].quantity -= 1;
        }
      } else {
        state.message = 'Item does not exist';
      }
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice.reducer;
