
import img1 from '../../../assets/sketchbook/sketchbook 3.webp'
import cross from "../../../assets/cross.svg"

const sketchbook3 = () => {


   return (
      <div style={{ display: 'flex', height: "100vh" }}>
         <div style={{ paddingLeft: "4vw", display: "flex", height: "auto", marginTop: "auto", marginBottom: "auto" }} ><img style={{ maxHeight: "80vh" }} src={img1} width={"auto"} height={"auto"} alt="" /><div style={{ marginTop: "auto", paddingLeft: "1rem" }}>
            Untitled <br /> natural mix flower ink on A5
         </div> </div>
         <div style={{ position: "absolute", top: "8vh", right: "8vw", cursor: "pointer" }} onClick={() => { window.history.back() }}> <img style={{ width: "20px", height: "20px" }} src={cross} alt="" /> </div>
      </div>
   )
}

export default sketchbook3