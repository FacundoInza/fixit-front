import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layout/MainLayout";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { Box, Card, CardContent, Typography } from "@mui/material";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import { useDispatch, useSelector } from "react-redux";
import { axiosUpdateUser } from "../../../services/api";
import { getLocation } from "../../../utils";
import { updateUser } from "../../../store/users";

function Location() {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.user);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const locationUpdate = async () => {
      const { error, data } = await getLocation();

      const lat = String(data.coords.latitude);
      const lng = String(data.coords.longitude);

      const { message } = await axiosUpdateUser({ location: [lat, lng] }, id);
      dispatch(updateUser({ location: [lat, lng] }));
    };
    locationUpdate();
  }, []);

  const containerStyle = {
    width: "400px",
    height: "300px",
  };

  const center = {
    lat: -34.609875,
    lng: -58.442497,
  };

  return (
    <MainLayout title="Login" inLoginOrRegister={true}>
      <div style={{ maxHeight: "calc(100vh - 250px)", overflowY: "auto" }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="body1" sx={{ mb: 2 }}>
            Report Issue
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Location:
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We identified you are near office tandil
          </Typography>

          <Box mb={3}>
            <LoadScript googleMapsApiKey="AIzaSyBk7HcRvPnJ1jDgWzRvlcdpCui4MlHpRl4">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </Box>

          <Card
            sx={{
              backgroundColor: "#F5F6F7",
              maxWidth: "50%",
              width: "100%",
              mb: 2,
            }}
          >
            <CardContent>
              <Typography variant="body1">Country-City</Typography>
              <Typography variant="body2">Address: 123 Street, CP</Typography>
              <Typography variant="body2">City-Province</Typography>
            </CardContent>
          </Card>

          <Box width="50%" mb={1}>
            <ButtonGlobant>Confirm Office</ButtonGlobant>
          </Box>
          <Box width="50%" mb={3}>
            <ButtonGlobant>Choose Another Office</ButtonGlobant>
          </Box>
        </Box>
      </div>
    </MainLayout>
  );
}

export default Location;
