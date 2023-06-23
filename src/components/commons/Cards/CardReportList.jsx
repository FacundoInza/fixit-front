import React, { useState } from "react";
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

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? "cancel-popover" : undefined;

  const handleDelete = async () => {
    const deleteReport = await axiosDeleteReport(id);
    dispatch(setDeletedReport({ _id: id }));
    handlePopoverClose();
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
            sx={{ height: "200px", width: "150px" }}
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
                onClick={handlePopoverOpen}
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

        <Popover
          id={popoverId}
          open={open}
          sx={{ zIndex: 9999 }}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Box sx={{ padding: "20px" }}>
            <Typography>Confirm Report Cancellation</Typography>
            <Button
              onClick={handlePopoverClose}
              variant="outlined"
              color="error"
            >
              Cancel
            </Button>
            <Button
              sx={{ margin: 2 }}
              onClick={handleDelete}
              variant="contained"
              color="success"
            >
              Confirmar
            </Button>
          </Box>
        </Popover>
      </Card>
    </Grid>
  );
};

export default CardReportList;
