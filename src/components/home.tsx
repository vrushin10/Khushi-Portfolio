import React from 'react'
import Table1 from './table.tsx'
// import Slideshow from './slideshow.tsx'
import Header from './header.tsx'
import Slideshow1 from './slideshow1.tsx'
import img1 from "../assets/sand/sand-01.png"
import img2 from "../assets/aliverse/aliverse-01.png"
import img3 from "../assets/bowlcurry/bowl curry-01.png"
import img4 from "../assets/chanelly/chanelly-06.png"
import img5 from "../assets/hot to haute/met gala-01.png"
import img6 from "../assets/otherworldly/social media-01.png"

const Home = () => {
   const imgs = [
      img5,
      img1,
      img4,
      img3,
      img6,
      img2]

   var slideshowRef = React.createRef()



   function handelTableMouseEnter(number: number) {
      console.log("tablehover");
      slideshowRef.current.MouseEnter(number);

   }

   function handelTableMouseLeave() {
      console.log("tablehover");
      slideshowRef.current.MouseLeave();

   }
   return (

      //  <div>Home</div>
      <>
         <Header></Header>
         <div style={{ flex: 1, marginLeft: "2.5vw", marginTop: "1rem", position: "absolute", bottom: 0, width: "30vw", maxHeight: "90vh" }}>
            {/* <Slideshow  ></Slideshow> */}
            <Slideshow1 ref={slideshowRef as React.RefObject<HTMLDivElement>}  >
               {imgs.map((img, index) => {
                  return (
                     <img style={{ width: "100%" }} src={img} alt="" />
                  )
               })}
            </Slideshow1>
         </div >
         <Table1 handelTableHover={handelTableMouseEnter} handelTableMouseLeave={handelTableMouseLeave}></Table1>
      </>
   )
}

export default Home