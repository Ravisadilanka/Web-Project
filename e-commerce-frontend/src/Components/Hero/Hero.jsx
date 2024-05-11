import React from "react";
import "./Hero.css";
import hero from "../Assets/hero2.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>STYLING YOUR FASHION</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Find</p>
            
          </div>
          <p>Your</p>
          <p>Colorful Style</p>
        </div>
        <div className="hero-latest-btn">
          <div>Trending Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
