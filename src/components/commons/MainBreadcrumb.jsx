import React from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { findFalsyProperty } from "../../utils";

const MainBreadcrumb = () => {
  const issue = useSelector((state) => state.issue);

  const step = findFalsyProperty(issue);

  return (
    <Breadcrumbs maxItems={5} aria-label="breadcrumb">
      <Link
        underline="hover"
        color="inherit"
        to="/"
        style={{
          pointerEvents: step[0] <= 0 && "none",
          color: step >= 0 ? "#00A99D" : "grey",
        }}
      >
        Start Report
      </Link>
      <Link
        underline="hover"
        color="inherit"
        to="/work-options"
        style={{
          pointerEvents: step < 1 && "none",
          color: step >= 1 ? "#00A99D" : "grey",
        }}
      >
        Work Option
      </Link>
      <Link
        underline="hover"
        color="inherit"
        to="/location"
        style={{
          pointerEvents: step < 2 && "none",
          color: step >= 2 ? "#00A99D" : "grey",
        }}
      >
        Location
      </Link>
      <Link
        underline="hover"
        color="inherit"
        to="/start-scan"
        style={{
          pointerEvents: step <= 3 && "none",
          color: step >= 3 ? "#00A99D" : "grey",
        }}
      >
        Device
      </Link>
      <Link
        underline="hover"
        color="inherit"
        to="/description"
        style={{
          pointerEvents: step <= 4 && "none",
          color: step >= 4 ? "#00A99D" : "grey",
        }}
      >
        Description
      </Link>
    </Breadcrumbs>
  );
};

export default MainBreadcrumb;
