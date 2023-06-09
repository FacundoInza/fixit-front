import React from "react";
import { Link } from "react-router-dom";

import { MainLayout } from "../../layout/MainLayout";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";

import inGlobantOffice from "../../../assets/inGlobantOffice.png";
import workFromHome from "../../../assets/workFromHome.png";
import logo from "../../../assets/Short-White-Green.png";

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

  return (
    <MainLayout title="WorkOptions" inLoginOrRegister={true}>
      <div style={{ maxHeight: "calc(100vh - 250px)", overflowY: "auto" }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          height="100%"
        >
          <Typography variant="body1" sx={{ mb: 2 }} fontWeight="bold">
            Where are you working from?
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Select one of the following options.
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            {isMobile ? (
              <MobileButtonContainer>
                <Link to={"/location"}>
                  {" "}
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

                <Link to={"location"}>
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
                <IconButton
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

                <IconButton
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
              </DesktopButtonContainer>
            )}
          </Box>
        </Box>
      </div>
    </MainLayout>
  );
}

export default WorkOptions;
