import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users";
import { reportsReducer } from "./Reports";
import { issueReducer } from "./issue";
import { filterReducer } from "./ui/filter";
import { devicesReducer } from "./devices";

const store = configureStore({
  reducer: {
    user: userReducer,
    reports: reportsReducer,
    issue: issueReducer,
    filter: filterReducer,
    devices: devicesReducer,
  },
});

export default store;
