import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import RegistrationForm from "./RegistrationForm";
import css from "./RegistrationForm.module.css";
import FormButton from "../FormButton";

const RegistrationForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit
}) => {
  return (
    <>
      <Wrapper>
        <Section>
          <FormWrapper>
            <div>
              <HeaderWrapper>
                <Title>Создать профиль</Title>
                <LinkLogin to="/login">Войти</LinkLogin>
              </HeaderWrapper>
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
                {errors.passwordConfirm && values.passwordConfirm !== "" && (
                  <div className={css.inputError}>{errors.passwordConfirm}</div>
                )}
                <FormButton type="submit">Регистрация</FormButton>
                {/* {errorMessage && (
          <p className={css.error}>This user is already registered</p>
        )} */}
              </Form>
            </div>
          </FormWrapper>
        </Section>
      </Wrapper>
    </>
  );
};


// REGISTRATION CONTAINER
const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    .registrationWrapper {
      background-color: #f5f7fa;
    }
  }

  @media screen and (min-width: 1024px) {
    .registrationWrapper {
      background-color: transparent;
    }
  }
`;

const Section = styled.section`
  max-width: 320px;
  margin: 0 auto;
  font-family: Montserrat;

  @media screen and (min-width: 1024px) {
    max-width: 100vw;
    overflow: hidden;
    display: flex;
    margin: 0;
  }
`;

const FormWrapper = styled.div`
  padding: 4px;
  padding-top: 44px;
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-color: #edeaea;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 100%;
    /* justify-content: space-around; */
    margin-bottom: 26px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 26px;
  font-weight: 500;
  color: #091e3f;
`;

const LinkLogin = styled(Link)`
  font-family: Montserrat;
  font-size: 13px;
  color: #869096;
  text-decoration: none;
`;



// REGISTRATION FORM
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
`;

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
`;

export default RegistrationForm;
