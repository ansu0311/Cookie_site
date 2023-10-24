import React from "react";
import "./Hero.css";
import total_pic from "../../assets3/Tape and Image small.png";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <dir className="image_cont">
        <img className="total_image " src={total_pic} alt="cookies tub with brand straps" />
      </dir>
    </div>
  );
};

export default Hero;
