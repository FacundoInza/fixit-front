import React, { useEffect } from "react";

const MapContainer = () => {
  useEffect(() => {
    // Aquí puedes utilizar la API de Google Maps como lo harías normalmente
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default MapContainer;
