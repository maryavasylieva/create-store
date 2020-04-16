import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import IconNavHeader from "./IconNavHeader";
import HelpDropdown from "./HelpDropdown";

const NavHeader = () => {
  return (
    <>
      <IconNavHeader />
      <HeadContainer>
        <HeadLeft>
          <HeadText to="/">Phone: +01 234 09 25</HeadText>
          {/* TODO: Functional: при нажатии на link, открывается форма для отправки сообщения */}
          <HeadText to="/">Email: email@email.com</HeadText>
        </HeadLeft>

        <HeadRight>
          <Link to="/infoArt">

          </Link>
          <Link to="/helppage">
            <Dropdown overlay={HelpDropdown}>
              <TextDrop>
                Помощь <DownOutlined />
              </TextDrop>
            </Dropdown>
          </Link>
          <HeadText to="/login">Войти</HeadText>
        </HeadRight>
      </HeadContainer>
    </>
  );
};

const padding = css`
  padding: 10px 0px;
`;

const text = css`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
    color: ${({ theme }) => theme.colors.whiteGrey};
    text-transform: uppercase;
    font-size: 11px;
    &:not(:last-child) {
      margin-right: 10px;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.softGrey};
    }
  }
`;

const HeadContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.mainColor};
    margin-bottom: 10px;
    width: 100%;
  }
`;

const HeadRight = styled.div`
  ${padding}
`;

const HeadLeft = styled.div`
  ${padding}
`;

const HeadText = styled(Link)`
  ${text}
`;

const TextDrop = styled.p`
  ${text}
  padding-right: 10px;
`;

export default NavHeader;
