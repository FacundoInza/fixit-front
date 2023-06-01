import React from "react";
import { TextField, Container, Typography, Box, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MainLayout } from "../layout/MainLayout";
import ButtonGlobant from "../commons/ButtonGlobant";
import fullLogo from "../../assets/Globant-Original.png";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Obligatory Field"),
  password: Yup.string().required("Obligatory Field"),
});

const Login = () => {
  const handleSubmit = (values) => {
    // Lógica para enviar los datos del formulario al servidor
    console.log(values);
  };

  return (
    <MainLayout title="Login" inLoginOrRegister={true}>
      <Box display={"flex"} justifyContent={"center"} margin={"40px"}>
        <img
          src={fullLogo}
          alt="Logo"
          style={{ height: "30px", marginLeft: "20px", marginTop: "15px" }}
        />
      </Box>

      <Container
        sx={{
          width: { xs: "100%", sm: "70%", md: "40%" },
          marginTop: "20px",
          boxShadow: {
            xs: "none",
            sm: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          },
          height: "50%",
        }}
      >
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
            <Box display={"flex"} justifyContent={"center"} width={"100%"}>
              <ButtonGlobant>Log In</ButtonGlobant>
            </Box>
            <Box display={"flex"} justifyContent={"flex-end"} width={"100%"}>
              <Button href="/register">Sing Up</Button>
            </Box>
          </Form>
        </Formik>
      </Container>
    </MainLayout>
  );
};

export default Login;
