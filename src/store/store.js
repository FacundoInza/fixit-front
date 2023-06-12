import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users";
import { reportsReducer } from "./Reports";
import { issueReducer } from "./issue";

const store = configureStore({
  reducer: {
    user: userReducer,
    reports: reportsReducer,
    issue: issueReducer,
  },
});

export default store;
