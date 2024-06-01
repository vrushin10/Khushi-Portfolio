import React, { createRef, useEffect, useState } from 'react'
import metgala_01 from '../../assets/bowlcurry/bowl curry-01 (1).webp'
import metgala_02 from '../../assets/bowlcurry/bowl curry-02 (1).webp'
import metgala_03 from '../../assets/bowlcurry/bowl curry-03 (1).webp'
import metgala_04 from '../../assets/bowlcurry/bowl curry-04 (1).webp'

import Templater from './templater'

const Illustration = () => {

   const desc = [`Hand Mudra Illustration for BowlCurry, conceived by celebrity chef Munna Maharaj, caters to those far from home, longing for the comforting taste of Indian cuisine`,
      `I had a great opportunity at Erth Co. to handle the illustration for Bowl Curry. I was deeply involved in the rebranding process, including the research and conceptualization phases, and took the lead on the illustration efforts.`]
   const imgs = [metgala_01,
      metgala_02,
      metgala_03,
      metgala_04]

   const Topic = "Illustration";
   const mobileHeading = "BowlCurry | Illustration"
   const Heading = "BowlCurry"
   const DetailLink = null
   const prev = '../Editorial'
   const next = '../SocialMedia'

   return (
      <Templater imgs={imgs} DetailLink={DetailLink} Topic={Topic} desc={desc} heading={Heading} prev={prev} next={next} mobileHeading={mobileHeading} ></Templater>
   )
}

export default Illustration

