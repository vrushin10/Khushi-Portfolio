import React, { useEffect, useRef, useState } from 'react'
import Header from '../header'
import img1 from '../../assets/sketchbook/sketchbook 1.webp'
import img2 from '../../assets/sketchbook/sketchbook 2.webp'
import img3 from '../../assets/sketchbook/sketchbook 3.webp'
import backArrow from "../../assets/backarrow.svg"
import nextArrow from "../../assets/nextarrow.svg"

import MobileHeader from '../MobileHeader'
import { useNavigate } from 'react-router-dom'

const Sketchbook = () => {
   const navigate = useNavigate()
   const [imgIndex, setimgIndex] = useState(0)


   const images = [img1,
      img2,
      img3]
   const texts = [
      (<div key={0}>Untitled <br /> ink pen on tissue.</div>),
      (<div key={1}>How many churches are there in heaven? <br />ink on A2.</div>),
      (<div key={2}>Untitled <br />natural mix flower ink on A5. </div>)
   ]
   function changeModal(index: number) {
      setimgIndex(index)
   }
   useEffect(() => {
      window.onpopstate = (e) => {
         if (imgIndex != 0) {
            e.preventDefault();
            changeModal(0)
         }
      }
   }, [])

   const [current, setCurrent] = useState(0);
   const [currentLength, setCurrentLength] = useState(0);

   // Variables to track touch positions
   let startX = useRef(0);
   let endX = useRef(0);
   const isDragging = useRef(false);



   const previousSlide = () => {
      setCurrent(current === 0 ? images.length - 1 : current - 1);
   };

   const nextSlide = () => {
      setCurrent(current === images.length - 1 ? 0 : current + 1);
   };

   // Touch event handlers
   const handleTouchStart = (e: React.TouchEvent) => {
      startX.current = e.touches[0].clientX;

   };

   const handleTouchMove = (e: React.TouchEvent) => {
      endX.current = e.touches[0].clientX;
   };

   const handleTouchEnd = () => {
      const deltaY = startX.current - endX.current;

      if (deltaY > 50) {
         nextSlide();
      } else if (deltaY < -50) {
         previousSlide();
      }
   };

   const handleMouseDown = (e: React.MouseEvent) => {
      startX.current = e.clientX;
      isDragging.current = true;
   };

   const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      endX.current = e.clientX;
   };

   const handleMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      const deltaY = startX.current - endX.current;
      if (deltaY > 50) {
         nextSlide();
      } else if (deltaY < -50) {
         previousSlide();
      }
   };

   setTimeout(() => {
      document
   },)
   return (
      <>

         <div className='hidden lg:flex flex-col h-screen dark:bg-[#000000] dark:text-white'>
            <Header></Header>
            <div className='flex felx-1 justify-around ' style={{ fontSize: '15px' }}>
               <div className='flex-col flex h-full w-1/4 mt-[5vh]' onClick={() => { navigate('../Sketchbook1') }} ><img src={img1} alt="" /><div className='h-full align-baseline flex-1 mb-[8vh]'><div className='absolute bottom-[2rem]'>Untitled.</div></div></div>
               <div className='w-1/4 h-auto mt-[5vh]' onClick={() => { navigate('../Sketchbook2') }}  ><img src={img2} alt="" id='middleImage' /><div className="mt-auto mb-[8vh]"><div className="absolute bottom-[2rem]">It starts with a question.</div></div> </div>
               <div className='w-1/4 h-auto mt-[5vh]' onClick={() => { navigate('../Sketchbook3') }} ><img src={img3} alt="" /><div className="mt-auto mb-[8vh]"><div className="absolute bottom-[2rem]">Experimenting with natural pigments.</div></div></div >
            </div >
         </div >
         <div className="flex lg:hidden flex-col h-screen bg-white dark:bg-[#000000] dark:text-white">
            <MobileHeader></MobileHeader>
            <div className='flex felx-1 mt-4 ' style={{ fontSize: '15px' }}>
               <div className='my-auto px-2' onClick={previousSlide}>
                  <svg className='dark:hidden' width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g opacity="0.7">
                        <path d="M12.0474 24.9906L10.8666 23.8098L8.04869 20.9919L4.62578 17.569L1.68314 14.6264C1.20553 14.1488 0.719951 13.6791 0.250296 13.1935L0.229069 13.1723C-0.0760746 12.8672 -0.0760746 12.3524 0.229069 12.0472L1.40984 10.8665L4.22777 8.04855L7.65068 4.62564L10.5933 1.683C11.0709 1.20538 11.5406 0.719809 12.0262 0.250154L12.0474 0.228926C12.3419 -0.0656029 12.8832 -0.0868302 13.1724 0.228926C13.4643 0.547337 13.4882 1.04087 13.1724 1.35398L11.9917 2.53475L9.17374 5.35267L5.75083 8.77558L2.80819 11.7182C2.33058 12.1958 1.86357 12.6841 1.37535 13.1511L1.35412 13.1723V12.0472L2.53489 13.228L5.35282 16.0459L8.77573 19.4689L11.7184 22.4115C12.196 22.8891 12.6816 23.3588 13.1512 23.8443L13.1724 23.8656C13.467 24.1601 13.4882 24.7014 13.1724 24.9906C12.8567 25.2825 12.3631 25.3064 12.0474 24.9906Z" fill="black" />
                     </g>
                  </svg>
                  <svg className='hidden dark:block' width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g opacity="0.7">
                        <path d="M12.0474 24.9906L10.8666 23.8098L8.04869 20.9919L4.62578 17.569L1.68314 14.6264C1.20553 14.1488 0.719951 13.6791 0.250296 13.1935L0.229069 13.1723C-0.0760746 12.8672 -0.0760746 12.3524 0.229069 12.0472L1.40984 10.8665L4.22777 8.04855L7.65068 4.62564L10.5933 1.683C11.0709 1.20538 11.5406 0.719809 12.0262 0.250154L12.0474 0.228926C12.3419 -0.0656029 12.8832 -0.0868302 13.1724 0.228926C13.4643 0.547337 13.4882 1.04087 13.1724 1.35398L11.9917 2.53475L9.17374 5.35267L5.75083 8.77558L2.80819 11.7182C2.33058 12.1958 1.86357 12.6841 1.37535 13.1511L1.35412 13.1723V12.0472L2.53489 13.228L5.35282 16.0459L8.77573 19.4689L11.7184 22.4115C12.196 22.8891 12.6816 23.3588 13.1512 23.8443L13.1724 23.8656C13.467 24.1601 13.4882 24.7014 13.1724 24.9906C12.8567 25.2825 12.3631 25.3064 12.0474 24.9906Z" fill="white" />
                     </g>
                  </svg>
               </div>

               <div className="w-full flex flex-col">
                  <div className="w-full overflow-hidden relative" onTouchStart={handleTouchStart}
                     onTouchMove={handleTouchMove}
                     onTouchEnd={handleTouchEnd}
                     onMouseDown={handleMouseDown}
                     onMouseMove={handleMouseMove}
                     onMouseUp={handleMouseUp}
                     onMouseLeave={handleMouseUp} >
                     <div
                        className={`flex transition ease-out duration-400`}
                        style={{
                           transform: `translateX(-${current * 100}%)`,
                        }}
                     >
                        {images.map((s, index) => {
                           return <img key={index} src={s} />;
                        })}
                     </div>
                  </div>
                  <div className='mt-4'>{texts[current]}</div>
               </div>
               <div className='my-auto px-2' onClick={nextSlide}>
                  <svg width="14" className=' dark:hidden' height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g opacity="0.7">
                        <path d="M1.35398 24.9906L2.53475 23.8098L5.35268 20.9919L8.77559 17.569L11.7182 14.6264C12.1958 14.1488 12.6814 13.6791 13.1511 13.1935L13.1723 13.1723C13.4774 12.8672 13.4774 12.3524 13.1723 12.0472L11.9915 10.8665L9.1736 8.04855L5.75069 4.62564L2.80805 1.683C2.33043 1.20538 1.86078 0.719809 1.3752 0.250154L1.35398 0.228926C1.05945 -0.0656029 0.518149 -0.0868302 0.228926 0.228926C-0.0629495 0.547337 -0.0868302 1.04087 0.228926 1.35398L1.4097 2.53475L4.22763 5.35267L7.65054 8.77558L10.5932 11.7182C11.0708 12.1958 11.5378 12.6841 12.026 13.1511L12.0472 13.1723V12.0472L10.8665 13.228L8.04855 16.0459L4.62564 19.4689L1.683 22.4115C1.20538 22.8891 0.719809 23.3588 0.250154 23.8443L0.228926 23.8656C-0.0656029 24.1601 -0.0868302 24.7014 0.228926 24.9906C0.544683 25.2825 1.03822 25.3064 1.35398 24.9906Z" fill="black" />
                     </g>
                  </svg>
                  <svg className='hidden dark:block' width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g opacity="0.7">
                        <path d="M1.35398 24.9906L2.53475 23.8098L5.35268 20.9919L8.77559 17.569L11.7182 14.6264C12.1958 14.1488 12.6814 13.6791 13.1511 13.1935L13.1723 13.1723C13.4774 12.8672 13.4774 12.3524 13.1723 12.0472L11.9915 10.8665L9.1736 8.04855L5.75069 4.62564L2.80805 1.683C2.33043 1.20538 1.86078 0.719809 1.3752 0.250154L1.35398 0.228926C1.05945 -0.0656029 0.518149 -0.0868302 0.228926 0.228926C-0.0629495 0.547337 -0.0868302 1.04087 0.228926 1.35398L1.4097 2.53475L4.22763 5.35267L7.65054 8.77558L10.5932 11.7182C11.0708 12.1958 11.5378 12.6841 12.026 13.1511L12.0472 13.1723V12.0472L10.8665 13.228L8.04855 16.0459L4.62564 19.4689L1.683 22.4115C1.20538 22.8891 0.719809 23.3588 0.250154 23.8443L0.228926 23.8656C-0.0656029 24.1601 -0.0868302 24.7014 0.228926 24.9906C0.544683 25.2825 1.03822 25.3064 1.35398 24.9906Z" fill="white" />
                     </g>
                  </svg>
               </div>
            </div>

         </div>
      </>
   )
}

export default Sketchbook