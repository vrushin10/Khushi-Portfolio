import metgala_01 from '../../assets/hot to haute/met gala-01.webp'
import metgala_02 from '../../assets/hot to haute/met gala-02.webp'
import metgala_03 from '../../assets/hot to haute/met gala-03.webp'
import metgala_04 from '../../assets/hot to haute/met gala-04.webp'
import metgala_05 from '../../assets/hot to haute/met gala-05.webp'
import metgala_06 from '../../assets/hot to haute/met gala-06.webp'
import metgala_07 from '../../assets/hot to haute/met gala-07.webp'
import metgala_08 from '../../assets/hot to haute/met gala-08.webp'
import Templater from "./templater"


const Digital_Marketing = () => {

   const desc = [`The MET Gala's theme 'Hot to Haute' towards sustainability haute couture embraces eco-friendly materials and ethical practices.`,
      `My task was to develop a passion project and ideate a Digital Content Marketing centered around design, focusing on three distinct goals awareness, trust, and purchase. And aimed to raise awareness about sustainability issues in the fashion industry, foster trust in the credibility of eco-friendly brands and practices, and ultimately drive purchases towards sustainable fashion options.`]
   const imgs = [metgala_01, metgala_02, metgala_03, metgala_04, metgala_05, metgala_06, metgala_07, metgala_08]

   const Topic = "Digital Content Marketing | Branding";
   const Heading = "Hot to Haute"
   const DetailLink = "https://www.behance.net/gallery/199516677/Hot-to-Haute-Content-Awareness-Marketing"
   const prev = '../BrandIdentity'
   const next = '../Branding'
   const mobileHeading = "Hot to Haute | Branding / Campaign"

   return (

      <Templater imgs={imgs} DetailLink={DetailLink} Topic={Topic} desc={desc} heading={Heading} prev={prev} next={next} mobileHeading={mobileHeading}></Templater>
   )
}

export default Digital_Marketing

