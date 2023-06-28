import { createAction, createReducer } from "@reduxjs/toolkit";

export const setAllReports = createAction("ALL_REPORTS");
export const setIndividualReport = createAction("SET_INDIVIDUAL_REPORTS");
export const setDeletedReport = createAction("SET_DELETED_REPORT");

const initialState = {
  reports: [],
  individualReport: {
    _id: "",
    closest_office: "",
    damaged_equipment: { image: "", location: "" },
    description: "",
    home_office: null,
    owner: "",
    reopenings: 0,
    startingDate: "",
    status: "",
    user: "",
  },
};

export const reportsReducer = createReducer(initialState, {
  [setAllReports]: (state, action) => {
    state.reports = action.payload;
  },

  [setIndividualReport]: (state, action) => {
    state.individualReport = action.payload;
  },

  [setDeletedReport]: (state, action) => {
    const newReportsList = state.reports.filter(
      (report) => report._id !== action.payload._id
    );
    state.reports = newReportsList;
  },
});
