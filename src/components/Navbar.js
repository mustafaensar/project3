import React from "react";
import logo from "../images/airbnb.png"

function Navbar(){
  return(
    <nav className="nav">
      <img src={logo} alt="airbnb-logo" className="nav-logo"></img>
    </nav>
  )
}

export default Navbar;