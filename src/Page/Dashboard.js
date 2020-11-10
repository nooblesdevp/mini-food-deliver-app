import React, { useEffect, useState } from "react";
import DatePicker from "react-horizontal-datepicker";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../config/Provider";
import Basket from "../Components/Basket";
import CardFood from "../Components/CardFood";
import Location from "../Components/Location";
import Nabvar from "../Components/Nabvar";
import { footData } from "../foodData";
import "./Dashboard.css";

function Dashboard({ getSelectedDay }) {
  const [foodData, setFoodData] = useState(footData);

  const [{ basket, showBasket }, dispatch] = useStateValue();

  console.log("basket", basket);
  const selectedDay = (val) => {
    console.log(val);
  };

  return (
    <div className="dasboard container">
      <Location />
      <DatePicker
        getSelectedDay={selectedDay}
        endDate={100}
        selectDate={new Date("2020-04-30")}
        labelFormat={"MMMM"}
        color={"#6e7679"}
      />
      <Nabvar />
      <h5> Minggu, 7 November 2020 </h5>
      {basket.length > 0 ? <Basket /> : null}
      {foodData.map((item) => (
        <CardFood key={item.id} item={item} />
      ))}
      item
    </div>
  );
}

export default Dashboard;
