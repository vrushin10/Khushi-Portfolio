import React from 'react'
import logo from "../assets/logo.svg";

const Home = () => {
   return (<>
      <div className="navbar">
         <h3 className="navbar-Text navbar-left">About</h3>
         <div className="logo">
            <img src={logo} alt="logo" />
         </div>
         <h3 className="navbar-Text navbar-right">Sketchbook</h3>
      </div>
      <hr style={{
         color: 'black',
         backgroundColor: 'black',
         height: "2",
         width: "95%",
      }}></hr>
   </>
   )
}

export default Home