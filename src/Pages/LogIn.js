import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup'

import LogInForm from "../Components/Authentification/LogIn/LogInForm";

const SIGNIN_SCHEMA = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });

const LogIn = () => {
    return (
        <div>
            <Formik
            initialValues={{email:'', password: ''}}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  const { email, password } = values;
                  alert(JSON.stringify(email, password));
                  setSubmitting(false);
                }, 100);
              }}
              validationSchema={SIGNIN_SCHEMA}
            >
          { props =>  <LogInForm {...props} />}
            </Formik>
        </div>
    )
}

export default LogIn;
