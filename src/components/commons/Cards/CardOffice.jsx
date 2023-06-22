import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

const CardOffice = ({ office, setSelectedOffice, selectedOffice }) => {
  const handleClick = () => {
    setSelectedOffice(office);
  };

  return (
    <Card
      sx={{
        border: office == selectedOffice && "4px solid #BFD732",
        borderRadius: office == selectedOffice && "10px",
        boxShadow: office == selectedOffice && "0 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#F5F6F7",
        width: "280px",
        mb: 2,
      }}
      onClick={handleClick}
    >
      <CardContent>
        <Typography variant="body1">{office.name}</Typography>
        <Typography variant="body2">Address: {office.address}</Typography>
        <Typography variant="body2">
          {office.open_now ? "Is Open" : "Closed"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardOffice;
