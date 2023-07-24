import React from 'react';
import "./DodgeRam.css";
import Fade from 'react-reveal';
import d2d from "./d2d.png";
import d3d from "./d1.jpg";
import d4d from "./d4.jpg";
import ImageSlider11 from './ImageSlider11';
import d5d from "./d9.jpeg";
import d6d from "./d8.jpg";
import d7d from "./d5.jpg";
import d8d from "./d7.jpg";
import { BsArrowUpCircle } from 'react-icons/bs';
import { RiInstagramLine } from "react-icons/ri";
import { TfiArrowUp } from "react-icons/tfi"
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";

const DodgeRam = () => {
    const slides = [
        {url: d5d},
        {url: d6d},
        {url: d7d},
        {url: d8d},
      ];
     const containerStyles = {
      width: "1519px",
      height: "700px",
      margin: "0 auto",
      marginTop: "100px",
     }
     const d1Click = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 0,
            behavior: "smooth"
          });
        }, 200);
      }
      const d2Click = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 1.41,
            behavior: "smooth"
          });
        }, 200);
      }
      const d3Click = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 2.8,
            behavior: "smooth"
          });
        }, 200);
      }
      const d4Click = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 4,
            behavior: "smooth"
          });
        }, 200);
      }
      const d5Click = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 5.1,
            behavior: "smooth"
          });
        }, 200);
      }





  return (
    <div>
<div className="dr">
<Fade bottom>
    <h1 className="dr2">DODGE</h1>
    <h1 className="dr3">RAM</h1>
</Fade>
</div>
<Fade bottom>
<h1 className="f150off4">Experience this amazing<br/> DODGE RAM</h1>
</Fade>
<Fade bottom>
<div className="f150off5">
    <button className="f150off6" onClick={d2Click}>OVERVIEW</button>
    <button className="f150off6" onClick={d3Click}>PERFORMANCE</button>
    <button className="f150off6" onClick={d4Click}>INTERIOR</button>
    <button className="f150off6" onClick={d5Click}>SPECIFICATION</button>
</div>
</Fade>
<Fade bottom>
<div className='f150off7'>
    <img src={d2d} className='f150off8' alt="" />
    <div>
    <h1 className='dr4'>WHAT IS THE DODGE RAM ?</h1>
    <p className='dr5'>The Ram pickup (marketed as the Dodge Ram until 2010) is a full-size pickup truck<br/> manufactured by Stellantis North America (formerly Chrysler Group LLC and FCA US LLC)<br/> and marketed from 2010 onwards under the Ram Trucks brand. The current fifth-generation<br/> Ram debuted at the 2018 North American International Auto Show in Detroit, Michigan, in<br/> January of that year. Previously, Ram was part of the Dodge line of light trucks. The second <br/>generation Dodge Ram began development in 1986. 
    </p> 
    <p className='dr6'>* From 2007 to 2017, Dodge Company dealers sold this version of the Dodge Ram as the  Full-Size Pickup,<br/> replacing the Blackwood.</p>
    </div>
</div>
<div className="dr7">
    <img src={d3d} alt="" className="dr8" />
    <img src={d4d} alt="" className="dr9" />
</div>
<h1 className='f150off15'>W10 ENGINE</h1>
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
        <h1 className='lux-sec19'>477 HP</h1>
        <h2 className='lux-sec20'>HORSEPOWER</h2>
        </div>
        <div>
        <h1 className='lux-sec19'>577 NM</h1>
        <h2 className='lux-sec20'>TORQUE</h2>
        </div>
    </div>
</Fade>
<Fade bottom>
<div className='f150off16'>
       <div>
    <h1 className='f150off17'>PERFORMANCE</h1>
    <h1 className='f150off18'>POWERFUL <br/>ENGINE</h1>
       </div>
       <div>
       <h1 className='f150off19'>ENGINE</h1>      
       <p className='f150off20'>Dodge kept the previous generation's model designations:<br/> D or Ram indicate two-wheel drive while W or Power Ram<br/> indicate four-wheel drive. Just like Ford, Dodge used 150 to<br/> indicate a half-ton truck, 250 for a three-quarter-ton truck,<br/> and 350 for a one-ton truck. </p>        
       </div>
       <div>
       <h1 className="f150off21">WHEELS</h1>
       <p className='f150off22'> The truck models were offered in standard cab,<br/> "club" extended cab, and crew cab configurations.<br/> They also were offered along with 6.5 ft (2.0 m) and<br/> 8 ft (2.4 m) bed lengths and "Utiline" and "Sweptline"<br/> styled boxes along with standard boxes. The second <br/>generation Dodge Ram began development in 1986.  </p>
       </div> 
</div>
<div className="f150off24">
    <div>
<h1 className="f150off23">TORQUE</h1>
<p className="f150off26">
For 2008, Dodge introduced two more Chassis Cab models,<br/>  the 4500 and 5500. These were Class-4 and Class-5 trucks<br/> with a gross weight of 16,500 lb (7,484 kg) and 19,500 lb<br/> (8,845 kg), respectively. 2005 was the last year for the first<br/> version of the 5.7 L (345 cu in) Hemi V8.
</p>
    </div>
    <div>
<h1 className="f150off25">HORSEPOWER</h1>
<p className="f150off27">For the 2003 model year, AAM axles replaced the<br/> Dana Corp axles. In the front, all 2500 and 3500<br/> trucks were 9.25-inch with 33 spline axles. . Direct<br/> comparisons are difficult as the axles are made with <br/>completely different metallurgy.</p>
    </div>
</div>
<div style={containerStyles}>
  <ImageSlider11 slides={slides}/>
           </div>
           <div className="f150off29">   
    <div>
        <h1 className="f150off28">INTERIOR</h1>
         <h1 className="f150off30">High quality <br/>seats</h1>
    </div>
       <div>
       <h1 className='f150off19'>SEATS</h1>      
       <p className='f150off20'>The Ram concept truck "Long Hauler" from 2012 is based<br/>  mostly on existing Ram truck parts. The powertrain, <br/>frame, and wheels are all components of the Ram 5500<br/> Chassis Cab. The GCWR for this truck is 37,500 lb and the<br/> weight of the truck is 9,300 lb. It is a "Mega Cab" optional<br/> on the lighter Rams. </p>        
       </div>
       <div>
       <h1 className="f150off31">BAGGAGE</h1>
       <p className='f150off22'>The 1500 gets a minor restyling. It features a new <br/>front fascia, optional projector-beam halogen<br/>  headlamps with LED turn signals/parking lamps,<br/>  wheels, and interior, where the "DODGE" name  was<br/> removed from the dashboard  and replaced with<br/> "RAM". 2013 models have revised engine and<br/> transmission options.</p>
       </div> 
</div> 
<div className="f150off32">
    <h1 className="f150off33">SPECIFICATION</h1>
    <div className="f150off34">
        <div className="f150off36">
        <h1 className='f150off35'>ENGINE: 7.7L, W10</h1>
        <h1 className='f150off37'>FUEL TYPE: GASOLINE</h1>
        </div>
        <div className="f150off38">
            <h1 className="f150off39">SPEED: 177 KM/H</h1>
            <h1 className="f150off40">TORQUE: 577 NM</h1>
        </div>
        <div className='f150off41'>
            <h1 className="f150off42">PRICE: 57.000$</h1>
            <h1 className="f150off43">0-100 KM/H: 4.7 S</h1>
        </div>
        <div className="f150off44">
            <h1 className="f150off45">BRAND: DODGE</h1>
            <h1 className="dr10">WHEELS: FIRELLI</h1>
        </div>
        <div className="f150off47">
            <h1 className="f150off48">WEIGHT: 4.777 KG</h1>
            <h1 className="f150off49">HEIGHT: 1.997 MM</h1>
        </div>
    </div>
</div>


<h1 className='f150off53'>Please go up to re-experience this <br/> incredible Dodge Ram world</h1>
<Fade bottom>
<div className="p10rank">
<div className='p9rank'>
  <div className="p8rank" onClick={d1Click}><TfiArrowUp/></div>
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

export default DodgeRam