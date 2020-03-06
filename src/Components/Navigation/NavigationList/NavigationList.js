import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import DropdownList from "../Dropdown/Dropdown";
import css from "../Navigation.module.css";

const NavigationList = () => {
  return (
    <NavList>
      <NavElem>
        <NavLink to="/" exact className={css.link}>
          Главная
        </NavLink>
      </NavElem>
      <NavElem>
        <NavLink to="/catalog" className={css.link}>
          <Dropdown overlay={DropdownList}>
            <TextDrop>
              Каталог <DownOutlined />
            </TextDrop>
          </Dropdown>
        </NavLink>
      </NavElem>
      <NavElem>
        <NavLink to="/about" className={css.link}>
          Про нас
        </NavLink>
      </NavElem>
      <NavElem>
        <NavLink to="/contact" className={css.link}>
          Контакты
        </NavLink>
      </NavElem>
    </NavList>
  );
};

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
`;

const TextDrop = styled.p`
  margin: 0;
  @media screen and(min-width: 1024px) {
    padding-bottom: 20px;
  }
`;

const NavElem = styled.li`
  display: block;
  text-decoration: none;
  padding: 40px 0px 40px 0px;
  font-size: 13px;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  margin-right: 20px;
`;

export default NavigationList;
