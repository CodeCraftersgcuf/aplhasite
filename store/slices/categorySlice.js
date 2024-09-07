import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'authInput',
  initialState: {
    selectedCategory: 'null',
    filterText: '',
  },
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setFilter(state, action) {
      state.filterText = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
