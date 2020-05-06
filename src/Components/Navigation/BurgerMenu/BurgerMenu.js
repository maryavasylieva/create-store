import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";

import DropdownList from "../Dropdown/Dropdown";

const BurgerMenu = () => {
  return (
    <BurgerList>
      <BurgerItem>
        <Link to="/" exact>
          Главная
        </Link>
      </BurgerItem>
      <BurgerItem>
        <Link to="/catalog">
          <Dropdown overlay={DropdownList}>
            <TextDrop>
              Каталог <DownOutlined />
            </TextDrop>
          </Dropdown>
        </Link>
      </BurgerItem>
      <BurgerItem>
        <Link to="/about">Про нас</Link>
      </BurgerItem>
      <BurgerItem>
        <Link to="/contact">Контакты</Link>
      </BurgerItem>
    </BurgerList>
  );
};

const Link = styled(NavLink)`
  color: ${({theme}) => theme.colors.black};
  &:hover {
    color: ${({theme}) => theme.colors.softGrey};
  }
`;

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
  z-index: 9;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    left: 15px;
    width: 600px;
  }
`;

const BurgerItem = styled.li`
  padding: 20px 15px;
  text-transform: uppercase;
  &:hover {
    background-color: ${({theme}) => theme.colors.mainColor};
  }
`;

export default BurgerMenu;
