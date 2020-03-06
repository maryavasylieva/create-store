import React from "react";
import {Link} from "react-router-dom";

import style from "./LogInForm.module.css";
import FormButton from "./FormButton";

const LogInForm = () => {
  return (
    <>
      <div className={style.loginContainer}>
        <div className={style.imgContainer} />

        <div className={style.textWrap}>
          <div className={style.loginTextWrap}>
            <h2 className={style.textLogin}>Вход</h2>
            <Link to="/registration" className={style.linkCreate}>
              <p className={style.textCreate}>Создать профиль</p>
            </Link>
          </div>

          <div className={style.formContainer}>
            <form
              method="GET"
              className={style.formLogin}
              onSubmit="{handleSubmit}"
            >
              <label htmlFor="1">
                <p className={style.textEmail}>
                  E-mail<span className={style.star}>*</span>
                </p>
                <input
                  value="{values.email}"
                  onChange="{handleChange}"
                  onBlur="{handleBlur}"
                  type="email"
                  name="email"
                  className={style.input}
                  id="{errors.email && values.email !==  && style.errorInput}"
                  placeholder="your@email.com"
                  required
                />
              </label>
              {/* {errors.email && touched.email && (
                <div className={style.inputError}>{errors.email}</div>
              )} */}

              <label htmlFor="2">
                <p className={style.password}>
                  <span className={style.textPassword}>
                    Password<span className={style.star}>*</span>
                  </span>
                </p>
                <input
                  value="{values.password}"
                  onChange="{handleChange}"
                  onBlur="{handleBlur}"
                  type="password"
                  name="password"
                  className={style.input}
                //   id={
                //     errors.password &&
                //     values.password !== "" &&
                //     style.errorInput
                //   }
                  placeholder="your password"
                  required
                />
              </label>
              {/* {errors.password && touched.password && (
                <div className={style.inputError}>{errors.password}</div>
              )} */}

              <FormButton type="submit">Log In</FormButton>
              {/* {errorMessage && (
                <p className={style.error}>Invalid email or password</p>
              )} */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
