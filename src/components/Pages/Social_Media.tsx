import React, { createRef, useEffect, useState } from 'react'

import otherworldly_01 from '../../assets/otherworldly/otherworldly social media-01 (1).webp'
import otherworldly_02 from '../../assets/otherworldly/otherworldly social media-01 (2).webp'
import otherworldly_03 from '../../assets/otherworldly/otherworldly social media-01 (3).webp'
import otherworldly_04 from '../../assets/otherworldly/otherworldly social media-01 (4).webp'
import otherworldly_05 from '../../assets/otherworldly/otherworldly social media-01 (5).webp'

import Templater from './templater'

const Social_Media = () => {
   const desc = [`Social Media Posts for Otherworldly—a blend of spirituality, wellness, beauty, and astrology, offering bold luxury and elegance.`,
      `This involved crafting social media post guides that stayed true to the brand's aesthetic, incorporating its colors, clean design principles, and functional aspects to produce a diverse range of engaging posts tailored to meet the various contextual needs of the brand.`]
   const imgs = [otherworldly_01,
      otherworldly_02,
      otherworldly_03,
      otherworldly_04,
      otherworldly_05]

   const Topic = "Social Media";
   const mobileHeading = "Otherworldly | Social Media Guides"
   const Heading = "Otherworldly"
   const DetailLink = null
   const prev = '../Illustration'
   const next = '../BrandIdentity'

   return (
      <Templater imgs={imgs} DetailLink={DetailLink} Topic={Topic} desc={desc} heading={Heading} prev={prev} next={next} mobileHeading={mobileHeading} ></Templater>
   )
}
export default Social_Media
