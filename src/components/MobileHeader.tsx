import React from 'react'
import logo from "../assets/logo.svg";
import darklogo from "../assets/darklogo.svg"
import { useNavigate } from 'react-router-dom';
import moon from "../assets/moon.svg";
import darkmoon from "../assets/darkmoon.svg";
import useDarkMode from './misc/darkmode';

// import { Link } from 'react-router-dom';
const MobileHeader = () => {

   const [isDarkMode, toggleDarkMode] = useDarkMode();
   const navigate = useNavigate();
   return (<>
      <div className='flex mt-3 items-center select-none'>
         <div className="ml-[2.5vw] mt-2 " onClick={() => { navigate('/') }}>
            <img className='w-auto h-[20px] dark:hidden' src={logo} alt="logo" />
            <img className='w-auto h-[20px]  hidden dark:block' src={darklogo} alt="logo" />
         </div>

         <div className="ml-auto " onClick={() => { navigate('/About') }}>About</div>
         <div className=" ml-4 " onClick={() => { navigate('/Sketchbook') }}>Sketchbook</div>
         <div className=' ml-6 mr-[2.5vw]' onClick={toggleDarkMode}>                     <img className='ml-auto h-[13px] w-[13px] dark:hidden' src={moon} alt="" />
            <img className='ml-auto h-[13px] w-[13px] hidden dark:block' src={darkmoon} alt="" />
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

export default MobileHeader