import React from 'react'
import logo from "../assets/logo.svg";
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const MobileHeader = () => {
   const navigate = useNavigate();
   return (<>
      <div className='flex mt-3 items-center'>
         <div className="ml-[2.5vw] mt-2 " onClick={() => { navigate('/') }}>
            <img style={{ width: "auto", height: "20px" }} src={logo} alt="logo" />
         </div>

         <div className="ml-auto " onClick={() => { navigate('/About') }}>About</div>
         <div className=" ml-4 mr-[2.5vw]" onClick={() => { navigate('/Sketchbook') }}>Sketchbook</div>
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

export default MobileHeader