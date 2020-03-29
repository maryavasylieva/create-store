import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// import Registration from "../Components/Authentification/Registration"
import RegistrationForm from "../Components/Authentification/Registration/Registration";

const SIGNUP_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email()
    .label("email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Seems a bit short...")
    .max(16, "We prefer insecure system, try a shorter password.")
    .label("password")
    .required("Password is required"),
  passwordConfirm: Yup.string()
    .label("passwordConfirm")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password")
});

const Registration = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", passwordConfirm: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const { email, password, passwordConfirm } = values;
            alert(JSON.stringify(email, password, passwordConfirm));
            setSubmitting(false);
          }, 100);
        }}
        validationSchema={SIGNUP_SCHEMA}
      >
        {props => <RegistrationForm {...props} />}
      </Formik>
    </div>
  );
};

export default Registration;
