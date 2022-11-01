import React from "react";

import * as Yup from "yup";
import { Form, Formik } from "formik";
import "../styles/styles.css";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre deve ser de 3 cracteres o mas")
            .max(15, "El campo deve ser mernor de 15 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("Revise el formato del correo")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Mínimo 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraeñas no son iguales")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Nombre" name="name" />
            <MyTextInput
              label="Correo"
              name="email"
              type="email"
              placeholder="tucorreo@google.com"
            />
            <MyTextInput
              label="Contraseña"
              name="password1"
              type="password"
              placeholder="******"
            />
            <MyTextInput
              label="Repita contraeña"
              name="password2"
              placeholder="******"
              type="password"
            />
            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
