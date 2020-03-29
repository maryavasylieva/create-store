import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import style from "./LogInForm.module.css";
import FormButton from "../FormButton";

const LogInForm = ({values, touched, errors, handleChange, handleSubmit, handleBlur}) => {
  return (
    <>
      <Container>
        <Wrapper>
          <TextWrap>
            <LoginText>Вход</LoginText>
            <LinkCreate to="/registration" className={style.linkCreate}>
              <p>Создать профиль</p>
            </LinkCreate>
          </TextWrap>

          <FormContainer>
            <LoginForm method="GET" onSubmit={handleSubmit}>
              <label htmlFor="1">
                <Text>
                  E-mail<RequireField>*</RequireField>
                </Text>
                <Input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                  id="{errors.email && values.email !==  && style.errorInput}"
                  placeholder="your@email.com"
                  required
                />
              </label>
              {errors.email && touched.email && (
                <div className={style.inputError}>{errors.email}</div>
              )}

              <label htmlFor="2">
                <Password>
                  <span className={style.textPassword}>
                    Пароль<RequireField className={style.star}>*</RequireField>
                  </span>
                </Password>
                <Input
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
              {errors.password && touched.password && (
                <div className={style.inputError}>{errors.password}</div>
              )}

              <FormButton type="submit">Войти</FormButton>
              {/* {errorMessage && (
                <p className={style.error}>Invalid email or password</p>
              )} */}
            </LoginForm>
          </FormContainer>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 4px;
  width: 320px;
  margin: 0 auto;
  font-family: Montserrat;
  padding-top: 44px;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100vh;
    background-color: #edeaea;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100vh;
    padding-top: 0;
    display: flex;
    flex-direction: row-reverse;
  }
`;

const Wrapper = styled.div`
  @media screen and (min-width: 1024px) {
    align-self: center;
    width: 40%;
    margin: 0 auto;
  }
`;

const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    justify-content: space-around;
    margin: 0 auto;
    width: 400px;
    padding-bottom: 20px;
  }
`;

const LoginText = styled.h2`
  font-size: 26px;
  color: #091e3f;
  font-weight: 600;
`;

const LinkCreate = styled(Link)`
  color: #869096;
  font-size: 13px;
`;

const FormContainer = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 400px;
    background-color: #fff;
    padding: 48px 40px 48px 40px;
    border-radius: 8px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Text = styled.p`
  font-size: 14px;
  color: #869096;
  padding-bottom: 12px;
`;

const RequireField = styled.span`
  color: #f4664f;
`;

const Password = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 12px;
`;

const Input = styled.input`
  padding-left: 10px;
  border-width: 1px;
  border-color: rgb(245, 247, 250);
  border-style: solid;
  background-color: rgb(245, 247, 250);
  box-shadow: 0px -2px 2px 0px rgba(29, 29, 27, 0.1);
  width: 312px;
  margin: 0 auto;
  height: 38px;
  margin-bottom: 24px;
`;

export default LogInForm;
