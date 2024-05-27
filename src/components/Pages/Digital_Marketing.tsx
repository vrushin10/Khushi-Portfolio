import React from 'react'
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
   const navigate = useNavigate();

   return (

      //  <div>Home</div>
      <>
         <div className="flex flex-col  h-screen">
            <Header></Header>
            <div className='w-screen h-full flex' >
               <div className='xl:max-w-[35vw]  flex-col content-end' style={{ textAlign: "center", marginLeft: "2.5vw", marginRight: "2rem", flex: 5 }}>
                  <Slideshow>
                     <img src={`${metgala_01}?${new Date().getTime()}`} width={"auto"} alt="" />
                     <img src={`${metgala_02}?${new Date().getTime()}`} width={"auto"} alt="" />
                     <img src={`${metgala_03}?${new Date().getTime()}`} width={"auto"} alt="" />
                     <img src={`${metgala_04}?${new Date().getTime()}`} width={"auto"} alt="" />
                     <img src={`${metgala_05}?${new Date().getTime()}`} width={"auto"} alt="" />
                     <img src={`${metgala_06}?${new Date().getTime()}`} width={"auto"} alt="" />
                     <img src={`${metgala_07}?${new Date().getTime()}`} width={"auto"} alt="" />
                     <img src={`${metgala_08}?${new Date().getTime()}`} width={"auto"} alt="" />

                  </Slideshow>
               </div>



               <div className='h-full w-full ml-auto ' style={{
                  display: "flex", flexDirection: "column", paddingRight: "2.5vw", paddingTop: "2.5vh", flex: 6
               }}>
                  <div style={{ width: "100%", display: "flex", textAlign: 'center' }}>
                     <div style={{ fontSize: "15px" }}><u>Digital Content Marketing, Brand Identity</u></div>
                     <div className='ml-auto flex' >
                        <img onClick={() => { navigate('../BrandIdentity') }} src={backarrow} style={{ width: "15px", height: "15px" }} className="mr-10" alt="" />
                        <img onClick={() => { navigate('../Branding') }} src={nextarrow} style={{ width: "15px", height: "15px" }} alt="" />

                     </div>
                  </div >
                  <div style={{ marginTop: "auto", marginBottom: "2rem" }}>
                     <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>Hot to Haute </div>
                     <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}>
                        <p><br />The MET Gala's theme 'Hot to Haute' towards sustainability haute couture embraces eco-friendly materials and ethical practices.<br /><br />
                           My task was to develop a passion project and ideate a Digital Content Marketing centered around design, focusing on three distinct goals awareness, trust, and purchase. And aimed to raise awareness about sustainability issues in the fashion industry, foster trust in the credibility of eco-friendly brands and practices, and ultimately drive purchases towards sustainable fashion options.</p></div>
                  </div>
               </div >
            </div>
         </div>
      </>
   )
}

export default Digital_Marketing