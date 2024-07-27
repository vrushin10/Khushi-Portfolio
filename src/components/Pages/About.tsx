import React from 'react'
import './About.css'
import logo from "../../assets/logo.svg"
import darklogo from "../../assets/darklogo.svg"
import { useNavigate } from "react-router-dom";
import CV_Khushi_M_pdf from "../../assets/CV Khushi M..pdf";
import backarrow from "../../assets/backarrow.svg";
import darkbackarrow from '../../assets/darkbackarrow.svg';

const About = () => {
   const navigate = useNavigate()
   const classnamesshit = "mb-1 cursor-pointer text-[#555555] dark:text-[#ecebe9]";
   return (
      <>
         <div className='hidden lg:block dark:bg-[#000000] dark:text-white'>
            <div className='backarrow cursor-pointer' onClick={() => { navigate(-1) }}>
               <img className='w-[15px] h-[15px] dark:hidden ' src={backarrow} alt="" />
               <img className='w-[15px] h-[15px] hidden dark:block' src={darkbackarrow} alt="" />
            </div>

            <div className='flex flex-col h-screen w-screen ' >
               <div className='AboutContainer dark:text-white'>
                  <div className='about'>ABOUT</div>

                  <div onClick={() => { navigate('/') }} className='cursor-pointer h-[28px] mb-[0.75rem]'>
                     <img className='dark:hidden ' src={logo} alt="" />
                     <img className=' w-[129px] h-[24] hidden dark:block' src={darklogo} alt="" />

                  </div>

                  <div className='aboutDisc dark:text-white'>
                     <p className='mb-[0.75rem]'>Hello! I'm a creative designer living in Mumbai. I enjoy exploring various design and art mediums.</p>
                     <p className='mb-[0.75rem]'>My expertise lies in branding, illustration, packaging, digital arts, mixed media, and editorial design.</p>
                     <p className='mb-[0.75rem]'>I like to value connections in my projects by marrying creativity with functionality. Additionally, I've developed my skills as a fine artist to bring my creative ideas to fruition.</p>
                     <p className='mb-[0.75rem]'>By integrating creativity, technical expertise, and a keen eye for detail, my goal is to craft designs that are visually appealing and effectively convey the desired connection and understanding.</p>
                  </div>
               </div>
            </div>

            <div className="link">
               <div className=' cursor-pointer text-[#555555] dark:text-[#ecebe9]' onClick={() => { window.open("mailto:khushimistryco@gmail.com", "_blank") }}>𖥔<span className='hover:underline'> Email</span></div>
               <div className="text-[#555555] dark:text-[#ecebe9]" onClick={() => { }}>{"\n{khushimistryco@gmail.com}\n"}</div>
               <div className=' cursor-pointer text-[#555555] dark:text-[#ecebe9]' onClick={() => { document.getElementById('downloadCv').click(); }}>𖥔<span className='hover:underline'> <u>Download CV</u></span></div>
               <a id='downloadCv' href={CV_Khushi_M_pdf} download="CV_Khushi_M..pdf" target="_blank" rel="noopener noreferrer" />
               <div className=' cursor-pointer text-[#555555] dark:text-[#ecebe9]' onClick={() => { window.open("http://linkedin.com/in/khushi-mistry11176/", "_blank") }}>𖥔<span className='hover:underline'> LinkedIn</span></div>
               <div className=' cursor-pointer text-[#555555] dark:text-[#ecebe9]' onClick={() => { window.open("http://behance.net/khushimistry", "_blank") }}>𖥔<span className='hover:underline'> Behance</span></div>
               <div className=' cursor-pointer text-[#555555] dark:text-[#ecebe9]' onClick={() => { window.open("http://instagram.com/khushimistryy.creative", "_blank") }}>𖥔<span className='hover:underline'> Instagram</span></div>
            </div>
         </div>
         <div className='block lg:hidden dark:bg-[#000000] dark:text-white'>
            <div className=' absolute top-[3vh] left-[3vh] cursor-pointer' onClick={() => { navigate(-1) }}>
               <img className='w-[25px] h-[25px] dark:hidden' src={backarrow} alt="" />
               <img className='w-[25px] h-[25px]' src={darkbackarrow} alt="" />

            </div>
            <div className='flex flex-col h-screen mx-[22.5vw]  content-center' >
               <div className=' mt-auto mb-auto pt-10 flex flex-col '>
                  <div className='mb-3'>ABOUT</div>
                  <div onClick={() => { navigate('/') }} className='cursor-pointer h-[28px] mb-[0.75rem]'>
                     <img className='dark:hidden ' src={logo} alt="" />
                     <img className=' w-[129px] h-[24] hidden dark:block' src={darklogo} alt="" />

                  </div>
                  <p className='mb-[0.75rem]'>Hello! I'm a creative designer living in Mumbai. I enjoy exploring various design and art mediums.</p>
                  <p className='mb-[0.75rem]'>My expertise lies in branding, illustration, packaging, digital arts, mixed media, and editorial design.</p>
                  <p className='mb-[0.75rem]'>I like to value connections in my projects by marrying creativity with functionality. Additionally, I've developed my skills as a fine artist to bring my creative ideas to fruition.</p>
                  <p className='mb-[0.75rem]'>By integrating creativity, technical expertise, and a keen eye for detail, my goal is to craft designs that are visually appealing and effectively convey the desired connection and understanding.</p>

               </div>
               <div className=' mb-[8vh] '>
                  <div className={classnamesshit}>
                     <div className={classnamesshit} onClick={() => { window.open("mailto:khushimistryco@gmail.com", "_blank") }}>𖥔 Email</div>
                     <div className="mb-1 text-[#555555] dark:text-[#ecebe9]" onClick={() => { }}>{"\n{khushimistryco@gmail.com}\n"}</div>
                     <div className={classnamesshit} onClick={() => { document.getElementById('downloadCv').click(); }}>𖥔 <u>Download CV</u></div>
                     <a id='downloadCv' href={CV_Khushi_M_pdf} download="CV_Khushi_M..pdf" target="_blank" rel="noopener noreferrer" />
                     <div className={classnamesshit} onClick={() => { window.open("http://linkedin.com/in/khushi-mistry11176/", "_blank") }}>𖥔 LinkedIn</div>
                     <div className={classnamesshit} onClick={() => { window.open("http://behance.net/khushimistry", "_blank") }}>𖥔 Behance</div>
                     <div className={classnamesshit} onClick={() => { window.open("http://instagram.com/khushimistryy.creative", "_blank") }}>𖥔 Instagram</div>
                  </div>
               </div>
            </div>
         </div>
      </>

   )
}

export default About