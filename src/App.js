import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavCom from "./compnents/NavCom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <div>
        <NavCom />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
