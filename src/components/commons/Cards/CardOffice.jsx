import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

const CardOffice = ({ office }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Card
      sx={{
        scale: isSelected ? "1.1" : "1",
        border: isSelected && "1px solid #ddd",
        borderRadius: isSelected && "10px",
        boxShadow: isSelected && "0 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#F5F6F7",
        maxWidth: "50%",
        width: "100%",
        margin: "20px",
        mb: 2,
      }}
      onClick={handleClick}
    >
      <CardContent>
        <Typography variant="body1">{office.name}</Typography>
        <Typography variant="body2">
          Address: {office.formatted_address}
        </Typography>
        <Typography variant="body2">
          {office.opening_hours.open_now ? "Is Open" : "Closed"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardOffice;
