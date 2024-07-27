import { useNavigate } from "react-router-dom";
import img1 from '../../../assets/sketchbook/sketchbook 1.webp'
import cross from "../../../assets/cross.svg"
import darkcross from "../../../assets/darkcross.svg"
const sketchbook1 = () => {


   return (
      <div className="dark:bg-[#000000] dark:text-white" style={{ display: 'flex', height: "100vh" }}>
         <div style={{ paddingLeft: "4vw", display: "flex", height: "auto", marginTop: "auto", marginBottom: "auto" }} ><img style={{ maxHeight: "80vh" }} src={img1} width={"auto"} height={"auto"} alt="" /><div style={{ marginTop: "auto", paddingLeft: "1rem" }}>Untitiled<br />ink on tissue paper.</div> </div>
         <div style={{ position: "absolute", top: "8vh", right: "8vw", cursor: "pointer" }} onClick={() => { window.history.back() }}> <img className='w-[20px] h-[20px] dark:hidden' src={cross} alt="" />
            <img className='w-[20px] h-[20px] hidden dark:block' src={darkcross} alt="" />

         </div>
      </div>
   )
}

export default sketchbook1