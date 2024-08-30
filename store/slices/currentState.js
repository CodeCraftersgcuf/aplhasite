import { createSlice } from '@reduxjs/toolkit';

export const CURRENT_STATES = {
  LOGOUT: 'loggedOut',
  ADMIN_LOGIN: 'adminLogin',
  USER_LOGIN: 'userLogin',
};

const initialState = { currentState: 'loggedOut' };

const currentStateSlice = createSlice({
  name: 'currentState',
  initialState,
  reducers: {
    logout(state) {
      state.currentState = CURRENT_STATES.LOGOUT;
    },
    userLogin(state) {
      state.currentState = CURRENT_STATES.USER_LOGIN;
    },
    adminLogin(state) {
      state.currentState = CURRENT_STATES.ADMIN_LOGIN;
    },
  },
});

export const stateActions = currentStateSlice.actions;

export default currentStateSlice.reducer;
