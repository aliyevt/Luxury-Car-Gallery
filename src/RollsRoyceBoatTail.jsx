import React from 'react';
import rolls1 from "./rollstail.jpeg";
import rolls2 from "./roycetail.jpeg";
import "./RollsRoyceBoatTail.css";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import rolls3 from "./rollstail1.jpg";
import rolls4 from "./rollstail2.webp";
import rolls5 from "./rolls3.jpg";
import rolls7 from "./rolls7tail.jpg";
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
import Fade from 'react-reveal';
import { BsArrowUpCircle } from 'react-icons/bs';



const RollcRoyceBoatTail = () => {



  const divStyle = {
    backgroundSize: 'cover',
    height: '100vh'
    
  }
  const slideImages = [
    {
      url: rolls3,
    },
    {
      url: rolls5,
    },

    {
      url: rolls4,
    },
    {
      url: rolls7,
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
<h1 className='lhuracan-h1'>ROLLS-ROYCE BOAT TAIL: A ONCE IN A <br/>LIFETIME EXPERIENCE</h1>
<img src={rolls1} className='astmartimg1' alt="" />
<h1 className='lhuracandate-h1'>18 APRIL 2023</h1>

<h1 className='bdivotechspech1'>Technical Specifications</h1>
<div className='bbb'>
<h1 className='bdivospeed-h1'>SPEED</h1>
<h1 className='bdivospeed2-h1'>350 KM/H</h1>
</div>
<div className='bspeedline'></div>

<div className='bbb2'>
  <h1 className='bdivoengine-h1'>ENGINE</h1>
  <h1 className='bdivoengine2-h1'>7.0 W16</h1>
</div>
<div className='bspeedline'></div>

<div className='bbb3'>
  <h1 className='bdivohpower-h1'>HORSEPOWER</h1>
  <h1 className='bdivohpower2-h1'>1200</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb4'>
  <h1 className='bdivotorque-h1'>TORQUE</h1>
  <h1 className='bdivotorque2-h1'>1400NM</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb5'>
  <h1 className='bdivotime-h1'>0-100 KM/H</h1>
  <h1 className='bdivotime2-h1'>3.5 S</h1>
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
  <h1 className='bdivoprice2-h1'>27.000.000$</h1>
</div>
<div className='bspeedline'></div>


<p className='lhuracandrift-p2'>Rolls-Royce Motor Cars Limited is a British luxury automobile maker which has operated as a wholly owned subsidiary of BMW AG<br/> since 2003 - as the exclusive manufacturer of Rolls-Royce-branded motor cars. The company's administrative and production<br/> headquarters are located on the Goodwood Estate in Goodwood, West Sussex, England, United Kingdom.</p>


<p className='lhuracandrift-p2'>From 1906 to 2003, motor cars were manufactured and marketed under the Rolls-Royce brand by Rolls-Royce Motors. The Rolls-Royce<br/> Motor Cars subsidiary of BMW AG has no direct relationship to Rolls-Royce-branded vehicles produced before 2003, other than having<br/>  briefly supplied components and engines. The Bentley Motors Limited subsidiary of Volkswagen AG is the direct successor to Rolls-Royce<br/>  Motors and various other predecessor entities that produced Rolls-Royce and Bentley branded cars between the foundation of each <br/> company and 2003, when the BMW-controlled entity started producing cars under the Rolls-Royce brand. The BBC called Rolls-Royce<br/> "probably one of the most recognised icons in the world", and that "the name Rolls-Royce entered the English language as a superlative. <br/> A marketing survey in 1987 showed that only Coca-Cola was a more widely known brand than Rolls-Royce.</p>





<div className='bmwww-flexxx'>
<img src={rolls2} className='rollsimg2' alt="" />
<p className='astmartflex-p1'>A stipulation in the ownership documents of Rolls-Royce<br/> dictated that Rolls-Royce Holdings plc, the aero-engine<br/> maker, would retain certain essential trademarks, including <br/>the Rolls-Royce brand name and logo if the automotive<br/> division was sold. Although Vickers plc sold the vehicle designs,<br/> nameplates, administrative headquarters, production facilities,<br/> Spirit of Ecstasy and Rolls-Royce grille shape trademarks to <br/>Volkswagen AG, Rolls-Royce plc chose to license the Rolls-Royce<br/> name and logo to BMW AG for £40 million ($66 million), because <br/>Rolls-Royce plc had recently had joint business ventures with<br/> BMW. BMW's contract to supply engines and components to<br/> Rolls-Royce Motors allowed BMW to cancel the contract with<br/> 12 months' notice. Volkswagen would be unable to re-engineer<br/> the Rolls-Royce and Bentley vehicles to use other engines <br/>within that time frame. With the Rolls-Royce brand identification<br/> marks split between the two companies and Volkswagen's <br/>engine supply in jeopardy, the two companies entered into negotiations.
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




      <h1 className='lrevuhypercar-h1'>This incredible ROLLS ROYCE BOATTAIL<br/>  is a LUXURY car you will really love.<br/>Please go above to rediscover<br/> this incredible world of<br/> ROLLS-ROYCE BOAT TAIL</h1>
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




      <p className='write-astmart-fixed'>Fuel consumption and emission values of ROLLS ROYCE BOATTAIL*; Fuel consumption combined: 19,9 l/100km (WLTP); CO2-emissions combined: 337 g/km (WLTP)</p>






    </div>
  )
}

export default RollcRoyceBoatTail