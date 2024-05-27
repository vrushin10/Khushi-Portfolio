import React, { useEffect, useState } from 'react'
import Header from '../header'
import img1 from '../../assets/sketchbook/sketchbook 1.webp'
import img2 from '../../assets/sketchbook/sketchbook 2.webp'
import img3 from '../../assets/sketchbook/sketchbook 3.webp'
import cross from "../../assets/cross.svg"
import { useNavigate } from 'react-router-dom'

const Sketchbook = () => {
   const navigate = useNavigate()
   const [modalIndex, setmodalIndex] = useState(0)
   const images = [img1,
      img2,
      img3]
   function changeModal(index: number) {
      setmodalIndex(index)
   }
   useEffect(() => {
      window.onpopstate = (e) => {
         console.log(modalIndex);

         if (modalIndex != 0) {
            //load content with ajax
            console.log(e);

            e.preventDefault();
            console.log("back");

            changeModal(0)

         }
      }
   }, [])


   setTimeout(() => {
      document
   },)
   return (
      <>
         {modalIndex == 0 && <div style={{ display: 'flex', flexDirection: "column", height: "100vh" }}>
            <Header></Header>
            <div style={{ flex: 1, display: "flex", justifyContent: "space-around", fontSize: '15px' }}>
               <div className='flex-col flex h-full' style={{ width: "25%", marginTop: "5vh" }} onClick={() => { navigate('../Sketchbook1') }} ><img src={img1} alt="" /><div className='h-full align-baseline flex-1 mb-[8vh]'><div className='absolute bottom-[2rem]'>Untitled.</div></div></div>
               <div style={{ width: "25%", height: "auto", marginTop: "5vh" }} onClick={() => { navigate('../Sketchbook2') }}  ><img src={img2} alt="" id='middleImage' /><div className="mt-auto mb-[8vh]"><div className="absolute bottom-[2rem]">It starts with a question.</div></div> </div>
               <div style={{ width: "25%", height: "auto", marginTop: "5vh" }} onClick={() => { navigate('../Sketchbook3') }} ><img src={img3} alt="" /><div className="mt-auto mb-[8vh]"><div className="absolute bottom-[2rem]">Experimenting with natural pigments.</div></div></div >
            </div >
         </div >}
      </>
   )
}

export default Sketchbook