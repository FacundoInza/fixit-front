//REACT
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//MATERIAL
import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.css";
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
import { Link } from "react-router-dom";

function Location() {
  const { id, location } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [nearbyOffices, setNearbyOffices] = useState("");
  const [selectedOffice, setSelectedOffice] = useState("");

  useEffect(() => {
    locationUpdate();
  }, []);

  const locationUpdate = async () => {
    await setUserLocation();
    await setOfficesLocation();
  };

  const setUserLocation = async () => {
    // const { error, data } = await getLocation();

    // const lat = data.coords.latitude;
    // const lng = data.coords.longitude;

    const { message } = await axiosUpdateUser(
      { location: [-34.6046846, -58.3687408] },
      id
    );

    dispatch(updateUser({ location: [-34.6046846, -58.3687408] }));
  };

  const setOfficesLocation = async () => {
    const offices = await axiosGetNearbyOffice({
      lat: -34.6046846,
      lng: -58.3687408,
    });
    console.log(offices);
    const newFormat = offices.map((office) => {
      return {
        name: office.name,
        address: office.formatted_address,
        open_now: office.opening_hours.open_now,
        location: [office.geometry.location.lat, office.geometry.location.lng],
        rating: office.rating,
      };
    });

    setNearbyOffices(newFormat);
    setSelectedOffice(newFormat[0]);
    await axiosSendNewOffices(newFormat);
  };

  return (
    <MainLayout title="Login" inLoginOrRegister={true}>
      <div
        style={{
          maxHeight: "calc(100vh - 250px)",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
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
            <Typography variant="body1" sx={{ mb: 1 }} fontWeight="bold">
              Location:
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              We identified you are near the following office
            </Typography>
          </Box>

          {nearbyOffices && (
            <MapContainer
              style={{ width: "100%", height: "500px" }}
              center={[selectedOffice.location[0], selectedOffice.location[1]]}
              zoom={16}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {nearbyOffices.map((office, i) => {
                const lat = office.location[0];
                const lng = office.location[1];
                return (
                  <Marker key={i} position={[lat, lng]}>
                    <Popup>
                      <h1>{office.name}</h1>
                      <h2>Address: {office.address.split(",")[0]}</h2>
                      <Rating name="read-only" value={office.rating} readOnly />
                      {office.open_now ? (
                        <p style={{ color: "green" }}>Is Open</p>
                      ) : (
                        <p style={{ color: "red" }}>Is Close</p>
                      )}
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          )}

          <Grid container spacing={2} width={"70%"} margin={5}>
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
            <ButtonGlobant>Confirm Office</ButtonGlobant>
            <Link to={"/select-office"}>
              <ButtonGlobant>Choose Another Office</ButtonGlobant>
            </Link>
          </Box>
        </Box>
      </div>
    </MainLayout>
  );
}

export default Location;
