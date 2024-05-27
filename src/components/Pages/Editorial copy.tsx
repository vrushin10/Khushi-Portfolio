import React, { createRef, useEffect, useState } from 'react'
import Arrow from '../misc/arrow'
import chanelly_01 from '../../assets/chanelly/chanelly-01.webp'
import chanelly_02 from '../../assets/chanelly/chanelly-02.webp'
import chanelly_03 from '../../assets/chanelly/chanelly-03.webp'
import chanelly_04 from '../../assets/chanelly/chanelly-04 (1).webp'
import chanelly_05 from '../../assets/chanelly/chanelly-05.webp'
import chanelly_06 from '../../assets/chanelly/chanelly-06 (1).webp'
import vid from '../../assets/chanelly/gif.webm'
import Header from '../header'
import { useNavigate } from 'react-router-dom'

import backarrow from "../../assets/backarrow.svg"
import nextarrow from "../../assets/nextarrow.svg"
import Slideshow from '../slideshow2'


const Editorial = () => {
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
   // const [slideIndex, setslideIndex] = useState(0)
   const DetailLink = "https://www.behance.net/gallery/199370145/Chanelly-Editorial-Design"
   const images = [chanelly_01,
      chanelly_02,
      chanelly_03,
      chanelly_04,
      chanelly_05,
      chanelly_06]
   const navigate = useNavigate();

   return (
      <>
         <div className="flex flex-col  h-screen">
            <Header></Header>
            <div className='w-screen h-full flex' >
               <div className='xl:max-w-[35vw]  flex-col content-end' style={{ textAlign: "center", marginLeft: "2.5vw", marginRight: "2rem", flex: 5 }}>
                  <Slideshow>
                     {/* 
// @ts-ignore */}
                     <video src={vid} width={"100%"} ref={imgref} onLoad={setHeight} autoPlay muted controls={false} loop></video>
                     <img src={images[0]} width={"100%"} alt="" />
                     <img src={images[1]} width={"100%"} alt="" />
                     <img src={images[2]} width={"100%"} alt="" />
                     <img src={images[3]} width={"100%"} alt="" />
                     <img src={images[4]} width={"100%"} alt="" />
                     <img src={images[5]} width={"100%"} alt="" />
                  </Slideshow>
               </div>
               <div className='w-full mt-auto ml-auto ' style={{
                  height: refHeight,
                  display: "flex", flexDirection: "column", paddingRight: "2.5vw", flex: 6
               }}>
                  <div style={{ width: "100%", display: "flex", textAlign: 'center' }}>
                     <div style={{ fontSize: "15px", }}><u>Editorial Design</u></div>
                     <div className='ml-auto flex' >
                        <img onClick={() => { navigate('../Branding') }} src={backarrow} style={{ width: "15px", height: "15px", cursor: 'pointer' }} className="mr-10" alt="" />
                        <img onClick={() => { navigate('../Illustration') }} src={nextarrow} style={{ width: "15px", height: "15px", cursor: 'pointer' }} alt="" />

                     </div>
                  </div >
                  <div style={{ marginTop: "auto", marginBottom: "2.5vh", marginRight: '5vw' }}>
                     <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>Chanelly</div>
                     <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}><br /><p>'Chanelly' a 64-page editorial design book showcases beautifully crafted summer / spring runways by Karl Lagerfeld.<br /><br />The task of creating a 64-page book detailing the essence of the brand Chanel within a tight three-day timeframe, with two additional days allocated for printing. This project was deeply editorial in nature, serving as a final year project.
                        {!!DetailLink && <><br /><br></br><u className='cursor-pointer' onClick={() => { window.open(DetailLink, "_blank"); }}>VIEW PROJECT IN DETAIL</u></>}</p></div>
                  </div>
               </div >
            </div >
         </div>
      </>
   )
}

export default Editorial
