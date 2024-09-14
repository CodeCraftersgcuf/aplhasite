import { createSlice } from '@reduxjs/toolkit';

export const CURRENT_STATES = {
  LOGOUT: 'loggedOut',
  ADMIN_LOGIN: 'adminLogin',
  USER_LOGIN: 'userLogin',
};

const initialState = { currentState: null, userEmail: null };

const currentStateSlice = createSlice({
  name: 'currentState',
  initialState,
  reducers: {
    logout(state) {
      state.currentState = CURRENT_STATES.LOGOUT;
      state.userEmail = null;
    },
    userLogin(state, action) {
      state.currentState = CURRENT_STATES.USER_LOGIN;
      state.userEmail = action.payload;
    },
    adminLogin(state) {
      state.currentState = CURRENT_STATES.ADMIN_LOGIN;
    },
  },
});

export const stateActions = currentStateSlice.actions;

export default currentStateSlice.reducer;
