import React from 'react'
import './About.css'
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";
import CV_Khushi_M_pdf from "../../assets/CV Khushi M..pdf";
import backarrow from "../../assets/backarrow.svg";

const About = () => {
   const navigate = useNavigate()

   return (
      <>
         <div className='backarrow cursor-pointer' onClick={() => { navigate('/') }}>
            <img style={{ width: "15px", height: "15px" }} src={backarrow} alt="" />
         </div>

         <div style={{ display: 'flex', flexDirection: "column", height: "100vh", width: '100vw' }}>
            <div className='AboutContainer'>
               <div className='about'>ABOUT</div>

               <div onClick={() => { navigate('/') }} className='cursor-pointer' style={{ height: "28px", marginBottom: "0.75rem" }}>
                  <img src={logo} alt="" />
               </div>


               <div className='aboutDisc'>
                  <p style={{ marginBottom: "0.75rem" }}>Hello! I'm a creative designer living in Mumbai. I enjoy exploring various design and art mediums.</p>
                  <p style={{ marginBottom: "0.75rem" }}>My expertise lies in branding, illustration, packaging, digital arts, mixed media, and editorial design.</p>
                  <p style={{ marginBottom: "0.75rem" }}>I like to value connections in my projects by marrying creativity with functionality. Additionally, I've developed my skills as a fine artist to bring my creative ideas to fruition.</p>
                  <p style={{ marginBottom: "0.75rem" }}>By integrating creativity, technical expertise, and a keen eye for detail, my goal is to craft designs that are visually appealing and effectively convey the desired connection and understanding.</p>
               </div>
            </div>
         </div>

         <div className="link">
            <div style={{ cursor: "pointer", color: "#555555" }} onClick={() => { window.open("mailto:khushimistryco@gmail.com", "_blank") }}>𖥔 Email</div>
            <div style={{ color: "#555555" }} onClick={() => { }}>{"\n{khushimistryco@gmail.com}\n"}</div>
            <div style={{ cursor: "pointer", color: "#555555" }} onClick={() => { document.getElementById('downloadCv').click(); }}>𖥔 <u>Download CV</u></div>
            <a id='downloadCv' href={CV_Khushi_M_pdf} download="CV_Khushi_M..pdf" target="_blank" rel="noopener noreferrer" />
            <div style={{ cursor: "pointer", color: "#555555" }} onClick={() => { window.open("http://linkedin.com/in/khushi-mistry11176/", "_blank") }}>𖥔 LinkedIn</div>
            <div style={{ cursor: "pointer", color: "#555555" }} onClick={() => { window.open("http://behance.net/khushimistry", "_blank") }}>𖥔 Behance</div>
            <div style={{ cursor: "pointer", color: "#555555" }} onClick={() => { window.open("http://instagram.com/khushimistryy.creative", "_blank") }}>𖥔 Instagram</div>
         </div>
      </>

   )
}

export default About