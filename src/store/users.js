import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");
export const updateUser = createAction("UPDATE_USER");

const initialState = {
  id: null,
  name: "",
  email: "",
  cellphone: null,
  address: null,
  image: "",
  location: null,
  role: null,
  is_admin: null,
};

export const userReducer = createReducer(initialState, {
  [setUser]: (state, action) => {
    if (action.payload !== state) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.cellphone = action.payload.cellphone;
      state.address = action.payload.address;
      state.image = action.payload.image;
      state.location = action.payload.location;
      state.role = action.payload.role;
      state.is_admin = action.payload.is_admin;
    }
  },
  [updateUser]: (state, action) => {
    const updates = Object.keys(action.payload);
    updates.map((key) => {
      state[key] = action.payload[key];

      return state;
    });
  },
});
