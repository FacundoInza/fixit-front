import { createAction, createReducer } from "@reduxjs/toolkit";

export const openDialog = createAction("OPEN_DIALOG");
export const closeDialog = createAction("CLOSE_DIALOG");

const initialState = false;

export const openDialogReducer = createReducer(initialState, {
  [openDialog]: (state, action) => true,
  [closeDialog]: (state, action) => false,
});
