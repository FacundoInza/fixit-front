import React, { useEffect, useMemo } from "react";
import axios from "axios";

import { Grid } from "@mui/material";

import CardReport from "../Cards/CardReportList";
import { axiosCasesUser } from "../../../services/api";

const ReportList = ({ filterAds }) => {
  const actualUser = useSelector((state) => state.user);

  // const casesList = useMemo((user.id,filterAds) => {
  //   return axiosCasesUser();
  // });

  console.log(casesList);

  return (
    <div
      style={{
        maxHeight: "calc(100vh - 250px)",
        overflowY: "auto",
        margin: "0px",
      }}
    >
      <Grid container spacing={2} margin={"5px 5px 0px 5px"}>
        <CardReport />
        <CardReport />
        <CardReport />
        <CardReport />
        <CardReport />
        <CardReport />
      </Grid>
    </div>
  );
};

export default ReportList;
