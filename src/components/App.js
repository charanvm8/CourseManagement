import React from "react";
import HomePage from "./HomePage/HomePage";
import About from "./About/About";
import Courses from "./Courses/Courses";
import HeaderLinks from "./Header/Header";
import NotFound from "./common/404NotFound";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Course from "./Courses/Course/Course";

function App() {
  function getPage() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/courses" component={Courses}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/course" component={Course}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </>
    );
  }

  return (
    <>
      <HeaderLinks />
      {getPage()}
    </>
  );
}

export default App;
