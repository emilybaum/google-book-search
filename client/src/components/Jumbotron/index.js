import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}

      <Link to="/saved"><button>test saved</button></Link>
      <Link to="/search"><button>test search</button></Link>
      
    </div>
  );
}

export default Jumbotron;
