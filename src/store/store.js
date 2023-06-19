// store.js
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users";
import { reportsReducer } from "./Reports";
import { issueReducer } from "./issue";
import { filterReducer } from "./ui/filter";
import { devicesReducer } from "./devices";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("issue");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("issue", serializedState);
  } catch (error) {
    // Manejo de errores al guardar el estado
  }
};

const persistedIssueState = loadState();

const store = configureStore({
  reducer: {
    user: userReducer,
    reports: reportsReducer,
    issue: issueReducer,
    filter: filterReducer,
    devices: devicesReducer,
  },
  preloadedState: {
    issue: persistedIssueState,
  },
});

store.subscribe(() => {
  saveState(store.getState().issue);
});

export default store;
