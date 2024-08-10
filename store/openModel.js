import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    openModal(state) {
      return (state = true);
    },
    closeModal(state) {
      return (state = false);
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
