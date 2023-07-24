import React from 'react';
import Fade from 'react-reveal';
import "./BentleyMulsanne.css";
import bm2 from "./bm2.png";
import bm3 from "./bm3.png";
import bm4 from "./bm4.jpeg";
import bm5 from "./bm5.jpg";
import bm6 from "./bm6.jpg";
import bm7 from "./bm7.jpg";
import bm8 from "./bm8.jpg"; 
import bm9 from "./bm9.webp";
import bm10 from "./bm10.jpg";
import bm11 from "./bm11.jpeg";
import bm12 from "./bm12.jpeg";
import { TfiArrowUp } from "react-icons/tfi"
import bm16 from "./bm16.jpeg"
import { useState } from 'react';
import bm14 from "./bm14.jpg";
import bm17 from "./bm17.jpg";
import bm18 from "./bm18.jpeg";
import bm19 from "./bm19.webp";
import ImageSlider14 from './ImageSlider14';
import ImageSlider15 from './ImageSlider15';
import { BsArrowUpCircle } from 'react-icons/bs';
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";

const BentleyMulsanne = () => {
  const slides = [
    {url: bm5},
    {url: bm6},
    {url: bm7},
    {url: bm8},
 
  ];
 const containerStyles = {
  width: "1519px",
  height: "700px",
  margin: "0 auto",
  marginTop: "90px",
 }
 const sslides = [
  {url: bm14},
  {url: bm17},
  {url: bm18},
  {url: bm19},

];
const ccontainerStyles = {
width: "1519px",
height: "700px",
margin: "0 auto",
marginTop: "-7px",
}



const [images1, setImages1] = useState([bm9, bm10]);
const [images2, setImages2] = useState([bm11, bm12]);
const [images3, setImages3]  =  useState([bm4, bm16])
const [selectedImages, setSelectedImages] = useState(images1);

const handleButton1Click = () => {
    setSelectedImages(images1);
  };
  
const handleButton2Click = () => {
    setSelectedImages(images2);
  };

const handleButton3Click = () => {
    setSelectedImages(images3);
  }; 
const rTop = () => {
    setTimeout(() => {
      window.scrollTo({
      top: window.innerHeight * 0,
      behavior: "smooth"
    });
  }, 200);
}  
const bUp = () => {
  setTimeout(() => {
    window.scrollTo({
    top: window.innerHeight * 1.47,
    behavior: "smooth"
    });
  }, 200);
} 
const bUp2 = () => {
  setTimeout(() => {
    window.scrollTo({
    top: window.innerHeight * 2.6,
    behavior: "smooth"
    });
  }, 200);
} 
const bUp3 = () => {
  setTimeout(() => {
    window.scrollTo({
    top: window.innerHeight * 3.6,
    behavior: "smooth"
    });
  }, 200);
} 
const bUp4 = () => {
  setTimeout(() => {
    window.scrollTo({
    top: window.innerHeight * 4.9,
    behavior: "smooth"
    });
  }, 200);
} 

  return (
    <div>
<div className="bm">
    <Fade bottom>
    <h1 className="bm2">BENTLEY</h1>
    <h1 className="bm3">MULSANNE</h1>
    </Fade>
</div>
<Fade bottom>
<h1 className="bm14">Let's take a look at the<br/> Bentley Mulsanne</h1>
<div className="bm15">
  <button className="bm16" onClick={bUp}>OVERVIEW</button>
  <button className="bm16" onClick={bUp2}>PERFORMANCE</button>
  <button className="bm16" onClick={bUp3}>INTERIOR</button>
  <button className="bm16" onClick={bUp4}>SPECIFICATIONS</button>
</div>
<div className="bm4">
  <Fade bottom>
    <img src={bm2} alt="" className="bm5" />
    </Fade>
    <div className='bm8'>
    <Fade bottom>
    <h1 className="bm7">DISCOVER THE BENTLEY MULSANNE</h1>   
    <p className="bm6">The Bentley Mulsanne is a full-size luxury car that was manufactured <br/>by Bentley from 2010 to 2020. The car is named after the Mulsanne<br/> Straight of the Le Mans racing circuit, where Bentley have raced many<br/> of its cars throughout history. Designed to replace the Rolls-Royce<br/> based Arnage, the Mulsanne was the first flagship car to be<br/> independently designed by Bentley Motors since W.O. Bentley's 8 litre<br/> model in 1930</p>
    </Fade>
    </div>
</div>
<div className="bm9">
    <img src={bm3} alt="" className="bm10" />
    <div>
    <p className="bm11">The Mulsanne nameplate was last used by Bentley for a four-door saloon that<br/> was built  between 1980 and 1992. It was resurrected as the nameplate for<br/> what would become the replacement for the Arnage, Bentley's then flagship<br/> model. The new Mulsanne was unveiled at the 2009 Pebble Beach Concours<br/> d'Elegance held on 16 August, followed by the 2009 Frankfurt Motor Show, 2010<br/> North American International Auto Show, and the 2012 Qatar Motor Show. The <br/>feedback remains that of a metal rod to control the damper</p>
    <p className='bm12'>* The engine is lighter and features cylinder de-activation and variable cam phasing to improve<br/> fuel efficiency.</p>
    <p className="bm13">* The design of the Mulsanne Executive Interior was based on the Mulsanne Executive Interior<br/> Concept. </p>
    </div>
</div>
<Fade bottom>
    <h1 className='lux-sec17'>W12 ENGINE</h1>
</Fade>
<Fade bottom>
    <div className='lux-sec18'>
        <div>
        <h1 className='lux-sec19'>177 MPH</h1>
        <h2 className='lux-sec20'>MAX SPEED</h2>
        </div>
        <div>
        <h1 className='lux-sec19'>4.7 S</h1>
        <h2 className='lux-sec20'>0-100 KM/H</h2>
        </div>
        <div>
        <h1 className='lux-sec19'>577 HP</h1>
        <h2 className='lux-sec20'>HORSEPOWER</h2>
        </div>
        <div>
        <h1 className='lux-sec19'>777 NM</h1>
        <h2 className='lux-sec20'>TORQUE</h2>
        </div>
    </div>
</Fade>
<div className='f150off16'>
       <div>
    <h1 className='f150off17'>PERFORMANCE</h1>
    <h1 className='f150off18'>POWERFUL <br/>ENGINE</h1>
       </div>
       <div>
       <h1 className='f150off19'>ENGINE</h1>      
       <p className='f150off20'>For 2016, the Bentley Mulsanne  and Rolls-Royce Phantom<br/> received its first mid-cycle refresh, similar to 2007 first<br/> generation models. For that year, Bentley has added<br/> and dropped some of the Special Editions for the Mulsanne<br/> sedan series.</p>        
       </div>
       <div>
       <h1 className="f150off21">WHEELS</h1>
       <p className='f150off22'>For the 2017 model year, Mulsanne and Phantom HD<br/> models equipped with the 6.6-liter Duramax<br/> Turbodiesel V12 (L7P) received a new front hood with<br/> air intake vents. All Silverado and Sierra models receive<br/> slight changes to their MyLink (Bentley) and <br/>IntelliLink (Rolls-Royce) infotainment systems.</p>
       </div> 
</div>
<div className="f150off24">
    <div>
<h1 className="f150off23">TORQUE</h1>
<p className="f150off26">
Starting in 2017, GM offered an eAssist mild hybrid version<br/> of the 6.7-liter V12 engine in the Mulsanne and Flying Spur,<br/> but only in the state of California. The engine came with<br/> an 8-speed automatic transmission and has the same<br/> horsepower and torque as the regular 6.7 V12. 
</p>
    </div>
    <div>
<h1 className="f150off25">HORSEPOWER</h1>
<p className="f150off27">In late 2014, Bentley released the 2015 Mulsanne <br/>(Special Service Vehicle) to complement its lineup of<br/> law enforcementvehicles. The  Mulsanne is available<br/> in 1500 Crew Cab form with either the short (5.5') or<br/> standard (6.5') cargo box. </p>
    </div>
</div>
<div style={containerStyles}>
  <ImageSlider14 slides={slides}/>
</div>
<div className="f150off29">   
    <div>
        <h1 className="f150off28">INTERIOR</h1>
         <h1 className="f150off30">High quality <br/>seats</h1>
    </div>
       <div>
       <h1 className='f150off19'>SEATS</h1>      
       <p className='f150off20'>In 2017, GMC introduced the Bentley Mulsanne, which<br/> is equipped with a 6.7-liter V12 engine with performance<br/> exhaust, increasing power from 577 to 587 horsepower<br/> (265 to 272 kW; 360 to 370 PS). Available on four-wheel<br/> drive Mulsanne HD crew cab models come in either<br/> Black Onyx or Summit White exterior colors. </p>        
       </div>
       <div>
       <h1 className="f150off31">BAGGAGE</h1>
       <p className='f150off22'>All Mulsanne models have a body-color grille surround<br/> and a grille insert that's unique to Mulsanne. Body color<br/> door handles, front and rear bumpers, and bodyside<br/> moldings, and black accents, including belt moldings,<br/> front bumper skid plate, and B-pillar accents, give it a<br/> monochromatic appearance.</p>
       </div> 
</div> 
<div className="f150off32">
    <h1 className="f150off33">SPECIFICATION</h1>
    <div className="f150off34">
        <div className="f150off36">
        <h1 className='f150off35'>ENGINE: 6.7L, W12</h1>
        <h1 className='ch10'>FUEL TYPE: GASOLINE</h1>
        </div>
        <div className="f150off38">
            <h1 className="ch11">SPEED: 177 KM/H</h1>
            <h1 className="f150off40">TORQUE: 777 NM</h1>
        </div>
        <div className='f150off41'>
            <h1 className="f150off42">PRICE: 477.000$</h1>
            <h1 className="bm17">0-100 KM/H: 4.7 S</h1>
        </div>
        <div className="f150off44">
            <h1 className="f150off45">YEAR: 2023</h1>
            <h1 className="ch12">WHEELS: FIRELLI</h1>
        </div>
        <div className="f150off47">
            <h1 className="f150off48">WEIGHT: 2.777 KG</h1>
            <h1 className="ch13">HEIGHT: 1.597 MM</h1>
        </div>
    </div>       
  </div>
  <h1 className="rrp36">Let's take a look<br/> at the Rolls Royce Phantom</h1>
   <div className="rrp41">
        <button className="rrp38"  onClick={handleButton1Click} >FRONT</button>
        <button className="rrp39"  onClick={handleButton2Click} >BACK-SIDE</button>
        <button className="rrp40"  onClick={handleButton3Click}>FRONT-SIDE</button>
    </div>
<div className="rrp37">
    <div className="rrp44"></div>
    {selectedImages.map((image) => (
        <div className='rrp43'>
      <img src={image} className='rrp42' alt="image" />
       </div>
    ))}
</div>
<div style={ccontainerStyles}>
  <ImageSlider15 sslides={sslides}/>
</div>
<h1 className="rrp48">PLEASE GO ABOVE TO RE-EXPERIENCE<br/> THIS INCREDIBLE WORLD OF BENTLEY MULSANNE</h1>
<Fade bottom>
<div className="p10rank">
<div className='p9rank'onClick={rTop}>
  <div className="p8rank"><TfiArrowUp/></div>
</div>
      </div>
</Fade>




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



    </div>
  )
}

export default BentleyMulsanne