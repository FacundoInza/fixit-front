import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layout/MainLayout";
import { Box, Grid, Typography } from "@mui/material";
import { axiosAllOffices } from "../../../services/api";
import CardOffice from "../../commons/Cards/CardOffice";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { Link, useNavigate } from "react-router-dom";
import { updateIssue } from "../../../store/issue";
import { useDispatch, useSelector } from "react-redux";
import Map from "../../commons/Map";
import { PrincipalFlowLayout } from "../../layout/PrincipalFlowLayout";

const SelectOffice = () => {
  const [selectedOffice, setSelectedOffice] = useState("");
  const [allOffices, setallOffices] = useState([]);

  const navigate = useNavigate();

  const issue = useSelector((state) => state.issue);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllOffices();
  }, []);

  const handleConfirmOffice = () => {
    dispatch(updateIssue({ closest_office: selectedOffice._id }));
    if (issue.home_office == "home") {
      navigate("/address-confirmation");
    } else {
      navigate("/map-selection");
    }
  };

  const getAllOffices = async () => {
    try {
      const { offices, totalPages } = await axiosAllOffices();
      setallOffices(offices);
      setSelectedOffice(offices[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <PrincipalFlowLayout title="Offices" inLoginOrRegister={true}>
      <Box
        height={"100px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h5">Select Your Office</Typography>
      </Box>

      <Box display={{ xs: "inline", md: "flex" }}>
        <Box width={{ xs: "80%", md: "40%" }} margin={5}>
          <Map offices={allOffices} selectedOffice={selectedOffice} />
        </Box>

        <Grid container spacing={2} width={"50%"} margin={4}>
          {allOffices &&
            allOffices.map((office, i) => (
              <Grid item xs={12} lg={6}>
                <CardOffice
                  office={office}
                  setSelectedOffice={setSelectedOffice}
                  selectedOffice={selectedOffice}
                />
              </Grid>
            ))}
        </Grid>
      </Box>

      <Box
        display="flex"
        flexDirection={"column"}
        width={"100%"}
        alignItems={"center"}
        mb={3}
      >
        <ButtonGlobant type="success" props={{ onClick: handleConfirmOffice }}>
          Confirm Office
        </ButtonGlobant>
        <Link to={"/location"}>
          <ButtonGlobant type="pending">Back to Nearby Office</ButtonGlobant>
        </Link>
      </Box>
    </PrincipalFlowLayout>
  );
};

export default SelectOffice;
