import React, { createContext, useContext, useState } from "react";
import SliderImgs from "../SliderImgs";

const SliderContext = createContext();
const imgsLength = SliderImgs.length - 1;

const SliderContextProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? imgsLength : activeIndex - 1);
  };
  const nextSlide = () => {
    setActiveIndex(activeIndex === imgsLength ? 0 : activeIndex + 1);
  };
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  const contextValue = {
    prevSlide,
    nextSlide,
    handleDotClick,
    imgsLength,
    activeIndex,
    setActiveIndex,
    SliderImgs
  };
  const Component = SliderContext.Provider;
  return <Component value={contextValue}>{children}</Component>;
};

const useSliderContext = () => useContext(SliderContext);
export { useSliderContext, SliderContextProvider };
