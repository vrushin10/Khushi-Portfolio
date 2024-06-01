import chanelly_01 from '../../assets/chanelly/chanelly-01.webp'
import chanelly_02 from '../../assets/chanelly/chanelly-02.webp'
import chanelly_03 from '../../assets/chanelly/chanelly-03.webp'
import chanelly_04 from '../../assets/chanelly/chanelly-04 (1).webp'
import chanelly_05 from '../../assets/chanelly/chanelly-05.webp'
import chanelly_06 from '../../assets/chanelly/chanelly-06 (1).webp'
import vid from '../../assets/chanelly/gif.webm'

import Templater from './templater'


const Editorial = () => {

   const desc = [`Chanelly' a 64-page editorial design book showcases beautifully crafted summer / spring runways by Karl Lagerfeld.`,
      `The task of creating a 64-page book detailing the essence of the brand Chanel within a tight three-day timeframe, with two additional days allocated for printing. This project was deeply editorial in nature, serving as a final year project.`]
   const imgs = [chanelly_01, chanelly_02, chanelly_03, chanelly_04, chanelly_05, chanelly_06]

   const Topic = "Editorial Design";
   const mobileHeading = "Chanelly | Editorial Design"
   const Heading = "Chanelly"
   const DetailLink = "https://www.behance.net/gallery/199370145/Chanelly-Editorial-Design"
   const prev = '../Branding'
   const next = '../Illustration'

   return (
      <Templater imgs={imgs} DetailLink={DetailLink} Topic={Topic} desc={desc} heading={Heading} prev={prev} next={next} mobileHeading={mobileHeading} vid={vid} ></Templater>
   )
}



export default Editorial


