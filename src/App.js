import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import './App_sass/css/App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          {/* <Route exact path="/#contactMe">
            <Home />
          </Route> */}
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
