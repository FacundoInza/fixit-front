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

const DeviceList = () => {
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
          src={image}
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
          >
            <option value={"laptop"}>laptop</option>
            <option value={"pending"}>Pending</option>
            <option value={"solved"}>Solved</option>
          </NativeSelect>
        </FormControl>
      </Box>
      <Box sx={{ maxWidth: "100%", margin: "20px", mt: "10%" }}>
        <Link to={"/description"}>
          <ButtonGlobant>Confirm</ButtonGlobant>
        </Link>
      </Box>
    </MainLayout>
  );
};

export default DeviceList;
