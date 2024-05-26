import React, { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface MyComponentProps {
   handelTableHover: Function,
   handelTableMouseLeave: Function,
}
const table = forwardRef<HTMLDivElement, MyComponentProps>((props, _) => {
   const navigate = useNavigate()
   return (
      <div className="homepage-table">
         <div className=' border-t border-black mx-auto my-1 w-full' />
         <div className="homepage-cell" onClick={() => { navigate("/Digital_Marketing") }} onMouseEnter={() => { props.handelTableHover(1) }} onMouseLeave={() => { props.handelTableMouseLeave() }}>
            <div className="homepage-left">Hot to Haute</div>
            <div className="homepage-right">Branding / Campaign</div>
         </div>
         <div className=' border-t border-black mx-auto my-1 w-full' />
         <div className="homepage-cell" onClick={() => { navigate("/Branding") }} onMouseEnter={() => { props.handelTableHover(2) }} onMouseLeave={() => { props.handelTableMouseLeave() }}>
            <div className="homepage-left">Sand</div>
            <div className="homepage-right">Branding / UI Design</div>
         </div>

         <div className=' border-t border-black mx-auto my-1 w-full' />

         <div className="homepage-cell" onClick={() => { navigate("/Editorial") }} onMouseEnter={() => { props.handelTableHover(3) }} onMouseLeave={() => { props.handelTableMouseLeave() }}>
            <div className="homepage-left">Chanelly</div>
            <div className="homepage-right">Editorial Design</div>
         </div>
         <div className=' border-t border-black mx-auto my-1 w-full' />
         <div className="homepage-cell" onClick={() => { navigate("/Illustration") }} onMouseEnter={() => { props.handelTableHover(4) }} onMouseLeave={() => { props.handelTableMouseLeave() }}>
            <div className="homepage-left">BowlCurry</div>
            <div className="homepage-right">Illustration</div>
         </div>
         <div className=' border-t border-black mx-auto my-1 w-full' />
         <div className="homepage-cell" onClick={() => { navigate("/SocialMedia") }} onMouseEnter={() => { props.handelTableHover(5) }} onMouseLeave={() => { props.handelTableMouseLeave() }}>
            <div className="homepage-left">Otherworldly</div>
            <div className="homepage-right">Social Media Posts</div>
         </div>
         <div className=' border-t border-black mx-auto my-1 w-full' />
         <div className="homepage-cell" onClick={() => { navigate("/BrandIdentity") }} onMouseEnter={() => { props.handelTableHover(6) }} onMouseLeave={() => { props.handelTableMouseLeave() }}>
            <div className="homepage-left">Aliverse</div>
            <div className="homepage-right">Brand Identity</div>
         </div>
         <div className=' border-t border-black mx-auto my-1 w-full' />
      </div>
   )
})

export default table