import { createAction, createReducer } from "@reduxjs/toolkit";

export const allReports = createAction("ALL_REPORTS");

const initialState = {
  reports: [],
};

export const reportsReducer = createReducer(initialState, {
  [allReports]: (state, action) => {},
});
