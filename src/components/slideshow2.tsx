import React, { createRef, useLayoutEffect, useEffect, useMemo, useRef, useState, PropsWithChildren, ReactNode } from "react";
import upArrow from './../assets/upArrow.svg';
import downArrow from './../assets/downarrow.svg';

type Props = { children: ReactNode[] };

let VerticalSlideshow: React.FC<Props> = ({ children }) => {
   const [current, setCurrent] = useState(0);
   const [currentLength, setCurrentLength] = useState(0);
   const elementRef = Array.from({ length: children.length }, () => useRef<HTMLDivElement | null>(null));

   // Variables to track touch positions
   let startY = useRef(0);
   let endY = useRef(0);
   const isDragging = useRef(false);

   function handleResize() {

      const height = document.getElementById("img-1").offsetHeight;
      // console.log(height);

      setCurrentLength(height);
   }

   useEffect(() => {
      handleResize();
      const img1ref = document.getElementById("img-1");
      // Initial call to get height of the current element
      img1ref.addEventListener("load", handleResize);
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize)
         img1ref.removeEventListener("load", handleResize);

      };
   }, []);

   const previousSlide = () => {
      setCurrent(current === 0 ? children.length - 1 : current - 1);
   };

   const nextSlide = () => {
      setCurrent(current === children.length - 1 ? 0 : current + 1);
   };

   // Touch event handlers
   const handleTouchStart = (e: React.TouchEvent) => {
      startY.current = e.touches[0].clientY;
      endY.current = null

   };

   const handleTouchMove = (e: React.TouchEvent) => {
      endY.current = e.touches[0].clientY;
   };

   const handleTouchEnd = () => {
      if (endY.current === null) return
      const deltaY = startY.current - endY.current;

      if (deltaY > 50) {
         nextSlide();
      } else if (deltaY < -50) {
         previousSlide();
      }
   };

   const handleMouseDown = (e: React.MouseEvent) => {

      startY.current = e.clientY;
      endY.current = null;
      isDragging.current = true;
   };

   const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      endY.current = e.clientY;
   };

   const handleMouseUp = () => {
      if (endY.current === null) {
         return
      }
      if (!isDragging.current) return;
      isDragging.current = false;
      const deltaY = startY.current - endY.current;

      if (deltaY > 100) {
         nextSlide();
      } else if (deltaY < -100) {
         previousSlide();

      }
   };

   const renderChildren = () => {
      return React.Children.map(children, (child, index) => {
         // @ts-ignore
         return React.cloneElement(child, {
            id: `img-${index}`
         });
      });
   };



   return (
      <div className="overflow-hidden relative select-none">
         <div
            className={`flex flex-col transition-transform ease-out duration-700`}
            style={{
               transform: `translateY(-${current * 100}%)`,
               height: currentLength
            }}

         >
            {renderChildren().map((s, index) => (
               <div key={index} id={`IMG${index}`} ref={elementRef[index]} className={"w-full"} >
                  {s}
               </div>
            ))}

            {/* {React.Children.map(children, (child, index) => {
               if (React.isValidElement(child) && child.type === 'img') {
                  return React.cloneElement(child, {
                     // @ts-ignore
                     onLoad: handleResize
                  });
               }
               return (<div key={index} id={`IMG${index}`} ref={elementRef[index]} onLoad={handleResize} className={"w-full"} >{child}</div>);
            })} */}
         </div>

         <div className="absolute top-0 h-full w-full flex flex-col justify-between items-center text-3xl px-10 " onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            <img src={upArrow} className="mt-5 opacity-50 cursor-pointer" onClick={previousSlide} alt="Up Arrow" />


            <img src={downArrow} className="mb-5 opacity-50 cursor-pointer" onClick={nextSlide} alt="Down Arrow" />
         </div>
      </div>
   );
};

export default VerticalSlideshow;
