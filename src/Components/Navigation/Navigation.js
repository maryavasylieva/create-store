import React from "react";
import { NavLink } from "react-router-dom";
import DropdownList from "../Navigation/Dropdown";
import { Dropdown, Icon } from "antd";
import "antd/dist/antd.css";

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
          <a
            className="ant-dropdown-link"
            href="#"
            onClick={e => e.preventDefault()}
          >
            Каталог <Icon type="down" />
          </a>
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
