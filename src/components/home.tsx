import React, { HtmlHTMLAttributes } from 'react'
import Table1 from './table.tsx'
// import Slideshow from './slideshow.tsx'
import Header from './header.tsx'
import Slideshow1 from './slideshow1.tsx'
import img1 from "../assets/sand/sand-01.webp"
import img2 from "../assets/aliverse/aliverse-01.webp"
import img3 from "../assets/bowlcurry/bowl curry-01 (1).webp"
import img4 from "../assets/chanelly/chanelly-06 (1).webp"
import img5 from "../assets/hot to haute/met gala-01.webp"
import img6 from "../assets/otherworldly/otherworldly social media-01 (1).webp"

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
      // @ts-ignore
      slideshowRef.current.MouseEnter(number);

   }

   function handelTableMouseLeave() {
      console.log("tablehover");
      // @ts-ignore
      slideshowRef.current.MouseLeave();

   }
   return (

      //  <div>Home</div>
      <>
         <div className="flex flex-col  h-screen">
            <Header></Header>
            <div className='w-screen flex flex-1'>
               <div style={{ display: 'flex', flex: 1, paddingLeft: "2.5vw", paddingTop: "1rem" }}>

                  {/* <Slideshow  ></Slideshow> */}
                  <Slideshow1 ref={slideshowRef as React.RefObject<HTMLDivElement>}  >
                     {imgs.map((img, index) => {
                        return (
                           <img src={img} style={{ height: '100%' }} key={index} alt="" />
                        )
                     })}
                  </Slideshow1>
               </div >

               <div className='ml-8 w-full xl:mb-4' style={{ marginRight: "2.5vw" }} >
                  <Table1 handelTableHover={handelTableMouseEnter} handelTableMouseLeave={handelTableMouseLeave}></Table1>
               </div>

            </div>
         </div>
      </>
   )
}

export default Home