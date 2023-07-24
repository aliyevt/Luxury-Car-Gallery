import React, { useState } from 'react';
import "./RollsRoycePhantom.css";
import Fade from 'react-reveal';
import rrp2 from "./rrp2.jpeg";
import rrp3 from "./rrp3.jpg";
import rrp4 from "./rrp4.webp";
import rrp5 from "./rrp5.jpeg";
import rrp6 from "./rrp6.jpg";
import rrp7  from "./rrp7.jpeg";
import rrp8 from "./rrp8.jpg";
import rrp9 from "./rrp9.jpg";
import rrp10 from "./rollsinteriorgallery.jpg";
import rrp12 from "./rrp12.webp";
import rrp13 from "./rrp13.jpeg";
import rrp14 from "./rrp14.jpeg";
import rrp15 from "./rrp15.jpg";
import rrp16 from "./rrp16.jpg";
import { TfiArrowUp } from "react-icons/tfi"
import rrp17 from "./rrp17.jpg";
import rrp18 from "./rollsphantom.jpg";
import rrp19 from "./phantom.jpeg";
import rpp20 from "./phantombritish.jpg";
import rrp21 from "./rrp18.jpeg";
import ImageSlider13 from './ImageSlider13';
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

const RollsRoycePhantom = () => {

const [images1, setImages1] = useState([rrp12, rrp13]);
const [images2, setImages2] = useState([rrp14, rrp15]);
const [images3, setImages3]  =  useState([rrp16, rrp17])
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
  const slides = [
    {url: rrp18},
    {url: rrp19},
    {url: rpp20},
    {url: rrp21},
    {url: rrp10},
    {url: rrp17},
  ];
  const containerStyles = {
    width: "1519px",
    height: "700px",
    margin: "0 auto",
    marginTop: "-7px",
   }
   const rTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 0,
        behavior: "smooth"
      });
    }, 200);
  }




  return (
    <div>
        <div className="rrp">
            <Fade bottom>
            <h1 className="rrp1">ROLLS-ROYCE </h1>
            <h1 className="rrp2">PHANTOM</h1>
            </Fade>
        </div>
        <Fade bottom>
        <h1 className="rrp3">FIRST GENERATION - PHANTOM VI</h1>
        <div className="rrp4">
            <img src={rrp2} alt="" className="rrp5" />
            <p className="rrp6">The Rolls-Royce Phantom VI is a British limousine made<br/> from 1968 to 1990 by Rolls-Royce. A total of 374 Phantom<br/> VIs were made, of which fewer than 40 were manufactured<br/> in the last decade of production. The exterior is almost<br/> identical to the facelifted Phantom V. Most of the coachwork <br/>was created by Mulliner Park Ward, usually in limousine form,<br/> although a few landaulets were made. The Phantom VI was<br/> the last Rolls-Royce with a separate chassis. It featured coil<br/> springs in front, leaf springs and live axle in rear, and drum<br/> brakes on all four wheels. The car was powered by a 6,230 cc<br/> (380 cu in) 90-degree V8 with a bore of 104 mm (4.1 in) and<br/> stroke of 91.5 mm (3.60 in) with twin SU carburettors, coupled<br/> to a 4-speed automatic gearbox.  In a 1979 upgrade the engine<br/> capacity was increased to 6,750 cc (412 cu in), a 3-speed <br/>automatic gearbox with torque converter was substituted, and<br/> separate front and rear air conditioning units were provided. </p>
        </div>
        <div className="rrp7">
            <p className="rrp8">In 1990, the last Rolls-Royce Phantom VI chassis were built. However,<br/>  as the completion of the coachwork by Mulliner Park Ward took <br/>around 18 months, the last cars were made in the period of the next<br/> two years. Design of a Phantom VII based on the Silver Shadow's body<br/> was discussed in the 1970s, but plans were scrapped. No prototypes<br/> were built. A production Rolls-Royce Phantom VII was rolled out in 2003.<br/> Before her death in 2022, Queen Elizabeth II had two Rolls-Royce Phantom<br/> VI automobiles - the 1977 Silver Jubilee Car and a more conventional 1987 <br/> model. When in use by Queen Elizabeth II, the standard Spirit of Ecstasy<br/> hood ornament was replaced by a model of Saint George slaying the<br/> dragon. Three other Phantom models were built between 1995 and 1997,<br/> also by order of the Sultan of Brunei. This car was named Rolls-Royce <br/>Cloudesque and sometimes referred to as <i>Rolls-Royce Phantom VII</i>.</p>
            <img src={rrp3} alt="" className="rrp9" />
        </div>
     <div className="rrp13">
        <Fade bottom>
        <h1 className="rrp10">INTERIOR</h1>
        </Fade>
        <Fade bottom>
        <div className='rrp12'>
        <img src={rrp4} alt="" className="rrp11" />  
        </div>
        </Fade>
</div>
<h1 className="rrp14">SECOND GENERATION - PHANTOM VII</h1>
<div className="rrp15">
    <img src={rrp5} alt="" className="rrp16" />
    <p className="rrp17">The Rolls-Royce Phantom is a full-sized luxury saloon car <br/>made by Rolls-Royce Motor Cars. Launched in 2003, it was<br/> the first Rolls-Royce developed and introduced after BMW<br/> purchased the right to use the Rolls-Royce name and logo<br/> in 1998. It was the seventh Rolls-Royce design to use the<br/> Phantom nameplate. It is credited with successfully reviving<br/> the Rolls-Royce brand and restoring Rolls-Royce's reputation<br/> as a maker of luxury cars. The Phantom Drophead Coupé and <br/>Phantom Coupé are two-door derivatives of the Phantom <br/>launched in 2007 and 2008, respectively. From 2003 until the<br/> launch of the smaller Ghost in 2009, the Phantom was the only<br/> car produced by Rolls-Royce. </p>
</div>
<div className="rrp18">
    <p className="rrp19">The Phantom uses a unique chassis platform, body, interior,<br/>  andretains traditional Rolls-Royce design cues. The body is<br/>  mostly aluminium. Final assembly, including all body, paint, <br/>wood, and leather work, is completed to each customer's<br/> individual specification at the Rolls-Royce plant in Goodwood,<br/> West Sussex. The plant is close to the historic Goodwood <br/> Motor Racing Circuit. The plant contains a paint shop,  body<br/> shop, leather shop, woodworking shop, assembly line, and <br/> executive office sunder one roof.   The coach lines, which are<br/> exactly 3 mm (0.1 in) wide, are done, as well as all other work,<br/> by hand, in keeping with the Rolls-Royce tradition. The Phantom<br/> is 1.63 m (64.2 in) tall, 1.99 m (78.3 in) wide, 5.83 m(229.5 in) long,<br/>  weighs 2,485 kg (5,478 lb)and can accelerate to 100 km/h (62 mph)<br/>  in 5.9 seconds.   </p>
    <img src={rrp6} alt="" className="rrp20" />
</div>
<div className="rrp21">
    <h1 className="rrp22">INTERIOR</h1>
    <div className="rrp24">
    <img src={rrp7} alt="" className="rrp23" /> 
    </div>
</div>
<h1 className="rrp25">THIRD GENERATION - PHANTOM VIII</h1>
<div className="rrp26">
    <img src={rrp8} alt="" className="rrp27" />
    <p className="rrp28">The Rolls-Royce Phantom is a full-sized luxury saloon <br/>manufactured by Rolls-Royce Motor Cars. It is the eighth<br/> and current generation of the Rolls-Royce Phantom, <br/>debuting in 2017, and the second launched by Rolls-Royce<br/> under BMW ownership. It is offered in two wheelbase lengths.<br/> This is the current flagship model made by Rolls-Royce Motor<br/> Cars. The Phantom was unveiled by livestream on 27 July 2017. <br/>It made its public debut at a special exhibition Rolls-Royce<br/> held in London two days later on 29 July. The event, dubbed <br/>"The Great Eight Phantoms", took place at Bonhams auction<br/> house in Mayfair. . The short one is the shortest Phantom since<br/> at least 1939.
     </p>
</div>
<div className="rrp29">
    <p className="rrp30">The exhibition gathered a noteworthy Phantom from each generation,<br/> from Fred Astaire's Phantom I to subsequent models driven by royalty,<br/> or made famous by celebrities, including John Lennon's Romany gypsy<br/> wagon-style painted Phantom V. It made its public debut at a special<br/> exhibition Rolls-Royce held in London two days later on 29 July. The<br/> Phantom VIII's styling has been described as an evolution of the<br/> Phantom VII's as it bears most of the design features of its predecessor.<br/> It also uses rear-opening "coach doors". For the first time on a Phantom,<br/>  Rolls-Royce's trademark "Parthenon" radiator grille is integrated into the <br/>surrounding bodywork. The Phantom is available in two wheelbase<br/> lengths. The short one is the shortest Phantom since at least 1939.</p>
    <img src={rrp9} alt="" className="rrp31" />
</div>
<div className="rrp32">
    <h1 className="rrp33">INTERIOR</h1>
    <div className="rrp35">
    <img src={rrp10} alt="" className="rrp34" />
    </div>
</div>
<h1 className="rrp36">Let's take a look<br/> at the Rolls Royce Phantom</h1>
   <div className="rrp41">
        <button className="rrp38"  onClick={handleButton1Click} >FRONT</button>
        <button className="rrp39"  onClick={handleButton2Click} >BACK</button>
        <button className="rrp40"  onClick={handleButton3Click}>SIDE</button>
    </div>
<div className="rrp37">
    <div className="rrp44"></div>
    {selectedImages.map((image) => (
        <div className='rrp43'>
      <img src={image} className='rrp42' alt="image" />
       </div>
    ))}
</div>
<div style={containerStyles}>
  <ImageSlider13 slides={slides}/>
</div>


<h1 className="rrp48">PLEASE GO ABOVE TO RE-EXPERIENCE<br/> THIS INCREDIBLE WORLD <br/>OF ROLLS-ROYCE PHANTOM</h1>
<Fade bottom>
<div className="p10rank">
<div className='p9rank' onClick={rTop}>
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

export default RollsRoycePhantom