import React from "react";
import "./App.css";
import Home from "../../pages/Home";
import About from "../../pages/AboutPage";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import AppBar from "../AppBar";
import Footer from "../Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes"
function App() {
  return (
    <div className="App">
      <AppBar />
      <div className="App-header-space"></div>

      <div className="App-content">
        <Router>
          <Routes/>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
