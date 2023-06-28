import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { MainLayout } from "../../layout/MainLayout";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";

import inGlobantOffice from "../../../assets/inGlobantOffice.png";
import workFromHome from "../../../assets/workFromHome.png";
import logo from "../../../assets/Short-White-Green.png";
import { useDispatch } from "react-redux";
import { deleteStepIssue, updateIssue } from "../../../store/issue";
import { PrincipalFlowLayout } from "../../layout/PrincipalFlowLayout";

const MobileButtonContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

const DesktopButtonContainer = styled(Box)({
  display: "flex",
  gap: "2rem",
});

function WorkOptions() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteStepIssue("home_office"));
  }, []);

  const handleClickOffice = () => {
    dispatch(updateIssue({ home_office: "office" }));
  };

  const handleClickHome = () => {
    dispatch(updateIssue({ home_office: "home" }));
  };

  return (
    <PrincipalFlowLayout title="WorkOptions" inLoginOrRegister={true}>
      <div style={{ maxHeight: "calc(100vh - 250px)", overflowY: "auto" }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          height="100%"
        >
          <Typography variant="h5" sx={{ mb: 2 }} fontWeight="bold">
            Where are you working from?
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Select one of the following options.
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            {isMobile ? (
              <MobileButtonContainer>
                <Link to={"/location"} style={{ textDecoration: "none" }}>
                  <IconButton
                    variant="contained"
                    size="large"
                    sx={{
                      width: "200px",
                      height: "200px",
                      backgroundColor: "#999999",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      borderRadius: "20%",
                    }}
                    onClick={handleClickOffice}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                      height="100%"
                    >
                      <Typography variant="body2" color="white">
                        Globant office
                      </Typography>
                      <img
                        src={logo}
                        style={{ maxWidth: "20%", maxHeight: "20%" }}
                        alt="Image 1"
                      />
                      <img src={inGlobantOffice} alt="Image 1" />
                    </Box>
                  </IconButton>
                </Link>
                <Link to={"/location"} style={{ textDecoration: "none" }}>
                  <IconButton
                    onClick={handleClickHome}
                    variant="contained"
                    size="large"
                    sx={{
                      width: "200px",
                      height: "200px",
                      backgroundColor: "#999999",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "20%",
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                      height="100%"
                    >
                      <Typography variant="body2" color="white">
                        Working from home
                      </Typography>
                      <img src={workFromHome} alt="Image 2" />
                    </Box>
                  </IconButton>
                </Link>
              </MobileButtonContainer>
            ) : (
              <DesktopButtonContainer>
                <Link to={"/location"} style={{ textDecoration: "none" }}>
                  <IconButton
                    onClick={handleClickOffice}
                    variant="contained"
                    size="large"
                    sx={{
                      width: "200px",
                      height: "200px",
                      backgroundColor: "#999999",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      borderRadius: "20%",
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                      height="100%"
                    >
                      <Typography variant="body2" color="white">
                        Globant office
                      </Typography>
                      <img
                        src={logo}
                        style={{ maxWidth: "20%", maxHeight: "20%" }}
                        alt="Image 1"
                      />
                      <img src={inGlobantOffice} alt="Image 1" />
                    </Box>
                  </IconButton>
                </Link>
                <Link to={"/location"} style={{ textDecoration: "none" }}>
                  <IconButton
                    onClick={handleClickHome}
                    href="/location"
                    variant="contained"
                    size="large"
                    sx={{
                      width: "200px",
                      height: "200px",
                      backgroundColor: "#999999",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "20%",
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                      height="100%"
                    >
                      <Typography variant="body2" color="white">
                        Working from home
                      </Typography>
                      <img src={workFromHome} alt="Image 2" />
                    </Box>
                  </IconButton>
                </Link>
              </DesktopButtonContainer>
            )}
          </Box>
        </Box>
      </div>
    </PrincipalFlowLayout>
  );
}

export default WorkOptions;
