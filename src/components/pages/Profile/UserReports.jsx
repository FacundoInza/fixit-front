import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layout/MainLayout";
import { Box, FormControl, InputLabel, NativeSelect } from "@mui/material";

import ReportList from "../../commons/list/ReportList";
import { axiosAllDevices } from "../../../services/api";

const UserReports = () => {
  const [status, setStatus] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [allDevices, setallDevices] = useState([]);

  useEffect(() => {
    const fetchDataDevices = async () => {
      const data = await axiosAllDevices();
      console.log(data);
      setallDevices(data);
    };
    fetchDataDevices();
  }, []);
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleDeviceChange = (event) => {
    setSelectedDevice(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <MainLayout title="Reports" inLoginOrRegister={true}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "200px", margin: "20px" }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              STATE
            </InputLabel>
            <NativeSelect
              defaultValue={"all"}
              inputProps={{
                name: "state",
                id: "uncontrolled-native",
              }}
              onChange={handleStatus}
            >
              <option value={"all"}>All reports</option>
              <option value={"pending"}>Pending</option>
              <option value={"solved"}>Solved</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <Box sx={{ width: "200px", margin: "20px" }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              DATE
            </InputLabel>
            <NativeSelect
              defaultValue={"all"}
              inputProps={{
                name: "date",
                id: "uncontrolled-native",
              }}
              onChange={handleDateChange}
            >
              <option value={"all"}>All time</option>
              <option value={"15_days"}>Last 15 days</option>
              <option value={"1_month"}>One Month later</option>
              <option value={"6_month"}>Six Months later</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <Box sx={{ width: "200px", margin: "20px" }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              DEVICE
            </InputLabel>
            <NativeSelect
              defaultValue={"all"}
              inputProps={{
                name: "device",
                id: "uncontrolled-native",
              }}
              onChange={handleDeviceChange}
            >
              <option value="all">All devices</option>
              {allDevices &&
                allDevices.map((device, i) => (
                  <option key={i} value={device.name}>
                    {device.name}
                  </option>
                ))}
            </NativeSelect>
          </FormControl>
        </Box>
      </Box>

      <ReportList
        filterAds={{
          status: status,
          period: selectedDate,
          device: selectedDevice,
        }}
      />
    </MainLayout>
  );
};

export default UserReports;

// modem
// cable hdmi
// monitor
// celular
// notebook
// headset (auricular + microfono)
// mouse
// silla
// teclado
// cargador de notebook
// cargador de celu
// adaptador de puertos
