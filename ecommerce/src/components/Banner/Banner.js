import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

import { useState } from "react";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="img-container"
    >
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="./Media/prote.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="./Media/strenght.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="./Media/training.jpg"
          alt="Third slide"
          width="50"
          height=""
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
