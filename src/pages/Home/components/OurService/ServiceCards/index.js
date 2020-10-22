import React from "react";
import "./ServiceCards.css";
import ServiceCard from "../ServiceCard";
import "font-awesome/css/font-awesome.min.css";
import useServiceButton from "../useServiceButton";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

const AnimatedServiceCard = (Card) => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInLeft"
      duration="1"
      animateOnce={true}
    >
      {Card}
    </ScrollAnimation>
  );
};

function ServiceCards() {
  const [items, goLeft, goRight] = useServiceButton();
  return (
    <div className="service-cards-container">
     
        <ServiceCard
          title="Service Name"
          desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC."
          position={items.item_1}
        />
      {AnimatedServiceCard(
        <ServiceCard
          title="Service Name"
          desc="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
          position={items.item_2}
        />
      )}
      {AnimatedServiceCard(
        <ServiceCard
          title="Service Name"
          desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
          position={items.item_3}
        />
      )}
      <i
        className="fa fa-long-arrow-left"
        style={{
          left: "270px",
        }}
        onClick={goLeft}
      ></i>
      <i
        className="fa fa-long-arrow-right"
        style={{
          left: "320px",
        }}
        onClick={goRight}
      ></i>
    </div>
  );
}

export default ServiceCards;
