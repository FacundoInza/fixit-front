import React, { useEffect } from "react";
import { MainLayout } from "../../layout/MainLayout";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import newReportImg from "../../../assets/newReport.png";
import { Link } from "react-router-dom";
import { resetIssue } from "../../../store/issue";
import { PrincipalFlowLayout } from "../../layout/PrincipalFlowLayout";
import { getLocation } from "../../../utils";
import { updateUser } from "../../../store/users";
import { axiosUpdateUser } from "../../../services/api";

function NewReport() {
  const { id } = useSelector((state) => state.user);
  const actualUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetIssue());
    setUserLocation();
  }, []);

  const setUserLocation = async () => {
    const { error, data } = await getLocation();
    const lat = data.coords.latitude;
    const lng = data.coords.longitude;
    dispatch(updateUser({ location: [lat, lng] }));
    await axiosUpdateUser({ location: [lat, lng] }, id);
  };

  function removeSpecialCharactersWithSpaces(str) {
    return str.replace(/[^a-zA-Z.\s]/g, "");
  }

  return (
    <PrincipalFlowLayout title="newReport" inLoginOrRegister={true}>
      <Box
        key={"hola"}
        display="flex"
        alignItems="center"
        flexDirection="column"
        overflow="overflow"
        height={"100%"}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Welcome{" "}
          {removeSpecialCharactersWithSpaces(
            actualUser.name
              .toLowerCase()
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          )}
          !
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }} fontWeight="bold">
          Do you have a problem with a device?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Report it so Service Desk can FIX IT
        </Typography>

        <Box marginBottom={"100px"}>
          <img src={newReportImg} alt="Imagen" style={{ maxWidth: "100%" }} />
        </Box>

        <Box
          display={"flex"}
          width="100%"
          height={"100%"}
          justifyContent={"center"}
        >
          {actualUser.is_admin && (
            <Link to="/principal-admin-views">
              <ButtonGlobant type={"pending"}>Admin View</ButtonGlobant>
            </Link>
          )}
        </Box>
      </Box>
      <Box
        display={"flex"}
        width="100%"
        height={"100%"}
        justifyContent={"center"}
        mb={1}
      >
        <Link to={"/work-options"}>
          <ButtonGlobant type={"success"}>Create A Report</ButtonGlobant>
        </Link>
      </Box>
    </PrincipalFlowLayout>
  );
}

export default NewReport;
