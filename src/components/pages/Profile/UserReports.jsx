import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layout/MainLayout";
import { Box, FormControl, InputLabel, NativeSelect } from "@mui/material";

import ReportList from "../../commons/list/ReportList";
import { axiosAllDevices } from "../../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../../store/ui/filter";

const UserReports = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [allDevices, setallDevices] = useState([]);

  useEffect(() => {
    fetchDataDevices();
  }, [filter]);

  const fetchDataDevices = async () => {
    const data = await axiosAllDevices();

    setallDevices(data);
  };

  const handleStatus = (event) => {
    dispatch(updateFilter({ status: event.target.value }));
  };

  const handlePeriod = (event) => {
    dispatch(updateFilter({ period: event.target.value }));
  };

  const handleDevice = (event) => {
    dispatch(updateFilter({ device: event.target.value }));
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
              <option value={"all"} style={{ fontFamily: "Heebo, sans-serif" }}>
                All reports
              </option>
              <option
                value={"pending"}
                style={{ fontFamily: "Heebo, sans-serif" }}
              >
                Pending
              </option>
              <option
                value={"solved"}
                style={{ fontFamily: "Heebo, sans-serif" }}
              >
                Solved
              </option>
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
              onChange={handlePeriod}
            >
              <option value={"all"} style={{ fontFamily: "Heebo, sans-serif" }}>
                All time
              </option>
              <option
                value={"15_days"}
                style={{ fontFamily: "Heebo, sans-serif" }}
              >
                Last 15 days
              </option>
              <option
                value={"1_month"}
                style={{ fontFamily: "Heebo, sans-serif" }}
              >
                Last month
              </option>
              <option
                value={"6_month"}
                style={{ fontFamily: "Heebo, sans-serif" }}
              >
                Last 6 months
              </option>
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
              onChange={handleDevice}
            >
              <option value="all">All devices</option>
              {allDevices &&
                allDevices.map((device, i) => (
                  <option
                    key={i}
                    style={{ fontFamily: "Heebo, sans-serif" }}
                    value={
                      device.name.charAt(0).toUpperCase() + device.name.slice(1)
                    }
                  >
                    {device.name.charAt(0).toUpperCase() + device.name.slice(1)}
                  </option>
                ))}
            </NativeSelect>
          </FormControl>
        </Box>
      </Box>

      <ReportList filterAds={filter} />
    </MainLayout>
  );
};

export default UserReports;
