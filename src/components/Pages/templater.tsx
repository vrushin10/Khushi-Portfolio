import React, { useEffect, useRef, useState } from 'react';
import Header from '../header';
import Slideshow from '../slideshow2';
import { useNavigate } from 'react-router-dom';

import backarrow from "../../assets/backarrow.svg";
import nextarrow from "../../assets/nextarrow.svg";
import darkbackarrow from "../../assets/darkbackarrow.svg"
import darknextarrow from "../../assets/darknextarrow.svg"

import MobileHeader from '../MobileHeader';

type TemplateProps = {
   imgs: string[],
   DetailLink?: string | null,
   Topic: string,
   heading: string,
   desc: string[],
   next: string,
   prev: string,
   mobileHeading: string,
   vid?: string
};

const Templater = (props: TemplateProps) => {
   const imgRef = useRef<HTMLImageElement | HTMLVideoElement | null>(null);
   const [refHeight, setRegHeight] = useState(0);

   useEffect(() => {
      const imgElement = imgRef.current;

      const setHeight = () => {
         // console.log("resize");
         if (imgElement) {
            // console.log(imgElement.height);

            setRegHeight(imgElement.height);
         }
      };
      const setloadHeight = () => {
         // console.log("load");
         if (imgElement) {
            setRegHeight(imgElement.offsetHeight);
         }
      };

      if (imgElement) {
         imgElement.addEventListener('load', setloadHeight);
         imgElement.addEventListener('resize', setHeight);
      }

      return () => {
         if (imgElement) {
            imgElement.removeEventListener('load', setloadHeight);
            imgElement.removeEventListener('resize', setHeight);
         }
      };
   }, [props.imgs]);

   const slides = props.imgs.map((img, index) => {
      if (props.vid && index === 0) {
         // @ts-ignore
         return <img src={img} key={index} ref={imgRef} width="auto" alt="" />;
      }
      // @ts-ignore
      return <img src={img} key={index} ref={index === 0 ? imgRef : null} width="auto" alt="" />;
   });

   if (props.vid) {
      slides.unshift(
         <video
            src={props.vid}
            autoPlay
            muted
            controls={false}
            // @ts-ignore
            onLoad={() => setRegHeight(imgRef.current.offsetHeight)}
            loop
         ></video>
      );
   }

   const navigate = useNavigate();

   return (
      <>
         <div className="hidden lg:flex flex-col h-screen dark:bg-black dark:text-white">
            <Header />
            <div className="w-screen my-auto flex">
               <div className="xl:max-w-[35vw] content-center text-center ml-[2.5vw] mr-[2rem]" style={{ flex: 5 }}>
                  <Slideshow>{slides}</Slideshow>
               </div>
               <div className="w-full mt-auto mb-auto ml-auto flex flex-col pr-[2.5vw]" style={{ height: refHeight, flex: 6 }}>
                  <div className='text-center flex w-full' >
                     <div style={{ fontSize: "15px" }}><u>{props.Topic}</u></div>
                     <div className="ml-auto flex">
                        <img
                           onClick={() => { navigate(props.prev); }}
                           src={backarrow}
                           className="mr-10 w-[15px] h-[15px] cursor-pointer dark:hidden"
                           alt="Previous"
                        />
                        <img
                           onClick={() => { navigate(props.next); }}
                           src={nextarrow}
                           className="w-[15px] h-[15px] cursor-pointer dark:hidden"
                           alt="Next"
                        />
                        <img
                           onClick={() => { navigate(props.prev); }}
                           src={darkbackarrow}
                           className="mr-10 w-[15px] h-[15px] cursor-pointer hidden dark:block"
                           alt="Previous"
                        />
                        <img
                           onClick={() => { navigate(props.next); }}
                           src={darknextarrow}
                           className="w-[15px] h-[15px] cursor-pointer hidden dark:block"
                           alt="Next"
                        />
                     </div>
                  </div>
                  <div className="flex flex-col content-end mt-auto" style={{ marginRight: '5vw' }}>
                     <div style={{ fontSize: "18px", fontFamily: "Century Schoolbook" }}>{props.heading}</div>
                     <div style={{ fontSize: "15px", fontFamily: "Century Schoolbook" }}>
                        <p>
                           <br />
                           {props.desc.map((string, index) => (
                              <span key={index}>{index > 0 && <><br /><br /></>}{string}</span>
                           ))}
                           {props.DetailLink && (
                              <>
                                 <br /><br />
                                 <u className="cursor-pointer" onClick={() => { window.open(props.DetailLink, "_blank"); }}>VIEW PROJECT IN DETAIL</u>
                              </>
                           )}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex lg:hidden flex-col h-screen bg-white dark:bg-[#000000] dark:text-white">
            <MobileHeader />
            <div className="h-full w-screen flex flex-col overflow-y-auto">
               <div className="flex flex-col mt-4 mx-[2.5vw]">
                  <div className="flex items-center mb-5">
                     <div style={{ fontSize: "15px" }}><u>{props.mobileHeading}</u></div>
                     <div className="ml-auto flex">
                        <img
                           onClick={() => { navigate(props.prev); }}
                           src={backarrow}
                           className="mr-10 w-[15px] h-[15px] cursor-pointer dark:hidden"
                           alt="Previous"
                        />
                        <img
                           onClick={() => { navigate(props.next); }}
                           src={nextarrow}
                           className="w-[15px] h-[15px] cursor-pointer dark:hidden"
                           alt="Next"
                        />
                        <img
                           onClick={() => { navigate(props.prev); }}
                           src={darkbackarrow}
                           className="mr-10 w-[15px] h-[15px] cursor-pointer hidden dark:block"
                           alt="Previous"
                        />
                        <img
                           onClick={() => { navigate(props.next); }}
                           src={darknextarrow}
                           className="w-[15px] h-[15px] cursor-pointer hidden dark:block"
                           alt="Next"
                        />
                     </div>
                  </div>
                  <div className="felx-1 h-full">
                     {props.desc.map((string, index) => (
                        <span key={index}>{index > 0 && <><br /><br /></>}{string}</span>
                     ))}{props.DetailLink && (
                        <>
                           <br /><br />
                           <u className="cursor-pointer" onClick={() => { window.open(props.DetailLink, "_blank"); }}>VIEW PROJECT IN DETAIL</u>
                        </>
                     )}
                  </div>
               </div>
               <div className="flex flex-col mt-4 mx-[2.5vw]">
                  {props.vid && <video src={props.vid} autoPlay muted controls={false} loop className="mb-2.5"></video>}
                  {props.imgs.map((img, index) => (
                     <img src={img} key={index} className={index > 0 ? 'mt-2.5' : ''} width="auto" alt="" />
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default Templater;
