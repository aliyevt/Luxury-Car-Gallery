import React from 'react';
import "./Luxurysuv.css";
import Fade from 'react-reveal';
import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import lux1 from "./lux1.jpg"
import { useState } from 'react';
import lux2 from "./lux3.jpg";
import lux3 from "./lux5.jpeg"; 
import lux4 from "./gls600slide.jpg";
import lux5 from "./luxben1.jpg";
import lux6 from "./suvcullinan.jpeg";
import logolam from "./llogo7.png";
import logomer from "./llogo2.png";
import logopor from "./llogo3.png";
import { TfiArrowDown, TfiArrowUp } from "react-icons/tfi"
import logoben from "./llogo4.png";
import logorol from "./llogo5.webp";
import logocad from "./llogo6.png";
import lux7 from "./cad9.jpg";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import luxgal from "./suvcadillacprice.jpg";
import luxgal2 from "./mg63amg3.jpg";
import luxgal3 from "./bmwx7img2.jpg";
import luxgal4 from "./urusmans2price.webp";
import luxgal5 from "./lux4.jpg";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";




const Luxurysuv = () => {


  const [selectedImg, setSelectedImg] = useState(lux2);
  const [selectedImage, setSelectedImage] = useState(lux2);

const rollsClick =()=>{
  setSelectedImage(lux6);
  jMoment();
}
const lamboClick =()=>{
  jMoment();
  setSelectedImage(lux3);
}
const bentClick = ()=>{
  setSelectedImage(lux5);
  jMoment();
}
const porClick =()=>{
  setSelectedImage(lux2);
  jMoment();
}
const merClick =()=>{
  setSelectedImage(lux4);
  jMoment();
}
const cadClick =()=>{
  setSelectedImage(lux7);
  jMoment();
}


const divStyle = {
  backgroundSize: 'cover',
  objectFit: "cover",
  height: '110vh',
}

const  slideImages= [
  {url: luxgal },
  {url: luxgal2 },
  {url: luxgal3 },
  {url: luxgal4 },
  {url: luxgal5},
];


const scrollLux = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0.977,
      behavior: "smooth"
    });
  }, 200);
}

const scrollLux2 = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0,
      behavior: "smooth"
    });
  }, 200);
}
const jMoment = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 2.447,
      behavior: "smooth"
    });
  }, 200);
}



  return (
    <div>
<div className='lux'>
<Fade bottom>
  <h1 className='lux1'>all about the luxury suv</h1>
  <h1 className='lux2'>MORE LEARN</h1>
  </Fade>
  <Fade bottom>
<div className="luxsuv3icon777">
  <div className="luxsuv2icon777" onClick={scrollLux}>
    <div className="lux3" ><TfiArrowDown/></div>
   </div> 
</div>
</Fade>



</div>
      <Fade bottom>
        <h1 className="lux4">Let's explore what luxury suvs are</h1>
      </Fade>
<Fade bottom>
  <div className="lux5">
 <p className='lux6'>Long before the luxury SUV segment was defined and became popular, the 1966<br/> Jeep Super Wagoneer was marketed at the time as a fully equipped station<br/> wagon. It was the first off-road SUV to offer a V8 engine and automatic transmission <br/>along with luxury car trim and equipment. Standard features included bucket<br/> seating, a center console, air conditioning, a seven-position tilt steering wheel, a vinyl<br/> roof, and gold-colored trim panels on the body sides and tailgate. Luxury car<br/> companies have increasingly introduced SUV or crossover models in the 2010s. For<br/>  example, Rolls-Royce Cullinan, Bentley Bentayga, Aston Martin DBX, Maserati<br/>  Levante, and Lamborghini Urus. Ferrari has announced that they will release an<br/>  SUV model Ferrari Purosangue in 2023. Some brands, such as Lincoln, have <br/> even moved to an all SUV and/or crossover lineup.</p>
 <img src={lux1} className='lux7' alt="" />
  </div>
</Fade>

<Fade bottom>
  <h1 className="lux8">CHOOSE YOUR BRAND</h1>
</Fade>
<Fade bottom>
  <div className="lux9">
    <div className='lux10'>
    <img className='luxlogo' onClick={rollsClick} src={logorol} alt="" />
    <img className='luxlogo1' onClick={porClick} src={logopor} alt="" />
    <img src={logomer} className='luxlogo1' onClick={merClick} alt="" />
    <img src={logoben} className='luxlogo2' onClick={bentClick} alt="" />
    <img src={logolam} className='luxlogo1' onClick={lamboClick} alt="" />
    <img src={logocad} className='luxlogo4' onClick={cadClick} alt="" />
    </div>
 <div className='lu777x10'>

</div>

  </div>
</Fade>

{selectedImg && <img src={selectedImage} className='luxcarimg' alt=''/> }


<Fade bottom>
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
</Fade>




<Fade bottom>
  <h1 className="lux11">Please go above to re-experience<br/> these incredible luxury suvs</h1>
</Fade>
<Fade bottom>
<div className="p10rank">
<div className='p9rank' onClick={scrollLux2}>
  <div className="p8rank"><TfiArrowUp/></div>
</div>
    </div>
</Fade>













<div className='bentluxspecsection-777'>
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
<div className='instagram'><a href=""><RiInstagramLine/></a></div>
<div className='twitter'><a href=""><RiTwitterLine/></a></div>
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

<p className='write-astmart-fixed'>Fuel consumption and emission values of All Luxury Suv's*; Fuel consumption combined: 17,9 l/100km (WLTP); CO2-emissions combined: 337 g/km (WLTP)</p>




    </div>
  )
}

export default Luxurysuv