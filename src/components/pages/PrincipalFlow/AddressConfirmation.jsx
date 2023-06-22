import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import {
  TextField,
  Typography,
  Box,
  Alert,
  Snackbar,
  Paper,
  InputBase,
  Autocomplete,
} from "@mui/material";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { useDispatch, useSelector } from "react-redux";

import { deleteStepIssue, updateIssue } from "../../../store/issue";
import { PrincipalFlowLayout } from "../../layout/PrincipalFlowLayout";
import { axiosAutocomplete } from "../../../services/api";

const AddressConfirmation = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { damaged_equipment } = useSelector((state) => state.issue);

  const handleInputChange = (event, value) => {
    setSelectedOption(value);
    fetchOptions(value);
  };

  const handleOptionSelect = (event, option) => {
    setSelectedOption(option.label);
  };

  const fetchOptions = async (value) => {
    try {
      const data = await axiosAutocomplete(value);

      const formattedOptions = data.map((item) => ({
        label: item.description,
        value: item.place_id,
      }));

      setOptions(formattedOptions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(deleteStepIssue("damaged_equipment"));
  }, []);

  const handleSubmit = () => {
    if (selectedOption) {
      console.log("Enviar formulario con la opción:", selectedOption);
      dispatch(
        updateIssue({
          damaged_equipment: { ...damaged_equipment, location: selectedOption },
        })
      );
      navigate("/start-scan");
    }
  };

  return (
    <PrincipalFlowLayout title="Address Confirmation" inLoginOrRegister={true}>
      <Typography
        fontWeight={"bold"}
        sx={{ textAlign: "center", margin: "15px" }}
      >
        Please confirm your current address or enter a new one:
      </Typography>
      <Box display={"flex"} justifyContent={"center"}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          onInputChange={handleInputChange}
          onChange={handleOptionSelect}
          sx={{ width: 400 }}
          renderInput={(params) => <TextField {...params} label="Address" />}
        />
      </Box>

      <Box display={"center"} justifyContent={"center"} mt={50}>
        <ButtonGlobant props={{ onClick: handleSubmit }}>
          Confirm Address
        </ButtonGlobant>
      </Box>
    </PrincipalFlowLayout>
  );
};

export default AddressConfirmation;
