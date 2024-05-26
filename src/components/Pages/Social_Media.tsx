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
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'

const Social_Media = () => {
   const images = [metgala_01,
      metgala_02,
      metgala_03,
      metgala_04,
      metgala_05,
      metgala_06,
      metgala_07,
      metgala_08]

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
                  <div style={{ fontSize: "15px", }}>Social Media</div>
                  <div style={{ fontSize: "15px", marginLeft: "auto", marginRight: "6px" }}>Next </div><Arrow></Arrow>
               </div >
               <div style={{ marginTop: "auto", marginBottom: "2rem" }}>
                  <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>Otherworldly</div>
                  <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}><p>ocial Media Posts for Otherworldly—a blend of spirituality, wellness, beauty, and astrology, offering bold luxury and elegance.</p>
                     <p>This involved crafting social media post guides that stayed true to the brand's aesthetic, incorporating its colors, clean design principles, and functional aspects to produce a diverse range of engaging posts tailored to meet the various contextual needs of the brand.</p></div>
               </div>
            </div >
         </div>
      </>
   )
}

export default Social_Media