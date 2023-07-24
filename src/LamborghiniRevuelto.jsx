import React from 'react';
import "./LamboRevu.css";
import lrevuelto from "./manslambnews.webp";
import lrevumans from "./lrevumans.webp";
import lrevu from "./revuelto.jpeg";
import lrevu2 from "./lamrevu1.webp";
import lrevu3 from "./lambrevu2.webp";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import lrevu4 from "./lrevu5.jpg";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import { TfiArrowUp } from "react-icons/tfi"
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import Fade from 'react-reveal';
import { BsArrowUpCircle } from 'react-icons/bs';




const LamborghiniRevuelto = () => {


  const divStyle = {
    backgroundSize: 'cover',
    height: '100vh'
  }
  const slideImages = [
    {
        url: lrevu,
    },
    {
      url: lrevu2,
    },
  
    {
       url: lrevu3, 
    },
    {
      url: lrevu4,
    },
  ];
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
      <Fade bottom>
<div className='backlamboanni'>NEWS</div>
<h1 className='lhuracan-h1'>LAMBORGHINI REVUELTO: MANSORY PREMIERE</h1>
<img className='lrevuelto' src={lrevuelto} alt=''/>
<h1 className='lhuracandate-h1'>25 MAY 2023</h1>
<h1 className='bdivotechspech1'>Technical Specifications</h1>
<div className='bbb'>
<h1 className='bdivospeed-h1'>SPEED</h1>
<h1 className='bdivospeed2-h1'>360 KM/H</h1>
</div>
<div className='bspeedline'></div>

<div className='bbb2'>
  <h1 className='bdivoengine-h1'>ENGINE</h1>
  <h1 className='bdivoengine2-h1'>4.0 W12</h1>
</div>
<div className='bspeedline'></div>

<div className='bbb3'>
  <h1 className='bdivohpower-h1'>HORSEPOWER</h1>
  <h1 className='bdivohpower2-h1'>1000</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb4'>
  <h1 className='bdivotorque-h1'>TORQUE</h1>
  <h1 className='bdivotorque2-h1'>1400NM</h1>
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
   <h1 className='bdivoweight2-h1'>1.795 KG</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb8'>
  <h1 className='bdivoprice-h1'>PRICE</h1>
  <h1 className='brevuprice2-h1'>4.000.000$</h1>
</div>
<div className='bspeedline'></div>

<p className='lhuracandrift-p2'>Automobili Lamborghini Japan hosted the Lamborghini Revuelto Japan premiere on Tuesday 6 June at Ariake Arena. In the marque's<br/> 60th anniversary year, Lamborghini premiered its first V12 super sports hybrid plug-in HPEV (High Performance Electrified Vehicle) in<br/> front of over 500 guests in Japan. The location, Ariake Arena, served as one of the Tokyo 2020 Olympic and Paralympic Games venues<br/>  and is slated to become Tokyo's new sports and cultural hub: Lamborghini is the first automobile manufacturer to host an event there.</p>

<p className='lhuracandrift-p2'>Attending the premiere from Automobili Lamborghini were Mitja Borkert, Head of Design and Matteo Ortenzi, Revuelto Product Line Director,<br/> together with Japan representative Davide Sfrecola, Head of Japan.</p>

<div className='lrevuflex'>
<img src={lrevumans} className='lrevumans' alt="" />
<p className='lrevumans-p1'>With unprecedented new architecture, innovative<br/> design, maximum-efficiency aerodynamics, and<br/> a new carbon frame concept, Lamborghini Revuelto <br/>defines a new paradigm in terms of performance, <br/>sportiness and driving pleasure. An output of 1,015 hp<br/> is delivered from the combined power of an entirely<br/> new combustion engine together with three electric <br/>motors, alongside a double-clutch transmission (DCT)<br/> that makes its debut on a 12-cylinder Lamborghini for<br/> the first time. Making its global debut in the 60th <br/>anniversary year, the first electrified model delivers<br/> impact, excitement and innovation for Lamborghini<br/> owners and enthusiasts.</p>
</div>


<p className='lrevumans-p2'>As Automobili Lamborghini unveiled its first V12 HPEV model, the brand also pays tribute to its iconic V12 heritage with a showcase of the past <br/>V12 engine models such as the 400 GT, Miura, Countach, Diablo, Murciélago and Aventador.</p>

<p className='lrevumans-p3'>The Revuelto's extensive customization possibilities were also on display in the dedicated Ad Personam area, where guests could touch and <br/>feel the various materials in order to customize their new vehicles with exterior and interior color and trim options, and special finishes that <br/>personify their individual preferences.</p>




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


<h1 className='lrevuhypercar-h1'>This incredible Lamborghini Revuelto<br/> Mansory is a hypercar you will really love.<br/>For more detailed information <br/>about the Lamborghini Revu, please visit<br/> the official site of the <br/>Lamborghini Revuelton from the link below</h1>
<div className="p10rank">
<div className='p9rank' onClick={suvTop}>
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


<p className='lrevufixed-p1'>The vehicle is not yet offered for sale and is therefore not subject to Directive 1999/94/EC. The fuel consumption and emissions data is in the type approval stage</p>









    </div>
  )
}

export default LamborghiniRevuelto