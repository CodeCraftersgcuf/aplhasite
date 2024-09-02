import { createSlice } from '@reduxjs/toolkit';

const authInputSlice = createSlice({
  name: 'authInput',
  initialState: {
    signIn: null,
    signUp: null,
    subscribe: null,
  },
  reducers: {
    setValueInSignUp(state, action) {
      state.signUp = {
        ...state.signUp,
        [action.payload.key]: action.payload.value,
      };
    },
    setValueInSignIn(state, action) {
      state.signIn = {
        ...state.signIn,
        [action.payload.key]: action.payload.value,
      };
    },
    setValueInSubscribe(state, action) {
      state.subscribe = {
        ...state.subscribe,
        [action.payload.key]: action.payload.value,
      };
    },
  },
});

export const authInputActions = authInputSlice.actions;

export default authInputSlice.reducer;
