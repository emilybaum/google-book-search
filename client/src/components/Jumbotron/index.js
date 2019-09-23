import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import background from "../../assets/images/pages.jpg"

const buttons = {
  margin: "1rem",
}

const backgroundImage = {
  background: "#F2F2FF",
  height: "300", 
  clear: "both", paddingTop: "120",
  textAlign: "center"
}



function Jumbotron({ children }) {
  return (
    <div
      style={backgroundImage}
      className="jumbotron"
    >
      {children}

      <Link to="/search"><button style={buttons} type="button" className="btn btn-outline-secondary">Search for Books</button></Link>
      <Link to="/saved"><button style={buttons} type="button" className="btn btn-outline-secondary">Saved Books</button></Link>
      
      
    </div>
  );
}

export default Jumbotron;
