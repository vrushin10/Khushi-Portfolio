import React, { createRef, useEffect, useState } from 'react'
import metgala_01 from '../../assets/aliverse/aliverse-01.webp'
import metgala_02 from '../../assets/aliverse/aliverse-02.webp'
import metgala_03 from '../../assets/aliverse/aliverse-03.webp'
import metgala_04 from '../../assets/aliverse/aliverse-04.webp'
import metgala_05 from '../../assets/aliverse/aliverse-05.webp'
import Templater from './templater'

const BrandIdentity = () => {
   const desc = [`Aliverse is an Instagram blog blending education and entertainment, spotlighting brown fashion, South Asian cinema, and popular culture.`,
      `My role was to ideate and conceptualize logo marks, ensuring they embodied the right tone and fit for the brand, while working closely with Malvika during my internship at Erth Co.`]
   const imgs = [metgala_01,
      metgala_02,
      metgala_03,
      metgala_04,
      metgala_05]

   const Topic = "Brand Identity";
   const mobileHeading = "Aliverse | Brand Identity"
   const Heading = "Aliverse"
   const DetailLink = null
   const prev = '../SocialMedia'
   const next = '../Digital_Marketing'

   return (
      <Templater imgs={imgs} DetailLink={DetailLink} Topic={Topic} desc={desc} heading={Heading} prev={prev} next={next} mobileHeading={mobileHeading} ></Templater>
   )
}

export default BrandIdentity