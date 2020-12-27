import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="pt-3">
          <ul className="d-flex justify-content-around">
            <li> <NavLink className="nav_link" to="/"> Home </NavLink> </li>  
            <li> <NavLink className="nav_link" to="/book"> Search Book </NavLink> </li> 
        </ul>  
        </nav>
    )
}

export default Navbar
