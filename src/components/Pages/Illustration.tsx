import React from 'react'
import Arrow from '../misc/arrow'
import metgala_01 from '../../assets/bowlcurry/bowl curry-01.png'
import metgala_02 from '../../assets/bowlcurry/bowl curry-02.png'
import metgala_03 from '../../assets/bowlcurry/bowl curry-03.png'
import metgala_04 from '../../assets/bowlcurry/bowl curry-04.png'
import Header from '../header'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'

const Illustration = () => {
   const images = [metgala_01,
      metgala_02,
      metgala_03,
      metgala_04]

   return (

      //  <div>Home</div>
      <>
         <Header></Header>
         <div style={{ width: "100%", display: "flex" }}>
            <div style={{ textAlign: "center", marginTop: "auto", marginLeft: "3rem", marginRight: "5rem", display: "block", flex: 1 }}>
               <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={125}
                  totalSlides={images.length}
                  infinite
                  orientation="vertical"
                  isPlaying
               // interval={2000}
               >
                  <Slider>
                     {images.map((image, index) => (


                        <Slide key={index} index={index}><img src={image} width={"100%"} alt="" /></Slide >


                     ))}
                  </Slider>
                  {/* <DotGroup dotNumbers /> */}
               </CarouselProvider>
            </div>


            <div style={{
               height: "85vh", width: "52.5vw", display: "flex", flexDirection: "column", padding: "2.5vw"
            }}>
               <div style={{ width: "100%", display: "flex", textAlign: 'center' }}>
                  <div style={{ fontSize: "15px", }}>Illustration</div>
                  <div style={{ fontSize: "15px", marginLeft: "auto", marginRight: "6px" }}>Next </div><Arrow></Arrow>
               </div >
               <div style={{ marginTop: "auto", marginBottom: "2rem" }}>
                  <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>BowlCurry</div>
                  <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}><p>Hand Mudra Illustration for BowlCurry, conceived by celebrity chef Munna Maharaj, caters to those far from home, longing for the comforting taste of Indian cuisine.</p>
                     <p>I had a great opportunity at Erth Co. to handle the illustration for Bowl Curry. I was deeply involved in the rebranding process, including the research and conceptualization phases, and took the lead on the illustration efforts.</p></div>
               </div>
            </div >
         </div>
      </>
   )
}

export default Illustration