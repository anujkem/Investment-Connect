import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

const Slide = ({children, slidesToShow, arrowsScroll }) => {
  return (
    <div>
      <h1>Explore Managers</h1>
      <div className="slide">
        <div className="container">
          <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slide;