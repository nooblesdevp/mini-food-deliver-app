import React from "react";
import DatePicker from "react-horizontal-datepicker";
import Location from "../Components/Location";
import "../Page/Dashboard.css";
import CardFood from "./CardFood";
import Nabvar from "./Nabvar";

function Dinner() {
  const selectedDay = (val) => {
    console.log(val);
  };

  return (
    <div className="dinner container">
      <Location />
      <DatePicker
        getSelectedDay={selectedDay}
        endDate={100}
        selectDate={new Date("2020-04-30")}
        labelFormat={"MMMM"}
        color={"#6e7679"}
      />
      <Nabvar />
      <CardFood />
    </div>
  );
}

export default Dinner;
