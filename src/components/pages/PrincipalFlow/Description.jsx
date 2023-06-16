import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

import { TextField, Typography, Box, Alert, Snackbar } from "@mui/material";

import { MainLayout } from "../../layout/MainLayout";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { useDispatch, useSelector } from "react-redux";

import { axiosIssue } from "../../../services/api";

import { updateIssue } from "../../../store/issue";

const Description = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [descriptionForCase, setDescriptionForCase] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const issue = useSelector((state) => state.issue);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (descriptionForCase.length < 50) setOpenSnackbar(true);
    else {
      dispatch(
        updateIssue({
          description: descriptionForCase,
        })
      );

      try {
        await axiosIssue({
          issue,
        });

        Swal.fire({
          icon: "success",
          title: "Report created",
          text: "You have successfully created the report",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/reports");
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <MainLayout title="Description" inLoginOrRegister={true}>
      <form onSubmit={handleSubmit}>
        <Typography
          fontWeight={"bold"}
          sx={{ textAlign: "center", margin: "15px" }}
        >
          Please describe your issue in detail below:{" "}
        </Typography>
        <div style={{ padding: "10px" }}>
          <TextField
            name="description"
            label="Describe below"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={8}
            value={descriptionForCase}
            onChange={(e) => {
              setDescriptionForCase(e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <ButtonGlobant props={{ type: "submit" }}>
              Create Report
            </ButtonGlobant>
          </Box>
        </div>
      </form>
      {openSnackbar && (
        <Snackbar
          sx={{ zIndex: 999999 }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            The description must have at least 50 characters.
          </Alert>
        </Snackbar>
      )}
    </MainLayout>
  );
};

export default Description;
