import React from 'react'
import './About.css'
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";
import CV_Khushi_M_pdf from "../../assets/CV Khushi M..pdf";

const About = () => {
   const navigate = useNavigate()

   return (
      <>
         <div className='backarrow' onClick={() => { navigate('/') }}>
            <svg width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M19.4685 32.9255L4.38477 17.9889L19.4683 3.05242C20.1478 2.35436 20.1478 1.24779 19.4683 0.549954C18.772 -0.165695 17.6229 -0.185483 16.902 0.505762L0.53141 16.7157C-0.176915 17.4191 -0.177358 18.5595 0.53141 19.2624L16.902 35.4723C17.2419 35.8107 17.7038 36.0007 18.1853 36C18.6665 36 19.128 35.8103 19.4683 35.4725C20.1771 34.7692 20.1773 33.6288 19.4685 32.9255Z" fill="black" />
            </svg>
         </div>

         <div style={{ display: 'flex', flexDirection: "column", height: "100vh", width: '100vw' }}>
            <div className='AboutContainer'>
               <div className='about'>ABOUT</div>

               <div onClick={() => { navigate('/') }} className='cursor-pointer' style={{ height: "28px", marginBottom: "0.75rem" }}>
                  <img src={logo} alt="" />
               </div>


               <div className='aboutDisc'>
                  <p>Hello! I'm a creative designer living in Mumbai. I enjoy exploring various design and art mediums.<br /><br /></p>
                  <p>My expertise lies in branding, illustration, packaging, digital arts, mixed media, and editorial design.<br /><br /></p>
                  <p>I like to value connections in my projects by marrying creativity with functionality. Additionally, I've developed my skills as a fine artist to bring my creative ideas to fruition.<br /><br /></p>
                  <p>By integrating creativity, technical expertise, and a keen eye for detail, my goal is to craft designs that are visually appealing and effectively convey the desired connection and understanding.<br /><br /></p>
               </div>
            </div>
         </div>

         <div className="link">
            <div style={{ cursor: "pointer" }} onClick={() => { window.location.href = "mailto:khushimistryco@gmail.com" }}>Email</div>
            <div style={{ cursor: "pointer" }} onClick={() => { }}>{"\n{khushimistryco@gmail.com}\n"}</div>
            <div style={{ cursor: "pointer" }} onClick={() => { document.getElementById('downloadCv').click(); }}>Download CV</div>
            <a id='downloadCv' href={CV_Khushi_M_pdf} download="CV_Khushi_M..pdf" target="_blank" rel="noopener noreferrer" />
            <div style={{ cursor: "pointer" }} onClick={() => { window.location.href = "http://linkedin.com/in/khushi-mistry11176/" }}>LinkedIn</div>
            <div style={{ cursor: "pointer" }} onClick={() => { window.location.href = "http://behance.net/khushimistry" }}>Behance</div>
            <div style={{ cursor: "pointer" }} onClick={() => { window.location.href = "http://instagram.com/khushimistryy.creative" }}>Instagram</div>
         </div>
      </>

   )
}

export default About