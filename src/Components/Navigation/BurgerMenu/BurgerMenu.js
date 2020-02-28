import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown} from "antd";
import {DownOutlined} from '@ant-design/icons'
import styled from "styled-components";

import css from "../Navigation.module.css";
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
                  Каталог <DownOutlined />
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
