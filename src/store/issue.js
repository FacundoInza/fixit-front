import { createAction, createReducer } from "@reduxjs/toolkit";
import image from "../assets/tools.png";

export const resetIssue = createAction("RESET_ISSUE");
export const updateIssue = createAction("UPDATE_ISSUE");

const initialState = {
  user: "",
  home_office: null,
  closest_office: "",
  damaged_equipment: {
    name: "",
    image: image,
    location: "",
  },
  description: "",
};

export const issueReducer = createReducer(initialState, {
  [resetIssue]: (state, action) => initialState,
  [updateIssue]: (state, action) => {
    const updates = Object.keys(action.payload);
    updates.map((key) => (state[key] = action.payload[key]));
  },
});
