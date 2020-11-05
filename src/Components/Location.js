import React from "react";
import { MdArrowBack, MdExpandMore } from "react-icons/md";
import "./Location.css";

function Location() {
  return (
    <div className="dashboard__header">
      <div className="dashboard__headerLeft">
        <MdArrowBack className="dashboard__headerLeft__icon" />
      </div>
      <div className="dashboard__headerRight">
        <span>jl Mas Mansyur no 78</span>
        <div className="dashboard__headerLocation">
          <h3>Tokopedia Tower</h3>
          <MdExpandMore className="dashboard__headerRight__icon" />
        </div>
      </div>
    </div>
  );
}

export default Location;
