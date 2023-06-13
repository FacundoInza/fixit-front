import { createAction, createReducer } from "@reduxjs/toolkit";

export const updateFilter = createAction("UPDATE_FILTER");

const initialState = {
  status: "",
  period: "",
  device: "",
};

export const filterReducer = createReducer(initialState, {
  [updateFilter]: (state, action) => {
    const updates = Object.keys(action.payload);
    updates.map((key) => (state[key] = action.payload[key]));
  },
});
