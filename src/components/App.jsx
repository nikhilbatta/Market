import React from "react";
import MarketList from "./MarketList";
import { Switch, Route } from "react-router-dom";
import ProduceList from "./ProduceList";
import Home from "./Home";
import NavBar from "./NavBar";
import Error404 from "./Error404";

function App(){
  var siteStyle = {
    backgroundColor : "burlywood",
  };
  return (
    <div style={siteStyle} className="container">


      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/Market" component={MarketList} />
        <Route path ='/Produce' component={ProduceList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;