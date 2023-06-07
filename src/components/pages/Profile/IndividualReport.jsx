import React from "react";

import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";

import { MainLayout } from "../../layout/MainLayout";

import IndividualCardReport from "../../commons/Cards/IndividualCardReport";

const steps = ["Open", "Assigned", "Sent", "Solved", "Closed"];

const IndividualReport = () => {
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
          width: { xs: "100vw", sm: "80%", md: "60%" },
          borderRadius: "0px 0px 78px 78px",
          paddingBottom: "50px",
        }}
      >
        <Typography variant="h5" sx={{ color: "white", padding: "30px" }}>
          REPORT #43
        </Typography>
        <Box
          sx={{
            background: (theme) => theme.palette.primary.light,
            height: "calc(100vh - 500px)",
            width: { xs: "80%", sm: "70%", md: "60%" },
            borderRadius: "35px",
          }}
        >
          <IndividualCardReport />
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
          activeStep={1}
          alternativeLabel
          sx={{ width: "100%", padding: "20px" }}
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
