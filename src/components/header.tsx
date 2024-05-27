import React from 'react'
import logo from "../assets/logo.svg";
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const Home = () => {
   const navigate = useNavigate();
   return (<>
      <div className="navbar">

         <div className="navbar-Text navbar-left cursor-pointer" onClick={() => { navigate('/About') }}>About</div>
         <div className="logo cursor-pointer" onClick={() => { navigate('/') }}>
            <img src={logo} alt="logo" />
         </div>
         <div className="navbar-Text navbar-right cursor-pointer" onClick={() => { navigate('/Sketchbook') }}>Sketchbook</div>
      </div>
      {/* <hr style={{
         color: 'black',
         backgroundColor: 'black',
         height: "2",
         width: "95%",
      }}></hr> */}
      <div className='border border-black mx-auto mt-2' style={{ maxWidth: "95vw", minWidth: "95vw" }}></div>
   </>
   )
}

export default Home