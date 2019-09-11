import React from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved"

// adding routes
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Router>
    </div>
  );
}

export default App;
