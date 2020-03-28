import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import images from "./images";
import "./slider.css"
// import styled from "styled-components";

const Carousel = () => {
  return (
    <Slider autoplay={3000}>
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            background: `url('${img.image}') no-repeat center center`,
            backgroundSize: "cover"
          }}
        />
      ))}
    </Slider>
  );
};



export default Carousel;
