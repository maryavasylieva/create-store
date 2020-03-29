import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import DropdownList from "../Dropdown/Dropdown";

const NavigationList = () => {
  return (
    <NavList>
      <NavElem>
        <Link to="/" exact >
          Главная
        </Link>
      </NavElem>
      <NavElem>
        <Link to="/catalog">
          <Dropdown overlay={DropdownList}>
            <TextDrop>
              Каталог <DownOutlined />
            </TextDrop>
          </Dropdown>
        </Link>
      </NavElem>
      <NavElem>
        <Link to="/about" >
          Про нас
        </Link>
      </NavElem>
      <NavElem>
        <Link to="/contact" >
          Контакты
        </Link>
      </NavElem>
    </NavList>
  );
};

const Link = styled(NavLink)`
   color: ${({theme}) => theme.colors.black};
   &:hover{
     color: ${({theme}) => theme.colors.softGrey};
   }
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.white};
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
  font-family: ${({theme}) => theme.fonts.montserrat};
  margin-right: 20px;
`;

export default NavigationList;
