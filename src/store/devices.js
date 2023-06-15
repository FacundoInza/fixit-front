import { createAction, createReducer } from "@reduxjs/toolkit";
import { axiosAllDevices } from "../services/api";

export const setDevices = createAction("SET_DEVICES");

const initialState = [];

export const fetchDevices = () => {
  return async (dispatch) => {
    try {
      const response = await axiosAllDevices();
      const devices = response;
      dispatch(setDevices(devices));
    } catch (err) {
      console.log(err);
    }
  };
};

export const devicesReducer = createReducer(initialState, {
  [setDevices]: (state, action) => action.payload,
});
export default devicesReducer;
