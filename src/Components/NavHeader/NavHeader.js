import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// import { ReactComponent as Mail } from "../../assets/icon/navHeaderIcon/001-mail.svg";
// import { ReactComponent as Phone } from "../../assets/icon/navHeaderIcon/phone.svg";
// import { ReactComponent as Enter } from "../../assets/icon/navHeaderIcon/doorway.svg";
// import { ReactComponent as Exit } from "../../assets/icon/navHeaderIcon/emergency-exit.svg";
// import { ReactComponent as Card } from "../../assets/icon/navHeaderIcon/credit-card.svg";
import IconNavHeader from "./IconNavHeader";

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
          <HeadText to="/personalCard">Карта лояльности</HeadText>
          <HeadText to="/login">Войти</HeadText>
        </HeadRight>
      </HeadContainer>
    </>
  );
};

const padding = css`
  padding: 10px 0px;
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
  /* TODO: set hardcoded color to the variable */
`;

const HeadRight = styled.div`
  ${padding}
`;

const HeadLeft = styled.div`
  ${padding}
`;

const HeadText = styled(Link)`
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

export default NavHeader;
