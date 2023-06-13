import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users";
import { reportsReducer } from "./Reports";
import { issueReducer } from "./issue";
import { filterReducer } from "./ui/filter";

const store = configureStore({
  reducer: {
    user: userReducer,
    reports: reportsReducer,
    issue: issueReducer,
    filter: filterReducer,
  },
});

export default store;
