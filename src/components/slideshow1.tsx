import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import "./Slideshow1.css";
import { useNavigate } from "react-router-dom";

interface MyComponentProps {
   children: React.ReactNode;
   navigateLinks: string[]
}

const Slideshow1 = forwardRef<HTMLDivElement, MyComponentProps>((props, ref) => {
   const [counter, setCounter] = useState(1);
   const [pause, setPause] = useState(false);

   const content = props.children;
   const navigate = useNavigate();
   const MouseEnter = (pageNum: number) => {
      handlePage(pageNum);
      setPause(true)

   }

   const MouseLeave = () => {
      setPause(false)

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
                  onClick={() => { navigate(props.navigateLinks[index]) }}
               >
                  {item}
               </div >
            ))}   </div >




   );
})

export default Slideshow1;
