import React, { useState } from 'react'
import Arrow from '../misc/arrow'
import chanelly_01 from '../../assets/chanelly/chanelly-01.png'
import chanelly_02 from '../../assets/chanelly/chanelly-02.png'
import chanelly_03 from '../../assets/chanelly/chanelly-03.png'
import chanelly_04 from '../../assets/chanelly/chanelly-04.png'
import chanelly_05 from '../../assets/chanelly/chanelly-05.png'
import chanelly_06 from '../../assets/chanelly/chanelly-06.png'
import vid from '../../assets/chanelly/gif_5 web.webm'
import Header from '../header'
import Slideshow from '../slideshow2'


const Editorial = () => {
   // const [slideIndex, setslideIndex] = useState(0)
   const images = [chanelly_01,
      chanelly_02,
      chanelly_03,
      chanelly_04,
      chanelly_05,
      chanelly_06]

   return (

      //  <div>Home</div>
      <>
         <div className="flex flex-col  h-screen">
            <Header></Header>
            <div className='w-screen flex flex-1'>
               <div style={{ textAlign: "center", maxWidth: "35vw", marginTop: 'auto', marginLeft: "2.5vw", display: "block" }}>
                  <Slideshow >
                     {/* <Slider>
                        <Slide className={"slideCarousel"} index={0}> */}
                     <video src={vid} width={"100%"} autoPlay muted controls={false} loop></video>
                     <img src={images[0]} width={"100%"} alt="" />
                     <img src={images[1]} width={"100%"} alt="" />
                     <img src={images[2]} width={"100%"} alt="" />
                     <img src={images[3]} width={"100%"} alt="" />
                     <img src={images[4]} width={"100%"} alt="" />
                     <img src={images[5]} width={"100%"} alt="" />
                  </Slideshow>
               </div>
               <div style={{
                  maxWidth: "58vw", display: "flex", flexDirection: "column", padding: "2.5vw", flex: 2
               }} className='ml-auto'>
                  <div style={{ width: "100%", display: "flex", textAlign: 'center' }}>
                     <div style={{ fontSize: "15px", }}>Editorial Design</div>
                     <div className='ml-auto'> <svg width="117" height="25" viewBox="0 0 117 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M105.019 24.774L106.189 23.6035L108.983 20.81L112.376 17.4167L115.293 14.4996C115.766 14.0261 116.248 13.5605 116.713 13.0792L116.734 13.0581C117.037 12.7556 117.037 12.2453 116.734 11.9428L115.564 10.7723L112.77 7.97879L109.377 4.58555L106.46 1.66841C105.987 1.19494 105.521 0.71357 105.04 0.247986L105.019 0.226942C104.727 -0.0650343 104.19 -0.0860777 103.903 0.226942C103.614 0.542593 103.59 1.03185 103.903 1.34224L105.074 2.51278L107.867 5.30628L111.26 8.69953L114.178 11.6167C114.651 12.0901 115.114 12.5741 115.598 13.0371L115.619 13.0581V11.9428L114.449 13.1134L111.655 15.9069L108.262 19.3001L105.345 22.2173C104.871 22.6907 104.39 23.1563 103.924 23.6377L103.903 23.6587C103.611 23.9507 103.59 24.4873 103.903 24.774C104.216 25.0634 104.705 25.087 105.019 24.774Z" fill="black" />
                        <path d="M11.9429 24.774L10.7724 23.6035L7.97887 20.81L4.58563 17.4167L1.66849 14.4996C1.19502 14.0261 0.713649 13.5605 0.248064 13.0792L0.227021 13.0581C-0.0754776 12.7556 -0.0754776 12.2453 0.227021 11.9428L1.39756 10.7723L4.19107 7.97879L7.58431 4.58555L10.5014 1.66841C10.9749 1.19494 11.4405 0.71357 11.9219 0.247986L11.9429 0.226942C12.2349 -0.0650343 12.7715 -0.0860777 13.0582 0.226942C13.3476 0.542593 13.3712 1.03185 13.0582 1.34224L11.8877 2.51278L9.09417 5.30628L5.70093 8.69953L2.78379 11.6167C2.31032 12.0901 1.84736 12.5741 1.36336 13.0371L1.34232 13.0581V11.9428L2.51286 13.1134L5.30636 15.9069L8.69961 19.3001L11.6167 22.2173C12.0902 22.6907 12.5716 23.1563 13.0372 23.6377L13.0582 23.6587C13.3502 23.9507 13.3712 24.4873 13.0582 24.774C12.7452 25.0634 12.2559 25.087 11.9429 24.774Z" fill="black" />
                     </svg>
                     </div>
                  </div >
                  <div style={{ marginTop: "auto" }}>
                     <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>Chanelly</div>
                     <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}><p>'Chanelly' a 64-page editorial design book showcases beautifully crafted summer / spring runways by Karl Lagerfeld.</p>
                        <p>The task of creating a 64-page book detailing the essence of the brand Chanel within a tight three-day timeframe, with two additional days allocated for printing. This project was deeply editorial in nature, serving as a final year project.</p></div>
                  </div>
               </div >
            </div >
         </div>
      </>
   )
}

export default Editorial