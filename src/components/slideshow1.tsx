import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import "./Slideshow1.css";

interface MyComponentProps {
   children: React.ReactNode;
}

const Carousel = forwardRef<HTMLDivElement, MyComponentProps>((props, ref) => {
   const [counter, setCounter] = useState(1);
   const [pause, setPause] = useState(false);

   const content = props.children;

   const MouseEnter = (pageNum: number) => {
      handlePage(pageNum);
      useState(true)

   }

   const MouseLeave = () => {
      useState(false)

   }
   const handleNext = () => {
      // @ts-ignore
      if (counter !== content.length) {
         setCounter(counter + 1);
      } else {
         setCounter(1);
      }
   };

   const handlePre = () => {
      if (counter !== 1) {
         setCounter(counter - 1);
      } else {
         // @ts-ignore
         setCounter(content.length);
      }
   };

   const handlePage = (page: number) => {
      setCounter(page);
   };

   const handleMouse = () => {
      setPause(!pause);
   };

   useEffect(() => {
      let interval = setInterval(() => {
         if (!pause) {
            handleNext();
         } else {
            clearInterval(interval);
         }
      }, 2200);
      return () => clearInterval(interval);
   });
   // @ts-ignore
   useImperativeHandle(ref, () => ({
      MouseEnter: MouseEnter,
      MouseLeave: MouseLeave

   }));

   return (
      <div onMouseEnter={handleMouse}
         onMouseLeave={handleMouse}
      >

         {// @ts-ignore


            content.map((item, index) => (
               < div
                  className={counter - 1 === index ? "show" : "hidden"}
                  key={index}
               >
                  {item}
               </div >
            ))}   </div >




   );
})

export default Carousel;
