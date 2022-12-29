import React, { useState } from "react";
import { WestOutlined, EastOutlined } from "@mui/icons-material";
import "./Slider.scss";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    'https://media.istockphoto.com/id/1356569932/photo/style-and-confidence.jpg?b=1&s=170667a&w=0&k=20&c=MvMzYpB6-WWMn2e95A2H6ICu0XERnL61PwvnQYrbr3o=',
    "https://media.istockphoto.com/id/496603268/photo/set-of-business-mens-clothing.jpg?s=170667a&w=0&k=20&c=LH1pa1xVNrHw7enRhkoSW9RfOnhpRtXcIdaUymxApS4=",
    "https://media.istockphoto.com/id/1342849839/photo/beautiful-afro-woman-with-pigtails-and-stylish-clothes.jpg?b=1&s=170667a&w=0&k=20&c=RV0HexrtzJmjLsHSWMpPBvyiBdJvTapc5ReUvqtSYwQ=",
    
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
