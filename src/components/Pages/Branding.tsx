import React, { createRef, useEffect, useState } from 'react'
import Arrow from '../misc/arrow'
import sand_01 from '../../assets/sand/sand-01.webp'
import sand_02 from '../../assets/sand/sand-02.webp'
import sand_03 from '../../assets/sand/sand-03.webp'
import sand_04 from '../../assets/sand/sand-04.webp'
import sand_05 from '../../assets/sand/sand-05 (1).webp'
import sand_06 from '../../assets/sand/sand-06.webp'
import backarrow from "../../assets/backarrow.svg"
import nextarrow from "../../assets/nextarrow.svg"
// import sand_06 from '../../assets/sand/sands-06.png'
import Header from '../header'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import Slideshow from '../slideshow2'

import { useNavigate } from 'react-router-dom'

const Branding = () => {

   const imgref = createRef()
   const [refHeight, setregHeight] = useState()
   function setHeight() {
      {/* 
// @ts-ignore */}
      setregHeight(imgref.current.offsetHeight)
   }
   useEffect(() => {
      if (!imgref.current) return;
      const resizeObserver = new ResizeObserver(() => {
         {/* 
   // @ts-ignore */}
         setregHeight(imgref.current.offsetHeight)
      }); {/* 
   // @ts-ignore */}
      resizeObserver.observe(imgref.current);
      return () => resizeObserver.disconnect(); // clean up 
   }, [imgref]);

   const images = [sand_01,
      sand_02,
      sand_03,
      sand_04,
      sand_05,

   ]
   const DetailLink = "https://www.behance.net/gallery/199367353/Sand-App-Research"
   const navigate = useNavigate();
   return (

      //  <div>Home</div>
      <>
         <div className="flex flex-col  h-screen">
            <Header></Header>
            <div className='w-screen h-full flex' >
               <div className='xl:max-w-[35vw]  flex-col content-end' style={{ textAlign: "center", marginLeft: "2.5vw", marginRight: "2rem", flex: 5 }}>
                  <Slideshow>{/* 
// @ts-ignore */}
                     <img src={sand_01} ref={imgref} onLoad={setHeight} width={"100%"} />
                     <img src={sand_02} width={"100%"} />
                     <img src={sand_03} width={"100%"} />
                     <img src={sand_04} width={"100%"} />
                     <img src={sand_05} width={"100%"} />
                     <img src={sand_06} width={"100%"} />

                  </Slideshow>
               </div>
               <div className='w-full mt-auto ml-auto ' style={{
                  height: refHeight,
                  display: "flex", flexDirection: "column", paddingRight: "2.5vw", flex: 6
               }}>
                  <div style={{ width: "100%", display: "flex", textAlign: 'center' }}>
                     <div style={{ fontSize: "15px", }}><u>Branding / Campaign</u></div>
                     <div className='ml-auto flex' >
                        <img onClick={() => { navigate('../Digital_Marketing') }} src={backarrow} style={{ width: "15px", height: "15px", cursor: 'pointer' }} className="mr-10" alt="" />
                        <img onClick={() => { navigate('../Editorial') }} src={nextarrow} style={{ width: "15px", height: "15px", cursor: 'pointer' }} alt="" />

                     </div>
                  </div >
                  <div style={{
                     marginTop: "auto", marginBottom: "2.5vh", marginRight: '5vw'
                  }}>
                     < div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>Sand</div>
                     <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}><p><br />Sand an extension of Instagram platform for artist and creatives that breaks free from the toxic metrics and pressures of social media.<br /><br />My task was to develop a passion project and ideate a Digital Content Marketing centered around design, focusing on three distinct goals awareness, trust, and purchase. And aimed to raise awareness about sustainability issues in the fashion industry, foster trust in the credibility of eco-friendly brands and practices, and ultimately drive purchases towards sustainable fashion options.
                        {!!DetailLink && <><br /><br></br><u className='cursor-pointer' onClick={() => { window.open(DetailLink, "_blank"); }}>VIEW PROJECT IN DETAIL</u></>}</p>
                     </div>
                  </div>
               </div >
            </div >
         </div >
      </>
   )
}

export default Branding
