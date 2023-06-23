import React, { useEffect, useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  Button,
} from "@mui/material";

import { MainLayout } from "../../layout/MainLayout";

import IndividualCardReport from "../../commons/Cards/IndividualCardReport";
import { useNavigate, useParams } from "react-router";
import { setDeletedReport, setIndividualReport } from "../../../store/Reports";
import { useDispatch, useSelector } from "react-redux";
import { axiosDeleteReport, axiosIndividualCase } from "../../../services/api";
import { AcUnitTwoTone } from "@mui/icons-material";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { formatDate } from "../../../utils";
import { Link } from "react-router-dom";

const IndividualReport = () => {
  const { individualReport } = useSelector((state) => state.reports);
  const { name } = useSelector((state) => state.user);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const steps = ["Open", "In progress", "Partially solved", "Solved"];
  const activeStep = steps.indexOf(individualReport.status);

  useEffect(() => {
    const updateCase = async () => {
      const data = await axiosIndividualCase(id);
      dispatch(setIndividualReport(data));
    };
    updateCase();
  }, []);

  const handleDelete = async () => {
    const deleteReport = await axiosDeleteReport(id);
    dispatch(setDeletedReport({ _id: id }));
    navigate("/reports");
  };
  const handleBack = () => {
    navigate("/filter-cases");
  };
  const handleStatus = () => {
    navigate("/edit-status");
  };

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
        <Typography
          variant="h6"
          sx={{
            color: "white",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {formatDate(individualReport.starting_date)} -{" "}
          {individualReport.damaged_equipment.name}
        </Typography>
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
          activeStep={activeStep}
          alternativeLabel
          sx={{ width: "400px", padding: "20px" }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box paddingTop={1} display="flex" justifyContent="center">
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            gap: "20px",
            width: "75%",
          }}
        >
          <Button
            onClick={handleBack}
            color="pending"
            variant="contained"
            sx={{ color: "white", flex: 1 }}
          >
            Go back
          </Button>

          <Button
            onClick={handleStatus}
            color="success"
            variant="contained"
            sx={{ color: "white", flex: 1 }}
          >
            Change Status
          </Button>
        </div>
      </Box>

      <Typography
        variant="h6"
        sx={{
          color: "black",
          padding: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Case Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              background: (theme) => theme.palette.primary.dark,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                ISSUE DESCRIPTION
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {individualReport.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              background: (theme) => theme.palette.primary.dark,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                REPORT ADDRESS
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {individualReport.damaged_equipment.location}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              background: (theme) => theme.palette.primary.dark,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                REPORTED BY:
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box
        paddingTop={"40px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <ButtonGlobant props={{ type: "button", onClick: handleDelete }}>
          Delete Report
        </ButtonGlobant>
      </Box>
    </MainLayout>
  );
};

export default IndividualReport;
