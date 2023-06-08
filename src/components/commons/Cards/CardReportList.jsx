import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import image from "../../../assets/Rectangle 40.jpg";
import { Link } from "react-router-dom";

const CardReportList = ({ info }) => {
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
            Report #{info._id.slice(22)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.description.length > 80
              ? info.description.slice(0, 80 - 3) + "..."
              : info.description}
          </Typography>
          <CardActions>
            <Link to={`/report/${info._id}`}>
              <Button size="small">Details</Button>
            </Link>

            <Button size="small">{info.status}</Button>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

export default CardReportList;
