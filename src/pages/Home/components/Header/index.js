import React from "react";
import "./Header.css";
import ArrowButton from "./components/ArrowButton";
import PlayButton from "./components/PlayButton";
import Poster from "./components/Poster";
import "animate.css";
import {useHistory} from "react-router-dom"

function Header() {
  const history = useHistory()
  return (
      <div className="item1">
        <div className="top-space"></div>
        <img className="cover" src="/images/cover.png" alt="Cover"></img>
        <img
          className="cover-mob"
          src="/images/cover-mob.png"
          alt="cover"
        ></img>
        <div className="topleft">
          <Poster />
          <div className="start-watch animate__animated animate__backInUp ">
            <ArrowButton onClick={()=>history.push("/login")} />
            <PlayButton />
          </div>
        </div>
      </div>
  );
}

export default Header;
