import React from "react";
import "./App.css";
import AppBar from "../AppBar";
import Footer from "../Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes"
function App() {
  return (
    <div className="App">
      {/* Header */}
      <AppBar />
      <div className="App-header-space"></div>
      {/* Pages */}
      <div className="App-content">
        <Router>
          <Routes/>
        </Router>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
