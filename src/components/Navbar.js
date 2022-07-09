import "./NavbarStyles.css"

import React from 'react'
import {Link} from "react-router-dom"
 
const Navbar = () => {
  return (
    <div className="header">
        <ul className="nav-menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Profile">Book</Link>
            </li>
            <li>
                <Link to="/Toon">Toon</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        <div className="Btn">
            <Link to="#"><i class="fa-solid fa-bars"></i></Link>
        </div>
     </div>
  )
}

export default Navbar