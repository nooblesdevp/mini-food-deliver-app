import React, { useEffect, useState } from "react";
import { MdStar, MdStarHalf } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import "./CardFood.css";
import { useStateValue } from "../config/Provider";

function CardFood({
  food: { id, name, imgFood, author, ratting, price, category },
}) {
  const [{ basket, showBasket }, dispatch] = useStateValue();

  const addBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      food: {
        id,
        name,
        imgFood,
        author,
        category,
        ratting,
        price,
      },
    });
  };

  return (
    <div className="cardFood">
      <img className="cardFood__img" src={imgFood} alt="" />
      <div className="cardFood__info">
        <div className="cardFood__ratting">
          <span> {ratting}</span>
          <div>
            <MdStar className="cardFood__rattingIcon" />
            <MdStar className="cardFood__rattingIcon" />
            <MdStar className="cardFood__rattingIcon" />
            <MdStar className="cardFood__rattingIcon" />
            <MdStarHalf className="cardFood__rattingIcon" />
          </div>
        </div>
        <h3>{name}</h3>
        <span> By {author}</span>
        <div className="cardFood__price">
          <h3> Rp {price}</h3>
          <button onClick={addBasket}>
            add
            <BsPlus className="cardFood__rattingIcon addIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardFood;
