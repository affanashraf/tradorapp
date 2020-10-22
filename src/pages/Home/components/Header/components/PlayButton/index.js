import React from "react";
import "./PlayButton.css";
import "font-awesome/css/font-awesome.min.css";
function PlayButton() {
  return (
    <div>
      <button className="playBtn">
        <i className="fa fa-play-circle" style={{fontSize:"50px"}} />
        <span style={{padding:"10px",marginLeft:"10px"}} >Watch Now</span>
      </button>
    </div>
  );
}

export default PlayButton;
