import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import styled from "styled-components";

import images from "../../assets/images";


const Carousel = () => {
  return (
    <Slider autoplay={3000}>
      {images.map((img, index) => (
        <StyledImg key={index} img={img} />
      ))}
    </Slider>
  );
};

const StyledImg = styled.div`
  display: block;
  background: url(${({ img }) => img.image}) no-repeat center center;
  background-size: cover;
`;

export default Carousel;
