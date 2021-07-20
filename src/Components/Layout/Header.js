import React, { Fragment } from 'react';
import classes from './Header.module.css';
import {
  Link
} from "react-router-dom";

import geuImg from '../../Assests/GEU.jpg'

const Header =(props)=>{

    return (
        <Fragment>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/recentplacement2022">Recent Placements 2021</Link>
        </li>
      
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/company" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Company
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/amazon">Amazon</Link></li>
            <li><Link className="dropdown-item" to="/google">Google</Link> </li>
            <li><Link className="dropdown-item" to="/hsbc">HSBC</Link> </li>
            <li><Link className="dropdown-item" to="/indianexpress">IndianExpress</Link> </li>
            <li><Link className="dropdown-item" to="/loople">Loople</Link> </li>
            <li><Link className="dropdown-item" to="/microsoft">Mircosoft</Link></li>
            <li><Link className="dropdown-item" to="teradata">teradata</Link></li>
            <li><Link className="dropdown-item" to="walmart">Walmart</Link></li>
            <li><Link className="dropdown-item" to="zscaler">Z-scaler</Link></li>
          </ul>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </Fragment>
    );
};
export default Header