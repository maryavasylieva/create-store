import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Logo from "../../assets/img/ArtistShopLogo.png";

const NavHeader = () => {
  return (
      <HeadContainer>
        <HeadLeft>
          <HeadText to="/">Phone: +01 234 09 25</HeadText>
          {/* TODO: Functional: при нажатии на link, открывается форма для отправки сообщения */}
          <HeadText to="/">Email: email@email.com</HeadText>
        </HeadLeft>

        <HeadRight>
          <HeadText to="/personalCard">Карта лояльности</HeadText>
          <HeadText to="/auth">Войти</HeadText>
        </HeadRight>
      </HeadContainer>
  );
};

const HeadContainer = styled.div`
 display: none;

 @media screen and (min-width: 768px){
    display: flex;
    justify-content: space-around;
    background-color: #edeaea;
    margin-bottom: 10px;
    width: 100%;
 }

  /* TODO: set hardcoded color to the variable */
`;

// const LogoImg = styled.img`
//    margin: 0 auto;
// `

const HeadRight = styled.div`
  padding: 10px 0px;
`;

const HeadLeft = styled.div`
  padding: 10px 0px;
`;

const HeadText = styled(Link)`
  color: #c1bdbd;
  text-transform: uppercase;
  font-size: 11px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export default NavHeader;
