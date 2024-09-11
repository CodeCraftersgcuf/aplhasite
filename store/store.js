import { configureStore } from '@reduxjs/toolkit';
import stateReducer from '@/store/slices/currentState.js';
import itemsReducer from '@/store/slices/cartItems.js';
import modalReducer from '@/store/slices/openModel.js';
import deviceReducer from '@/store/slices/currentDevice.js';
import paymentReducer from '@/store/slices/paymentInputs.js';
import authInputReducer from '@/store/slices/authInputs';
import categoryReducer from '@/store/slices/categorySlice';
import {
  localStorageMiddleware,
  rehydrateState,
} from './localStorageMiddleware';

const preloadedState = {
  itemsFn: {
    items: rehydrateState() || [], // Use loaded state or default to empty array
    added: 0,
  },
  // Initialize other slices if needed
};

export const store = configureStore({
  reducer: {
    stateFn: stateReducer,
    itemsFn: itemsReducer,
    modalFn: modalReducer,
    deviceFn: deviceReducer,
    paymentFn: paymentReducer,
    authInputFn: authInputReducer,
    categoryFn: categoryReducer,
  },
  preloadedState: typeof window !== 'undefined' ? preloadedState : undefined,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
