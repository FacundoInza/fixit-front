import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

const initialState = {
  id: null,
  name: null,
  email: null,
  phoneNumber: null,
  adress: null,
  image: null,
  favoriteOffice: null,
  locationWithAddress: null,
  locationWithCoordinates: null,
  rol: null,
  isAdmin: null,
  record: [],
};

export const userReducer = createReducer(initialState, {
  [setUser]: (state, action) => action.payload,
});
