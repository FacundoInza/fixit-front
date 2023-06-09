import React from "react";
import { MainLayout } from "../../layout/MainLayout";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import newReportImg from "../../../assets/newReportImg.png";
import { Link } from "react-router-dom";

function NewReport() {
  const actualUser = useSelector((state) => state.user);

  return (
    <MainLayout title="newReport" inLoginOrRegister={true}>
      <div style={{ maxHeight: "calc(100vh - 250px)", overflowY: "auto" }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          overflow="overflow"
        >
          <Typography variant="body1" sx={{ mb: 2 }}>
            Welcome {actualUser.name}!
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Do you have a problem with a device?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Report it so Service Desk can FIX IT
          </Typography>

          <Box mb={3}>
            <img src={newReportImg} alt="Imagen" style={{ maxWidth: "100%" }} />
          </Box>
          <Box width="50%" mb={1}>
            <Link to={"/work-options"}>
              <ButtonGlobant>Report an issue</ButtonGlobant>
            </Link>
          </Box>
          <Box width="50%" mb={1}>
            <Link to={"/profile"}>
              <ButtonGlobant>My Profile</ButtonGlobant>
            </Link>
          </Box>
          <Box width="50%" mb={3}>
            {actualUser.is_admin && (
              <Link to>
                <ButtonGlobant>Admin View</ButtonGlobant>
              </Link>
            )}
          </Box>
        </Box>
      </div>
    </MainLayout>
  );
}

export default NewReport;
