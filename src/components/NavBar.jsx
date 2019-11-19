import React from "react";
import { Link } from "react-router-dom";


function NavBar(){
  var navBarButton = {
    margin: "0 50px 0 50px",
    display: "inline-block",
    padding: "14px 16px",
    backgroundColor: "blanchedalmond",
    border: "solid 2px burlywood",
  };
  var navBar = {
    borderRadius: "20px",
    display: "block",
    margin: "0% auto 0% auto",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "beige",
    width: "70%",
    textAlign: "center",
  };
  var navLink = {
    color: "black",
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom box-shadow mb-3">
      
      <div className = "container" style={navBar}>
        <button className="btn" style={navBarButton}><Link style={navLink} to = "/">Home</Link></button>
        <button className="btn" style={navBarButton}><Link style={navLink}  to = "/Market">Markets</Link></button>
        <button className="btn" style={navBarButton}><Link style={navLink}  to = "/Produce">Produce</Link></button>
      </div>
    </nav>
  );
}
export default NavBar;
