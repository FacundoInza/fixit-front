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
import { Link, useNavigate } from "react-router-dom";
import { axiosLogout } from "../../services/api";

function Navbar() {
  const actualUser = useSelector((state) => state.user);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    axiosLogout();
    setDrawerOpen(!isDrawerOpen);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Box sx={{ height: "100px" }}>
        <AppBar
          position="static"
          sx={{
            height: "100%",
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
                <Link to={"/"}>
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
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <img src={fullLogo} alt="Logo" style={{ height: "30px" }} />
          </Link>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Divider />
            {actualUser.email && (
              <>
                <Link to={"/profile"} style={{ textDecoration: "none" }}>
                  <Box sx={{ padding: "20px", display: "flex" }}>
                    <Avatar
                      alt="Profile Picture"
                      src={actualUser.image}
                      sx={{ width: 35, height: 35, margin: "10px" }}
                    />
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ color: "white", margin: "auto" }}
                    >
                      {actualUser.name}
                    </Typography>
                  </Box>
                </Link>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            )}
          </Box>
        </Box>

        {actualUser.email ? (
          <List>
            <ListItemButton href="/profile" onClick={toggleDrawer}>
              <ListItemText primary="My Profile" />
            </ListItemButton>
            <Divider />
            <ListItemButton href="/reports" onClick={toggleDrawer}>
              <ListItemText primary="My Reports" />
            </ListItemButton>
            <Divider />
            <ListItemButton href="/work-options" onClick={toggleDrawer}>
              <ListItemText primary="Create Report" />
            </ListItemButton>
          </List>
        ) : (
          <List>
            <Divider />
            <ListItemButton href="/login" onClick={toggleDrawer}>
              <ListItemText primary="Login" />
            </ListItemButton>
            <Divider />
            <ListItemButton href="signUp" onClick={toggleDrawer}>
              <ListItemText primary="Sign Up" />
            </ListItemButton>
            <Divider />
          </List>
        )}
      </Drawer>
    </>
  );
}

export default Navbar;
