import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lazyLoad } from "./util/lazy";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";

const App = () => {
  lazyLoad();
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
