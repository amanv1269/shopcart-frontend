import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCaoruselData";

const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <img className="cursor-pointer -z-10" src={item.image} alt="" />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1500}
      infinite
    />
  );
};

export default MainCarousel;
