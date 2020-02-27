import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Icon } from "antd";
import styled from "styled-components";

import css from "../Navigation/Navigation.module.css";
import DropdownList from "../Dropdown";

const BurgerMenu = ( ) => {
  return (
        <ul>
          <li>
            <NavLink to="/" exact className={css.link}>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={css.link}>
              <Dropdown overlay={DropdownList}>
                <TextDrop>
                  Каталог <Icon type="down" />
                </TextDrop>
              </Dropdown>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={css.link}>
              Про нас
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={css.link}>
              Контакты
            </NavLink>
          </li>
        </ul>
  );
};

const TextDrop = styled.p`
  margin: 0;
`;

export default BurgerMenu;
