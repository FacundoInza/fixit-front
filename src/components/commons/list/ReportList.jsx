import React from "react";
import CardReport from "../Cards/CardReport";
import { Grid } from "@mui/material";

const ReportList = ({ filterAds }) => {
  //{status: "pending" , period: "15_days" , device: "laptop"} // 15_days 1_month 6_moths // url : /cases/filter?status=pending&period=15_days&device=laptop
  console.log(filterAds);
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
