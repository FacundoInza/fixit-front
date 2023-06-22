import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { TextField, Typography, Box, Alert, Snackbar } from "@mui/material";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { useDispatch, useSelector } from "react-redux";

import { deleteStepIssue, updateIssue } from "../../../store/issue";
import { PrincipalFlowLayout } from "../../layout/PrincipalFlowLayout";

const AddressConfirmation = () => {
  const issue = useSelector((state) => state.issue);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addressForCase, setAddressForCase] = useState("");
  const { damaged_equipment } = useSelector((state) => state.issue);
  const { address } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(deleteStepIssue("damaged_equipment"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(
        updateIssue({
          damaged_equipment: { ...damaged_equipment, location: addressForCase },
        })
      );
    } catch (error) {
      console.error(error);
    }

    navigate("/start-scan");
  };

  return (
    <PrincipalFlowLayout title="Address Confirmation" inLoginOrRegister={true}>
      <form onSubmit={handleSubmit}>
        <Typography
          fontWeight={"bold"}
          sx={{ textAlign: "center", margin: "15px" }}
        >
          Please confirm your current address or enter a new one:
        </Typography>
        <div style={{ padding: "10px" }}>
          <TextField
            name="address"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={1}
            placeholder={address}
            defaultValue={address}
            value={addressForCase}
            onChange={(e) => {
              setAddressForCase(e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Box width="50%" mb={1}>
            <ButtonGlobant props={{ type: "submit" }}>
              Confirm Address{" "}
            </ButtonGlobant>
          </Box>
        </div>
      </form>
    </PrincipalFlowLayout>
  );
};

export default AddressConfirmation;
