import React from "react";
import barn from "../Assets/Img/barn.jpg";


function Home(){
  var siteStyle = {
    backgroundColor : "burlywood",
    display: "flex",
  };

  var imgStyle = {
    margin: "10% auto",
    display: "block",
    borderRadius: "5%",
    zIndex: "1",
  };

  var titleStyle = {
    zIndex: "2",
    position: "absolute",
    left:   "35%",
    right:   "25%",
    top:   "20%",
    bottom:   "25%",
    textShadow: "2px 2px white",
    fontFamily: "Courier, monospace"
  };
  return (
    <div style={siteStyle} className="container">
      <h1 style={titleStyle}>Avery Farms: We go to market</h1>
      <img style={imgStyle}src={barn}></img>
        
    </div>
  );
}
  
export default Home;