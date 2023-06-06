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
} from "@mui/material";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { MainLayout } from "../layout/MainLayout";
import ButtonGlobant from "../commons/ButtonGlobant";
import fullLogo from "../../assets/Globant-Original.png";
import { axiosLogin } from "../../services/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/users";

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
    }
    navigate("/");
  };

  const handleClose = () => {
    setOpenSnackbar(false);
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
          height: "50%",
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
          <Form>
            <Typography
              fontWeight={"bold"}
              sx={{ textAlign: "center", margin: "15px" }}
            >
              Login in to your account
            </Typography>
            <div style={{ padding: "10px" }}>
              <Field
                as={TextField}
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div style={{ padding: "10px" }}>
              <Field
                as={TextField}
                name="password"
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <Box display={"flex"} justifyContent={"center"} width={"100%"} onC>
              <ButtonGlobant props={{ type: "submit" }}>Log In</ButtonGlobant>
            </Box>
            <Box display={"flex"} justifyContent={"flex-end"} width={"100%"}>
              <Button href="/signUp">Sing Up</Button>
            </Box>
          </Form>
        </Formik>

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
      </Container>
    </MainLayout>
  );
};

export default Login;
