import { MainLayout } from "../../layout/MainLayout";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import ButtonGlobant from "../../commons/ButtonGlobant";
import image from "../../../assets/Rectangle 23 1.png";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDevices } from "../../../store/devices";
import { updateIssue } from "../../../store/issue";
import { useState } from "react";

const DeviceList = () => {
  const [device, setDevice] = useState("");
  const devices = useSelector((state) => state.devices);
  const issue = useSelector((state) => state.issue);
  const { damaged_equipment } = useSelector((state) => state.issue);
  console.log("issue", issue);
  const dispatch = useDispatch();

  console.log("devices >> ", devices);

  const handleChange = (event) => {
    setDevice(event.target.value);
  };

  const handleconfirmDevice = () => {
    dispatch(
      updateIssue({
        damaged_equipment: {
          ...damaged_equipment,
          name: device,
        },
      })
    );
  };
  console.log("estado local", device);
  return (
    <MainLayout title="Device-list" inLoginOrRegister={true}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        flexDirection="column"
        height="100%"
      >
        <Typography variant="body1" sx={{ mb: 2, mt: 5 }} fontWeight="bold">
          Enter the Damaged item manually
        </Typography>
      </Box>

      <Box
        sx={{
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "3%",
        }}
      >
        <img
          src={issue.damaged_equipment.image}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          alt="Image"
        />
      </Box>

      <Box sx={{ maxWidth: "100%", margin: "20px", mt: "10%" }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            DEVICE LIST
          </InputLabel>
          <NativeSelect
            defaultValue={"choose a device"}
            inputProps={{
              name: "Devices",
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center",
              },
            }}
            onChange={handleChange}
          >
            {devices.map((device) => (
              <option key={device.id} value={device.id}>
                {device.name}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
      <Box sx={{ maxWidth: "100%", margin: "20px", mt: "10%" }}>
        <Link to={"/description"}>
          <ButtonGlobant props={{ onClick: handleconfirmDevice }}>
            Confirm
          </ButtonGlobant>
        </Link>
      </Box>
    </MainLayout>
  );
};

export default DeviceList;
