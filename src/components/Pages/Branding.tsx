import React from 'react'
import Arrow from '../misc/arrow'
import sand_01 from '../../assets/sand/sand-01.png'
import sand_02 from '../../assets/sand/sand-02.png'
import sand_03 from '../../assets/sand/sand-03.png'
import sand_04 from '../../assets/sand/sand-04.png'
import sand_05 from '../../assets/sand/sand-05.png'
// import sand_06 from '../../assets/sand/sands-06.png'
import Header from '../header'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import Slideshow from '../slideshow2'

const Branding = () => {
   const images = [sand_01,
      sand_02,
      sand_03,
      sand_04,
      sand_05,

   ]

   return (

      //  <div>Home</div>
      <>
         <div className="flex flex-col  h-screen">
            <Header></Header>
            <div className='w-screen flex flex-1'>
               <div style={{ textAlign: "center", marginTop: "auto", marginLeft: "2.5vw", paddingTop: "1rem", minWidth: "37vw", maxWidth: "37vw", flex: 1 }}>
                  <Slideshow>
                     <img src={sand_01} width={"100%"} />
                     <img src={sand_02} width={"100%"} />
                     <img src={sand_03} width={"100%"} />
                     <img src={sand_04} width={"100%"} />
                     <img src={sand_05} width={"100%"} />

                  </Slideshow>
               </div>
               <div className='h-full w-full ml-auto' style={{
                  maxWidth: "57vw", display: "flex", flexDirection: "column", paddingRight: "2.5vw", paddingTop: "2.5vh", paddingLeft: "2.5vh"
               }}>
                  <div style={{ width: "100%", display: "flex", textAlign: 'center' }}>
                     <div style={{ fontSize: "15px", }}>Branding / Campaign</div>
                     <div style={{ fontSize: "15px", marginLeft: "auto", marginRight: "6px" }}>Next </div><Arrow></Arrow>
                  </div >
                  <div style={{ marginTop: "auto", marginBottom: "3rem" }}>
                     <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>Sand</div>
                     <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}><p>Sand an extension of Instagram platform for artist and creatives that breaks free from the toxic metrics and pressures of social media.</p>
                        <p>My task was to develop a passion project and ideate a Digital Content Marketing centered around design, focusing on three distinct goals awareness, trust, and purchase. And aimed to raise awareness about sustainability issues in the fashion industry, foster trust in the credibility of eco-friendly brands and practices, and ultimately drive purchases towards sustainable fashion options.</p>
                     </div>
                  </div>
               </div >
            </div>
         </div >
      </>
   )
}

export default Branding