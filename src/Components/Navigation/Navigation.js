import React, { useState } from "react";
import { Dropdown } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import Media from "react-media";
import { MenuRounded, CloseRounded } from "@material-ui/icons";
import { CSSTransition } from "react-transition-group";

// import { ReactComponent as Loupe } from "../../assets/icon/003-loupe.svg";
// import { ReactComponent as LikeHeart } from "../../assets/icon/002-love-and-romance.svg";
// import { ReactComponent as Cart } from "../../assets/icon/001-shopping-cart.svg";

import SvgIcon from "../SVG/SvgIcons";
import Logo from "../../assets/img/ArtistShopLogo.png";
import DropdownList from "../Navigation/Dropdown";
import css from "../Navigation/Navigation.module.css";
import BurgerMenu from "../Navigation/BurgerMenu/BurgerMenu";

const Navigation = () => {
  const [isOpen, open] = useState(false);
  return (
    <Nav>
      <div>
        <LogoImg src={Logo} alt="logo"></LogoImg>
      </div>
      <div>
        <Media
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
          }}
        >
          {matches => (
            <>
              {matches.small &&
                (isOpen ? (
                  <CSSTransition
                    in={isOpen}
                    timeout={200}
                    classNames="fade"
                    unmountOnExit
                  >
                    <div className="dropdown">
                      <BurgerMenu />
                    </div>
                  </CSSTransition>
                ) : (
                  // <div>
                  //   <BurgerMenu />
                  //   <CloseRounded  onClick={()=> open(false)} />
                  // </div>
                  <MenuRounded onClick={() => open(true)} />
                ))}
              {matches.medium &&
                (isOpen ? (
                  <div>
                    <BurgerMenu />
                    <CloseRounded
                      fontSize="large"
                      onClick={() => open(false)}
                    />
                  </div>
                ) : (
                  <MenuRounded fontSize="large" onClick={() => open(true)} />
                ))}
              {matches.large && (
                <NavList>
                  <NavElem>
                    <NavLink to="/" exact className={css.link}>
                      Главная
                    </NavLink>
                  </NavElem>
                  <NavElem>
                    <NavLink to="/catalog" className={css.link}>
                      <Dropdown overlay={DropdownList}>
                        <TextDrop>
                          Каталог <DownOutlined />
                        </TextDrop>
                      </Dropdown>
                    </NavLink>
                  </NavElem>
                  <NavElem>
                    <NavLink to="/about" className={css.link}>
                      Про нас
                    </NavLink>
                  </NavElem>
                  <NavElem>
                    <NavLink to="/contact" className={css.link}>
                      Контакты
                    </NavLink>
                  </NavElem>
                </NavList>
              )}
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
  width: 150px;
  height: 100px;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
`;

const TextDrop = styled.p`
  margin: 0;
`;

const NavElem = styled.li`
  display: block;
  text-decoration: none;
  padding: 40px 0px 40px 0px;
  font-size: 13px;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  margin-right: 20px;
`;

const NavSvgContainer = styled.div`
  display: flex;
  /* align-content: flex-end; */
`;

// const LoupeSvg = styled(Loupe)`
//   display: inline-block;
//   width: 20px;
//   height: 20px;
//   /* margin-top: 20px; */
//   margin-right: 10px;
//   &:hover {
//     fill: blue;
//     transition: all 300ms ease-in-out;
//   }
// `;

// const LikeHeartSvg = styled(LikeHeart)`
//   display: inline-block;
//   width: 20px;
//   height: 20px;
//   /* margin-top: 20px; */
//   margin-right: 10px;
//   &:hover {
//     fill: blue;
//     transition: all 300ms ease-in-out;
//   }
// `;

// const CartSvg = styled(Cart)`
//   display: inline-block;
//   width: 20px;
//   height: 20px;
//   /* margin-top: 20px; */
//   margin-right: 10px;
//   &:hover {
//     fill: blue;
//     transition: all 300ms ease-in-out;
//   }
// `;

export default Navigation;
