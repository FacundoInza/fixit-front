import React from "react";
import { MainLayout } from "../../layout/MainLayout";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../../assets/Short-White-Green.png";
import { useSelector } from "react-redux";
import ButtonGlobant from "../../commons/ButtonGlobant";

function Principal() {
  const actualUser = useSelector((state) => state.user);

  function removeSpecialCharactersWithSpaces(str) {
    return str.replace(/[^a-zA-Z.\s]/g, "");
  }

  return (
    <MainLayout title="Principal">
      <AppBar
        sx={{
          height: "80px",
          background:
            "linear-gradient(85.8deg, #A6CE39 -12.56%, #39B54A 75.83%)",
        }}
      >
        <Toolbar
          sx={{
            display: "felx",
            justifyContent: "center",
            alignIems: "center",
            padding: "15px",
          }}
        >
          <Link to={"/"}>
            <Button color="inherit">
              <img src={logo} alt="logo" />
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          background: (theme) => theme.palette.primary.dark,
          color: "white",
          py: 12,
          px: 6,
        }}
      >
        <Typography color="white" sx={{ fontSize: { xs: "2rem" } }}>
          {removeSpecialCharactersWithSpaces(
            actualUser.name
              .toLowerCase()
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          )}
        </Typography>

        <Avatar
          alt="Profile Picture"
          src={actualUser.image}
          sx={{
            width: { xs: 120, sm: 160, md: 190 },
            height: { xs: 120, sm: 160, md: 190 },
            borderRadius: "50%",
            overflow: "hidden",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${actualUser.image})`,
          }}
        />

        <Typography margin={2} color="white" sx={{ fontSize: { xs: "1rem" } }}>
          Admin Glober
        </Typography>
      </Box>
      <Box
        mt={5}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Link to="/filter-cases">
          <ButtonGlobant type={"success"} props={{ type: "button" }}>
            Manage Cases
          </ButtonGlobant>
        </Link>
        <ButtonGlobant props={{ type: "button" }}>Manege Offices</ButtonGlobant>
        <ButtonGlobant props={{ type: "button" }}>Manage Devices</ButtonGlobant>
        <ButtonGlobant props={{ type: "button" }}>Manage Admins</ButtonGlobant>
      </Box>
    </MainLayout>
  );
}

export default Principal;
