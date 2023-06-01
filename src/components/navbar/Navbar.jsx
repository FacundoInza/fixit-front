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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/Short-White-Green.png";
import fullLogo from "../../assets/Globant-Original.png";

function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(85.8deg, #A6CE39 -12.56%, #39B54A 75.83%)",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100vw",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </Box>
        </Toolbar>
      </AppBar>
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={fullLogo}
              alt="Logo"
              style={{ height: "30px", marginRight: "5vw" }}
            />
            <Avatar
              alt="Profile Picture"
              src="/ruta/a/la/foto-de-perfil.jpg"
              sx={{ width: 64, height: 64, marginBottom: 2 }}
            />
          </Box>
          <Typography variant="h6" component="div" sx={{ color: "white" }}>
            Nombre de Usuario
          </Typography>
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
    </Box>
  );
}

export default Navbar;
