import React from "react";

import Slider from "../Slider/Slider";
import images from "../Slider/images"
import Advantages from "./Advantages"

const HomePage = () => {
  return (
    <>
      <Slider slides={images} autoPlay ={2} />
      <Advantages/>
    </>
  );
};

export default HomePage;
