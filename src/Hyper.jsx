import React from 'react';
import './Hyper.css';
import hyper from './hyper.mp4';
import { useState } from 'react';
import{ BsArrowUpCircle } from "react-icons/bs";
import huracan from './huracan.jpeg';
import hyperrevu from './hyperrevu.jpeg';
import hyperdivo from './divo.jpeg';
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import hypermclaren from './mclaren.jpeg'
import hyperporsche from './porschegt3rs.jpeg';
import hypergt from './mercedesgt.jpeg';
import hyperchiron from './chiron.jpeg';
import enginev12 from './enginev12.jpeg';
import enginev16 from './enginev16.jpeg';
import chiron1 from './chiron1.jpeg';
import chiron2 from './chiron2.jpeg';
import chiron3 from './chiron3.jpeg';
import chiron4 from './chiron4.jpeg';
import { BsArrowDownCircleFill } from "react-icons/bs";
import ImageSlider from './ImageSlider';
import Fade from 'react-reveal';
import { TfiArrowDown } from "react-icons/tfi"
import mclaren7 from "./mclarenimg4.jpg";
import huracan7 from "./huracan2.jpg";
import { BsArrowDownCircle } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { HyperType } from './Hyprice';
import { Link } from 'react-router-dom';
import { TfiArrowUp } from "react-icons/tfi"
import hyp8 from "./hyp8.jpg";
import hyp9 from "./porschegt1.jpg";
import hyp10 from "./huracan5.webp";
import hyp11 from "./mercg9.jpg";
import hyp12 from "./bug33.webp";







const Hyper = () => {
  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 1.1,
        behavior: "smooth"

      });
    }, 200);
  }
  const slides = [
   {url: hyp11},
   {url: mclaren7},
   {url: hyp9},
   {url: hyp8},
   {url: hyp10},
   {url: hyp12},
 ];
const containerStyles = {
 width: "1519px",
 height: "700px",
 margin: "0 auto",
 marginTop: "100px",
}
function scrollUp() {
   setTimeout(()=>{
      window.scrollTo({
       top:0,
       behavior: "smooth"
      })
   },100) 
}

var settings = {
   dots: true,
   infinite: false,
   speed: 500,
   slidesToShow: 2,
   slidesToScroll: 2,
   initialSlide: 0,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         initialSlide: 2
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 };


  return (
    <div>
        <div className='hyper-header'>  
         <Fade bottom>
          <h1 className='hyperr-header2'>DISCOVER THE HYPER WORLD</h1>
          <h1 className='hyper-more'>MORE LEARN</h1>
          </Fade>
          <Fade bottom>
       <div className="hyper3icon777">
          <div className="hyper2icon777"onClick={handleClick}>
          <div className='hyper-scroll1'><TfiArrowDown/></div>
          </div>
       </div>   
</Fade>


        </div>
        <Fade bottom>
    <h1 className='hyper-header4'>LET'S LOOK AT <br/>THE PRICES AND FEATURES </h1>
      
      

    <div className="Ap777p">
      <Slider {...settings}>
    {HyperType.map(item=>(
        <div className='card'>
          <img className='itemimg' src={item.image}/>
          <div className='hypcard777'>{item.title}</div>
        </div> 
    ))}
    </Slider>
    </div>
    <Fade bottom>
<h1 className="king777">AND THE WHOLE KING OF THE HYPER CARS</h1>
<img src={chiron4} className='kin4g777' alt="" />
<div className="kin3g777">
<Link to="/bugattichironhyper"><button className='kin2g777'>BUGATTI CHIRON</button></Link>
</div>
    </Fade>
  









        <div className='video-edit'>
        <video className='hyper-video' src={hyper} autoPlay muted loop/>
        </div>
        <h1 className='engine-h1'>WHICH IS YOUR ENGINE? <br/>W-12 OR W-16</h1>
         <div className='engine'>
                <div>
            <h1 className='engine-v12'>W-12 ENGINE</h1>
            <div className="hzoomw12">
            <img src={enginev12} alt='' />
            </div>
            <p className='engine-p1'>A W12 engine is a twelve-cylinder piston engine where two banks of six<br/> cylinders are arranged in a V configuration around a common crankshaft. <br/> V12 enginesare more common than V10 engines. However, they are less common <br/>than V8 engines.The first V12 engine was built in 1904 for use in racing boats. Due to<br/> the balanced nature of the engine and the smooth delivery of power, V12 engines<br/> were found in early luxury automobiles, boats, aircraft, and tanks. Applications of V12 engines in the 21st century have been as marine engines, in railway locomotives,<br/> as large stationary power as well as in some European sports and luxury cars.<br/>At any given time, three of the cylinders in a V12 engine are in their power stroke,<br/> which increases the smoothness of the power delivery by eliminating gaps<br/> between power pulses.</p>
               </div>
               <div>
            <h1 className='engine-v16'>W-16 ENGINE</h1>
            <div className="hzoomw16">
            <img src={enginev16} alt=''/>
            </div>
            <p className='engine-p2'>A W16 engine is a sixteen-cylinder piston engine where two banks of eight<br/> cylinders are arranged in a V configuration around a common crankshaft. V16<br/> engines are less common than engines with fewer cylinders, such as V8 and V12<br/> engines. Each bank of a V16 engine can be thought of as a straight-8, a design that<br/> can be inherently balanced. Most V16 engines have a 45° bank angle. The first<br/> production car to use a V16 engine was the Cadillac V-16, introduced in January 1930.<br/> The Cadillac V16 engine was initially produced with a displacement of 452 cu in<br/> (7.4 L), OHV and a V-angle of 45 degrees. For the 1938 Series 90, the engine was<br/> revised to a displacement of 431 cu in (7,062.8 cm3), a flathead valvetrain and a<br/> V-angle of 135 degrees (the latter in order to achieve a lower cowl height). </p>
              </div>
         </div>





         <div style={containerStyles}>
  <ImageSlider slides={slides}/>
           </div>





<h1 className='bugatti-h1'>We can say that the Bugatti<br/> Hyper is the fastest and<br/>  most aggressive of the cars</h1>
<div className="p10rank">
<div className='p9rank'onClick={scrollUp}>
  <div className="p8rank" ><TfiArrowDown/></div>
</div>
      </div>
</Fade>






<div className='section-17'>
  <div className='all-cars-1'>CAR MODELS</div>
     <div className='all-models-1'>
        <div>
  <p className='car-models'>ROLLS ROYCE PHANTOM</p>
  <p className='car-models'>ROLLS ROYCE GHOST</p>
  <p className='car-models'>ROLLS ROYCE BOAT TAIL</p>
  <p className='car-models'>ROLLS ROYCE CULLINAN</p>
  <p className='car-models'>BENTLEY MULSANNE</p>
  <p className='car-models'>BENTLEY FLYING SPUR</p>
  <p className='car-models'>BENTLEY BENTAYGA</p>
  <p className='car-models'>CADILLAC ESCALADE</p>
  <p className='car-models'>CHEVROLET SILVERADO</p>
  <p className='car-models'>FORD F150</p>
  <p className='car-models'>DODGE RAM</p>
  <p className='car-models'>CHEVROLET CAMARO</p>
  <p className='car-models'>FORD MUSTANG</p>
  <p className='car-models'>FORD RANGER</p>
  <p className='car-models'>FORD SHELBY GT500</p>
  <p className='car-models'>DODGE CHARGER</p>
  <p className='car-models'>DODGE CHALLANGER</p>
         </div> 
             <div>
         <p className='car-models-1'>AUDI A8</p>
         <p className='car-models-1'>BMW M3</p>
         <p className='car-models-1'>BMW M4</p>
         <p className='car-models-1'>BMW M5 COMPETITION</p>
         <p className='car-models-1'>BMW M6</p>
         <p className='car-models-1'>BMW M8 COMPETITION</p>
         <p className='car-models-1'>BUGATTI CHIRON</p>
         <p className='car-models-1'>BUGATTI DIVO</p>
         <p className='car-models-1'>LAMBORGHINI AVENTADOR</p>
         <p className='car-models-1'>LAMBORGHINI AVENTADOR S</p>
         <p className='car-models-1'>LAMBORGHINI SVJ</p>
         <p className='car-models-1'>LAMBORGHINI REVUELTO</p>
         <p className='car-models-1'>LAMBORGHINI URUS</p>
         <p className='car-models-1'>LAMBORGHINI HURACAN</p>
         <p className='car-models-1'>MCLAREN 720S</p>
         <p className='car-models-1'>MCLAREN 7265LT</p>
         <p className='car-models-1'>FERRARI 485 ITALIA</p>
            </div>
                      <div>
            <p className='car-models-1'>FERRARI 458 SPIDER</p>
            <p className='car-models-1'>FERRARI 488 PISTA</p>
            <p className='car-models-1'>FERRARI 488 SPIDER</p>
            <p className='car-models-1'>FERRARI 812 SUPERFAST</p>
            <p className='car-models-1'>FERRARI CALIFORNIA</p>
            <p className='car-models-1'>FERRARI 488 LAFERRARI</p> 
            <p className='car-models-1'>MERCEDES-BENZ MAYBACH S</p> 
            <p className='car-models-1'>MERCEDES-BENZ GLS600</p> 
            <p className='car-models-1'>MERCEDES-BENZ G63 AMG</p> 
            <p className='car-models-1'>MERCEDES-BENZ AMG GTR</p> 
            <p className='car-models-1'>MERCEDES-BENZ EQS</p> 
            <p className='car-models-1'>TESLA MODEL S PLAID</p> 
            <p className='car-models-1'>TESLA MODEL Y</p> 
            <p className='car-models-1'>TESLA MODEL S</p> 
            <p className='car-models-1'>PORSCHE CAYENNE</p> 
            <p className='car-models-1'>PORSCHE MACAN</p> 
            <p className='car-models-1'>PORSCHE GT3 RS</p> 
                        </div> 
                        <div className='social'>
<div className='instagram'><a href="#"><RiInstagramLine/></a></div>
<div className='twitter'><a href="#"><RiTwitterLine/></a></div>
<div className='facebook'><a href="#"><RiFacebookFill/></a></div>
<div className='linkedin'><a href="#"><RiLinkedinFill/></a></div>
<div className='youtube'><a href="#"><RiYoutubeFill/></a></div>
<div className='netflix'><a href="#"><RiNetflixFill/></a></div>
<div className='tiktok'><a href="#"><BsTiktok/></a></div>
<div className='tiktok'><a href="#"><FaDiscord/></a></div>
<div className='tiktok'><a href="#"><BsWechat/></a></div>
                           </div>   
                      </div>  
                    
<p className='copy'>Copyright © 2023 LUXURY CARS a sole shareholder company part of LUXURY CARS.</p>  
<p className='allright'>All rights reserved. VAT no. IT 00591801204</p> 
                </div>



        </div>
  )
}

export default Hyper