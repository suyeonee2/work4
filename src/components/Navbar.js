import "./NavbarStyles.css"
import React, {useState} from 'react'
import {Link} from "react-router-dom"
 
const Navbar = () => {
    const [active, setActive] = useState("nav-menu");
    const navToggle = () => {
        active === 'nav-menu' ? setActive('nav-menu nav_active') : setActive('nav-menu');
    };

    return (
    <div className="header">
        {/* <ul className="nav-menu"> */}
            <ul className={active}>
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
        <div onClick={navToggle} className="nav_toggler">
            <i class="fa-solid fa-bars"></i>
            </div>
        </div>
 )
}

export default Navbar