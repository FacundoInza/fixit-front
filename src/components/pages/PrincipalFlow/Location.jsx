import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layout/MainLayout";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { Box, Card, CardContent, Typography } from "@mui/material";

import mapImg from "../../../assets/mapImg.png";

import { useDispatch, useSelector } from "react-redux";
import { axiosGetNearbyOffice, axiosUpdateUser } from "../../../services/api";
import { getLocation } from "../../../utils";
import { updateUser } from "../../../store/users";
import MapContainer from "../../commons/Map";
import CardOffice from "../../commons/Cards/CardOffice";

function Location() {
  const dispatch = useDispatch();
  const [nearbyOffices, setNearbyOffices] = useState([]);
  const { id, location } = useSelector((state) => state.user);
  const [markers, setMarkers] = useState("");

  useEffect(() => {
    const locationUpdate = async () => {
      const { error, data } = await getLocation();

      const lat = String(data.coords.latitude);
      const lng = String(data.coords.longitude);

      const { message } = await axiosUpdateUser({ location: [lat, lng] }, id);
      dispatch(updateUser({ location: [lat, lng] }));
      const offices = await axiosGetNearbyOffice({ lat, lng });

      const stringMarkers = offices
        .map(
          (office) =>
            `${office.geometry.location.lat},${office.geometry.location.lng}`
        )
        .join("|");
      console.log("hola", stringMarkers);
      setMarkers(stringMarkers);
      console.log(offices);
      setNearbyOffices(offices);
    };
    locationUpdate();
  }, []);

  return (
    <MainLayout title="Login" inLoginOrRegister={true}>
      <div style={{ maxHeight: "calc(100vh - 250px)", overflowY: "auto" }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          overflow="overflow"
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

          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${location[0]},${location[1]}&zoom=13&size=400x400&markers=color:red|${markers}&key=AIzaSyBk7HcRvPnJ1jDgWzRvlcdpCui4MlHpRl4`}
          />

          {nearbyOffices &&
            nearbyOffices.map((office, i) => (
              <CardOffice key={i} office={office} />
            ))}

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
