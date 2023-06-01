import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { MainLayout } from "../layout/MainLayout";
import fullLogo from "../../assets/Globant-Original.png";
import { Box, Container, Typography, TextField } from "@mui/material";
import ButtonGlobant from "../commons/ButtonGlobant";

function SignUp() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    preferredOffice: "",
    role: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string()
      .email("El correo electronico no es valido")
      .required("El correo electronico es obligatorio"),
    phone: Yup.string().required("El numero es obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es obligatoria"),
    address: Yup.string().required("La direccion es obligatorio"),
    preferredOffice: Yup.string().required(
      "La oficina preferida es obligatoria"
    ),
    role: Yup.string().required("El rol es obligatorio"),
  });

  const handleSubmit = (values) => {
    //Aqui dentro se escribe la logica para enviar los datode el formulario
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
          height: "50vh",
          overflowY: "auto",
        }}
      >
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
              Complete de fields to register
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
              <ErrorMessage name="email" component="div" />
            </div>
            <div style={{ padding: "10px" }}>
              <Field
                as={TextField}
                id="phone"
                name="phone"
                label="Phone"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="phone" component="div" />
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
              <ErrorMessage name="password" component="div" />
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
              <ErrorMessage name="address" component="div" />
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
              <ErrorMessage name="role" component="div" />
            </div>

            <Box display={"flex"} justifyContent={"center"} width={"100%"}>
              <ButtonGlobant>Register</ButtonGlobant>
            </Box>
          </Form>
        </Formik>
      </Container>
    </MainLayout>
  );
}

export default SignUp;
