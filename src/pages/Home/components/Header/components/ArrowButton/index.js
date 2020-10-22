import React from "react";
import "./ArrowButton.css"

function ArrowButton(props) {
  return (
    <div>
      <button className="arrowBtn" style={{ verticalAlign: "middle" }} onClick={props.onClick} >
        <span>Get Started</span>
      </button>
    </div>
  );
}

export default ArrowButton;
