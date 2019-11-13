import React from "react";
import Market from "./Market";

var MasterMarketList = [
  {
    name: "Hollywood Farmer's Market",
    hours: "12p-4p"
  },
  {
    name: "Dekum Farmer's Market",
    hours: "12p-4p"

  },
  {
    name: "Beaverton Farmer's Market",
    hours: "12p-3p"

  },
  {
    name: "Park Blocks Farmer's Market",
    hours: "12p-4p"

  },

];


function MarketList() {

  return (
    <div>
      <hr />
      {MasterMarketList.map((market, index) =>
        <Market name={market.name}
          hours={market.hours} 
          key={index}/> 
      )}
    </div>
  );
}
export default MarketList;