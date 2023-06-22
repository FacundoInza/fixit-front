import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Popover,
  Typography,
} from "@mui/material";

import image from "../../../assets/Rectangle 40.jpg";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { axiosDeleteReport } from "../../../services/api";
import { setDeletedReport } from "../../../store/Reports";
import { useDispatch } from "react-redux";

const CardReportList = ({ info }) => {
  const id = info._id;
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const deleteReport = await axiosDeleteReport(id);
    dispatch(setDeletedReport({ _id: id }));
  };

  return (
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <Card
        sx={{
          maxWidth: { xs: "375px", sm: "450px" },
          maxHeight: { xs: "250px", sm: "280px" },
          padding: "0px",
          display: "flex",
          flexDirection: "row",
          background: "#F5F6F8",
          borderRadius: "0px",
          boxShadow: "0px -3px 20px 1px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.1s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Link to={`/report/${info._id}`}>
          <CardMedia
            sx={{ height: "200px", width: "160px" }}
            image={info.damaged_equipment.image}
            title="green iguana"
          />
        </Link>

        <Box sx={{ maxWidth: "55%", maxHeight: 200, padding: "10px" }}>
          <Typography gutterBottom variant="h5" component="div">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "10px" }}>
                Report #{info._id.slice(20)}
              </span>
              <DeleteSharpIcon
                sx={{
                  color: "black",
                  cursor: "pointer",
                }}
                onClick={handleDelete}
              />
            </Box>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {info.description.slice(0, 50) + "..."}
          </Typography>

          <Typography gutterBottom component="div">
            {formatDate(info.starting_date)} - {info.damaged_equipment.name}
          </Typography>

          <CardActions>
            <Link to={`/report/${info._id}`}>
              <Button
                size="small"
                variant="outlined"
                sx={{
                  color: (theme) => theme.palette.primary.dark,
                  margin: "3px",
                }}
              >
                Details
              </Button>
            </Link>
            <Typography
              size="small"
              variant="outlined"
              textAlign={"center"}
              sx={{
                color: (theme) => theme.palette.primary.dark,
                margin: "10px",
              }}
            >
              {info.status.toUpperCase()}
            </Typography>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

export default CardReportList;
