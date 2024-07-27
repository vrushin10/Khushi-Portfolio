import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/header"
import Home from "./components/home";
import Digital_Marketing from "./components/Pages/Digital_Marketing";


import Branding from "./components/Pages/Branding";
import Illustration from "./components/Pages/Illustration";
import Social_Media from "./components/Pages/Social_Media";
import BrandIdentity from "./components/Pages/BrandIdentity";
import About from "./components/Pages/About";
import Sketchbook from "./components/Pages/Sketchbook";
import Editorial from "./components/Pages/Editorial copy";
import Sketchbook1 from "./components/Pages/sketchBook/sketchbook1";
import Sketchbook2 from "./components/Pages/sketchBook/sketchbook2";
import Sketchbook3 from "./components/Pages/sketchBook/sketchbook3";
import Test from './components/Pages/test'
// import { slideShowContext } from "./components/slideshow1";


function App() {
  // const [theme, setTheme] = useContext(slideShowContext)

  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  const theme = isDarkMode ? 'dark' : '';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

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

      <div className={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Digital_Marketing" element={<Digital_Marketing />} />
          <Route path="/Branding" element={<Branding />} />
          <Route path="/Editorial" element={<Editorial />} />
          <Route path="/Illustration" element={<Illustration />} />
          {/* <Route path="/SocialMedia" element={<Social_Media />} /> */}
          {/* <Route path="/BrandIdentity" element={<BrandIdentity />} /> */}
          <Route path="/Sketchbook" element={<Sketchbook />} />
          <Route path="/Sketchbook1" element={<Sketchbook1 />} />
          <Route path="/Sketchbook2" element={<Sketchbook2 />} />
          <Route path="/Sketchbook3" element={<Sketchbook3 />} />
          <Route path="/test" element={<Test />}></Route>
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;