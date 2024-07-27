import React from 'react'
import logo from "../assets/logo.svg";
import darkLogo from "../assets/darklogo.svg";
import { useNavigate } from 'react-router-dom';
import moon from "../assets/moon.svg";
import darkmoon from "../assets/darkmoon.svg";
import useDarkMode from './misc/darkmode';

// import { Link } from 'react-router-dom';
const Home = () => {
   const [isDarkMode, toggleDarkMode] = useDarkMode();
   const navigate = useNavigate();
   return (<>
      <div className="navbar items-center center select-none">

         <div className="navbar-Text ml-[2.5vw] cursor-pointer hover:underline " onClick={() => { navigate('/About') }}>About</div>
         <div className="mx-auto logo cursor-pointer " onClick={() => { navigate('/') }} >
            <img className='dark:hidden' src={logo} alt="logo" />
            <img width={129} className='hidden dark:block' src={darkLogo} alt="logo" />
         </div>
         <div className="navbar-Text mr-3 cursor-pointer hover:underline" onClick={() => { navigate('/Sketchbook') }}>Sketchbook</div>
         <div className='mr-[2.5vw] ' onClick={toggleDarkMode} >                     <img className='ml-auto mt-1.5  h-[13px] w-[13px] dark:hidden' src={moon} alt="" />
            <img className='ml-auto mt-1.5  h-[13px] w-[13px] hidden dark:block' src={darkmoon} alt="" />
         </div>
      </div>
      {/* <hr style={{
         color: 'black',
         backgroundColor: 'black',
         height: "2",
         width: "95%",
      }}></hr> */}
      <div className='border border-black dark:border-white mx-auto mt-2' style={{ maxWidth: "95vw", minWidth: "95vw" }}></div>
   </>
   )
}

export default Home