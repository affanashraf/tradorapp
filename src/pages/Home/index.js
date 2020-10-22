import React from "react";
import "./Home.css";
import Header from "./components/Header";
import About from "./components/About";
import Team from "./components/Team";
import OurService from "./components/OurService";
import Pricing from "./components/Pricing";
import PartnerShip from "./components/PartnerShip";
import FAQ from "./components/FAQ";

function Home() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {/* Components */}
      <Header />
      <About />
      <Team />
      <OurService />
      <Pricing />
      <PartnerShip />
      <FAQ />
    </div>
  );
}

export default Home;
