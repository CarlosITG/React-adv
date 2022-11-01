import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations?.length) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Minimo de ${(rule as any).value || 2}  caracteres`
      );
    }

    if (rule.type === "email") {
      schema = schema.email("el correo no tiene un formato valido");
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Forms</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            {formJson.map(
              ({ label, name, placeholder, type, value, options }) => {
                if (
                  type === "input" ||
                  type === "password" ||
                  type === "email"
                ) {
                  return (
                    <MyTextInput
                      name={name}
                      key={name}
                      label={label}
                      type={type as any}
                      placeholder={placeholder}
                    />
                  );
                } else if (type === "select") {
                  return (
                    <MySelect label={label} name={name} key={name}>
                      <option value="">Select and option</option>
                      {options?.map(({ id, label }) => (
                        <option value={label} key={id}>
                          {label}
                        </option>
                      ))}
                    </MySelect>
                  );
                }

                throw new Error(`type: ${type} no es soportado`);
              }
            )}

            <button type="submit">SubMit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
