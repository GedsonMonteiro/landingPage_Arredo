import React from "react";
import ReactStars from "react-rating-stars-component";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p className="rating">
        <ReactStars />
      </p>
      <p> £{price} </p>
    </div>
  );
}

export default MenuItem;