import React from "react";
import "./ServiceCard.css";
import "font-awesome/css/font-awesome.min.css";

function ServiceCard(props) {
  return (
    <div className={`service-card ${props.position}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100%",
        }}
      >
        <text className="service-card-title">{props.title}</text>
        <p className="service-card-desc">
          {props.desc}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "70%",
            color: "#016a66",
          }}
        >
          <text className="service-read-more">Read More</text>
          <i className="fa fa-arrow-right" />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
