import React from 'react';
import "./ChevroletSilverado.css";
import Fade from 'react-reveal';
import ch7 from "./ch7.webp";
import ch8 from "./ch1.jpeg";
import ch9 from "./ch2.jpg";
import ch10 from "./ch8.jpg";
import ch11 from "./ch9.jpg";
import ch12 from "./ch10.jpg";
import ch13 from "./ch11.webp";
import ImageSlider10 from './ImageSlider10';
import { TfiArrowUp } from "react-icons/tfi"
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


const ChevroletSilverado = () => {
    const slides = [
        {url: ch10},
        {url: ch11},
        {url: ch12},
        {url: ch13},
     
      ];
     const containerStyles = {
      width: "1519px",
      height: "700px",
      margin: "0 auto",
      marginTop: "100px",
     }

     const cClick1 = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 1.4,
            behavior: "smooth"
          });
        }, 200);
      }
      const cClick2 = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 2.9,
            behavior: "smooth"
          });
        }, 200);
      }
      const cClick3 = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 3.92,
            behavior: "smooth"
          });
        }, 200);
      }
      const cClick4 = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 5,
            behavior: "smooth"
          });
        }, 200);
      }
      const cClick5 = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 0,
            behavior: "smooth"
          });
        }, 200);
      }











  return (
    <div>
<div className="ch">
    <Fade bottom>
    <h1 className="ch2">CHEVROLET</h1>
    <h1 className="ch3">SILVERADO</h1>
    </Fade>
</div>
<Fade bottom>
<h1 className="f150off4">Experience this amazing<br/> Chevrolet silverado</h1>
</Fade>
<Fade bottom>
<div className="f150off5">
    <button className="f150off6" onClick={cClick1}>OVERVIEW</button>
    <button className="f150off6" onClick={cClick2}>PERFORMANCE</button>
    <button className="f150off6" onClick={cClick3}>INTERIOR</button>
    <button className="f150off6" onClick={cClick4}>SPECIFICATION</button>
</div>
</Fade>
<Fade bottom>
<div className='f150off7'>
    <img src={ch7} className='f150off8' alt="" />
    <div>
    <h1 className='ch4'>WHAT IS THE CHEVROLET SILVERADO ?</h1>
    <p className='ch5'>The Chevrolet Silverado is a range of trucks manufactured by General Motors under<br/> the Chevrolet brand. Introduced for the 1999 model year, the Silverado is the successor<br/> to the long running Chevrolet C/K model line. Taking its name from the top trim level<br/> from the Chevrolet C/K series, the Silverado is offered as a series of full-size pickup<br/> trucks, chassis cab trucks, and medium-duty trucks. </p> 
    <p className='ch6'>* From 2007 to 2009, General-Motors dealers sold this version of the Chevrolet Silverado as the <br/>  General-Brand, replacing the Motors.</p>
    </div>
</div>
<div className='ch7'>
<img src={ch8} className='ch8' alt="" />
<img src={ch9} className='ch9' alt="" />
</div>
<h1 className='f150off15'>W8 ENGINE</h1>
<div className='lux-sec18'>
        <div>
        <h1 className='lux-sec19'>167 MPH</h1>
        <h2 className='lux-sec20'>MAX SPEED</h2>
        </div>
        <div>
        <h1 className='lux-sec19'>6.7 S</h1>
        <h2 className='lux-sec20'>0-100 KM/H</h2>
        </div>
        <div>
        <h1 className='lux-sec19'>317 HP</h1>
        <h2 className='lux-sec20'>HORSEPOWER</h2>
        </div>
        <div>
        <h1 className='lux-sec19'>477 NM</h1>
        <h2 className='lux-sec20'>TORQUE</h2>
        </div>
    </div>
    <div className='f150off16'>
       <div>
    <h1 className='f150off17'>PERFORMANCE</h1>
    <h1 className='f150off18'>POWERFUL <br/>ENGINE</h1>
       </div>
       <div>
       <h1 className='f150off19'>ENGINE</h1>      
       <p className='f150off20'>For 2016, the Chevrolet Silverado 1500 and GMC Sierra 1500<br/> received its first mid-cycle refresh, similar to 2003 first<br/> generation models. For that year, Chevrolet has added<br/> and dropped some of the Special Editions for the Silverado<br/> truck series.</p>        
       </div>
       <div>
       <h1 className="f150off21">WHEELS</h1>
       <p className='f150off22'>For the 2017 model year, Silverado and Sierra HD<br/> models equipped with the 6.6-liter Duramax<br/> Turbodiesel V8 (L5P) received a new front hood with<br/> air intake vents. All Silverado and Sierra models receive<br/> slight changes to their MyLink (Chevrolet) and <br/>IntelliLink (GMC) infotainment systems</p>
       </div> 
</div>
<div className="f150off24">
    <div>
<h1 className="f150off23">TORQUE</h1>
<p className="f150off26">
Starting in 2016, GM offered an eAssist mild hybrid version<br/> of the 5.3-liter V8 engine in the Silverado LT and Sierra SLT,<br/> but only in the state of California. The engine came with<br/> an 8-speed automatic transmission and has the same<br/> horsepower and torque as the regular 5.3 V8. 
</p>
    </div>
    <div>
<h1 className="f150off25">HORSEPOWER</h1>
<p className="f150off27">In late 2014, Chevrolet released the 2015 Silverado SSV <br/>(Special Service Vehicle) to complement its lineup of<br/> law enforcementvehicles. The SSV Silverado is available<br/> in 1500 Crew Cab form with either the short (5.5') or<br/> standard (6.5') cargo box. </p>
    </div>
</div>
<div style={containerStyles}>
  <ImageSlider10 slides={slides}/>
</div>
<div className="f150off29">   
    <div>
        <h1 className="f150off28">INTERIOR</h1>
         <h1 className="f150off30">High quality <br/>seats</h1>
    </div>
       <div>
       <h1 className='f150off19'>SEATS</h1>      
       <p className='f150off20'>In 2016, GMC introduced the Sierra All Terrain X, which<br/> is equipped with a 5.3-liter V8 engine with performance<br/> exhaust, increasing power from 355 to 365 horsepower<br/> (265 to 272 kW; 360 to 370 PS). Available on four-wheel<br/> drive Sierra 2500 HD crew cab models come in either<br/> Black Onyx or Summit White exterior colors. </p>        
       </div>
       <div>
       <h1 className="f150off31">BAGGAGE</h1>
       <p className='f150off22'>All Terrain X models have a body-color grille surround<br/> and a grille insert that's unique to All Terrain. Body color<br/> door handles, front and rear bumpers, and bodyside<br/> moldings, and black accents, including belt moldings,<br/> front bumper skid plate, and B-pillar accents, give it a<br/> monochromatic appearance.</p>
       </div> 
</div> 
<div className="f150off32">
    <h1 className="f150off33">SPECIFICATION</h1>
    <div className="f150off34">
        <div className="f150off36">
        <h1 className='f150off35'>ENGINE: 6.7L, W8</h1>
        <h1 className='ch10'>FUEL TYPE: GASOLINE</h1>
        </div>
        <div className="f150off38">
            <h1 className="ch11">SPEED: 167 KM/H</h1>
            <h1 className="f150off40">TORQUE: 417 NM</h1>
        </div>
        <div className='f150off41'>
            <h1 className="f150off42">PRICE: 57.000$</h1>
            <h1 className="f150off43">0-100 KM/H: 6.7 S</h1>
        </div>
        <div className="f150off44">
            <h1 className="f150off45">YEAR: 2023</h1>
            <h1 className="ch12">WHEELS: FIRELLI</h1>
        </div>
        <div className="f150off47">
            <h1 className="f150off48">WEIGHT: 4.777 KG</h1>
            <h1 className="ch13">HEIGHT: 1.897 MM</h1>
        </div>
    </div>
</div>


<h1 className='f150off53'>Please go up to re-experience <br/> this incredible CHEVROLET SILVERADO world</h1>
<Fade bottom>
<div className="p10rank">
<div className='p9rank' onClick={cClick5}>
  <div className="p8rank" ><TfiArrowUp/></div>
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

export default ChevroletSilverado