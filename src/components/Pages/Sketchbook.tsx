import React from 'react'
import Header from '../header'
import img1 from '../../assets/sketchbook/sketchbook 1.webp'
import img2 from '../../assets/sketchbook/sketchbook 2.webp'
import img3 from '../../assets/sketchbook/sketchbook 3.webp'


const Sketchbook = () => {
   const images = [img1,
      img2,
      img3]

   setTimeout(() => {
      document
   },)
   return (
      <>
         <div style={{ display: 'flex', flexDirection: "column", height: "100vh" }}>
            <Header></Header>
            <div style={{ flex: 1, display: "flex", justifyContent: "space-around" }}>
               <img width={"25%"} height={'auto'} style={{ marginTop: "auto", marginBottom: "auto" }} src={img1} alt="" />
               <img width={"25%"} height={'auto'} style={{ marginTop: "auto", marginBottom: "auto" }} src={img2} alt="" id='middleImage' />
               <img width={"25%"} height={'auto'} style={{ marginTop: "auto", marginBottom: "auto" }} src={img3} alt="" />

            </div>
         </div>
      </>
   )
}

export default Sketchbook