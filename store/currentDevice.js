// src/features/device/deviceSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getDeviceType } from '@/helpers/getDeviceType';

const initialState = {
  deviceType: getDeviceType(),
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDeviceType: (state) => {
      state.deviceType = getDeviceType();
    },
  },
});

export const { setDeviceType } = deviceSlice.actions;

export default deviceSlice.reducer;
