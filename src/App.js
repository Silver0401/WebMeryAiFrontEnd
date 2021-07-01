// Libraries
import React from "react";
import { Switch, Route } from "react-router-dom"
import "./styling/css/App.css";

import HomePage from "./Pages/Home";
import MeryAi from "./Pages/MeryAi"

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/MeryAi" component={MeryAi} />
      </Switch>
    </div>
  );
}

export default App;
