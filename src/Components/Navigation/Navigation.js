import React, { useState } from "react";
import Media from "react-media";
import { MenuRounded, CloseRounded } from "@material-ui/icons";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import SvgIcon from "./SVG/SvgIcons";
import Logo from "../../assets/img/ArtistShopLogo.png";
import BurgerMenu from "../Navigation/BurgerMenu/BurgerMenu";
import "../../stylesheet/styleAnimation.css";
import NavigationList from "./NavigationList/NavigationList";

const Navigation = () => {
  const [state, setState] = useState({
    isOpen: false
  });

  const { isOpen } = state;

  const handleClickOpen = () => {
    setState({ ...state, isOpen: true });
  };

  const handleClickClose = () => {
    setState({ ...state, isOpen: false });
  };

  return (
    <Nav>
      <div>
        <LogoImg src={Logo} alt="logo"></LogoImg>
      </div>
      <div>
        <Media
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1023px)",
            large: "(min-width: 1024px)"
          }}
        >
          {matches => (
            <>
              {matches.small && (
                <>
                  {isOpen ? (
                    <CloseRounded onClick={handleClickClose} />
                  ) : (
                    <MenuRounded onClick={handleClickOpen} />
                  )}
                  <CSSTransition
                    in={isOpen}
                    timeout={200}
                    classNames="fade"
                    unmountOnExit
                  >
                    <BurgerMenu />
                  </CSSTransition>
                </>
              )}
              {matches.medium && (
                <>
                  {isOpen ? (
                    <CloseRounded
                      fontSize="large"
                      onClick={handleClickClose}
                    />
                  ) : (
                    <MenuRounded
                      fontSize="large"
                      onClick={handleClickOpen}
                    />
                  )}
                  <CSSTransition
                    in={isOpen}
                    timeout={200}
                    classNames="fade"
                    unmountOnExit
                  >
                    <BurgerMenu />
                  </CSSTransition>
                </>
              )}
              {matches.large && <NavigationList />}
            </>
          )}
        </Media>
      </div>
      <NavSvgContainer>
        <SvgIcon />
      </NavSvgContainer>
    </Nav>
  );
};

const Nav = styled.div`
  max-width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const LogoImg = styled.img`
  width: 100px;
  height: 70px;
  margin-top: 15px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    width: 150px;
    height: 100px;
  }
`;

const NavSvgContainer = styled.div`
  display: flex;
`;

export default Navigation;
