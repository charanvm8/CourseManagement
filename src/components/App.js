import React from "react";
import HomePage from "./HomePage/HomePage";
import About from "./About/About";
import Courses from "./Courses/Courses";
import "./App.css";

function App() {
  function getPage() {
    let router = window.location.pathname;
    if (router === "/about") {
      return <About />;
    } else if (router === "/courses") {
      return <Courses />;
    } else {
      return <HomePage />;
    }
  }

  return (
    <>
      <h1 className="container-fluid header-color">Course Management Course</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/courses">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {getPage()}
    </>
  );
}

export default App;
