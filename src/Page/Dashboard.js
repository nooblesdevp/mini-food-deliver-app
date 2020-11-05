import React from "react";
import DatePicker from "react-horizontal-datepicker";
import { NavLink } from "react-router-dom";
import Location from "../Components/Location";
import Nabvar from "../Components/Nabvar";
import "./Dashboard.css";

function Dashboard() {
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
    </div>
  );
}

export default Dashboard;
