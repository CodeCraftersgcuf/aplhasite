import { configureStore } from '@reduxjs/toolkit';
import stateReducer from '@/store/currentState.js';
import itemsReducer from '@/store/cartItems.js';
import modalReducer from '@/store/openModel.js';

export const store = configureStore({
  reducer: {
    stateFn: stateReducer,
    itemsFn: itemsReducer,
    modalFn: modalReducer,
  },
});
