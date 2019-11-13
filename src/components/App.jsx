import React from "react";
import MarketList from "./MarketList";
import { Switch, Route } from "react-router-dom";
import ProduceList from "./ProduceList";
import Home from "./Home";
import NavBar from "./NavBar";

function App(){
  return (
    <div className="container">

      <NavBar/>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route  path="/Market" component={MarketList} />
        <Route path ='/Produce' component={ProduceList} />
      </Switch>
    </div>
  );
}

export default App;