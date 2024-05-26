import React from 'react'
import Arrow from '../misc/arrow'
import chanelly_01 from '../../assets/chanelly/chanelly-01.png'
import chanelly_02 from '../../assets/chanelly/chanelly-02.png'
import chanelly_03 from '../../assets/chanelly/chanelly-03.png'
import chanelly_04 from '../../assets/chanelly/chanelly-04.png'
import chanelly_05 from '../../assets/chanelly/chanelly-05.png'
import chanelly_06 from '../../assets/chanelly/chanelly-06.png'
import vid from '../../assets/chanelly/gif_5 web.webm'
import Header from '../header'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel'

const Editorial = () => {
   const images = [chanelly_01,
      chanelly_02,
      chanelly_03,
      chanelly_04,
      chanelly_05,
      chanelly_06]

   return (

      //  <div>Home</div>
      <>
         <Header></Header>
         <div style={{ width: "100%", display: "flex" }}>
            <div style={{ textAlign: "center", width: "37vw", marginTop: "auto", marginLeft: "2.5vw", marginRight: "5rem", display: "block", flex: 1, position: 'absolute', bottom: "-100px" }}>
               <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={125}
                  totalSlides={images.length + 1}
                  infinite
                  orientation="vertical"
               >
                  <Slider>
                     <Slide className={"slideCarousel"} index={0}>
                        <video src={vid} width={"100%"} autoPlay muted controls={false} loop></video>
                     </Slide>
                     {images.map((image, index) => (
                        <Slide key={index} index={index + 1}><img src={image} width={"100%"} alt="" /></Slide >
                     ))}
                  </Slider>

               </CarouselProvider>
            </div>


            <div style={{
               marginLeft: "auto", height: "85vh", width: "52.5vw", display: "flex", flexDirection: "column", padding: "2.5vw"
            }}>
               <div style={{ width: "100%", display: "flex", textAlign: 'center' }}>
                  <div style={{ fontSize: "15px", }}>Editorial Design</div>
                  <div style={{ fontSize: "15px", marginLeft: "auto", marginRight: "6px" }}>Next </div><Arrow></Arrow>
               </div >
               <div style={{ marginTop: "auto", marginBottom: "2rem" }}>
                  <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>Chanelly</div>
                  <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}><p>'Chanelly' a 64-page editorial design book showcases beautifully crafted summer / spring runways by Karl Lagerfeld.</p>
                     <p>The task of creating a 64-page book detailing the essence of the brand Chanel within a tight three-day timeframe, with two additional days allocated for printing. This project was deeply editorial in nature, serving as a final year project.</p></div>
               </div>
            </div >
         </div>
      </>
   )
}

export default Editorial