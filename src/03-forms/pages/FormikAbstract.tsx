import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { MyTextInput, MyCheckbox, MySelect } from "../components";

import "../styles/styles.css";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("el correo no tiene un formato valido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Deve de aceptar las condiciones"),
          jobType: Yup.string()
            .required("Requerido")
            .notOneOf(["it-jr"], "Esta opcion no es permitida"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Tu nombre"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Tu apellido"
            />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="correo@google.com"
              type="email"
            />

            <MySelect name="jobType" label="Job Type">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It Senior</option>
              <option value="it-jr">It Junior</option>
            </MySelect>

            <MyCheckbox label=" Terms and condition" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
