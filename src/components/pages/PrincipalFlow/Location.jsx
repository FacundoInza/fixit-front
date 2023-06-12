//REACT
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//MATERIAL
import { Box, Typography } from "@mui/material";
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

  const [nearbyOffices, setNearbyOffices] = useState([]);
  const [markers, setMarkers] = useState("");

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
    console.log(offices);
    setNearbyOffices(offices);
  };

  const setOfficesMarkers = (offices) => {
    const stringMarkers = offices
      .map(
        (office) =>
          `${office.geometry.location.lat},${office.geometry.location.lng}`
      )
      .join("|");

    setMarkers(stringMarkers);
  };

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
          <Typography variant="body1" sx={{ mb: 1 }} fontWeight="bold">
            Location:
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We identified you are near the following office
          </Typography>

          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>

          {nearbyOffices &&
            nearbyOffices.map((office, i) => (
              <CardOffice key={i} office={office} />
            ))}

          <Box width="50%" mb={1}>
            <ButtonGlobant>Confirm Office</ButtonGlobant>
          </Box>
          <Box width="50%" mb={3} display={"none"}>
            <ButtonGlobant>Choose Another Office</ButtonGlobant>
          </Box>
        </Box>
      </div>
    </MainLayout>
  );
}

export default Location;
