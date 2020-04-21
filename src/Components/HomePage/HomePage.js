import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import _ from 'lodash';

import Advantages from "./Advantages/Advantages";
import NewProduct from "./NewProduct/NewProduct";
import newProduct from "../../assets/newProduct.json";
import items from "../../assets/sidebarItems.json";
import Sidebar from "./Sidebar/Sidebar";

const HomePage = () => {
  const [isSticky, setSticky] = useState(false);
  const stickyRef = useRef(null);

  const handleScroll = () => {
    window.pageYOffset > stickyRef.current.getBoundingClientRect().top
      ? setSticky(true)
      : setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", _.debounce(handleScroll, 30));
    return () => window.removeEventListener("scroll", () => handleScroll);
  }, []);

  return (
    <>
      <Advantages />
      <Container>
        <RightSidebar>
          <NewProduct stickyRef={stickyRef} newProduct={newProduct} />
        </RightSidebar>
        <LeftSidebar>
          <Sidebar items={items} sticky={isSticky} />
        </LeftSidebar>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  font-weight: normal;
  @media screen and (min-width: ${({ theme }) => theme.screen.tablet}) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    margin: 0 auto;
  }
`;

const RightSidebar = styled.div`
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    display: block;
    width: 78%;
  }
`;

const LeftSidebar = styled.div`
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    display: block;
    height: 850px;
    display: flex;
    border-radius: 4px;
  }
`;

export default HomePage;
