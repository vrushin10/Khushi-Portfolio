import React, { createRef, useEffect, useState } from 'react'
import Arrow from '../misc/arrow'
import metgala_01 from '../../assets/aliverse/aliverse-01.webp'
import metgala_02 from '../../assets/aliverse/aliverse-02.webp'
import metgala_03 from '../../assets/aliverse/aliverse-03.webp'
import metgala_04 from '../../assets/aliverse/aliverse-04.webp'
import metgala_05 from '../../assets/aliverse/aliverse-05.webp'
import Header from '../header'
import backarrow from "../../assets/backarrow.svg"
import nextarrow from "../../assets/nextarrow.svg"

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import Slideshow from '../slideshow2'
import { useNavigate } from 'react-router-dom'

const BrandIdentity = () => {
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

   const DetailLink = null
   const images = [metgala_01,
      metgala_02,
      metgala_03,
      metgala_04,
      metgala_05]
   const navigate = useNavigate();
   return (

      //  <div>Home</div>
      <>
         <div className="flex flex-col  h-screen">
            <Header></Header>
            <div className='w-screen h-full flex' >
               <div className='xl:max-w-[35vw]  flex-col content-end' style={{ textAlign: "center", marginLeft: "2.5vw", marginRight: "2rem", flex: 5 }}>
                  <Slideshow> {/*  
// @ts-ignore */}
                     <img src={metgala_01} ref={imgref} onLoad={setHeight} width={"100%"} />
                     <img src={metgala_02} width={"100%"} />
                     <img src={metgala_03} width={"100%"} />
                     <img src={metgala_04} width={"100%"} />
                     <img src={metgala_05} width={"100%"} />

                  </Slideshow>
               </div>
               <div className='w-full ml-auto mt-auto ' style={{
                  height: refHeight,
                  display: "flex", flexDirection: "column", paddingRight: "2.5vw", flex: 6
               }}>
                  <div style={{ width: "100%", display: "flex", textAlign: 'center' }}>
                     <div style={{ fontSize: "15px", }}><u>Brand Identity</u></div>
                     <div className='ml-auto flex' >
                        <img onClick={() => { navigate('../SocialMedia') }} src={backarrow} style={{ width: "15px", height: "15px", cursor: 'pointer' }} className="mr-10" alt="" />
                        <img onClick={() => { navigate('../Digital_Marketing') }} src={nextarrow} style={{ width: "15px", height: "15px", cursor: 'pointer' }} alt="" />

                     </div>
                  </div >
                  <div style={{ marginTop: "auto", marginBottom: "2.5vh", marginRight: '5vw' }}>
                     <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>Aliverse</div>
                     <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}><p><br />Aliverse is an Instagram blog blending education and entertainment, spotlighting brown fashion, South Asian cinema, and popular culture.<br /><br />My role was to ideate and conceptualize logo marks, ensuring they embodied the right tone and fit for the brand, while working closely with Malvika during my internship at Erth Co.
                        {!!DetailLink && <><br /><br></br><u className='cursor-pointer' onClick={() => { window.open(DetailLink, "_blank"); }}>VIEW PROJECT IN DETAIL</u></>}</p></div>
                  </div>
               </div >
            </div >
         </div >
      </>
   )
}

export default BrandIdentity