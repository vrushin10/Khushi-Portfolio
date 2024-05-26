import React, { useState } from 'react'
import Arrow from '../misc/arrow'
import metgala_01 from '../../assets/aliverse/aliverse-01.png'
import metgala_02 from '../../assets/aliverse/aliverse-02.png'
import metgala_03 from '../../assets/aliverse/aliverse-03.png'
import metgala_04 from '../../assets/aliverse/aliverse-04.png'
import metgala_05 from '../../assets/aliverse/aliverse-05.png'
import Header from '../header'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'

const BrandIdentity = () => {
   const images = [metgala_01,
      metgala_02,
      metgala_03,
      metgala_04,
      metgala_05]
   const [slideNum, setSlideNum] = useState(0);
   return (

      //  <div>Home</div>
      <>
         <Header></Header>
         <div style={{ width: "100%", display: "flex" }}>
            <div style={{ textAlign: "center", marginTop: "1rem", margin: "3rem", marginRight: "4rem", display: "block", flex: 1 }}>
               <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={125}
                  totalSlides={images.length}
                  infinite
                  orientation="vertical"
                  currentSlide={slideNum}
                  isPlaying
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
                  <div style={{ fontSize: "15px", }}>Brand Identity</div>
                  <div style={{ fontSize: "15px", marginLeft: "auto", marginRight: "6px" }}>Next </div><Arrow></Arrow>
               </div >
               <div style={{ marginTop: "auto", marginBottom: "2.5vh" }}>
                  <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>Aliverse</div>
                  <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}><p>Aliverse is an Instagram blog blending education and entertainment, spotlighting brown fashion, South Asian cinema, and popular culture.</p>
                     <p>My role was to ideate and conceptualize logo marks, ensuring they embodied the right tone and fit for the brand, while working closely with Malvika during my internship at Erth Co.</p></div>
               </div>
            </div >
         </div >
      </>
   )
}

export default BrandIdentity