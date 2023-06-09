import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const CardOffice = ({ office }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#F5F6F7",
        maxWidth: "50%",
        width: "100%",
        mb: 2,
      }}
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
