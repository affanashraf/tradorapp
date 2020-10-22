import React from "react";
import "./PartnerShip.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
function PartnerShip() {
  return (
    <div style={{ width: "100%" }}>
      <div className="partnership-title">
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__fadeInLeft"
          duration="1"
        >
          <text>PARTNERSHIP</text>
        </ScrollAnimation>
      </div>
      <div>
        <div className="partnership-logos">
          <ScrollAnimation
            animateOnce={true}
            animateIn="animate__bounceIn"
            duration="1"
          >
            <img src="/images/ibl.jpg" className="partnership-logo" />
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="animate__bounceIn"
            duration="1"
          >
            <img src="/images/hp.jpg" className="partnership-logo" />
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="animate__bounceIn"
            duration="1"
          >
            <img src="/images/ebay.png" className="partnership-logo" />
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="animate__bounceIn"
            duration="1"
          >
            <img src="/images/lowes.png" className="partnership-logo" />
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="animate__bounceIn"
            duration="1"
          >
            <img src="/images/visa.png" className="partnership-logo" />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default PartnerShip;
