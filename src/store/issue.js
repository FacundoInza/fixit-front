import { createAction, createReducer } from "@reduxjs/toolkit";
import image from "../assets/tools.png";
import { insertFalsyFromProperty } from "../utils";

export const resetIssue = createAction("RESET_ISSUE");
export const updateIssue = createAction("UPDATE_ISSUE");
export const deleteStepIssue = createAction("DELETE_STEP_ISSUE");

const initialState = {
  home_office: "",
  closest_office: "",
  damaged_equipment: {
    name: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7Ve2fJAXbGhBIUo7yBGh4vt86vzv2CLEJw&usqp=CAU",
    location: "",
  },
  description: "",
  user: "",
};

export const issueReducer = createReducer(initialState, {
  [resetIssue]: (state, action) => initialState,
  [updateIssue]: (state, action) => {
    const updates = Object.keys(action.payload);
    updates.map((key) => (state[key] = action.payload[key]));
  },
  [deleteStepIssue]: (state, action) => {
    return insertFalsyFromProperty(state, action.payload);
  },
});
