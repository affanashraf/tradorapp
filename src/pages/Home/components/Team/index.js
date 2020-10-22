import React from "react";
import TeamCard from "./components/TeamCard";
import "./Team.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import useTeamCard from "./useTeamCard";
function Team() {
  const [items, goLeft, goRight] = useTeamCard();

  return (
    <div
      style={{
        width: "1280px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ScrollAnimation
        animateOnce={true}
        animateIn="animate__fadeInLeft"
        duration="1"
      >
        <div className="team-title">
          <text>OUR TEAM</text>
        </div>
      </ScrollAnimation>

      <div className="team-cards-container">
        <ScrollAnimation
          animateOnce={true}
          duration="2"
          animateIn="animate__zoomInDown"
        >
          <div className="team-background"></div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="animate__fadeInDown"
          animateOnce={true}
          duration="1"
        >
          <TeamCard
            image="team-2.jpg"
            title="Sarah Jhonson"
            subtitle="Co-Founder & CTO"
            desc="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. "
            bottom="Explore"
            type={items.item_3}
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeInLeft"
          animateOnce={true}
          duration="1"
        >
          <TeamCard
            image="team-3.png"
            title="CodeSutras Technology LTD"
            subtitle="Co-Founder & Technology Partner"
            desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            bottom="Explore"
            type={items.item_2}
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeInRight"
          animateOnce={true}
          duration="1"
        >
          <TeamCard
            image="team-1.jpg"
            title="NS Fidai"
            subtitle="Co-Founder & CTO"
            desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
            bottom="Explore"
            type={items.item_1}
          />
        </ScrollAnimation>
      </div>
      <div className="team-arrow-btn">
        <i
          className="fa fa-long-arrow-left"
          style={{
            marginRight: "5px",
            fontSize: "40px",
            cursor: "pointer",
          }}
          onClick={goLeft}
        ></i>
        <i
          className="fa fa-long-arrow-right"
          style={{ marginLeft: "5px", fontSize: "40px", cursor: "pointer" }}
          onClick={goRight}
        ></i>
      </div>
    </div>
  );
}

export default Team;
