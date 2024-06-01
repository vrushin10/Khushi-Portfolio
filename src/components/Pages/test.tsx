import React, { useRef, useState } from 'react';
import './test.css'; // Custom styles for additional styling if needed
import img from "../../assets/aliverse/aliverse-01.webp"

const Carousel = () => {
   const carouselRef = useRef(null);
   const [isDragging, setIsDragging] = useState(false);
   const [startX, setStartX] = useState(0);
   const [scrollLeft, setScrollLeft] = useState(0);

   const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
   };

   const handleMouseLeave = () => {
      setIsDragging(false);
   };

   const handleMouseUp = () => {
      setIsDragging(false);
   };

   const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      carouselRef.current.scrollLeft = scrollLeft - walk;
   };

   const handleTouchStart = (e) => {
      setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
   };

   const handleTouchMove = (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      carouselRef.current.scrollLeft = scrollLeft - walk;
   };

   return (

      <div className="w-[50vw] mx-auto">
         <div
            ref={carouselRef}
            className="carousel flex overflow-x-hidden snap-x	scroll snap-mandatory"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
         >
            <div className="snap-start	flex-none w-full  flex items-center justify-center text-white text-2xl"><img src={img} alt="" /></div>
            <div className="snap-start	flex-none w-full  flex items-center justify-center text-white text-2xl"></div>
            <div className="snap-start	flex-none w-full  flex items-center justify-center text-white text-2xl"></div>
            <div className="snap-start	flex-none w-full  flex items-center justify-center text-white text-2xl"></div>
         </div>
      </div>
   );
};

export default Carousel;
