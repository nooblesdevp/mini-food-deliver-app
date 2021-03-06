import React, { useState } from "react";
import DatePicker from "react-horizontal-datepicker";
import { NavLink } from "react-router-dom";
import CardFood from "../Components/CardFood";
import Location from "../Components/Location";
import Nabvar from "../Components/Nabvar";
import { footData } from "../foodData";
import "./Dashboard.css";

function Dashboard({ getSelectedDay }) {
  const [foodData, setFoodData] = useState(footData);
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
      <h3> Minggu, 7 November 2020 </h3>
      {foodData.map((food) => (
        <CardFood key={food.id} food={food} />
      ))}
    </div>
  );
}

export default Dashboard;
