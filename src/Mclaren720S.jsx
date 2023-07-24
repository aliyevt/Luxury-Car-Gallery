import React from 'react';
import "./Mclaren720S.css";
import mclarenimg1 from "./concpremmclaren.jpg";
import mclarenimg2 from "./mclaren.jpeg";
import mclarenimg3 from "./mclarenimg3.jpg";
import mclarenimg4 from "./mclarenimg4.jpg";
import mclarenimg5 from "./mclarenimg5.jpg";
import mclarenimg7 from "./mclarenimg7.jpg";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import { TfiArrowUp } from "react-icons/tfi"
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import Fade from 'react-reveal';
import { BsArrowUpCircle } from 'react-icons/bs';

const Mclaren720S = () => {

    const divStyle = {
        backgroundSize: 'cover',
        height: '105vh'
      }
      const slideImages = [
        {
          url: mclarenimg3,
        },
        {
          url: mclarenimg4,
        },
        {
          url: mclarenimg5,
        },
        {
          url: mclarenimg7,
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
        <h1 className='lhuracan-h1'>MCLAREN 720S LAUNCHED - CONCEPT <br/>PREMIERE</h1>
        <img src={mclarenimg1} className='astmartimg1' alt="" />
        <h1 className='lhuracandate-h1'>27 MAY 2023</h1>

<h1 className='bdivotechspech1'>Technical Specifications</h1>

<div className='bbb'>
<h1 className='bdivospeed-h1'>SPEED</h1>
<h1 className='bdivospeed2-h1'>400 KM/H</h1>
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
   <h1 className='bdivoweight2-h1'>1.995 KG</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb8'>
  <h1 className='bdivoprice-h1'>PRICE</h1>
  <h1 className='brevuprice2-h1'>4.000.000$</h1>
</div>
<div className='bspeedline'></div>


<p className='lhuracandrift-p2'>Bruce McLaren made the team's Grand Prix debut at the 1966 Monaco race (of the current Formula One teams, only Ferrari is older).<br/> His race ended after nine laps due to a terminal oil leak. The 1966 car was the M2B designed by Robin Herd, but the programme was<br/>  hampered by a poor choice of engines: a 3.0-litre version of Ford's Indianapolis 500 engine and a Serenissima V8 were used, the <br/>  latter scoring the team's first point in Britain, but both were underpowered and unreliable. For 1967 Bruce decided to use a British Racing<br/> Motors (BRM) V12 engine, but due to delays with the engine, was forced initially to use a modified Formula Two car called the M4B<br/> powered by a 2.1-litre BRM V8, later building a similar but slightly larger car called the M5A for the V12. Neither car brought great<br/> success, the best result being a fourth at Monaco.</p>

<p className='lhuracandrift-p2'>For the 2010 season, McLaren lost its status as the Mercedes works team; Mercedes decided to buy the Brackley-based Brawn team that<br/> had won the 2009 titles with its customer engines, Whitmarsh having chosen to abandon their exclusive rights to the Mercedes engines<br/> to help Brawn run.</p>





<div className='bmwww-flexxx'>
<img src={mclarenimg2} className='bmwx7img2' alt="" />
<p className='astmartflex-p1'>McLaren Racing Limited is a British motor racing team<br/>  based at the McLaren Technology Centre in Woking,<br/>  Surrey, England. McLaren is best known as a Formula<br/>  One constructor, the second oldest active team  and<br/> the second most successful Formula One team after<br/>  Ferrari, having won 183 races, 12 Drivers' Championships <br/> and 8 Constructors' Championships. McLaren also has<br/>  a history of competing in American open wheel racing, <br/> as both an entrant and a chassis constructor, and has<br/>  won the Canadian-American Challenge Cup (Can-Am) <br/> sports car racing championship. The team is a subsidiary<br/>  of the McLaren Group, which owns a majority of the team. <br/>The expanded deal also includes OKX supporting the<br/> McLaren Shadow esports team.
</p>
</div>



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



      <h1 className='lrevuhypercar-h1'>This incredible MCLAREN 720S<br/>  is a HYPERcar you will really love.<br/>Please go above to rediscover<br/> this incredible world of<br/> MCLAREN 720S</h1>
      <Fade bottom>
      <div className="p10rank">
<div className='p9rank' onClick={suvTop}>
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



    <p className='write-astmart-fixed'>Fuel consumption and emission values of McLaren*; Fuel consumption combined: 17,9 l/100km (WLTP); CO2-emissions combined: 337 g/km (WLTP)</p>


    </div>
  )
}

export default Mclaren720S