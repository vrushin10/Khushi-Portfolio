import React from 'react';
import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
} from 'pure-react-carousel';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 

import aliverse_01 from "../assets/aliverse/aliverse-01.png"

// import s from '../../style.scss';

export default () => (
  // <CarouselProvider
  //   visibleSlides={1}
  //   totalSlides={2}
  //   step={2}
  //   naturalSlideWidth={400}
  //   naturalSlideHeight={500}
  // >
  //   <p>Single image</p>
  //   <Slider >
  //     <Slide tag="a" index={0}>
  //       {/* <ImageWithZoom src={aliverse_01} /> */}
  //       <img src={aliverse_01} alt="" />
  //     </Slide>

  //   </Slider>
  //   <ButtonFirst>First</ButtonFirst>
  //   <ButtonBack>Back</ButtonBack>
  //   <ButtonNext>Next</ButtonNext>
  //   <ButtonLast>Last</ButtonLast>
  //   <DotGroup />
  // </CarouselProvider>
  <img width={"100%"} src={aliverse_01} alt="" />
);