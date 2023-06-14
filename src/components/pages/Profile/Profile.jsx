import React, { useState } from "react";
<<<<<<< HEAD
import { MainLayout } from "../../layout/MainLayout";
import {
  Avatar,
  Box,
  Typography,
  TextField,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ButtonGlobant from "../../commons/ButtonGlobant";
=======
import { useSelector, useDispatch } from "react-redux";
>>>>>>> develop
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
<<<<<<< HEAD

  const [editMode, setEditMode] = useState(true);
=======
  const [editMode, setEditMode] = useState(false);
>>>>>>> develop
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
<<<<<<< HEAD
    address: !editMode
=======
    address: editMode
>>>>>>> develop
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
<<<<<<< HEAD
      const axiosResult = await axiosUpdateUser(values, user.id);

=======
      await axiosUpdateUser(values, user.id);
>>>>>>> develop
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
                width: "50vw",
                padding: "10px",
                borderRadius: "2em",
              }}
            >
<<<<<<< HEAD
              <div style={{ padding: "10px", width: "100%" }}>
                <Field
                  as={TextField}
                  type="text"
                  name="name"
                  label="Name"
                  margin="normal"
                  disabled={editMode}
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
                  disabled={editMode}
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
                  disabled={editMode}
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
                  disabled={editMode}
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
                  disabled={editMode}
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
            {editMode ? (
              <ButtonGlobant
                props={{ type: "button", onClick: handleEditMode }}
=======
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
>>>>>>> develop
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
              <ButtonGlobant
                props={{ type: "submit", onClick: handleEditMode }}
              >
                {!editMode ? "Edit Profile" : "Send Changes"}
              </ButtonGlobant>
<<<<<<< HEAD
            ) : (
              <ButtonGlobant props={{ type: "submit" }}>
                Send Changes
              </ButtonGlobant>
            )}
          </Form>
=======
            </Form>
          )}
>>>>>>> develop
        </Formik>
      </Box>
    </MainLayout>
  );
};

export default Profile;
