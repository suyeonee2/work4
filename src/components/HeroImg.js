import "../components/HeroImgStyles.css"

import React from 'react'
import IntroImg from "../assets/profile.jpg"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntroImg"/>
            <h3>•하수연•</h3>
        </div>
    </div>
  )
}

export default HeroImg