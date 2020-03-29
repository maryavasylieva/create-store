import React from "react";
import styled from "styled-components";

import Advantages from "./Advantages/Advantages";
import NewProduct from "./NewProduct/NewProduct";
import newProduct from "../../assets/newProduct.json";
import Sidebar from "./Sidebar/Sidebar";
import items from "../../assets/sidebarItems.json";

const HomePage = () => {
  return (
    <>
      <Advantages />
      <Container>
        <RightSidebar>
          <NewProduct newProduct={newProduct} />
        </RightSidebar>
        <LeftSidebar>
          <Sidebar items={items} />
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
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    /* width: 1190px; */
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    margin: 0 auto;
  }
`;

const RightSidebar = styled.div`
  @media screen and (min-width: 1200px) {
    position: relative;
    display: block;
    width: 78%;
  }
`;

const LeftSidebar = styled.div`
  @media screen and (min-width: 1200px) {
    position: relative;
    display: block;
    width: 22%;
    height: 850px;
    display: flex;
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
`;

export default HomePage;
