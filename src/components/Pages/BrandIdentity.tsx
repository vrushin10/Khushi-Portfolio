import React, { useState } from 'react'
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
                  <Slideshow>
                     <img src={metgala_01} width={"100%"} />
                     <img src={metgala_02} width={"100%"} />
                     <img src={metgala_03} width={"100%"} />
                     <img src={metgala_04} width={"100%"} />
                     <img src={metgala_05} width={"100%"} />

                  </Slideshow>
               </div>
               <div className='h-full w-full ml-auto ' style={{
                  display: "flex", flexDirection: "column", paddingRight: "2.5vw", paddingTop: "2.5vh", flex: 6
               }}>
                  <div style={{ width: "100%", display: "flex", textAlign: 'center' }}>
                     <div style={{ fontSize: "15px", }}><u>Brand Identity</u></div>
                     <div className='ml-auto flex' >
                        <img onClick={() => { navigate('../SocialMedia') }} src={backarrow} style={{ width: "15px", height: "15px" }} className="mr-10" alt="" />
                        <img onClick={() => { navigate('../Digital_Marketing') }} src={nextarrow} style={{ width: "15px", height: "15px" }} alt="" />

                     </div>
                  </div >
                  <div style={{ marginTop: "auto", marginBottom: "2.5vh" }}>
                     <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>Aliverse</div>
                     <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}><p><br />Aliverse is an Instagram blog blending education and entertainment, spotlighting brown fashion, South Asian cinema, and popular culture.<br /><br />My role was to ideate and conceptualize logo marks, ensuring they embodied the right tone and fit for the brand, while working closely with Malvika during my internship at Erth Co.</p></div>
                  </div>
               </div >
            </div >
         </div>
      </>
   )
}

export default BrandIdentity