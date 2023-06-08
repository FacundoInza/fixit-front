import React, { useEffect, useMemo } from "react";

import { Grid } from "@mui/material";

import { axiosCasesUser } from "../../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setAllReports } from "../../../store/Reports";
import CardReportList from "../Cards/CardReportList";

const ReportList = ({ filterAds }) => {
  const { id } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { reports } = useSelector((state) => state.reports);

  useEffect(() => {
    const updateListCases = async () => {
      const data = await axiosCasesUser(id, filterAds);
      console.log("data", data);
      dispatch(setAllReports(data));
    };
    updateListCases();
  }, [filterAds]);

  return (
    <div
      style={{
        maxHeight: "calc(100vh - 250px)",
        overflowY: "auto",
        margin: "0px",
      }}
    >
      <Grid container spacing={2} margin={"5px 5px 0px 5px"}>
        {reports &&
          reports.map((report, i) => <CardReportList key={i} info={report} />)}
      </Grid>
    </div>
  );
};

export default ReportList;
