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
import MobileHeader from './MobileHeader.tsx'
import { useNavigate } from 'react-router-dom'
const Home = () => {
   const navigate = useNavigate()
   const imgs = [
      img5,
      img1,
      img4,
      img3,
      img6,
      img2]

   const navigateLinks = ["../Digital_Marketing",
      "../Branding",
      "../Editorial",
      "../Illustration",
      "../SocialMedia",
      "../BrandIdentity",]
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
         <div className="hidden bg-white dark:bg-[#000000] dark:text-white lg:flex flex-col  h-screen ">
            <Header></Header>
            <div className="flex  h-full w-full">
               {/* @ts-ignore */}
               <div id="slidesho-container" ref={imgref} className='flex flex-col-reverse  h-full pl-[2.5vw]'>

                  {/* <Slideshow  ></Slideshow> */}
                  <div>
                     <Slideshow1 ref={slideshowRef as React.RefObject<HTMLDivElement>} navigateLinks={navigateLinks} >
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

                  <div className="homepage-table">
                     <div className=' border-t border-black dark:border-white mx-auto my-1 w-full' />
                     <div className="homepage-cell hover:underline" onClick={() => { navigate("/Digital_Marketing") }} onMouseOver={() => { handelTableMouseEnter(1) }} onMouseLeave={() => { handelTableMouseLeave() }}>
                        <div className="homepage-left">Hot to Haute</div>
                        <div className="homepage-right">Branding / Campaign</div>
                     </div>
                     <div className=' border-t border-black dark:border-white mx-auto my-1 w-full' />
                     <div className="homepage-cell hover:underline" onClick={() => { navigate("/Branding") }} onMouseOver={() => { handelTableMouseEnter(2) }} onMouseLeave={() => { handelTableMouseLeave() }}>
                        <div className="homepage-left">Sand</div>
                        <div className="homepage-right">Branding / UI Design</div>
                     </div>

                     <div className=' border-t border-black dark:border-white mx-auto my-1 w-full' />

                     <div className="homepage-cell hover:underline" onClick={() => { navigate("/Editorial") }} onMouseOver={() => { handelTableMouseEnter(3) }} onMouseLeave={() => { handelTableMouseLeave() }}>
                        <div className="homepage-left">Chanelly</div>
                        <div className="homepage-right">Editorial Design</div>
                     </div>
                     <div className=' border-t border-black dark:border-white mx-auto my-1 w-full' />
                     <div className="homepage-cell hover:underline" onClick={() => { navigate("/Illustration") }} onMouseOver={() => { handelTableMouseEnter(4) }} onMouseLeave={() => { handelTableMouseLeave() }}>
                        <div className="homepage-left">BowlCurry</div>
                        <div className="homepage-right">Illustration</div>
                     </div>
                     <div className=' border-t border-black dark:border-white mx-auto my-1 w-full' />
                     <div className="homepage-cell hover:underline" onClick={() => { navigate("/SocialMedia") }} onMouseOver={() => { handelTableMouseEnter(5) }} onMouseLeave={() => { handelTableMouseLeave() }}>
                        <div className="homepage-left">Otherworldly</div>
                        <div className="homepage-right">Social Media Posts</div>
                     </div>
                     <div className=' border-t border-black dark:border-white mx-auto my-1 w-full' />
                     <div className="homepage-cell hover:underline" onClick={() => { navigate("/BrandIdentity") }} onMouseOver={() => { handelTableMouseEnter(6) }} onMouseLeave={() => { handelTableMouseLeave() }}>
                        <div className="homepage-left">Aliverse</div>
                        <div className="homepage-right">Brand Identity</div>
                     </div>
                     <div className=' border-t border-black dark:border-white mx-auto my-1 w-full' />
                  </div>
               </div>

            </div>
         </div >
         <div className="flex lg:hidden flex-col  h-screen bg-white dark:bg-[#000000] dark:text-white">
            <MobileHeader></MobileHeader>
            <div className='h-full w-screen flex flex-col-reverse'>
               <div className=' mx-auto'>
                  <Slideshow1 ref={slideshowRef as React.RefObject<HTMLDivElement>} navigateLinks={navigateLinks} >
                     {imgs.map((img, index) => {
                        return (
                           // @ts-ignore
                           <img src={img} key={index} className='' style={{ maxHeight: "80vh", maxWidth: "95vw", marginTop: 'auto' }} alt="" />
                        )
                     })}
                  </Slideshow1>
               </div>
               <div className='flex flex-col h-full'>
                  <div className='h-full flex items-center mx-[2.5vw]' onClick={() => { navigate("/Digital_Marketing") }}><span>Hot to Haute</span><span className='ml-auto'>Branding / Campaign</span></div>
                  <div className='h-full flex items-center mx-[2.5vw]' onClick={() => { navigate("/Branding") }}><span>Sand</span><span className='ml-auto'>Branding / UI Design</span></div>
                  <div className='h-full flex items-center mx-[2.5vw]' onClick={() => { navigate("/Editorial") }}><span>Chanelly</span><span className='ml-auto'>Editorial Design</span></div>
                  <div className='h-full flex items-center mx-[2.5vw]' onClick={() => { navigate("/Illustration") }}><span>BowlCurry</span><span className='ml-auto'>Illustration</span></div>
                  <div className='h-full flex items-center mx-[2.5vw]' onClick={() => { navigate("/SocialMedia") }}><span>Otherworldly</span><span className='ml-auto'>Social Media Guides</span></div>
                  <div className='h-full flex items-center mx-[2.5vw]' onClick={() => { navigate("/BrandIdentity") }}><span>Aliverse</span><span className='ml-auto'>Brand Identity</span></div>
               </div>

            </div>
         </div>

      </>
   )
}

export default Home