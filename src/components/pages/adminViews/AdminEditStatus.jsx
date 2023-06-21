import React, { useState, useEffect } from "react";
import { MainLayout } from "../../layout/MainLayout";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { Box, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { styled } from "@mui/system";
import { axiosIndividualCase } from "../../../services/api";
import { setIndividualReport } from "../../../store/Reports";

const StyledLabel = styled("label")({
  display: "flex",
  alignItems: "center",
});

const StyledCheckboxContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

function AdminEditStatus() {
  const dispatch = useDispatch();
  const { individualReport } = useSelector((state) => state.reports);
  const { id } = useParams();

  const [selectedCheckbox, setSelectedCheckbox] = useState("open");

  const handleCheckboxChange = (index) => {
    setSelectedCheckbox(index);
  };
  const handleConfirm = async () => {
    const data = await axiosIndividualCase(id);
    dispatch(setIndividualReport({ status: selectedCheckbox }));
  };
  console.log("indiv", individualReport);
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
          Report: {individualReport._id}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }} fontWeight="bold">
          Current status assigned:
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Select new status
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <StyledCheckboxContainer>
          <StyledLabel>
            <Checkbox
              checked={selectedCheckbox === "open"}
              onChange={() => handleCheckboxChange("open")}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                  "& .MuiSvgIcon-root": { fontSize: 35 },
                },
              }}
            />
            OPEN
          </StyledLabel>
          <StyledLabel>
            <Checkbox
              checked={selectedCheckbox === "in progress"}
              onChange={() => handleCheckboxChange("in progress")}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                  "& .MuiSvgIcon-root": { fontSize: 35 },
                },
              }}
            />
            IN PROGRESS
          </StyledLabel>
          <StyledLabel>
            <Checkbox
              checked={selectedCheckbox === "partially solved"}
              onChange={() => handleCheckboxChange("partially solved")}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                  "& .MuiSvgIcon-root": { fontSize: 35 },
                },
              }}
            />
            PARTIALLY SOLVED
          </StyledLabel>
          <StyledLabel>
            <Checkbox
              checked={selectedCheckbox === "solved"}
              onChange={() => handleCheckboxChange("solved")}
              sx={{
                color: "success",
                "& .MuiSvgIcon-root": { fontSize: 35 },
              }}
            />
            SOLVED
          </StyledLabel>
        </StyledCheckboxContainer>

        <Box
          width="50%"
          m={10}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Link to={"/filter-cases"}>
            <ButtonGlobant props={{ onClick: handleConfirm }}>
              Confirm
            </ButtonGlobant>
          </Link>
        </Box>
      </Box>
    </MainLayout>
  );
}

export default AdminEditStatus;
