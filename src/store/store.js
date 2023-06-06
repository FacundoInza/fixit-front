import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users";
import { reportsReducer } from "./Reports";

const store = configureStore({
  reducer: {
    user: userReducer,
    reports: reportsReducer,
  },
});

export default store;
