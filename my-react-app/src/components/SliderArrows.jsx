import React from "react";
import { useSliderContext } from "./contexts/SliderContext";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const SliderArrows = () => {
  const { prevSlide, nextSlide } = useSliderContext();
  return (
    <>
      <div className="arrows">
        <span className="prev" onClick={prevSlide}>
          <FaChevronLeft />
        </span>
        <span className="next" onClick={nextSlide}>
          <FaChevronRight />
        </span>
      </div>
    </>
  );
};

export default SliderArrows;
