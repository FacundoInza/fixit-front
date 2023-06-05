import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemText,
  Avatar,
  Divider,
  ListItemButton,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/Short-White-Green.png";
import fullLogo from "../../assets/Globant-Original.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const actualUser = useSelector((state) => state.user);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <Box sx={{ height: "100px" }}>
        <AppBar
          position="static"
          sx={{
            background:
              "linear-gradient(85.8deg, #A6CE39 -12.56%, #39B54A 75.83%)",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              padding: "15px",
            }}
          >
            {!isDrawerOpen && ( // Mostrar el icono del menú solo si el Drawer está cerrado
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={toggleDrawer}
                >
                  <MenuIcon sx={{ color: "white" }} />
                </IconButton>
                <Link to={"/home"}>
                  <Button color="inherit">
                    <img src={logo} alt="logo" />
                  </Button>
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#434343",
            width: 300,
          },
          "& .MuiListItemButton-root": {
            color: "white",
          },
          "& .MuiListItemText-primary": {
            color: "white",
          },
          "& .MuiDivider-root": {
            backgroundColor: "white",
          },
          zIndex: 9999,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={fullLogo}
              alt="Logo"
              style={{ height: "30px", marginBottom: "10px" }}
            />
            {actualUser.email && (
              <>
                <Avatar
                  alt="Profile Picture"
                  src="/ruta/a/la/foto-de-perfil.jpg"
                  sx={{ width: 64, height: 64 }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ color: "white" }}
                >
                  Nombre de Usuario
                </Typography>
              </>
            )}
          </Box>
        </Box>

        <List>
          <ListItemButton onClick={toggleDrawer}>
            <ListItemText primary="My Profile" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={toggleDrawer}>
            <ListItemText primary="My own report" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={toggleDrawer}>
            <ListItemText primary="Contact with support" />
          </ListItemButton>
          <Divider />
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
