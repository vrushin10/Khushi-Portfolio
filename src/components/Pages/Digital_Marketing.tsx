import React from 'react'
import Arrow from '../misc/arrow'
import metgala_01 from '../../assets/hot to haute/met gala-01.png'
import metgala_02 from '../../assets/hot to haute/met gala-02.png'
import metgala_03 from '../../assets/hot to haute/met gala-03.png'
import metgala_04 from '../../assets/hot to haute/met gala-04.png'
import metgala_05 from '../../assets/hot to haute/met gala-05.png'
import metgala_06 from '../../assets/hot to haute/met gala-06.png'
import metgala_07 from '../../assets/hot to haute/met gala-07.png'
import metgala_08 from '../../assets/hot to haute/met gala-08.png'
import Header from '../header'
import Slideshow from '../slideshow2'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'

const Digital_Marketing = () => {


   return (

      //  <div>Home</div>
      <>
         <div className="flex flex-col  h-screen">
            <Header></Header>
            <div className='w-screen flex flex-1'>
               <div style={{ textAlign: "center", marginTop: "auto", marginLeft: "2.5vw", marginRight: "5rem", paddingTop: "1rem", minWidth: "37vw", flex: 1 }}>
                  <Slideshow>
                     <img src={metgala_01} width={"100%"} alt="" />
                     <img src={metgala_02} width={"100%"} alt="" />
                     <img src={metgala_03} width={"100%"} alt="" />
                     <img src={metgala_04} width={"100%"} alt="" />
                     <img src={metgala_05} width={"100%"} alt="" />
                     <img src={metgala_06} width={"100%"} alt="" />
                     <img src={metgala_07} width={"100%"} alt="" />
                     <img src={metgala_08} width={"100%"} alt="" />

                  </Slideshow>
               </div>



               <div className='h-full w-full ml-auto' style={{
                  display: "flex", flexDirection: "column", paddingRight: "2.5vw", paddingTop: "2.5vh"
               }}>
                  <div style={{ width: "100%", display: "flex", textAlign: 'center' }}>
                     <div style={{ fontSize: "15px", }}>Digital Content Marketing, Brand Identity</div>
                     <div className='ml-auto'> <svg width="117" height="25" viewBox="0 0 117 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M105.019 24.774L106.189 23.6035L108.983 20.81L112.376 17.4167L115.293 14.4996C115.766 14.0261 116.248 13.5605 116.713 13.0792L116.734 13.0581C117.037 12.7556 117.037 12.2453 116.734 11.9428L115.564 10.7723L112.77 7.97879L109.377 4.58555L106.46 1.66841C105.987 1.19494 105.521 0.71357 105.04 0.247986L105.019 0.226942C104.727 -0.0650343 104.19 -0.0860777 103.903 0.226942C103.614 0.542593 103.59 1.03185 103.903 1.34224L105.074 2.51278L107.867 5.30628L111.26 8.69953L114.178 11.6167C114.651 12.0901 115.114 12.5741 115.598 13.0371L115.619 13.0581V11.9428L114.449 13.1134L111.655 15.9069L108.262 19.3001L105.345 22.2173C104.871 22.6907 104.39 23.1563 103.924 23.6377L103.903 23.6587C103.611 23.9507 103.59 24.4873 103.903 24.774C104.216 25.0634 104.705 25.087 105.019 24.774Z" fill="black" />
                        <path d="M11.9429 24.774L10.7724 23.6035L7.97887 20.81L4.58563 17.4167L1.66849 14.4996C1.19502 14.0261 0.713649 13.5605 0.248064 13.0792L0.227021 13.0581C-0.0754776 12.7556 -0.0754776 12.2453 0.227021 11.9428L1.39756 10.7723L4.19107 7.97879L7.58431 4.58555L10.5014 1.66841C10.9749 1.19494 11.4405 0.71357 11.9219 0.247986L11.9429 0.226942C12.2349 -0.0650343 12.7715 -0.0860777 13.0582 0.226942C13.3476 0.542593 13.3712 1.03185 13.0582 1.34224L11.8877 2.51278L9.09417 5.30628L5.70093 8.69953L2.78379 11.6167C2.31032 12.0901 1.84736 12.5741 1.36336 13.0371L1.34232 13.0581V11.9428L2.51286 13.1134L5.30636 15.9069L8.69961 19.3001L11.6167 22.2173C12.0902 22.6907 12.5716 23.1563 13.0372 23.6377L13.0582 23.6587C13.3502 23.9507 13.3712 24.4873 13.0582 24.774C12.7452 25.0634 12.2559 25.087 11.9429 24.774Z" fill="black" />
                     </svg>
                     </div>
                  </div >
                  <div style={{ marginTop: "auto", marginBottom: "2rem" }}>
                     <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>Hot to Haute</div>
                     <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}><p>The MET Gala's theme 'Hot to Haute' towards sustainability haute couture embraces eco-friendly materials and ethical practices.</p>
                        My task was to develop a passion project and ideate a Digital Content Marketing centered around design, focusing on three distinct goals awareness, trust, and purchase. And aimed to raise awareness about sustainability issues in the fashion industry, foster trust in the credibility of eco-friendly brands and practices, and ultimately drive purchases towards sustainable fashion options.</div>
                  </div>
               </div >
            </div>
         </div>
      </>
   )
}

export default Digital_Marketing