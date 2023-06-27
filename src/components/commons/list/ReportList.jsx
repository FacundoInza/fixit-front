import React, { useEffect, useMemo, useState } from "react";

import { Box, Button, Divider, Grid, Pagination } from "@mui/material";

import { axiosCasesUser } from "../../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setAllReports } from "../../../store/Reports";
import CardReportList from "../Cards/CardReportList";
import { updateFilter } from "../../../store/ui/filter";

const ReportList = ({ filterAds }) => {
  const { id } = useSelector((state) => state.user);
  const [countPages, setCountPages] = useState(0);

  const { reports } = useSelector((state) => state.reports);
  const dispatch = useDispatch();

  useEffect(() => {
    updateListCases({ status: "", period: "", device: "" });
  }, []);

  const updateListCases = async (filter) => {
    const { data, countPages } = await axiosCasesUser(id, filter);
    setCountPages(countPages);
    dispatch(setAllReports(data));
  };

  const handleClickAplyFilter = () => {
    updateListCases(filterAds);
  };

  const handleClickRemoveFilter = () => {
    updateListCases({ status: "", period: "", device: "" });
    dispatch(updateFilter({ status: "", period: "", device: "" }));
  };

  const handleChangePage = (event, value) => {
    updateListCases({ ...filterAds, p: value - 1 });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Box display={"flex"} justifyContent={"center"} padding={"5px"}>
        <Box padding={1} color={"white"}>
          <Button
            color="success"
            variant="contained"
            onClick={handleClickAplyFilter}
          >
            Apply filter
          </Button>
        </Box>
        <Box padding={1} color={"white"}>
          <Button
            color="pending"
            variant="contained"
            onClick={handleClickRemoveFilter}
          >
            Remove Filter
          </Button>
        </Box>
      </Box>
      <Divider />
      <div
        style={{
          width: "100%",
          margin: "0px",
        }}
      >
        <Grid
          container
          spacing={2}
          height={"100%"}
          padding={{ xs: "1.8rem", sm: "1rem", md: "1.2rem" }}
        >
          {countPages == 0 && (
            <div style={{ fontFamily: "Heebo, sans-serif" }}>
              There are no matching reports
            </div>
          )}
          {reports &&
            reports.map((report, i) => (
              <CardReportList key={i} info={report} />
            ))}
        </Grid>
        {countPages !== 1 && (
          <Box display={"flex"} justifyContent={"center"} margin={5}>
            <Pagination count={countPages} onChange={handleChangePage} />
          </Box>
        )}
      </div>
    </>
  );
};

export default ReportList;
