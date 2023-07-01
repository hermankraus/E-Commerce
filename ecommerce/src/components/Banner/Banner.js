import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import { useState } from "react";
import proteImage from '../../Media/prote.png';
import strenghtImage from '../../Media/strenght.png';
import trainingImage from '../../Media/training.png';

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="carousel-container">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="img-container"
        interval={3000} 
      >
        <Carousel.Item>
          <img className="carousel-image" src={strenghtImage} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={proteImage}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={trainingImage}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
};

export default ControlledCarousel;
