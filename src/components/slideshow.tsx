import React from 'react';
import img1 from "../assets/sand/sand-01.png"
import img2 from "../assets/aliverse/aliverse-01.png"
import img3 from "../assets/bowlcurry/bowl curry-01.png"
import img4 from "../assets/chanelly/chanelly-01.png"
import img5 from "../assets/hot to haute/met gala-01.png"
import img6 from "../assets/otherworldly/social media-01.png"
// import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

// import s from '../../style.scss';

export default () => {
  const imgs = [img1,
    img2,
    img3,
    img4,
    img5,
    img6]

  return (


    // <img style={{ width: "36vw" }} src={aliverse_01} alt="" />
    <CCarousel controls transition="crossfade">
      {imgs.map((img, index) => {
        return (<CCarouselItem>
          <CImage className="d-block w-100" src={img} alt="slide 1" />
        </CCarouselItem>)
      })

      }

    </CCarousel>

  )
};