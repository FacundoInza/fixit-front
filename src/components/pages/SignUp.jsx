import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { MainLayout } from "../layout/MainLayout";
import fullLogo from "../../assets/Globant-Original.png";
import {
  Box,
  Container,
  Typography,
  TextField,
  Alert,
  AlertTitle,
} from "@mui/material";
import ButtonGlobant from "../commons/ButtonGlobant";
import { axiosSignUp } from "../../services/api";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function SignUp() {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    cellphone: "",
    password: "",
    address: "",
    role: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Obligatory Field"),
    email: Yup.string()
      .email("The email address is not valid")
      .required("Obligatory Field"),
    cellphone: Yup.number()
      .typeError("This field must be a number")
      .required("Obligatory Field"),
    password: Yup.string()
      .min(8, "The password must have at least 8 characters")
      .max(18, "The password can't have more than 18 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
        "The password must have at least 1 uppercase, 1 lowercase, and 1 number"
      )
      .matches(/^\S*$/, "The password can't have spaces")
      .required("Obligatory Field"),
    address: Yup.string().required("Obligatory Field"),
    role: Yup.string().required("Obligatory Field"),
  });

  const handleSignup = async (values) => {
    try {
      await axiosSignUp(values);
      setIsRegistered(true);
      Swal.fire({
        icon: "success",
        title: "Registration successful",
        text: "You have successfully registered!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (values) => {
    await handleSignup(values);
  };

  return (
    <MainLayout title="Login" inLoginOrRegister={true}>
      <Container
        sx={{
          width: { xs: "100%", sm: "70%", md: "40%" },
          boxShadow: {
            xs: "none",
            sm: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          },
          marginBottom: 20,
          padding: 3,
        }}
      >
        <Box display={"flex"} justifyContent={"center"} margin={"40px"}>
          <img
            src={fullLogo}
            alt="Logo"
            style={{ height: "30px", marginLeft: "20px", marginTop: "15px" }}
          />
        </Box>
        {!isRegistered && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Typography
                  fontWeight={"bold"}
                  sx={{ textAlign: "center", margin: "15px" }}
                >
                  Complete the fields to Sign Up
                </Typography>
                <div style={{ padding: "10px" }}>
                  <Field
                    as={TextField}
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={touched.name && !!errors.name}
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
                <div style={{ padding: "10px" }}>
                  <Field
                    as={TextField}
                    type="email"
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={touched.email && !!errors.email}
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
                <div style={{ padding: "10px" }}>
                  <Field
                    as={TextField}
                    id="cellphone"
                    name="cellphone"
                    label="Cellphone"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={touched.cellphone && !!errors.cellphone}
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

                <div style={{ padding: "10px" }}>
                  <Field
                    as={TextField}
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={touched.password && !!errors.password}
                  />
                  <ErrorMessage name="password">
                    {(errorMsg) => (
                      <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errorMsg}
                      </Alert>
                    )}
                  </ErrorMessage>
                </div>

                <div style={{ padding: "10px" }}>
                  <Field
                    as={TextField}
                    id="address"
                    name="address"
                    label="Address"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={touched.address && !!errors.address}
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

                <div style={{ padding: "10px" }}>
                  <Field
                    as={TextField}
                    id="role"
                    name="role"
                    label="Role"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={touched.role && !!errors.role}
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

                <Box display={"flex"} justifyContent={"center"} width={"100%"}>
                  <ButtonGlobant props={{ type: "submit" }}>
                    Sign Up
                  </ButtonGlobant>
                </Box>
              </Form>
            )}
          </Formik>
        )}
      </Container>
    </MainLayout>
  );
}

export default SignUp;
