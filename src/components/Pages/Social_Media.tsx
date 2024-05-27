import React, { createRef, useEffect, useState } from 'react'
import Arrow from '../misc/arrow'
import otherworldly_01 from '../../assets/otherworldly/otherworldly social media-01 (1).webp'
import otherworldly_02 from '../../assets/otherworldly/otherworldly social media-01 (2).webp'
import otherworldly_03 from '../../assets/otherworldly/otherworldly social media-01 (3).webp'
import otherworldly_04 from '../../assets/otherworldly/otherworldly social media-01 (4).webp'
import otherworldly_05 from '../../assets/otherworldly/otherworldly social media-01 (5).webp'
import Header from '../header'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import Slideshow from '../slideshow2'

import backarrow from "../../assets/backarrow.svg"
import nextarrow from "../../assets/nextarrow.svg"
import { useNavigate } from 'react-router-dom'

const Social_Media = () => {
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
   const images = [otherworldly_01,
      otherworldly_02,
      otherworldly_03,
      otherworldly_04,
      otherworldly_05,
   ]
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
                     <img src={otherworldly_01} ref={imgref} onLoad={setHeight} width={"100%"} />
                     <img src={otherworldly_02} width={"100%"} />
                     <img src={otherworldly_03} width={"100%"} />
                     <img src={otherworldly_04} width={"100%"} />
                     <img src={otherworldly_05} width={"100%"} />

                  </Slideshow>
               </div>
               <div className='w-full mt-auto ml-auto ' style={{
                  height: refHeight,
                  display: "flex", flexDirection: "column", paddingRight: "2.5vw", flex: 6
               }}>
                  <div style={{ width: "100%", display: "flex", textAlign: 'center' }}>
                     <div style={{ fontSize: "15px", }}><u>Social Media</u></div>
                     <div className='ml-auto flex' >
                        <img onClick={() => { navigate('../Illustration') }} src={backarrow} style={{ width: "15px", height: "15px", cursor: 'pointer' }} className="mr-10" alt="" />
                        <img onClick={() => { navigate('../BrandIdentity') }} src={nextarrow} style={{ width: "15px", height: "15px", cursor: 'pointer' }} alt="" />

                     </div>
                  </div >
                  <div style={{ marginTop: "auto", marginBottom: "2.5vh", marginRight: '5vw' }}>
                     <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>Otherworldly</div>
                     <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}><p><br />Social Media Posts for Otherworldly—a blend of spirituality, wellness, beauty, and astrology, offering bold luxury and elegance.<br /><br />This involved crafting social media post guides that stayed true to the brand's aesthetic, incorporating its colors, clean design principles, and functional aspects to produce a diverse range of engaging posts tailored to meet the various contextual needs of the brand.
                        {!!DetailLink && <><br /><br></br><u className='cursor-pointer' onClick={() => { window.open(DetailLink, "_blank"); }}>VIEW PROJECT IN DETAIL</u></>}</p></div>
                  </div>
               </div >
            </div>
         </div>
      </>
   )
}

export default Social_Media
