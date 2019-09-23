import React from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved"
import Landing from "./pages/Landing"
import NotFound from "./pages/NotFoundPage"


// adding routes
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route path="/404" component={NotFound}/>
          <Redirect to="404"  />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
