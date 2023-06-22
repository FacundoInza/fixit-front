//REACT
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//MATERIAL
import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

//LOCAL COMPONENTS
import { MainLayout } from "../../layout/MainLayout";
import ButtonGlobant from "../../commons/ButtonGlobant";
import CardOffice from "../../commons/Cards/CardOffice";

//AXIOS
import {
  axiosGetNearbyOffice,
  axiosSendNewOffices,
  axiosUpdateUser,
} from "../../../services/api";
import { getLocation } from "../../../utils";
//ACTIONS
import { updateUser } from "../../../store/users";
import { Link, useNavigate } from "react-router-dom";
import { deleteStepIssue, updateIssue } from "../../../store/issue";
import { Scanner } from "@mui/icons-material";
import Map from "../../commons/Map";
import { PrincipalFlowLayout } from "../../layout/PrincipalFlowLayout";

function Location() {
  const { id, location } = useSelector((state) => state.user);
  const issue = useSelector((state) => state.issue);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nearbyOffices, setNearbyOffices] = useState("");
  const [selectedOffice, setSelectedOffice] = useState("");

  useEffect(() => {
    locationUpdate();
    dispatch(deleteStepIssue("closest_office"));
  }, []);

  useEffect(() => {
    setOfficesLocation();
  }, [location]);

  const setOfficesLocation = async () => {
    console.log("loc", location);
    const offices = await axiosGetNearbyOffice({
      lat: location[0],
      lng: location[1],
    });

    const officesWithId = await axiosSendNewOffices(offices);
    setNearbyOffices(officesWithId);
    setSelectedOffice(officesWithId[0]);
  };

  const locationUpdate = async () => {
    await setUserLocation();
    // await setOfficesLocation();
  };

  const setUserLocation = async () => {
    const { error, data } = await getLocation();
    const lat = data.coords.latitude;
    const lng = data.coords.longitude;

    await axiosUpdateUser({ location: [lat, lng] }, id);
    dispatch(updateUser({ location: [lat, lng] }));
  };

  const handleConfirmOffice = () => {
    dispatch(updateIssue({ ...issue, closest_office: selectedOffice._id }));
    if (issue.home_office == "home") {
      navigate("/address-confirmation");
    } else {
      navigate("/map-selection");
    }
  };

  return (
    <PrincipalFlowLayout title="Login" inLoginOrRegister={true}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          padding={2}
          alignItems={"center"}
        >
          <Typography variant="h5" sx={{ mb: 1 }} fontWeight="bold">
            Location:
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We identified you are near the following office
          </Typography>
        </Box>

        {selectedOffice && (
          <Map offices={nearbyOffices} selectedOffice={selectedOffice} />
        )}

        <Grid container spacing={3} width={"80%"} margin={2}>
          {nearbyOffices &&
            nearbyOffices.map((office, i) => {
              return (
                <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                  <CardOffice
                    office={office}
                    setSelectedOffice={setSelectedOffice}
                    selectedOffice={selectedOffice}
                  />
                </Grid>
              );
            })}
        </Grid>
        <Box
          width="50%"
          m={5}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <ButtonGlobant
            type="success"
            props={{ onClick: handleConfirmOffice }}
          >
            Confirm Office
          </ButtonGlobant>
          <Link to={"/select-office"}>
            <ButtonGlobant type="pending">Choose Another Office</ButtonGlobant>
          </Link>
        </Box>
      </Box>
    </PrincipalFlowLayout>
  );
}

export default Location;
