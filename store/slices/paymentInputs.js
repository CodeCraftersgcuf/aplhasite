import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    contact: null,
    deliveryDetails: null,
    creditCardDetails: null,
    BillingAddress: null,
  },
  reducers: {
    setValueInDeliveryDetails(state, action) {
      state.deliveryDetails = {
        ...state.deliveryDetails,
        [action.payload.key]: action.payload.value,
      };
    },
    setValueInCreditCardDetails(state, action) {
      state.creditCardDetails = {
        ...state.creditCardDetails,
        [action.payload.key]: action.payload.value,
      };
    },
    setValueInBillingAddress(state, action) {
      state.BillingAddress = {
        ...state.BillingAddress,
        [action.payload.key]: action.payload.value,
      };
    },
    setValueInContact(state, action) {
      state.contact = {
        ...state.contact,
        [action.payload.key]: action.payload.value,
      };
    },
  },
});

export const paymentActions = paymentSlice.actions;

export default paymentSlice.reducer;
