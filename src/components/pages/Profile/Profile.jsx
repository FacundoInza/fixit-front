import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Typography, TextField, Alert, AlertTitle } from "@mui/material";
import { MainLayout } from "../../layout/MainLayout";
import ButtonGlobant from "../../commons/ButtonGlobant";
import FunctionalAvatar from "./FunctionalAvatar";
import { axiosUpdateUser } from "../../../services/api";
import { updateUser } from "../../../store/users";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: editMode ? Yup.string().required("Obligatory Field") : Yup.string(),
    email: editMode
      ? Yup.string()
          .email("The email address is not valid")
          .required("Obligatory Field")
      : Yup.string(),
    cellphone: editMode
      ? Yup.number()
          .typeError("This field must be a number")
          .required("Obligatory Field")
      : Yup.number(),
    address: editMode
      ? Yup.string().required("Obligatory Field")
      : Yup.string(),
    role: editMode ? Yup.string().required("Obligatory Field") : Yup.string(),
  });

  const initialValues = {
    name: user.name,
    email: user.email,
    cellphone: user.cellphone,
    address: user.address,
    role: user.role,
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = async (values) => {
    try {
      await axiosUpdateUser(values, user.id);
      dispatch(updateUser(values));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout title="Profile" inLoginOrRegister>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          background: (theme) => theme.palette.primary.dark,
          color: "white",
          py: 12,
          px: 6,
        }}
      >
        <Typography margin={2} color="white" sx={{ fontSize: { xs: "2rem" } }}>
          {user.name}
        </Typography>
        <FunctionalAvatar />
        <Typography
          margin={2}
          color="white"
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" } }}
        >
          Glober
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ errors }) => (
            <Form
              className="form-container"
              style={{
                backgroundColor: "white",
                margin: "10px",
                width: "90%",
                padding: "10px",
                borderRadius: "2em",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div style={{ padding: "10px", width: "100%" }}>
                  <Field
                    as={TextField}
                    type="text"
                    name="name"
                    label="Name"
                    margin="normal"
                    disabled={!editMode}
                    style={{ width: "100%" }}
                  />

                  <ErrorMessage name="name">
                    {(errorMsg) => (
                      <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errorMsg}
                      </Alert>
                    )}
                  </ErrorMessage>
                </div>
                <div style={{ padding: "10px", width: "100%" }}>
                  <Field
                    as={TextField}
                    type="email"
                    name="email"
                    label="Email"
                    margin="normal"
                    disabled={!editMode}
                    style={{ width: "100%" }}
                  />
                  <ErrorMessage name="email">
                    {(errorMsg) => (
                      <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errorMsg}
                      </Alert>
                    )}
                  </ErrorMessage>
                </div>

                <div style={{ padding: "10px", width: "100%" }}>
                  <Field
                    as={TextField}
                    type="text"
                    name="cellphone"
                    label="Cellphone"
                    margin="normal"
                    disabled={!editMode}
                    style={{ width: "100%" }}
                  />
                  <ErrorMessage name="cellphone">
                    {(errorMsg) => (
                      <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errorMsg}
                      </Alert>
                    )}
                  </ErrorMessage>
                </div>

                <div style={{ padding: "10px", width: "100%" }}>
                  <Field
                    as={TextField}
                    type="text"
                    name="address"
                    label="Address"
                    margin="normal"
                    disabled={!editMode}
                    style={{ width: "100%" }}
                  />
                  <ErrorMessage name="address">
                    {(errorMsg) => (
                      <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errorMsg}
                      </Alert>
                    )}
                  </ErrorMessage>
                </div>
                <div style={{ padding: "10px", width: "100%" }}>
                  <Field
                    as={TextField}
                    type="text"
                    name="role"
                    label="Role"
                    margin="normal"
                    disabled={!editMode}
                    style={{ width: "100%" }}
                  />
                  <ErrorMessage name="role">
                    {(errorMsg) => (
                      <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errorMsg}
                      </Alert>
                    )}
                  </ErrorMessage>
                </div>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <ButtonGlobant
                  props={{ type: "submit", onClick: handleEditMode }}
                >
                  {!editMode ? "Edit Profile" : "Send Changes"}
                </ButtonGlobant>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </MainLayout>
  );
};

export default Profile;
