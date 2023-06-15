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
import { axiosGetNearbyOffice, axiosUpdateUser } from "../../../services/api";
import { getLocation } from "../../../utils";
//ACTIONS
import { updateUser } from "../../../store/users";

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
    const { error, data } = await getLocation();

    const lat = data.coords.latitude;
    const lng = data.coords.longitude;

    const { message } = await axiosUpdateUser({ location: [lat, lng] }, id);

    dispatch(updateUser({ location: [lat, lng] }));
  };

  const setOfficesLocation = async () => {
    const offices = await axiosGetNearbyOffice({
      lat: location[0],
      lng: location[1],
    });
    setNearbyOffices(offices);
    setSelectedOffice(offices[0]);
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
              center={[
                selectedOffice.geometry.location.lat,
                selectedOffice.geometry.location.lng,
              ]}
              zoom={15}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {nearbyOffices.map((office, i) => {
                const lat = office.geometry.location.lat;
                const lng = office.geometry.location.lng;
                return (
                  <Marker key={i} position={[lat, lng]}>
                    <Popup>
                      <h1>{office.name}</h1>
                      <h2>Address: {office.formatted_address.split(",")[0]}</h2>
                      <Rating name="read-only" value={office.rating} readOnly />
                      {office.opening_hours.open_now ? (
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
              nearbyOffices.map((office, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <CardOffice
                    office={office}
                    setSelectedOffice={setSelectedOffice}
                    selectedOffice={selectedOffice}
                  />
                </Grid>
              ))}
          </Grid>

          <Box width="50%" m={5}>
            <ButtonGlobant>Confirm Office</ButtonGlobant>
          </Box>
          <Box width="50%" m={2} display={"none"}>
            <ButtonGlobant>Choose Another Office</ButtonGlobant>
          </Box>
        </Box>
      </div>
    </MainLayout>
  );
}

export default Location;
