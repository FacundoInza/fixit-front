import React, { useState } from "react";
import { useNavigate } from "react-router";

import {
  TextField,
  Container,
  Typography,
  Box,
  Button,
  Alert,
  Snackbar,
  AlertTitle,
} from "@mui/material";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { MainLayout } from "../layout/MainLayout";
import ButtonGlobant from "../commons/ButtonGlobant";
import fullLogo from "../../assets/Globant-Original.png";
import { axiosLogin } from "../../services/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/users";
import { styled } from "@mui/system";
import { Close } from "@mui/icons-material";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .max(310, "Cannot exceed 310 characters")
    .required("Obligatory Field"),
  password: Yup.string().required("Obligatory Field"),
});

const Login = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (value) => {
    // Lógica para enviar los datos del formulario al servidor
    const { error, message, data } = await axiosLogin(value);
    if (error) {
      console.log(message);
      setMessage(message);
      setOpenSnackbar(true);
    } else {
      dispatch(setUser(data));
      navigate("/");
    }
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const ErrorMessageContainer = styled("div")({
    position: "relative",
    backgroundColor: "#f8d7da",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid red",
  });

  const ErrorMessageText = styled("div")({
    color: "red",
    marginLeft: "10px",
  });

  const CloseIcon = styled(Close)({
    position: "absolute",
    top: "5px",
    right: "5px",
    cursor: "pointer",
    color: "red",
  });

  return (
    <MainLayout title="Login" inLoginOrRegister={true}>
      <Container
        sx={{
          width: { xs: "100%", sm: "70%", md: "40%" },
          boxShadow: {
            xs: "none",
            sm: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          },
          height: "calc(100vh - 200px)",
          overflowY: "auto",
        }}
      >
        <Box display={"flex"} justifyContent={"center"} margin={"40px"}>
          <img
            src={fullLogo}
            alt="Logo"
            style={{ height: "30px", marginLeft: "20px", marginTop: "15px" }}
          />
        </Box>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Typography
                fontWeight={"bold"}
                sx={{ textAlign: "center", margin: "15px" }}
              >
                Log in to your account
              </Typography>
              <div style={{ padding: "10px" }}>
                <Field
                  as={TextField}
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
                  name="password"
                  label="Password"
                  type="password"
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
              <Box
                display={"flex"}
                justifyContent={"center"}
                width={"100%"}
                onC
              >
                <ButtonGlobant props={{ type: "submit" }}>Log In</ButtonGlobant>
              </Box>
              <Box display={"flex"} justifyContent={"flex-end"} width={"100%"}>
                <Button href="/signUp">Sign Up</Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
      {openSnackbar && (
        <Snackbar
          sx={{ zIndex: 999999 }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
    </MainLayout>
  );
};

export default Login;
