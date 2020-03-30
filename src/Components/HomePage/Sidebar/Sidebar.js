import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Sidebar = ({ items }) => {
  return (
    <div>
      <SubTitle>Категории товаров</SubTitle>
      <div>
        <SidebarList>
          {items.map((item, i) => (
            <ItemList key={item + i}>
              <StyleLink to="/">{item.title}</StyleLink>
            </ItemList>
          ))}
        </SidebarList>
      </div>
    </div>
  );
};

const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 15px;
  text-transform: uppercase;
  text-align: left;
  font-weight: 600;
  padding: 13px 15px;
  color: ${({ theme }) => theme.colors.subTitle};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin: 0;
  border-radius: 4px;
`;

const SidebarList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ItemList = styled.li`
  text-align: left;
  padding: 10px 30px 10px 18px;
  font-size: 13px;
  font-weight: 600;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.hoverButton};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    transition: all 300ms ease-in-out;
  }
`;

const StyleLink = styled(Link)`
  color: ${({ theme }) => theme.colors.subTitle};
  &:hover {
    color: ${({ theme }) => theme.colors.hoverText};
  }
`;

export default Sidebar;
