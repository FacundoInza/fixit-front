import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import image from "../../../assets/Rectangle 40.jpg";

const CardReport = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          maxWidth: { xs: "380px" },
          maxHeight: { xs: "200px" },
          padding: "0px",
          display: "flex",
          flexDirection: "row",
          margin: "0px",

          background: "#F5F6F8",
          borderRadius: "0px",
          boxShadow: "0px -3px 20px 1px rgba(0, 0, 0, 0.15)",
        }}
      >
        <CardMedia
          sx={{ height: "200px", width: "190px" }}
          image={image}
          title="green iguana"
        />
        <Box sx={{ maxWidth: "55%", maxHeight: 200, padding: "10px" }}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species.
          </Typography>
          <CardActions>
            <Button size="small">Details</Button>
            <Button size="small">State</Button>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

export default CardReport;
