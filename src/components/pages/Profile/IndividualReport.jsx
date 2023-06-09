import React, { useEffect, useState } from "react";

import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";

import { MainLayout } from "../../layout/MainLayout";

import IndividualCardReport from "../../commons/Cards/IndividualCardReport";
import { useParams } from "react-router";
import { setIndividualReport } from "../../../store/Reports";
import { useDispatch, useSelector } from "react-redux";
import { axiosIndividualCase } from "../../../services/api";

const steps = ["Open", "In Progress", "Partially Solved", "Solved"];

const IndividualReport = () => {
  const { individualReport } = useSelector((state) => state.reports);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const updateCase = async () => {
      const data = await axiosIndividualCase(id);
      dispatch(setIndividualReport(data));
    };
    updateCase();
  }, []);

  return (
    <MainLayout title="Report" inLoginOrRegister="true">
      <Box
        flex
        sx={{
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          alignItems: "center",
          background: (theme) => theme.palette.primary.dark,
          height: "calc(100vh - 700 px)",
          width: { xs: "100vw" },
          borderRadius: "0px 0px 78px 78px",
          paddingBottom: "50px",
        }}
      >
        <Typography variant="h5" sx={{ color: "white", padding: "30px" }}>
          REPORT #{individualReport._id.slice(22)}
        </Typography>
        <Box
          sx={{
            background: (theme) => theme.palette.primary.light,
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            height: "",
            width: { xs: "70%", sm: "50%", md: "30%" },
            borderRadius: "35px",
          }}
        >
          <IndividualCardReport individualReport={individualReport} />
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{
          width: "100%",
          height: "100px",
        }}
      >
        <Stepper
          activeStep={3}
          alternativeLabel
          sx={{ width: "400px", padding: "20px" }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </MainLayout>
  );
};

export default IndividualReport;
