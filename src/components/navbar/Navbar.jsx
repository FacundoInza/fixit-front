import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  ListItemButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <nav>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
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
          <Avatar
            alt="Profile Picture"
            src="/ruta/a/la/foto-de-perfil.jpg"
            sx={{ width: 64, height: 64, marginBottom: 2 }}
          />
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
    </nav>
  );
}

export default Navbar;
