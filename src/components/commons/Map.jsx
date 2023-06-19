import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = ({ offices, selectedOffice }) => {
  const [mapKey, setMapKey] = useState("");

  useEffect(() => {
    setMapKey(Date.now());
  }, [selectedOffice]);
  return (
    <MapContainer
      key={mapKey}
      style={{ width: "100%", height: "500px" }}
      center={selectedOffice.location}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {offices.map((office, i) => {
        const lat = office.location[0];
        const lng = office.location[1];
        return (
          <Marker key={i} position={[lat, lng]}>
            <Popup>
              <h1>{office.name}</h1>
              <h2>Address: {office.address.split(",")[0]}</h2>
              <Rating name="read-only" value={office.rating} readOnly />
              {office.open_now ? (
                <p style={{ color: "green" }}>Is Open </p>
              ) : (
                <p style={{ color: "red" }}>Is Close</p>
              )}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
