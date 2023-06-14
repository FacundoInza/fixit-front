import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layout/MainLayout";
import { Box, Grid, Typography } from "@mui/material";
import { axiosAllOffices } from "../../../services/api";
import CardOffice from "../../commons/Cards/CardOffice";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { Link } from "react-router-dom";

const SelectOffice = () => {
  const [selectedOffice, setSelectedOffice] = useState("");
  const [allOffices, setallOffices] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    getAllOffices();
  }, []);

  const getAllOffices = async () => {
    try {
      const { offices, totalPages } = await axiosAllOffices();
      setallOffices(offices);
      setPages(totalPages);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MainLayout title="Offices" inLoginOrRegister={true}>
      <Box
        height={"100px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h5">Select Your Office</Typography>
      </Box>

      <Grid container spacing={2} width={"70%"} margin={5}>
        {allOffices &&
          allOffices.map((office, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardOffice
                office={office}
                setSelectedOffice={setSelectedOffice}
                selectedOffice={selectedOffice}
              />
            </Grid>
          ))}
      </Grid>

      <Box
        display="flex"
        flexDirection={"column"}
        width={"100%"}
        alignItems={"center"}
      >
        <Link to={"/location"}>
          <ButtonGlobant>Back to Nearby Office</ButtonGlobant>
        </Link>

        <ButtonGlobant>Confirm Office</ButtonGlobant>
      </Box>
    </MainLayout>
  );
};

export default SelectOffice;
