import React, { createRef, useEffect, useState } from 'react'
import Arrow from '../misc/arrow'
import metgala_01 from '../../assets/bowlcurry/bowl curry-01 (1).webp'
import metgala_02 from '../../assets/bowlcurry/bowl curry-02 (1).webp'
import metgala_03 from '../../assets/bowlcurry/bowl curry-03 (1).webp'
import metgala_04 from '../../assets/bowlcurry/bowl curry-04 (1).webp'
import Header from '../header'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import Slideshow from '../slideshow2'

import backarrow from "../../assets/backarrow.svg"
import nextarrow from "../../assets/nextarrow.svg"
import { useNavigate } from 'react-router-dom'

const Illustration = () => {
   const imgref = createRef()
   const [refHeight, setregHeight] = useState()

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

   const containerref = createRef()
   const [containerHeight, setcontainerHeight] = useState()
   function setContainerHeight() {
      {/* 
// @ts-ignore */}
      setTimeout(() => {
         // @ts-ignore
         setcontainerHeight(containerref.current.offsetHeight)
      }, 5);
   }

   useEffect(() => {
      if (!containerref.current) return;
      const resizeObserver = new ResizeObserver(() => {
         {/* 
// @ts-ignore */}
         setcontainerHeight(containerref.current.offsetHeight)

      });
      {/* 
// @ts-ignore */}
      resizeObserver.observe(containerref.current);
      return () => resizeObserver.disconnect(); // clean up 
   }, [containerref]);

   const DetailLink = null
   const images = [metgala_01,
      metgala_02,
      metgala_03,
      metgala_04]
   const navigate = useNavigate();
   return (

      //  <div>Home</div>
      <>
         <div className="flex flex-col  h-screen">
            <Header></Header>
            <div className='w-screen h-full flex' >
               {/* @ts-ignore */}
               <div className=' flex-col content-end ' ref={containerref} onLoad={setContainerHeight} style={{ textAlign: "center", marginLeft: "2.5vw", marginRight: "2rem" }}>
                  <Slideshow>{/* 
// @ts-ignore */}
                     <img src={metgala_01} ref={imgref} style={{ maxWidth: 'none', height: `9%` }} />
                     <img src={metgala_02} style={{ maxWidth: 'none', height: `9%` }} />
                     <img src={metgala_03} style={{ maxWidth: 'none', height: `9%` }} />
                     <img src={metgala_04} style={{ maxWidth: 'none', height: `9%` }} />
                  </Slideshow>
               </div>
               <div className='w-full mt-auto ml-auto ' style={{
                  height: refHeight,
                  display: "flex", flexDirection: "column", paddingRight: "2.5vw"
               }}>
                  <div style={{ width: "100%", display: "flex", textAlign: 'center' }}>
                     <div style={{ fontSize: "15px", }}><u>Illustration</u></div>
                     <div className='ml-auto flex' >
                        <img onClick={() => { navigate('../Editorial') }} src={backarrow} style={{ width: "15px", height: "15px", cursor: 'pointer' }} className="mr-10" alt="" />
                        <img onClick={() => { navigate('../SocialMedia') }} src={nextarrow} style={{ width: "15px", height: "15px", cursor: 'pointer' }} alt="" />

                     </div>
                  </div >
                  <div style={{ marginTop: "auto", marginBottom: "2.5vh", marginRight: '5vw' }}>
                     <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>BowlCurry</div>
                     <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}><p><br />Hand Mudra Illustration for BowlCurry, conceived by celebrity chef Munna Maharaj, caters to those far from home, longing for the comforting taste of Indian cuisine.<br /><br />I had a great opportunity at Erth Co. to handle the illustration for Bowl Curry. I was deeply involved in the rebranding process, including the research and conceptualization phases, and took the lead on the illustration efforts.
                        {!!DetailLink && <><br /><br></br><u className='cursor-pointer' onClick={() => { window.open("DetailLink", "_blank"); }}>VIEW PROJECT IN DETAIL</u></>}</p></div>
                  </div>
               </div >
            </div>
         </div>
      </>
   )
}

export default Illustration
