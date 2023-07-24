import React from 'react';
import { useState } from 'react';
import {BsArrowRightCircle} from "react-icons/bs";
import {BsArrowLeftCircle} from "react-icons/bs";

const ImageSlider12 = ({slides}) => {
    const [currentIndex, setCurrentIndex]=useState(0);
    const slideStyles = {
        width:"100%",
        height: "100%",
        transition: "0.5s",
        backgroundPosition: "center",
        backgroundImage: `url(${slides[currentIndex].url})`,
        backgroundSize:"cover"
    }
    const sliderStyles = {
        height:"100%",
    }
    const leftArrowStyles={
      fontSize: "45px",
      color: "white",
      zIndex: 1,
      cursor:"pointer",
      position:"absolute",
      marginLeft: "50px",
      marginTop:"300px",
    }
    const rightArrowStyles={
      position:"absolute",
      marginTop: "300px",
      marginLeft: "1420px",
      fontSize: "45px",
      color: "white",
      zIndex: 1,
      cursor:"pointer",
    }
    const goToPrevious = ()=>{
      const isFirstSlide = currentIndex ===0;
      const newIndex = isFirstSlide ? slides.length-1: currentIndex-1;
      setCurrentIndex(newIndex);
    }
    const goToNext = ()=>{
      const isLastSlide = currentIndex ===slides.length-1;
      const newIndex = isLastSlide ? 0 : currentIndex+1;
      setCurrentIndex(newIndex);
    }
  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}><BsArrowLeftCircle/></div>
      <div style={rightArrowStyles} onClick={goToNext}><BsArrowRightCircle/></div>
      <div style={slideStyles}></div>
    </div>
  )
}

export default ImageSlider12