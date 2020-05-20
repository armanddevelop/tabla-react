import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PriceList from "../components/PriceList";
import Inventory from "../components/Inventory";
import NavBar from "../components/NavBar";
import NotFoundPAge from "../components/NotFound";
function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={PriceList}></Route>
        <Route exact path="/inventory" component={Inventory}></Route>
        <Route component={NotFoundPAge}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
