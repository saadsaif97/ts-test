import React from "react";
import { BASEURL } from "../URL/url";

function CarouselItem({ item, index }) {
  return (
    <div class={`carousel-item ${index === 0 ? "active" : ""}`}>
      <img
        src={`${BASEURL}images/slider/${item.image}`}
        class="d-block w-100"
        alt="..."
      />
    </div>
  );
}

export default CarouselItem;
