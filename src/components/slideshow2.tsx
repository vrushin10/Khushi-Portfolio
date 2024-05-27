import React, { createRef, useLayoutEffect, useEffect, useMemo, useRef, useState, PropsWithChildren, ReactNode } from "react";
import upArrow from './../assets/upArrow.svg'
import downArrow from './../assets/downarrow.svg'
import { children } from "@material-tailwind/react/types/components/accordion";

type props = { children: ReactNode[] }
let x: React.FC<props> = ({ children }) => {
   const [current, setCurrent] = useState(0);
   const [currentLength, setCurrentLength] = useState(0);
   // const onResize = () => {
   //    const x = document.getElementById(`IMG${current}`).clientHeight

   //    setCurrentLength(x != undefined ? x : 0);
   // };

   // // setTimeout(() => {
   // //    onResize()
   // //    window.addEventListener("resize", onResize);
   // // }, 100)

   // useEffect(onResize,[document.getElementById(`IMG${current}`).clientHeight])
   const elementRef = Array.from({ length: children.length }, () => useRef(null));;

   function handleResize() {
      if (elementRef[1].current) {
         const height = elementRef[1].current.offsetHeight;
         setCurrentLength(height);
      }
   }
   useEffect(() => {


      handleResize(); // initial call to get width and height of the element
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, [elementRef[current]]);




   const previousSlide = () => {
      setCurrent(current === 0 ? children.length - 1 : current - 1);
   };

   const nextSlide = () => {
      setCurrent(current === children.length - 1 ? 0 : current + 1);
   };


   return (
      <div className="overflow-hidden relative">
         <div
            className={`flex flex-col transition-transform  ease-out duration-700`}
            style={{
               transform: `translateY(-${current * 100}%)`,
               height: currentLength
            }}
         >
            {children.map((s, index) => {
               return (
                  <div key={index} id={`IMG${index}`} ref={elementRef[index]} className={"w-full"} >
                     {s}
                  </div>
               )
            })}
            {React.Children.map(children, child => {
               if (React.isValidElement(child) && child.type === 'img') {
                  return React.cloneElement(child, {
                     // @ts-ignore
                     onLoad: handleResize
                  });
               }
               return child;
            })}
         </div>

         <div className="absolute top-0 h-full w-full flex flex-col justify-between items-center text-3xl px-10">
            <button onClick={previousSlide} className="mt-5  opacity-50">
               {/* <BsFillArrowLeftCircleFill /> */}
               <img src={upArrow} alt="" />
            </button>
            <button onClick={nextSlide} className=" mb-5 opacity-50">
               <img src={downArrow} alt="" />

            </button>
         </div>


      </div>
   );
}
export default x