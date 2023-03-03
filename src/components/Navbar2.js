/**
 * 
 * We can also write like this.
 * 
 */


import React from "react";
import logo from "../images/airbnb.png"

class Navbar2 extends React.Component {
  render(){
    return(
      <nav className="nav">
        <img src={logo} alt="airbnb-logo" className="nav-logo"></img>
      </nav>
    )
  }
}

export default Navbar2;