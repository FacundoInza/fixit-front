import React from "react";
import { MainLayout } from "../../layout/MainLayout";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import newReportImg from "../../../assets/newReportImg.png";

function NewReport() {
  const user = useSelector((state) => state.user);

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
            ¡Hola, {user.name}! Bienvenido/a.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Have a problem with your kit?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Report your problem with help desk.
          </Typography>

          <Box mb={3}>
            <img src={newReportImg} alt="Imagen" style={{ maxWidth: "100%" }} />
          </Box>
          <Box width="50%" mb={1}>
            <ButtonGlobant>Report an issue</ButtonGlobant>
          </Box>
          <Box width="50%" mb={1}>
            <ButtonGlobant>My Profile</ButtonGlobant>
          </Box>
          <Box width="50%" mb={3}>
            <ButtonGlobant>Admin View</ButtonGlobant>
          </Box>
        </Box>
      </div>
    </MainLayout>
  );
}

export default NewReport;
