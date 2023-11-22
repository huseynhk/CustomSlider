import React from "react";
import { useSliderContext } from "./contexts/SliderContext";

const SliderDots = () => {
  const { activeIndex, SliderImgs, handleDotClick } = useSliderContext()
 return (
    <>
      <div className="all-dots">
        {SliderImgs.map((_, index) => (
          <span
            key={index}
            className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </>
  );
};

export default SliderDots;
