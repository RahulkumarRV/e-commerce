import React, { useState } from "react";
import { WestOutlined, EastOutlined } from "@mui/icons-material";
import "./Slider.scss";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.unsplash.com/photo-1664574652984-5b5f769bef07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1671898463267-a4ffac5b743c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1047&q=80",
    "https://plus.unsplash.com/premium_photo-1666174328188-9d445cd7ee2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
    // setCurrentSlide(1);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % data.length);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
}

export default Slider;
