import React from "react";
import Hero from "../components/Hero/Hero";
import Join from "../components/Join/Join";
import About from "../components/About/About";
import Bestselling from "../components/Bestselling/Bestselling";
import Offers from "../components/Offers/Offers";
import Feedback from "../components/Feedback/Feedback";
import "../App.css";

function homepage() {
  return (
    <div className="App">
      <Hero />
      <Bestselling />
      <Offers />
      <Feedback />
      <About />
      <Join />
    </div>
  );
}

export default homepage;
