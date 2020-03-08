import React from "react";
import styled from "styled-components";

import FormButton from "../FormButton";
import css  from "./RegistrationForm.module.css"

const RegistrationForm = ({values, touched, errors, handleChange, handleBlur, handleSubmit }) => {
  return (
    <Form method="GET" onSubmit={handleSubmit}>
      <SubTitle>Регистрация</SubTitle>
      <Label htmlFor="1">
        <LabelTitle>
          E-mail <RequireField>*</RequireField>
        </LabelTitle>
        <FormInput
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          type="email"
          id="{errors.email && values.email !== '' && css.errorInput}"
          placeholder="your@email.com"
          required
        />
      </Label>
      {errors.email && touched.email && (
          <div className={css.inputError}>{errors.email}</div>
        )}
      <Label htmlFor="2">
        <LabelTitle>
          Пароль (от 6 символов)
          <RequireField>*</RequireField>
        </LabelTitle>
        <FormInput
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          name="password"
          type="password"
          id="{errors.password && values.password !== '' && css.errorInput}"
          placeholder="your password"
          autoComplete="false"
          required
        />
      </Label>
      {errors.password && touched.password && (
          <div className={css.inputError}>{errors.password}</div>
        )}
      <Label htmlFor="3">
        <LabelTitle>
          Подтверждение пароля <RequireField>*</RequireField>
        </LabelTitle>

        <FormInput
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirm}
          name="passwordConfirm"
          type="password"
          id="{
              errors.passwordConfirm &&
              values.passwordConfirm !== '' &&
              css.errorInput
            }"
          placeholder="confirmation"
          autoComplete="false"
          required
        />
      </Label>
      {errors.passwordConfirm && values.passwordConfirm !== '' && (
          <div className={css.inputError}>{errors.passwordConfirm}</div>
        )}
      <FormButton type="submit">Регистрация</FormButton>
      {/* {errorMessage && (
          <p className={css.error}>This user is already registered</p>
        )} */}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    background-color: #fff;
    width: 400px;
    padding: 46px 42px;
    margin-top: 30px;
  }
`;

const SubTitle = styled.h2`
  margin: 0;
  margin-bottom: 26px;
  font-size: 16px;
  color: rgb(9, 30, 63);
  font-weight: bold;
`;

const Label = styled.label`
  margin-bottom: 24px;
`;

const LabelTitle = styled.p`
  margin: 0;
  font-size: 14px;
  margin-bottom: 12px;
  color: rgb(134, 144, 150);
  &:last-child {
    margin-bottom: 0;
    margin-left: 10px;
  }
  `;

const RequireField = styled.span`
  color: #f4664f;
`

const FormInput = styled.input`
   display: block;
  width: 312px;
  margin: 0 auto;
  height: 40px;
  background-color: rgb(245, 247, 250);
  box-shadow: 0px -2px 2px 0px rgba(29, 29, 27, 0.1);
  border: 1px solid rgb(245, 247, 250);
  font-size: 14px;
  &::placeholder {
    color: rgb(166, 171, 185);
  }
  &:focus {
    outline: none;
  }
`
export default RegistrationForm;
