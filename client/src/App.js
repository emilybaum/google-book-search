import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";

// adding routes
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Books />
    </div>
  );
}

export default App;
