"use client"; // for nextjs 13.4
import React from "react";
import { HeroInner, HeroSection } from "./styles";

const Hero = () => {
  return (
    <HeroSection className="light hero">
      <HeroInner>
        <span>
          <h1>GUI PAIS</h1>
          <a href="#" className="btn btn-light">
            Coming SOON
          </a>
        </span>
      </HeroInner>
    </HeroSection>
  );
};

export default Hero;
