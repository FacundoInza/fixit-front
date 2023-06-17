import { createAction, createReducer } from "@reduxjs/toolkit";

export const setIssue = createAction("SET_ISSUE");
export const updateIssue = createAction("UPDATE_ISSUE");

const initialState = {
  closest_office: "",
  damaged_equipment: { name: "", image: "", location: "" },
  description: "",
  home_office: null,
  user: "",
};

export const issueReducer = createReducer(initialState, {
  [setIssue]: (state, action) => {
    if (action.payload !== state) {
      state.id = action.payload.id;
      state.damaged_equipment = action.payload.damaged_equipment;
      state.owner = action.payload.owner;
      state.startingDate = action.payload.startingDate;
      state.home_office = action.payload.home_office;
      state.status = action.payload.status;
      state.user = action.payload.user;
    }
  },
  [updateIssue]: (state, action) => {
    console.log("update", action.payload);
    const updates = Object.keys(action.payload);
    updates.map((key) => (state[key] = action.payload[key]));
  },
});
