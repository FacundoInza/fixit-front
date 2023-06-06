import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { MainLayout } from "../layout/MainLayout";
import fullLogo from "../../assets/Globant-Original.png";
import { Box, Container, Typography, TextField } from "@mui/material";
import ButtonGlobant from "../commons/ButtonGlobant";
import { axiosSignUp } from "../../services/api";
import { useNavigate } from "react-router";
import { styled } from "@mui/system";
import { Close } from "@mui/icons-material";

function SignUp() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    cellphone: "",
    password: "",
    address: "",
    role: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string()
      .email("El correo electrónico no es válido")
      .required("El correo electrónico es obligatorio"),
    cellphone: Yup.number()
      .typeError("Este campo debe ser un número")
      .required("El número es obligatorio"),
    password: Yup.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .max(18, "La contraseña no debe tener más de 18 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
        "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número"
      )
      .matches(/^\S*$/, "La contraseña no debe contener espacios")
      .required("La contraseña es obligatoria"),
    address: Yup.string().required("La dirección es obligatoria"),
    role: Yup.string().required("El rol es obligatorio"),
  });

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

  const handleSubmit = async (value) => {
    //Aqui dentro se escribe la logica para enviar los datode el formulario
    const axios = await axiosSignUp(value);
    navigate("/");
    console.log(axios);
  };

  return (
    <MainLayout title="Login" inLoginOrRegister={true}>
      <div style={{ maxHeight: "calc(100vh - 250px)", overflowY: "auto" }}>
        <Container
          sx={{
            width: { xs: "100%", sm: "70%", md: "40%" },
            boxShadow: {
              xs: "none",
              sm: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            },
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
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Typography
                fontWeight={"bold"}
                sx={{ textAlign: "center", margin: "15px" }}
              >
                Complete the fields to register
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
                />
                <ErrorMessage name="name">
                  {(errorMsg) => (
                    <ErrorMessageContainer>
                      <CloseIcon onClick={() => setErrorMsg(null)} />
                      <ErrorMessageText>{errorMsg}</ErrorMessageText>
                    </ErrorMessageContainer>
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
                />
                <ErrorMessage name="email">
                  {(errorMsg) => (
                    <ErrorMessageContainer>
                      <CloseIcon onClick={() => setErrorMsg(null)} />
                      <ErrorMessageText>{errorMsg}</ErrorMessageText>
                    </ErrorMessageContainer>
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
                />
                <ErrorMessage name="cellphone">
                  {(errorMsg) => (
                    <ErrorMessageContainer>
                      <CloseIcon onClick={() => setErrorMsg(null)} />
                      <ErrorMessageText>{errorMsg}</ErrorMessageText>
                    </ErrorMessageContainer>
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
                />
                <ErrorMessage name="password">
                  {(errorMsg) => (
                    <ErrorMessageContainer>
                      <CloseIcon onClick={() => setErrorMsg(null)} />
                      <ErrorMessageText>{errorMsg}</ErrorMessageText>
                    </ErrorMessageContainer>
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
                />
                <ErrorMessage name="address">
                  {(errorMsg) => (
                    <ErrorMessageContainer>
                      <CloseIcon onClick={() => setErrorMsg(null)} />
                      <ErrorMessageText>{errorMsg}</ErrorMessageText>
                    </ErrorMessageContainer>
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
                />
                <ErrorMessage name="role">
                  {(errorMsg) => (
                    <ErrorMessageContainer>
                      <CloseIcon onClick={() => setErrorMsg(null)} />
                      <ErrorMessageText>{errorMsg}</ErrorMessageText>
                    </ErrorMessageContainer>
                  )}
                </ErrorMessage>
              </div>

              <Box display={"flex"} justifyContent={"center"} width={"100%"}>
                <ButtonGlobant props={{ type: "submit" }}>
                  Register
                </ButtonGlobant>
              </Box>
            </Form>
          </Formik>
        </Container>
      </div>
    </MainLayout>
  );
}

export default SignUp;
