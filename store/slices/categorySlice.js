import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'authInput',
  initialState: {
    selectedCategory: 'null',
    searchTerm: '',
  },
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
