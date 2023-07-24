import React from 'react';
import "./FordF150Suv.css";
import f150 from "./f2f150.webp";
import Fade from 'react-reveal';
import f2f150 from "./f4f150.jpeg";
import f3f150 from "./f5f150.webp";
import f4f150 from "./f7f150.jpeg";
import f5f150 from "./f8f150.jpg";
import f6f150 from "./f9f150.jpg";
import f7f150 from "./f10f150.jpg";
import { useState } from 'react';
import ImageSlider9 from './ImageSlider9';
import{ BsArrowUpCircle } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import { TfiArrowUp } from "react-icons/tfi"
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";



const FordF150offroad = () => {

    const slides = [
        {url: f4f150},
        {url: f5f150},
        {url: f6f150},
        {url: f7f150},
     
      ];
     const containerStyles = {
      width: "1519px",
      height: "700px",
      margin: "0 auto",
      marginTop: "100px",
     }

     const fClick1 = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 1.4,
            behavior: "smooth"
          });
        }, 200);
      }
      const fClick2 = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 2.9,
            behavior: "smooth"
          });
        }, 200);
      }
      const fClick3 = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 4.1,
            behavior: "smooth"
          });
        }, 200);
      }
      const fClick4 = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 5.289,
            behavior: "smooth"
          });
        }, 200);
      }
      const fClick5 = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 0,
            behavior: "smooth"
          });
        }, 200);
      }





  return (
    <div>
<div className="f150off">
 <Fade bottom>
<h1 className="f150off2">FORD</h1>
<h1 className="f150off3">F-150</h1>
</Fade>
</div>






<Fade bottom>
<h1 className="f150off4">Experience this amazing<br/> Ford F-150</h1>
</Fade>
<Fade bottom>
<div className="f150off5">
    <button className="f150off6" onClick={fClick1}>OVERVIEW</button>
    <button className="f150off6" onClick={fClick2}>PERFORMANCE</button>
    <button className="f150off6" onClick={fClick3}>INTERIOR</button>
    <button className="f150off6" onClick={fClick4}>SPECIFICATION</button>
</div>
</Fade>
<Fade bottom>
<div className='f150off7'>
    <img src={f150} className='f150off8' alt="" />
    <div>
    <h1 className='f150off9'>WHAT IS THE F-150 ?</h1>
    <p className='f150off10'>The 14th-generation Ford F-Series was introduced for the 2021 model year through a live presentation <br/>streamed over the Internet on June 25, 2020. Despite sharing a strong visual resemblance to the 13th<br/> generation, the 2021 F-150 underwent a redesign of 92% of its parts, carrying over only its cab and <br/> pickup box structure. The powertrain line is largely carried over from the previous generation,<br/> with a 3.3-liter V6, 2.7-liter and 3.5-liter EcoBoost twin-turbo V6s, a 5.0-liter V8, and a 3.0-liter<br/> diesel V6. The 13th-generation Ford F-Series was introduced for the 2015 model year.<br/> The SuperCrew Cab version of the 2018 F-150 reclaimed an IIHS Top Safety Pick rating. </p> 
    <p className='f150off11'>* From 2005 to 2008, Lincoln-Mercury dealers sold this version of the F-150 as the  Lincoln Mark LT,<br/> replacing the Blackwood.</p>
    </div>
</div>
<div className='f150off14'>
<img src={f2f150} className='f150off12' alt="" />
<img src={f3f150} className='f150off13' alt="" />
</div>
<h1 className='f150off15'>W10 ENGINE</h1>
<div className='lux-sec18'>
        <div>
        <h1 className='lux-sec19'>177 MPH</h1>
        <h2 className='lux-sec20'>MAX SPEED</h2>
        </div>
        <div>
        <h1 className='lux-sec19'>5.7 S</h1>
        <h2 className='lux-sec20'>0-100 KM/H</h2>
        </div>
        <div>
        <h1 className='lux-sec19'>377 HP</h1>
        <h2 className='lux-sec20'>HORSEPOWER</h2>
        </div>
        <div>
        <h1 className='lux-sec19'>507 NM</h1>
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
       <p className='f150off20'>In 2010, Ford shifted its electronics from a general electric<br/> module base to the computerized and programmable<br/> body control module, allowing for fewer parts differences<br/> and programmable upgrade options from the dealer or<br/> factory.</p>        
       </div>
       <div>
       <h1 className="f150off21">WHEELS</h1>
       <p className='f150off22'>As part of a major focus on fuel economy, the entire<br/>  engine lineup for the F-150 was updated for the 2011<br/>  model year. Along with the new V8 engine, the F-150<br/> gained a new 3.7 L base V6 engine, and a powerful<br/> twin-turbocharged 3.5 L V6, dubbed EcoBoost by Ford.<br/> An automatic transmission became the only version. </p>
       </div> 
</div>
<div className="f150off24">
    <div>
<h1 className="f150off23">TORQUE</h1>
<p className="f150off26">
For 2019, Ford made upgrades to enhance the off-road <br/>capability of the Raptor series truck line. They introduced<br/> new FOX Live Valve Shocks. The new shocks auto adjust<br/> the suspension's compression dampening based on the<br/> terrain via a live sensor electrically controlled solenoid<br/> valves. 
</p>
    </div>
    <div>
<h1 className="f150off25">HORSEPOWER</h1>
<p className="f150off27">The powertrain underwent several revisions, as the<br/> 3.5 L V6 was replaced by a 3.3 L V6 mated to a  <br/>six-speed transmission. Safety and driver-assistance<br/> features improved and added for the 2018 model year<br/> include Pre-Collision Assist with Pedestrian Detection<br/> and Adaptive Cruise Control with Stop and Go.</p>
    </div>
</div>
<div style={containerStyles}>
  <ImageSlider9 slides={slides}/>
           </div>
<div className="f150off29">   
    <div>
        <h1 className="f150off28">INTERIOR</h1>
         <h1 className="f150off30">High quality <br/>seats</h1>
    </div>
       <div>
       <h1 className='f150off19'>SEATS</h1>      
       <p className='f150off20'>In March 2022, Ford announced plans to officially  export <br/>the F-150 to Australia beginning in 2023. The truck is<br/> imported in its native left hand drive configuration<br/> and converted to right hand drive to conform to<br/> Australian Design Rules by RMA Automotive in<br/>Mickleham, Victoria.</p>        
       </div>
       <div>
       <h1 className="f150off31">BAGGAGE</h1>
       <p className='f150off22'>Sitting higher than other non-pickup truck <br/>consumer vehicles, the Ford F Series vehicles<br/> have significantly larger blindspots in which people<br/> or other cars are invisible to the driver. According to <br/> data from the National Highway Traffic Safety<br/> Administration, Ford F-series vehicles are part of <br/> more fatal crashes than any other car in the US.</p>
       </div> 
</div> 

<div className="f150off32">
    <h1 className="f150off33">SPECIFICATION</h1>
    <div className="f150off34">
        <div className="f150off36">
        <h1 className='f150off35'>ENGINE: 7.0L, W10</h1>
        <h1 className='f150off37'>FUEL TYPE: GASOLINE</h1>
        </div>
        <div className="f150off38">
            <h1 className="f150off39">SPEED: 177 KM/H</h1>
            <h1 className="f150off40">TORQUE: 507 NM</h1>
        </div>
        <div className='f150off41'>
            <h1 className="f150off42">PRICE: 47.000$</h1>
            <h1 className="f150off43">0-100 KM/H: 5.7 S</h1>
        </div>
        <div className="f150off44">
            <h1 className="f150off45">BRAND: FORD</h1>
            <h1 className="f150off46">WHEELS: FIRELLI</h1>
        </div>
        <div className="f150off47">
            <h1 className="f150off48">WEIGHT: 4.997 KG</h1>
            <h1 className="f150off49">HEIGHT: 1.997 MM</h1>
        </div>
    </div>
</div>


<h1 className='f150off53'>Please go up to re-experience this <br/> incredible Ford F150 world</h1>
<Fade bottom>
<div className="p10rank">
<div className='p9rank' onClick={fClick5}>
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

export default FordF150offroad