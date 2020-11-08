import React from "react";
import { MdStar, MdStarHalf } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import "./CardFood.css";

function CardFood({ food }) {
  return (
    <div className="cardFood">
      <img className="cardFood__img" src={food.imgFood} alt="" />
      <div className="cardFood__info">
        <div className="cardFood__ratting">
          <span> {food.ratting}</span>
          <div>
            <MdStar className="cardFood__rattingIcon" />
            <MdStar className="cardFood__rattingIcon" />
            <MdStar className="cardFood__rattingIcon" />
            <MdStar className="cardFood__rattingIcon" />
            <MdStarHalf className="cardFood__rattingIcon" />
          </div>
        </div>
        <h3>{food.name}</h3>
        <span> By {food.author}</span>
        <div className="cardFood__price">
          <h3> Rp {food.price}</h3>
          <button>
            add
            <BsPlus className="cardFood__rattingIcon addIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardFood;
