import React from "react";
import { useSliderContext } from "./contexts/SliderContext";

const SliderUrls = () => {
  const { activeIndex, SliderImgs } = useSliderContext();
  return (
    <>
      <section>
        {SliderImgs.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "slides active" : "inactive"}
          >
            <img className="slide-image" src={slide} alt="" />
          </div>
        ))}
      </section>
    </>
  );
};

export default SliderUrls;
