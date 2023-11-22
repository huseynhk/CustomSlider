import React, { useEffect } from "react";
import { useSliderContext } from "./contexts/SliderContext";
import SliderArrows from "./SliderArrows";
import SliderDots from "./SliderDots";
import SliderUrls from "./SliderUrls";

const Slider = () => {
  const { imgsLength, activeIndex, setActiveIndex } = useSliderContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === imgsLength ? 0 : activeIndex + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <div className="slider-container">
        <SliderUrls />
        <SliderArrows />
        <SliderDots />
      </div>
    </>
  );
};

export default Slider;
