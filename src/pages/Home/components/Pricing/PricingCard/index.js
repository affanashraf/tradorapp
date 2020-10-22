import React from "react";
import "./PricingCard.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
function PricingCard(props) {
  return (
    <div className={`pricing-card-container pricing-card-${props.position}`}>
      <div className="pricing-card-title">{props.title}</div>
      <div className="pricing-card-icon">
        <img src={`/images/${props.img}.png`} style={{ width: "45%" }} />
      </div>
      <div className="pricing-card-price">{`$ ${props.price} / month`}</div>
      {
        <div className="pricing-card-list">
          {props.list.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "90%",
                  color: "#7384a4",
                }}
              >
                <text>{item.label}</text>
                {item.check ? <i className="fa fa-check"></i> : undefined}
              </div>
            );
          })}
        </div>
      }
      <div>
        <button
          className={
            props.position !== "pricing-card-left" &&
            props.position !== "pricing-card-right"
              ? `pricing-card-btn`
              : `pricing-card-btn-outline`
          }
          // disabled={
          //   props.position !== "pricing-card-left" &&
          //   props.position !== "pricing-card-right"
          //     ? false
          //     : true
          // }
        >
          <span style={{ padding: "10px", marginLeft: "10px" }}>
            Get Started
          </span>
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
