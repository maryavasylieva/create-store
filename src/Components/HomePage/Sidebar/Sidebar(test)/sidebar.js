import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Media from "react-media";
import { CSSTransition } from "react-transition-group";
import { CloseRounded } from "@material-ui/icons";

import { ReactComponent as SidebarMenu } from "../../../../assets/icon/menuSidebar/menu-color.svg";
import Menu from "../Menu";
import "./sidebar.css";

const Sidebar = ({ items, sticky, stickyRef }) => {
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
                <div className={sticky ? "sidebar sidebar-sticky" : "sidebar"}>
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
                </div>
              )}
              {matches.medium && (
                <div className={sticky ? "sidebar sidebar-sticky" : "sidebar"}>
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
                </div>
              )}
              {matches.large && <Menu items={items} />}
            </>
          )}
        </Media>
      </div>
    </>
  );
};

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
