import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Media from "react-media";
import { CSSTransition } from "react-transition-group";
import { CloseRounded } from "@material-ui/icons";

import { ReactComponent as SidebarMenu } from "../../../assets/icon/menuSidebar/menu-color.svg";
import Menu from "./Menu";
import "../../../stylesheet/styleAnimation.css";

const Sidebar = ({ items }) => {
  const [state, setState] = useState({
    isOpen: false
  });

  const { isOpen } = state;

  const fixScroll = useRef();

  useEffect(() => {
    fixScroll.current = fixSidebar;
  });

   const fixSidebar = () => {
    //  if() {

    //  }
   }


  const handleClickOpen = () => {
    setState({ ...state, isOpen: true });
  };

  const handleClickClose = () => {
    setState({ ...state, isOpen: false });
  };

  return (
    <>
      <div>
        <Media
          queries={{
            small: "(max-width: 328px)",
            medium: "(min-width: 768px) and (max-width: 1189px)",
            large: "(min-width: 1200px)"
          }}
        >
          {matches => (
            <>
              {matches.small && (
                <>
                  {isOpen ? (
                    <CloseRounded onClick={handleClickClose} />
                  ) : (
                    <SideBurger onClick={handleClickOpen} />
                  )}
                  <CSSTransition
                    in={isOpen}
                    timeout={200}
                    classNames="fade"
                    unmountOnExit
                  >
                    <Menu items={items} />
                  </CSSTransition>
                </>
              )}
              {matches.medium && (
                <>
                  {isOpen ? (
                    <CloseRounded fontSize="large" onClick={handleClickClose} />
                  ) : (
                    <SideBurger fontSize="large" onClick={handleClickOpen} />
                  )}
                  <CSSTransition
                    in={isOpen}
                    timeout={200}
                    classNames="fade"
                    unmountOnExit
                  >
                    <Menu items={items} />
                  </CSSTransition>
                </>
              )}
              {matches.large && <Menu items={items} />}
            </>
          )}
        </Media>
      </div>
    </>
  );
};

// const Container = styled.div`
//   position: fixed;
//   width: 100%;
//   top: 0;
// `;

// const Wrapper = styled.div`
//   background-color: beige;
//   width: 50px;
//   height: 50px;
//   border-top-right-radius: 20%;
//   border-bottom-right-radius: 20%;
// `;

const SideBurger = styled(SidebarMenu)`
  width: 30px;
  height: 30px;
  margin: 10px 0px 0px 10px;
`;

export default Sidebar;
