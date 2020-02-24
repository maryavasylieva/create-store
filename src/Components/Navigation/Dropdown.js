import React from "react";
import { Menu } from "antd";

import { NavLink } from "react-router-dom";
import { dropdownRoutes } from "../routes";

const DropdownList = () => (
  <Menu>
      {dropdownRoutes.map(route => <Menu.Item key={route.path}>
        <NavLink to={route.path}>
            {route.name}
        </NavLink>
      </Menu.Item>)}
  </Menu>
);



export default DropdownList;
