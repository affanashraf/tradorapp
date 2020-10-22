import React from "react";
import "./Pricing.css";
import PricingCard from "./PricingCard";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import usePricingCard from "./usePricingCard";
function Pricing() {
  const [items, goLeft, goRight] = usePricingCard();
  return (
    <div className="pricing-container">
      <div className="pricing-title">
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__fadeInLeft"
          duration="1"
        >
          <text>PRICING</text>
        </ScrollAnimation>
      </div>

      <div className="pricing-cards">
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__fadeInLeft"
          duration="1"
        >
          <PricingCard
            title="PERSONAL"
            price="9.99"
            img="price-1"
            position={items.item_2}
            list={[
              { label: "Lorem ipsum", check: true },
              { label: "Dolar sit amet", check: true },
              { label: "Consectetur adipisicin", check: true },
              { label: "Se do elusmo", check: false },
              { label: "Tempor incididunt", check: false },
            ]}
          />
        </ScrollAnimation>

        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration="1"
        >
          <PricingCard
            title="BUSINESS"
            price="49.99"
            img="price-3"
            position={items.item_1}
            list={[
              { label: "Lorem ipsum", check: true },
              { label: "Dolar sit amet", check: true },
              { label: "Consectetur adipisicin", check: true },
              { label: "Se do elusmo", check: true },
              { label: "Tempor incididunt", check: true },
            ]}
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__fadeInRight"
          duration="1"
        >
          <PricingCard
            title="ADVANCED"
            price="19.99"
            img="price-2"
            position={items.item_3}
            list={[
              { label: "Lorem ipsum", check: true },
              { label: "Dolar sit amet", check: true },
              { label: "Consectetur adipisicin", check: true },
              { label: "Se do elusmo", check: true },
              { label: "Tempor incididunt", check: false },
            ]}
          />
        </ScrollAnimation>
      </div>
      <div className="pricing-btns">
        <i
          className="fa fa-long-arrow-left"
          style={{ fontSize: "40px", marginRight: "5px" }}
          onClick={goLeft}
        ></i>
        <i
          className="fa fa-long-arrow-right"
          style={{ fontSize: "40px" }}
          onClick={goRight}
        ></i>
      </div>
    </div>
  );
}

export default Pricing;
