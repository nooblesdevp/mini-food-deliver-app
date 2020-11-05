import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Nabvar() {
  return (
    <div className="nav">
      <NavLink activeClassName="active" to="/lunch">
        Lunch
      </NavLink>
      <NavLink activeClassName="active" to="/dinner">
        Dinner
      </NavLink>
    </div>
  );
}

export default Nabvar;
