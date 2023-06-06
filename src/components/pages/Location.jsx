import React from "react";
import { MainLayout } from "../layout/MainLayout";
import ButtonGlobant from "../commons/ButtonGlobant";
import { Box, Card, CardContent, Typography } from "@mui/material";
import mapImg from "../../assets/mapImg.png";

function Location() {
  return (
    <MainLayout title="Login" inLoginOrRegister={true}>
      <div style={{ maxHeight: "calc(100vh - 250px)", overflowY: "auto" }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          overflow="overflow"
        >
          <Typography variant="body1" sx={{ mb: 2 }}>
            Report Issue
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Location:
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We identified you are near office tandil
          </Typography>

          <Box mb={3}>
            <img src={mapImg} alt="Imagen" style={{ maxWidth: "100%" }} />
          </Box>

          <Card
            sx={{
              backgroundColor: "#F5F6F7",
              maxWidth: "50%",
              width: "100%",
              mb: 2,
            }}
          >
            <CardContent>
              <Typography variant="body1">Country-City</Typography>
              <Typography variant="body2">Address: 123 Street, CP</Typography>
              <Typography variant="body2">City-Province</Typography>
            </CardContent>
          </Card>

          <Box width="50%" mb={1}>
            <ButtonGlobant>Confirm Office</ButtonGlobant>
          </Box>
          <Box width="50%" mb={3}>
            <ButtonGlobant>Choose Another Office</ButtonGlobant>
          </Box>
        </Box>
      </div>
    </MainLayout>
  );
}

export default Location;
