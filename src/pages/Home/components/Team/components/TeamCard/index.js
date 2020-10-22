import React from "react";
import "./TeamCard.css";

function TeamCard(props) {
  return (
    <div className={`team-card team-card-${props.type}`}>
      <img src={`/images/${props.image}`} className="team-img" alt="Image" />
      <div  >
        <text className="team-card-title">{props.title}</text>
        <text className="team-card-subtitle">{props.subtitle}</text>
      </div>
      <p className="team-card-txt">{props.desc}</p>
      <text className="team-card-bottom-txt">{props.bottom}</text>
    </div>
  );
}
TeamCard.defaultProps = {
  image: "",
  title: "",
  subtitle: "",
  desc: "",
  bottom: "",
  type: "",
};

export default TeamCard;
