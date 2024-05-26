import { createRef, useState } from "react";
import upArrow from './../assets/upArrow.svg'
import downArrow from './../assets/downarrow.svg'


export default function Carousel({ children }) {
   const [current, setCurrent] = useState(0);
   const [currentLength, setCurrentLength] = useState(0);


   setTimeout(() => {


      setCurrentLength(document.getElementById(`IMG${current}`)?.offsetHeight);
      // for (const [prop, val] of x) {
      //    // properties
      //    console.log(val);

      // }
      // console.log(current, x);
   }, 1)

   const previousSlide = () => {
      setCurrent(current === 0 ? children.length - 1 : current - 1);
   };

   const nextSlide = () => {
      setCurrent(current === children.length - 1 ? 0 : current + 1);
   };

   console.log(currentLength);

   return (
      <div className="overflow-hidden relative">
         <div
            className="flex flex-col transition-transform ease-out duration-300"
            style={{
               transform: `translateY(-${current * 100}%)`,
               height: currentLength
            }}
         >
            {children.map((s, index) => {
               const ref = createRef();
               // let x;
               // if ((index == current || index == current - 1 || index == (current + 1))) {
               //    x = 'w-full'
               // }
               // else if (current == children.length - 1 && index == 0) {
               //    x = 'w-full'
               // }
               // else {
               //    x = 'w-full hidden'
               // }
               return (
                  <div key={index} id={`IMG${index}`} className={"w-full"} >
                     {s}
                  </div>
               )
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
