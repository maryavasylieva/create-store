import React from "react";
import { Menu } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { dropdownRoutes } from "../../routes";

const DropdownList = () => (
  <MenuDropdown>
    {dropdownRoutes.map(route => (
      <Item key={route.path}>
        <Link to={route.path}>{route.name}</Link>
      </Item>
    ))}
  </MenuDropdown>
);

const Link = styled(NavLink)`
  color: ${({theme}) => theme.colors.black};
  &:hover {
    color: ${({theme}) => theme.colors.softGrey};
  }
`;


const MenuDropdown = styled(Menu)`
  width: 220px;
  text-transform: uppercase;
`;

const Item = styled(Menu.Item)`
  padding: 10px;
  &:hover {
    background-color: ${({theme}) => theme.colors.mainColor};
  }
`;
export default DropdownList;
