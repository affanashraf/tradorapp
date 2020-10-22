import React from "react";
import "./OurService.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import ServiceCards from "./ServiceCards";

function Service() {
  return (
    <div className="service-container">
      <ScrollAnimation
        animateIn="animate__fadeInLeft"
        duration="1"
        animateOnce={true}
      >
        <div className="service-header">OUR SERVICES</div>
      </ScrollAnimation>
      <div className="service-body">
        <div className="service-cards">
          <ServiceCards />
        </div>
        <ScrollAnimation
          animateIn="animate__fadeInRight"
          duration="1"
          animateOnce={true}
        >
          <div className="service-icon">
            <img src="/images/service.jpg" style={{ width: "100%" }} />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Service;
