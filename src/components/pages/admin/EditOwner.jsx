import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layout/MainLayout";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../../assets/Short-White-Green.png";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { axiosOwners } from "../../../services/api";
import { useSelector } from "react-redux";

function EditOwner() {
  const report = useSelector((state) => state.reports);
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ownersList = await axiosOwners();
        setOwners(ownersList);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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

      <Typography
        color="black"
        sx={{ fontSize: { xs: "1rem" }, textAlign: "center", margin: "15px" }}
      >
        Current Owner:{report.owner}
      </Typography>
      <Typography
        color="black"
        sx={{ fontSize: { xs: "0.7rem" }, textAlign: "center", margin: "15px" }}
      >
        Select a new owner
      </Typography>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        {owners.map((owner, i) => (
          <ButtonGlobant props={{ type: "button" }} key={i}>
            {owner.name}
          </ButtonGlobant>
        ))}

        <Box paddingTop={"40px"}>
          <ButtonGlobant props={{ type: "button" }}>Confirm</ButtonGlobant>
        </Box>
      </Box>
    </MainLayout>
  );
}

export default EditOwner;
