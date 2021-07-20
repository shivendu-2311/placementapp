import Footer from "./Components/footer/Footer";
import Header from "./Components/Layout/Header";
import Overview from "./Components/Overview/Overview";
import Amazon from "./Components/Placements/CompanyPlacement/Amazon";
import RecentsPlacements2021 from "./Components/Placements/RecentPlacements2021";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Google from "./Components/Placements/CompanyPlacement/Google";
import Hsbc from "./Components/Placements/CompanyPlacement/Hsbc";
import ZScaler from "./Components/Placements/CompanyPlacement/Z-Scaler";
import Mircosoft from "./Components/Placements/CompanyPlacement/Microsoft";
import Teradata from "./Components/Placements/CompanyPlacement/Teradata";
import Loople from "./Components/Placements/CompanyPlacement/Loople";
import Walmart from "./Components/Placements/CompanyPlacement/Walmart";


import { About } from "./Components/About/About";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
       <Header />
      <Switch>
        <Route exact path="/">
        <Home/>
        <Overview />
        </Route>
        

        <Route exact path="/recentplacement2022">
          <RecentsPlacements2021/>
        </Route>
        <Route exact path="/amazon">
          <Amazon />
          </Route>
        <Route exact path="/google">
          <Google/>
          </Route>
          <Route exact path="/hsbc">
          <Hsbc />
        </Route>
      
        <Route exact path="/loople">
          <Loople />
        </Route>

        <Route exact path="/microsoft">
          <Mircosoft />
        </Route>

        <Route exact path="/teradata">
          <Teradata />
        </Route>
        <Route exact path="/walmart">
          <Walmart />
        </Route>
        <Route exact path="/zscaler">
          <ZScaler />
        </Route>
        <Route exact path="/about">
       <About/>
        </Route>
       
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
