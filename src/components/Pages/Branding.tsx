import React, { createRef, useEffect, useState } from 'react'

import sand_01 from '../../assets/sand/sand-01.webp'
import sand_02 from '../../assets/sand/sand-02.webp'
import sand_03 from '../../assets/sand/sand-03.webp'
import sand_04 from '../../assets/sand/sand-04.webp'
import sand_05 from '../../assets/sand/sand-05 (1).webp'
import sand_06 from '../../assets/sand/sand-06.webp'

import Templater from './templater'


const Branding = () => {
   const desc = [`Sand an extension of Instagram platform for artist and creatives that breaks free from the toxic metrics and pressures of social media.`,
      `My task was to develop a passion project and ideate a Digital Content Marketing centered around design, focusing on three distinct goals awareness, trust, and purchase. And aimed to raise awareness about sustainability issues in the fashion industry, foster trust in the credibility of eco-friendly brands and practices, and ultimately drive purchases towards sustainable fashion options.`]
   const imgs = [sand_01,
      sand_02,
      sand_03,
      sand_04,
      sand_05,
      sand_06]

   const Topic = "Branding | UI Design";
   const mobileHeading = "Sand | Branding / UI Design"
   const Heading = "Sand"
   const DetailLink = "https://www.behance.net/gallery/199367353/Sand-App-Research"
   const prev = '../Digital_Marketing'
   const next = '../Editorial'

   return (
      <Templater imgs={imgs} DetailLink={DetailLink} Topic={Topic} desc={desc} heading={Heading} prev={prev} next={next} mobileHeading={mobileHeading} ></Templater>
   )
}
export default Branding
