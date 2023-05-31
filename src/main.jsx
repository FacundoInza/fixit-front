import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import GlobantTheme from "./themes/GlobantTheme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={GlobantTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
