/**
 * 
 * We can also write like this.
 * 
 */

import React  from "react";
import heroImg from "../images/hero-img.png"

class Hero2 extends React.Component {
  render(){
    // If you want to use props, need to write in the render(){}  
    // const props = this.props;
    return(
    <section className="hero">
      <img src={heroImg} alt="hero-img" className="hero-img"></img>
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind 
        hosts—all without leaving home.
      </p>
    </section>
    )
  }
}

export default Hero2;