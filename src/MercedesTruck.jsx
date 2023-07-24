import React from 'react';
import "./MercedesTruck.css";
import Fade from 'react-reveal';
import mtruck from "./msafari5.webp";
import mtruck2 from "./msafari3.jpeg";
import mtruck3 from "./msafari2.jpg";
import mtruck4 from "./msafari6.webp";
import mtruck5 from "./msafari7.jpg";
import mtruck6 from "./msafari8.jpeg";
import mtruck7 from "./msafari9.jpg";
import ImageSlider11 from './ImageSlider11';
import { BsArrowUpCircle } from 'react-icons/bs';
import { TfiArrowUp } from "react-icons/tfi"
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";


const MercedesTruck = () => {
  const slides = [
    {url: mtruck4},
    {url: mtruck5},
    {url: mtruck6},
    {url: mtruck7},
  ];
 const containerStyles = {
  width: "1519px",
  height: "700px",
  margin: "0 auto",
  marginTop: "100px",
 }
 const mClick1 = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0,
      behavior: "smooth"
    });
  }, 200);
}
const mClick2 = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 1.47,
      behavior: "smooth"
    });
  }, 200);
}
const mClick3 = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 2.8,
      behavior: "smooth"
    });
  }, 200);
}
const mClick4 = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 4,
      behavior: "smooth"
    });
  }, 200);
}
const mClick5 = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 5.14,
      behavior: "smooth"
    });
  }, 200);
}


  return (
    <div>
<div className="msuv">
  <Fade bottom>
  <h1 className="msuv2">MERCEDES-AMG</h1>
  <h1 className="msuv3">G63 6x6</h1>
  </Fade>
</div>
<Fade bottom>
<h1 className="msuv4">EXPERIENCE THIS MAAZING<br/> MERCEDES G63 6x6</h1>
</Fade>
<Fade bottom>
<div className="f150off5">
    <button className="f150off6" onClick={mClick2}>OVERVIEW</button>
    <button className="f150off6" onClick={mClick3}>PERFORMANCE</button>
    <button className="f150off6" onClick={mClick4}>INTERIOR</button>
    <button className="f150off6" onClick={mClick5}>SPECIFICATION</button>
</div>
</Fade>
<Fade bottom>
<div className='f150off7'>
    <img src={mtruck} className='f150off8' alt="" />
    <div>
    <h1 className='msuv5'>WHAT IS THE MERCEDES G63 6x6 ?</h1>
    <p className='msuv6'>The Mercedes-AMG G 63 6x6 or Mercedes-Benz G 63 AMG 6x6 is a SUT manufactured by <br/>Mercedes-Benz. An SUT derivative of the six wheel drive Mercedes Geländewagen developed<br/> for the Australian Army from 2007 (see Mercedes-Benz G-Class#Military operators), at the<br/> time it was the company's largest and second most expensive street-legal offroad vehicle.<br/> It was manufactured from 2013 to 2015 by Magna Steyr in Graz, Austria. </p> 
    <p className='msuv7'>* From 2007 to 2017, Mercedes Company dealers sold this version of the Mercedes-Amg as the  Mercedes G63 6x6,<br/> replacing the Blackwood.</p>
    </div>
</div>
<div className='f150off14'>
<img src={mtruck2} className='msuv8'  alt="" />
<img src={mtruck3} className='msuv9'  alt="" />
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
        <h1 className='lux-sec19'>497 HP</h1>
        <h2 className='lux-sec20'>HORSEPOWER</h2>
        </div>
        <div>
        <h1 className='lux-sec19'>577 NM</h1>
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
       <p className='f150off20'>It combines the engine from the G63, a twin-turbo V-8,<br/> with 6x6 portal axles, a pick-up version of the G-Class<br/> body, and a luxury interior. It was produced from 2013 to<br/> 2015, with production exceeding 100 vehicles.  An extra<br/> shaft delivers power to the rearmost axle.</p>        
       </div>
       <div>
       <h1 className="f150off21">WHEELS</h1>
       <p className='f150off22'>The G63 AMG 6x6 is 5,875 mm (231.3 in) long,<br/> 2,110 mm (83.1 in) wide, and 2,210 mm (87.0 in)<br/> tall, with 460 mm (18.1 in) of ground clearance<br/> and a fording depth of 1,000 mm (39.4 in). It has<br/> portal axles, similar to those fitted on Unimog <br/>vehicles. </p>
       </div> 
</div>
<div className="f150off24">
    <div>
<h1 className="f150off23">TORQUE</h1>
<p className="f150off26">
The vehicle is installed with 18 in (457 mm) beadlock<br/> wheels and 37 in (940 mm) tires, has a 4,196 mm<br/> (165.2 in) wheelbase (front axle to rearmost axle) and<br/> weighs 4,105 kg (9,050 lb). The G63 AMG 6x6 is fitted<br/> with Mercedes' 7G-tronic seven-speed automatic <br/>transmission.
</p>
    </div>
    <div>
<h1 className="f150off25">HORSEPOWER</h1>
<p className="f150off27">The powertrain underwent several revisions, as the<br/> 3.7 L V10 was replaced by a 3.4 L V6 mated to a  <br/>six-speed transmission. Safety and driver-assistance<br/> features improved and added for the 2017 model year<br/> include Pre-Collision Assist with Pedestrian Detection<br/> and Adaptive Cruise Control with Stop and Go.</p>
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
       <p className='f150off20'>The G63 AMG 6x6 features a compressor which<br/> allows it to reduce or increase tyre pressure in order<br/> to adapt the traction to the driving surface, especially<br/> in desertlike environments. Therefore, the compressor fills<br/> four containers with 20 litres each to allow fast inflation of <br/>the tyres. </p>        
       </div>
       <div>
       <h1 className="f150off31">BAGGAGE</h1>
       <p className='f150off22'>This makes it possible to change from sandy<br/> deserts to regular streets in less than twenty<br/> seconds. The G63 AMG 6x6 was launched in<br/> early 2013. Subsequently, he ordered 10, which<br/> were converted to RHD and brought into South<br/> Africa. </p>
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
            <h1 className="f150off40">TORQUE: 577 NM</h1>
        </div>
        <div className='f150off41'>
            <h1 className="f150off42">PRICE: 177.000$</h1>
            <h1 className="msuv11">0-100 KM/H: 5.7 S</h1>
        </div>
        <div className="f150off44">
            <h1 className="f150off45">YEAR: 2023</h1>
            <h1 className="msuv10">WHEELS: FIRELLI</h1>
        </div>
        <div className="f150off47">
            <h1 className="f150off48">WEIGHT: 4.997 KG</h1>
            <h1 className="f150off49">HEIGHT: 2.097 MM</h1>
        </div>
    </div>
</div>



<h1 className='msuv12'>PLEASE GO UP TO RE-EXPERIENCE THIS <br/> INCREDIBLE MERCEDES-AMG G63 6x6 WORLD</h1>
<Fade bottom>
<div className="p10rank">
<div className='p9rank'>
  <div className="p8rank" onClick={mClick1}><TfiArrowUp/></div>
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

export default MercedesTruck