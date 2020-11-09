import React, { useState } from "react";
import { MdArrowBack, MdExpandMore } from "react-icons/md";
import "./Location.css";
import ModalLocation from "./ModalLocation";

function Location() {
  const [smShow, setSmShow] = useState(false);

  return (
    <div className="dashboard__header">
      <div className="dashboard__headerLeft">
        <MdArrowBack className="dashboard__headerLeft__icon" />
      </div>
      <div onClick={() => setSmShow(true)} className="dashboard__headerRight">
        <span>jl Mas Mansyur no 78</span>
        <div className="dashboard__headerLocation">
          <h3>Tokopedia Tower</h3>
          <MdExpandMore className="dashboard__headerRight__icon" />
        </div>
      </div>
      <ModalLocation
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      />
    </div>
  );
}

export default Location;
