import React from "react";
import { MainLayout } from "../../layout/MainLayout";
import { Avatar, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ButtonGlobant from "../../commons/ButtonGlobant";

const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <MainLayout title="Profile" inLoginOrRegister={true}>
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
        <Typography
          margin={2}
          color={"white"}
          sx={{ fontSize: { xs: "2rem" } }}
        >
          {user.name}
        </Typography>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{
            width: { xs: 120, sm: 160, md: 190 },
            height: { xs: 120, sm: 160, md: 190 },
          }}
        />
        <Typography
          margin={2}
          color={"white"}
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" } }}
        >
          Glober
        </Typography>
        <Box>
          <ButtonGlobant props={{ width: "50px" }}>EDIT PROFILE</ButtonGlobant>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Profile;
