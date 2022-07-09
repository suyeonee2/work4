import "../components/HeroImgStyles.css"

import React from 'react'
import IntroImg from "../assets/profile.jpg"
import Navbar from "./Navbar"

const HeroImg = () => {
  return (
    <div>
      <Navbar/>

    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntroImg"/>
            <h3>•하수연•</h3>
        </div>
    </div>
  </div>
  )
}

export default HeroImg