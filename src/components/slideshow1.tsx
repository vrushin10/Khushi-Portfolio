import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import "./Slideshow1.css";

interface MyComponentProps {
   children: React.ReactNode;
}

const Carousel = forwardRef<HTMLDivElement, MyComponentProps>((props, ref) => {
   const [counter, setCounter] = useState(1);
   const [pause, setPause] = useState(false);
   // console.log(props);

   const content = props.children;

   const MouseEnter = (pageNum: number) => {
      handlePage(pageNum);
      handleMouse();
      console.log("MouseEnter");

   }

   const MouseLeave = () => {
      handleMouse();
      console.log("MouseLeave");

   }
   const handleNext = () => {
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
   useImperativeHandle(ref, () => ({
      MouseEnter: MouseEnter,
      MouseLeave: MouseLeave

   }));

   return (
      <div className="App">
         <div
            className="slide"
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouse}
         >
            {content.map((item, index) => (
               <div
                  className={counter - 1 === index ? "show" : "not-show"}
                  key={index}
               >
                  {item}
               </div>
            ))}


         </div>


      </div>
   );
})

export default Carousel;
