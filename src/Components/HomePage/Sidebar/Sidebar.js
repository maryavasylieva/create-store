import React, { useState } from "react";
import styled from "styled-components";
import Media from "react-media";
import { CSSTransition } from "react-transition-group";
import { CloseRounded } from "@material-ui/icons";

import { ReactComponent as SidebarMenu } from "../../../assets/icon/menuSidebar/menu.svg";
import Menu from "./Menu";
import "./Sidebar.css";

const Sidebar = ({ items, sticky }) => {
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

const SideBurger = styled(SidebarMenu)`
  display: inline-block;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export default Sidebar;
