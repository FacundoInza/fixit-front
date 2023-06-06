import React, { useState } from "react";
import { MainLayout } from "../../layout/MainLayout";
import { Box, FormControl, InputLabel, NativeSelect } from "@mui/material";

import ReportList from "../../commons/list/ReportList";

const UserReports = () => {
  const [status, setStatus] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleStatus = (event) => {
    setStatus(event.target.value);
    console.log(event.target.value);
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
              defaultValue={"All"}
              inputProps={{
                name: "state",
                id: "uncontrolled-native",
              }}
              onChange={handleStatus}
            >
              <option value={"All"}>All reports</option>
              <option value={"pending"}>Pending</option>
              <option value={"closed"}>Closed</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <Box sx={{ width: "200px", margin: "20px" }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              DATE
            </InputLabel>
            <NativeSelect
              defaultValue={"All_time"}
              inputProps={{
                name: "date",
                id: "uncontrolled-native",
              }}
              onChange={handleDateChange}
            >
              <option value={"All_time"}>All time</option>
              <option value={"15_days"}>Last 15 days</option>
              <option value={"1_month"}>One Month later</option>
              <option value={"6_month"}>Six Month later</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <Box sx={{ width: "200px", margin: "20px" }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              DEVICE
            </InputLabel>
            <NativeSelect
              defaultValue={"All_devices"}
              inputProps={{
                name: "device",
                id: "uncontrolled-native",
              }}
              onChange={handleDeviceChange}
            >
              <option value={"All_devices"}>All devices</option>
              <option value={"modem"}>Modem</option>
              <option value={"cable_hdmi"}>Cable hdmi</option>
              <option value={"monitor"}>monitor</option>
              <option value={"smarphone"}>Smartphone</option>
              <option value={"notebook"}>Notebook</option>
              <option value={"headset"}>headset</option>
              <option value={"mouse"}>Mouse</option>
              <option value={"silla"}>Silla</option>
              <option value={"keyboard"}>keyboard</option>
              <option value={"notbook_charge"}>Notbook charger</option>
              <option value={"port_adapter"}>Port Adapter</option>
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
