import React from "react";
import { BASEURL } from "../URL/url";
import CarouselItem from "./CarouselItem";
function Carousel() {
  const carouselData = [
    { image: "construction.jpg" },
    { image: "engineering.jpg" },
    { image: "computer-science.jpg" },
    { image: "medical.jpg" },
    { image: "law.jpg" },
  ];
  return (
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        {carouselData.map((item, index) => (
          <CarouselItem item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
