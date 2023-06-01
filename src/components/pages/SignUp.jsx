import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { MainLayout } from "../layout/MainLayout";
import fullLogo from "../../assets/Globant-Original.png";
import { Box } from "@mui/material";

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

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="Phone">Phone:</label>
            <Field type="text" id="phone" name="phone" />
            <ErrorMessage name="phone" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <label htmlFor="address">Address:</label>
            <Field type="text" id="address" name="address" />
            <ErrorMessage name="address" component="div" />
          </div>

          <div>
            <label htmlFor="preferredOffice">Preferred Office:</label>
            <Field type="text" id="preferredOffice" name="preferredOffice" />
            <ErrorMessage name="preferredOffice" component="div" />
          </div>
          <div>
            <label htmlFor="role">Role:</label>
            <Field type="text" id="role" name="role" />
            <ErrorMessage name="role" component="div" />
          </div>

          <button type="submit">Regirter</button>
        </Form>
      </Formik>
    </MainLayout>
  );
}

export default SignUp;
