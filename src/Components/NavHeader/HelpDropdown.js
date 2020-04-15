import React from "react";
import { Menu } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { helpRoutes } from "../routes";

const HelpDropdown = () => {
  return (
    <MenuDropdown>
      {helpRoutes.map(route => (
        <Item key={route.path}>
          <Link to={route.path}>{route.name}</Link>
        </Item>
      ))}
    </MenuDropdown>
  );
};


const Link = styled(NavLink)`
  color: ${({theme}) => theme.colors.black};
  font-size: 12px;
  &:hover {
    color: ${({theme}) => theme.colors.softGrey};
  }
`;


const MenuDropdown = styled(Menu)`
  width: 200px;
  /* text-transform: uppercase; */
  margin-top: 16px;
`;

const Item = styled(Menu.Item)`
  padding: 10px;
  &:hover {
    background-color: ${({theme}) => theme.colors.mainColor};
  }
`;

export default HelpDropdown;
