import React, { HtmlHTMLAttributes, createRef, useEffect, useState } from 'react'
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

   const imgref = createRef()
   const [refHeight, setregHeight] = useState(0)
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

      });
      {/* 
   // @ts-ignore */}
      resizeObserver.observe(imgref.current);
      return () => resizeObserver.disconnect(); // clean up 
   }, [imgref]);

   var slideshowRef = React.createRef()



   function handelTableMouseEnter(number: number) {
      // @ts-ignore
      slideshowRef.current.MouseEnter(number);

   }

   function handelTableMouseLeave() {      // @ts-ignore
      slideshowRef.current.MouseLeave();

   }
   return (

      //  <div>Home</div>
      <>
         <div className="flex flex-col  h-screen">
            <Header></Header>
            <div className="flex  h-full w-full">
               {/* @ts-ignore */}
               <div id="slidesho-container" ref={imgref} className='flex flex-col-reverse  h-full pl-[2.5vw]'>

                  {/* <Slideshow  ></Slideshow> */}
                  <div>
                     <Slideshow1 ref={slideshowRef as React.RefObject<HTMLDivElement>}  >
                        {imgs.map((img, index) => {
                           return (
                              // @ts-ignore
                              <img src={img} key={index} className='' style={{ height: `${refHeight * 0.95}px`, maxWidth: "none", marginTop: 'auto' }} alt="" />
                           )
                        })}
                     </Slideshow1>
                  </div>
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