import React, { useEffect } from "react";
import { MainLayout } from "../../layout/MainLayout";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import newReportImg from "../../../assets/newReport.png";
import { Link } from "react-router-dom";
import { resetIssue } from "../../../store/issue";

function NewReport() {
  const actualUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetIssue());
  }, []);

  return (
    <MainLayout title="newReport" inLoginOrRegister={true}>
      <Box
        key={"hola"}
        display="flex"
        alignItems="center"
        flexDirection="column"
        overflow="overflow"
        height={"100%"}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Welcome {actualUser.name}!
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }} fontWeight="bold">
          Do you have a problem with a device?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Report it so Service Desk can FIX IT
        </Typography>

        <Box mb={3} marginBottom={"200px"}>
          <img src={newReportImg} alt="Imagen" style={{ maxWidth: "100%" }} />
        </Box>

        <Box width="100%" mb={3}>
          {actualUser.is_admin && (
            <Link to>
              <ButtonGlobant>Admin View</ButtonGlobant>
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
          <ButtonGlobant>Create A Report</ButtonGlobant>
        </Link>
      </Box>
    </MainLayout>
  );
}

export default NewReport;
