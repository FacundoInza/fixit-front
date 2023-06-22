import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Box, Typography } from "@mui/material";

function Error404View() {
  return (
    <MainLayout title="error404" inLoginOrRegister={true}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "2rem",
        }}
      >
        <Typography
          margin={2}
          color="rgba(18, 18, 18, 0.3)"
          sx={{
            fontSize: { xs: "6rem", sm: "10rem" },
            fontWeight: 700,
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          404!
        </Typography>

        <Typography
          margin={2}
          color="#a8a8a8"
          sx={{
            fontSize: "2rem",
            fontWeight: 300,
            lineHeight: 1.71,
            textAlign: "center",
            width: "100%",
          }}
        >
          Sorry, the page you`re looking for was not found
        </Typography>

        <img
          src="https://statics.globant.com/production/public/2021-01/404%20mobile.png"
          alt="Error 404"
          style={{
            width: "100%",
            height: "auto",
            marginTop: "2rem",
          }}
        />
      </Box>
    </MainLayout>
  );
}

export default Error404View;
