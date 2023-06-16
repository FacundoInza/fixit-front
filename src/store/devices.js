import { createAction, createReducer } from "@reduxjs/toolkit";
import { axiosAllDevices } from "../services/api";

export const setDevices = createAction("SET_DEVICES");

const initialState = [];

export const devicesReducer = createReducer(initialState, {
  [setDevices]: (state, action) => {
    return action.payload.map((device) => device.name);
  },
});
export default devicesReducer;
