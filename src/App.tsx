import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/header"
import Home from "./components/home";

function App() {
  return (
    <>
      {/* <nav>
        <ul>
          <Link to="/" >
            Home
          </Link>
          <Link to="/course" >
            Courses
          </Link>
          <Link to="/live" >
            Live course
          </Link>
          <Link to="/contact" >
            Contact
          </Link>
        </ul>
      </nav> */}
  <Header></Header>
      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;