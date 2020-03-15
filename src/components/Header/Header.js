import React from "react";
import { NavLink } from "react-router-dom";

function HeaderLinks() {
    const activeStyle = {color:"orange"};
    return <>
    <h1 className="container-fluid header-color">Course Management Course</h1>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink activeStyle={activeStyle} exact className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeStyle={activeStyle} className="nav-link" to="/courses">
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeStyle={activeStyle} className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
}

export default HeaderLinks;