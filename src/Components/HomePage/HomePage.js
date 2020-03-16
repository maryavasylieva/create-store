import React from "react";
import styled from "styled-components";

import Slider from "../Slider/Slider";
import images from "../Slider/images";
import Advantages from "./Advantages";
import NewProduct from "./NewProduct";
import newProduct from "../../assets/newProduct.json";

const HomePage = () => {
  return (
    <>
      <Slider slides={images} autoPlay={2} />
      <Advantages />
      <Container>
        <RightSidebar>
          <NewProduct newProduct={newProduct} />
        </RightSidebar>
        <LeftSidebar></LeftSidebar>
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
    width: 1190px;
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
    width: 80%;
  }
`;

const LeftSidebar = styled.div`
  @media screen and (min-width: 1200px) {
    position: relative;
    display: block;
    width: 20%;
    display: flex;
    background-color: grey;
  }
`;

export default HomePage;
