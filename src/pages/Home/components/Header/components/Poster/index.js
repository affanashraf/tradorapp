import React from "react";
import "./Poster.css";
function Poster() {
  return (
    <div className="poster animate__animated animate__backInDown">
      <div>
        <text className="title">Hero Header</text>
        <div className="horizontal-line" />
      </div>
      <div>
        <div className="left-bottom-line" />
        <p className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </div>
  );
}

export default Poster;
