import React from 'react';
import "./Bugattidivo.css";
import divo1 from "./divo.jpeg";
import divo2 from "./bdivo2.jpg";
import divo3 from "./bdivo3.jpg";
import divo4 from "./bdivo4.jpg";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import { TfiArrowUp } from "react-icons/tfi"
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import Fade from 'react-reveal';
import { useState } from 'react';
import bdv from "./bugattidivo1.webp";
import bdv2 from "./bugattidivo2.webp";
import bdv3 from "./bugattidivo3.webp";
import bdv4 from "./bugattidivo4.webp";
import bdv5 from "./bugattidivo5.jpeg.webp";
import bdv7 from "./bugattidivo7.webp";
import bdv8 from "./bugattidivo8.webp";
import bdv9 from "./bugattidivo9.webp";
import { BsArrowUpCircle } from 'react-icons/bs';

const Bugattidivo = () => {

  const divStyle = {
    backgroundSize: 'cover',
    height: '95vh'
  }
  const slideImages = [
    {
      url:bdv4
    },
    {
      url: bdv5
    },
    {
      url:bdv8
    },
    {
      url:divo1,
    },
    {
      url:bdv7
    }
 
  ];
  const [selectedColor, setSelectedColor] = useState(bdv3);
  const [selectedImage, setSelectedImage] = useState(bdv3);

  const h1Click = () => {
    setSelectedColor('red');
    setSelectedImage(bdv);
  }

  const h2Click = () => {
    setSelectedColor('black');
    setSelectedImage(bdv2);
  }
  const h3Click = () => {
    setSelectedColor('white');
    setSelectedImage(bdv3);
  }
  const suvTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 0,
        behavior: "smooth"
      });
    }, 200);
  }
 
  return (
    <div>
        <div className='bdivonewsimg'>
          <Fade bottom>
            <h1 className='bdn'>BUGATTI </h1>
            <h1 className="bdn2">DIVO</h1>
            </Fade>
        </div>    
        <Fade bottom>
<div className="bdn3">
  <Fade bottom>
  <h1 className="bdn4">MODERN COACHBUILDING AT ITS BEST</h1>
  </Fade>
  <Fade bottom>
  <div className="bdn5">
    <p className="bdn6">Exceptionally crafted, striking in character, strictly limited and with<br/>  completely different driving dynamics - the DIVO is BUGATTI's first<br/> modern coachbuilt project: athletic, sharp, with distinctive handling<br/> properties, stunning lateral acceleration and a unique design language.<br/> The aerodynamics of the car have been intensively fine-tuned for<br/> additional downforce, while the suspension and chassis settings were<br/> modified for an even more compelling driving experience. Powered by<br/> BUGATTI's iconic 8.0-liter W16 engine-with an output of 1,500 PS and<br/> 1,600 Nm-the Divo combines incomparable coachbuilding quality<br/> with an exhilarant driving experience.</p>
    <p className="bdn7">The Divo is BUGATTI's first coachbuilt hyper sports car of the 21st century.<br/> The limited and extremely high-performance hyper sports car is an<br/> absolute must-have for any BUGATTI enthusiast's hyper sports<br/> car collection. With its futuristic and ferocious design and its completely<br/> different personality and driving performance, BUGATTI has created a<br/> true masterpiece of automotive craftsmanship that successfully revives<br/> BUGATTI's long-standing coachbuilding tradition.</p>
  </div>
</Fade>  
</div>
<img src={bdv9} className='bdn8' alt="" />










<h1 className='bdivotechspech1'>Technical Specifications</h1>
<div className='bbb'>
<h1 className='bdivospeed-h1'>SPEED</h1>
<h1 className='bdivospeed2-h1'>410 KM/H</h1>
</div>
<div className='bspeedline'></div>

<div className='bbb2'>
  <h1 className='bdivoengine-h1'>ENGINE</h1>
  <h1 className='bdivoengine2-h1'>8.0 W16</h1>
</div>
<div className='bspeedline'></div>

<div className='bbb3'>
  <h1 className='bdivohpower-h1'>HORSEPOWER</h1>
  <h1 className='bdivohpower2-h1'>1500</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb4'>
  <h1 className='bdivotorque-h1'>TORQUE</h1>
  <h1 className='bdivotorque2-h1'>1600NM</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb5'>
  <h1 className='bdivotime-h1'>0-100 KM/H</h1>
  <h1 className='bdivotime2-h1'>2.4 S</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb6'>
  <h1 className='bdivotrans-h1'>TRANSMISSION</h1>
  <h1 className='bdivotrans2-h1'>7 SPEED DSG</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb7'>
  <h1 className='bdivoweight-h1'>WEIGHT</h1>
   <h1 className='bdivoweight2-h1'>1.995 KG</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb8'>
  <h1 className='bdivoprice-h1'>PRICE</h1>
  <h1 className='bdivoprice2-h1'>15.000.000$</h1>
</div>
<div className='bspeedline'></div>

<h1 className="bdn10">LET'S TAKE A LOOK AT THE<br/> BUGATTI DIVO</h1>
<div className="rrp41">
        <button className="rrp38" onClick={h3Click}>FRONT</button>
        <button className="rrp39" onClick={h1Click}>BACK</button>
        <button className="rrp40" onClick={h2Click}>SIDE</button>
    </div>
    {selectedColor && <img className='bdn77' src={selectedImage} alt=''/>} 





<div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>


      <Fade bottom>
    <h1 className='bcll33'>Please go above to rediscover<br/> this incredible world of<br/> Bugatti DIVO</h1>
</Fade>
<div className="p10rank">
<div className='p9rank' onClick={suvTop}>
  <div className="p8rank" ><TfiArrowUp/></div>
</div>
      </div>



</Fade>


<div className='bdivosection-18'>
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

export default Bugattidivo