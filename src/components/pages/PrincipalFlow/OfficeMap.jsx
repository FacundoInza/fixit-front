import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MainLayout } from "../../layout/MainLayout";
import { Box, Typography, useMediaQuery, Snackbar, Alert } from "@mui/material";
import style from "./OfficeMap.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateIssue } from "../../../store/issue";

import ButtonGlobant from "../../commons/ButtonGlobant";

function OfficeMap() {
  const selectedOfficeMap = useSelector(
    (state) => state.issue.closest_office.map
  );
  console.log("office map", selectedOfficeMap);
  const { damaged_equipment } = useSelector((state) => state.issue);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [desk, setDesk] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  var rects = document.querySelectorAll("rect");
  var ellipses = document.querySelectorAll("path");

  const setListeners = () => {
    rects.forEach(function (rect) {
      if (rect.id != "Rectangle Main") {
        rect.addEventListener("click", function (evt) {
          setDesk(evt.target.id.split(" ")[1]);
          clearAll();
          evt.currentTarget.classList.add(style.userSelected);
        });
      }
    });

    ellipses.forEach(function (ellipse) {
      ellipse.addEventListener("click", function (evt) {
        setDesk(evt.target.id.split(" ")[1]);

        clearAll();
        evt.currentTarget.classList.add(style.userSelected);
      });
    });
  };

  const clearFigure = (target) => {
    target.classList.remove(style.userSelected);
  };

  const clearAll = () => {
    rects.forEach((rect) => clearFigure(rect));
    ellipses.forEach((ellipse) => clearFigure(ellipse));
  };

  setListeners();

  const handleClick = () => {
    if (!desk) setOpenSnackbar(true);
    else {
      dispatch(
        updateIssue({
          damaged_equipment: { ...damaged_equipment, location: desk },
        })
      );
      navigate("/scanner");
    }
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <MainLayout title="WorkOptions" inLoginOrRegister={true}>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100%"
      >
        {desk ? (
          <Typography variant="h5" sx={{ mb: 2 }} fontWeight="bold">
            You selected the desk number: {desk}{" "}
          </Typography>
        ) : (
          <Typography variant="body1" sx={{ mb: 2 }} fontWeight="bold">
            Please select your desk from the map below:
          </Typography>
        )}
        <Box display="flex" flexDirection="column" gap={2}>
          <div dangerouslySetInnerHTML={{ __html: selectedOfficeMap }} />
        </Box>
      

      <Box display="flex" justifyContent="center">
        <ButtonGlobant props={{ onClick: handleClick }}>
          Confirm Desk
        </ButtonGlobant>
      </Box>
    </Box>

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
            You must select a desk in the office in order to proceed.
          </Alert>
        </Snackbar>
      )}
    </MainLayout>
  );
}

export default OfficeMap;
