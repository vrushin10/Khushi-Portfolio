import React, { createRef, useEffect, useState } from 'react'
import Arrow from '../misc/arrow'
import metgala_01 from '../../assets/hot to haute/met gala-01.webp'
import metgala_02 from '../../assets/hot to haute/met gala-02.webp'
import metgala_03 from '../../assets/hot to haute/met gala-03.webp'
import metgala_04 from '../../assets/hot to haute/met gala-04.webp'
import metgala_05 from '../../assets/hot to haute/met gala-05.webp'
import metgala_06 from '../../assets/hot to haute/met gala-06.webp'
import metgala_07 from '../../assets/hot to haute/met gala-07.webp'
import metgala_08 from '../../assets/hot to haute/met gala-08.webp'
import Header from '../header'
import Slideshow from '../slideshow2'
import { useNavigate } from 'react-router-dom'

import backarrow from "../../assets/backarrow.svg"
import nextarrow from "../../assets/nextarrow.svg"
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'

const Digital_Marketing = () => {
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

      });
      {/* 
// @ts-ignore */}
      resizeObserver.observe(imgref.current);
      return () => resizeObserver.disconnect(); // clean up 
   }, [imgref]);

   const navigate = useNavigate();

   const DetailLink = "https://www.behance.net/gallery/199516677/Hot-to-Haute-Content-Awareness-Marketing"
   return (

      //  <div>Home</div>
      <>
         <div className="flex flex-col  h-screen">
            <Header></Header>
            <div className='w-screen h-full flex' >
               <div className='xl:max-w-[35vw]  flex-col content-end' style={{ textAlign: "center", marginLeft: "2.5vw", marginRight: "2rem", flex: 5 }}>
                  <Slideshow>
                     {/* 
// @ts-ignore */}
                     <img src={metgala_01} ref={imgref} onLoad={setHeight} width={"auto"} alt="" />
                     <img src={metgala_02} width={"auto"} alt="" />
                     <img src={metgala_03} width={"auto"} alt="" />
                     <img src={metgala_04} width={"auto"} alt="" />
                     <img src={metgala_05} width={"auto"} alt="" />
                     <img src={metgala_06} width={"auto"} alt="" />
                     <img src={metgala_07} width={"auto"} alt="" />
                     <img src={metgala_08} width={"auto"} alt="" />

                  </Slideshow>
               </div>



               <div className='w-full mt-auto ml-auto ' style={{
                  height: refHeight,
                  display: "flex", flexDirection: "column", paddingRight: "2.5vw", flex: 6
               }}>
                  <div style={{ width: "100%", display: "flex", textAlign: 'center' }}>
                     <div style={{ fontSize: "15px" }}><u>Digital Content Marketing, Brand Identity</u></div>
                     <div className='ml-auto flex' >
                        <img onClick={() => { navigate('../BrandIdentity') }} src={backarrow} style={{ width: "15px", height: "15px", cursor: 'pointer' }} className="mr-10" alt="" />
                        <img onClick={() => { navigate('../Branding') }} src={nextarrow} style={{ width: "15px", height: "15px", cursor: 'pointer' }} alt="" />

                     </div>
                  </div >
                  <div style={{ marginTop: "auto", marginBottom: "2rem", marginRight: '5vw' }}>
                     <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>Hot to Haute </div>
                     <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}>
                        <p><br />The MET Gala's theme 'Hot to Haute' towards sustainability haute couture embraces eco-friendly materials and ethical practices.<br /><br />
                           My task was to develop a passion project and ideate a Digital Content Marketing centered around design, focusing on three distinct goals awareness, trust, and purchase. And aimed to raise awareness about sustainability issues in the fashion industry, foster trust in the credibility of eco-friendly brands and practices, and ultimately drive purchases towards sustainable fashion options.
                           {!!DetailLink && <><br /><br></br><u className='cursor-pointer' onClick={() => { window.open(DetailLink, "_blank"); }}>VIEW PROJECT IN DETAIL</u></>}</p></div>
                  </div>
               </div >
            </div>
         </div>
      </>
   )
}

export default Digital_Marketing

