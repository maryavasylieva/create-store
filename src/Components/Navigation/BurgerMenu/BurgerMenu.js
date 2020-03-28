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
  color: #000000;
  &:hover {
    color: #afacac;
  }
`;

const TextDrop = styled.p`
  margin: 0;
`;

const BurgerList = styled.ul`
  list-style-type: none;
  background-color: white;
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
    background-color: beige;
    left: 15px;
    width: 600px;
  }
`;

const BurgerItem = styled.li`
  padding: 20px 15px;
  text-transform: uppercase;
  &:hover {
    background-color: #edeaea;
  }
`;

export default BurgerMenu;
