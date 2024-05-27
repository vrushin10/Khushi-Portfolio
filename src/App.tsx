import "./App.css";
import React, { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/header"
import Home from "./components/home";
import Digital_Marketing from "./components/Pages/Digital_Marketing";
import Branding from "./components/Pages/Branding";
import Editorial from "./components/Pages/Editorial";
import Illustration from "./components/Pages/Illustration";
import Social_Media from "./components/Pages/Social_Media";
import BrandIdentity from "./components/Pages/BrandIdentity";
import About from "./components/Pages/About";
import Sketchbook from "./components/Pages/Sketchbook";
import Editorial1 from "./components/Pages/Editorial copy";
// import { slideShowContext } from "./components/slideshow1";


function App() {
  // const [theme, setTheme] = useContext(slideShowContext)

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
      {/* <Header></Header>  */}
      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Digital_Marketing" element={<Digital_Marketing />} />
        <Route path="/Branding" element={<Branding />} />
        {/* <Route path="/Editorial" element={<Editorial />} /> */}
        <Route path="/Editorial" element={<Editorial1 />} />

        <Route path="/Illustration" element={<Illustration />} />
        <Route path="/SocialMedia" element={<Social_Media />} />
        <Route path="/BrandIdentity" element={<BrandIdentity />} />
        <Route path="/Sketchbook" element={<Sketchbook />} />
        <Route path="/About" element={<About />} />

      </Routes>
    </>
  );
}

export default App;