import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";

import css from "../Navigation.module.css";
import DropdownList from "../Dropdown/Dropdown";

const BurgerMenu = () => {
  return (
      <BurgerList>
        <BurgerItem>
          <NavLink to="/" exact className={css.link}>
            Главная
          </NavLink>
        </BurgerItem>
        <BurgerItem>
          <NavLink to="/catalog" className={css.link}>
            <Dropdown overlay={DropdownList}>
              <TextDrop>
                Каталог <DownOutlined />
              </TextDrop>
            </Dropdown>
          </NavLink>
        </BurgerItem>
        <BurgerItem>
          <NavLink to="/about" className={css.link}>
            Про нас
          </NavLink>
        </BurgerItem>
        <BurgerItem>
          <NavLink to="/contact" className={css.link}>
            Контакты
          </NavLink>
        </BurgerItem>
      </BurgerList>
  );
};

const TextDrop = styled.p`
  margin: 0;
`;

const BurgerList = styled.ul`
  list-style-type: none;
  background-color: ${({theme}) => theme.colors.white };
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 300px;
  z-index: 100;
  margin: 0 auto;
  /* box-shadow: 0 16px 6px 2px rgba(0, 0, 0, 0.14); */
  @media screen and (min-width: 768px) {
    left: 15px;
    width: 600px;
  }
`;

const BurgerItem = styled.li`
  padding: 20px 15px;
  text-transform: uppercase;
`;


export default BurgerMenu;
