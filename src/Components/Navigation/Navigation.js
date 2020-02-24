import React from "react";
import { Dropdown, Icon } from "antd";
import { NavLink } from "react-router-dom";

import DropdownList from "../Navigation/Dropdown";

const Navigation = () => (
  <ul>
    <li>
      <NavLink to="/" exact>
        Главная
      </NavLink>
    </li>
    <li>
      <NavLink to="/catalog">
        <Dropdown overlay={DropdownList}>
          <p>
            Каталог <Icon type="down" />
          </p>
        </Dropdown>
      </NavLink>
    </li>
    <li>
      <NavLink to="/about">Про нас</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Контакты </NavLink>
    </li>
  </ul>
);

export default Navigation;
