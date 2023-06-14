import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Candy from "./Candy";
import Chips from "./Chips";
import Soda from "./Soda";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={VendingMachine}>
        </Route>
        <Route path="/soda" exact component={Soda}>
        </Route>
        <Route path="/chips" exact component={Chips}>
        </Route>
        <Route path="/candy" exact component={Candy}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
