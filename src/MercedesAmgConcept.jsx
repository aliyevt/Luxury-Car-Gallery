import React from 'react';
import "./MercedesAmgConc.css";
import mercimg1 from "./concpremmerc.jpg";
import mercimg2 from "./mercamg1conc.jpg";
import mamg1 from "./mamg1.jpg";
import mamg2 from "./mamg2.webp";
import mamg3 from "./mamg3.webp";
import mamg4 from "./mamg4.webp"; 
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
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

const MercedesAmgConcept = () => {

    const divStyle = {
        backgroundSize: 'cover',
        height: '100vh'
      }
      const slideImages = [
        {
          url: mamg1,
        },
        {
          url: mamg2,
        },
        {
          url: mamg3,
        },
        {
          url: mamg4,
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
        <h1 className='lhuracan-h1'>MERCEDES AMG GTR - CONCEPT <br/>PREMIERE</h1>
        <img src={mercimg1} className='astmartimg1' alt="" />


        <h1 className='lhuracandate-h1'>21 MAY 2023</h1>

<h1 className='bdivotechspech1'>Technical Specifications</h1>
<div className='bbb'>
<h1 className='bdivospeed-h1'>SPEED</h1>
<h1 className='bdivospeed2-h1'>340 KM/H</h1>
</div>
<div className='bspeedline'></div>

<div className='bbb2'>
  <h1 className='bdivoengine-h1'>ENGINE</h1>
  <h1 className='bdivoengine2-h1'>4.0 W12</h1>
</div>
<div className='bspeedline'></div>

<div className='bbb3'>
  <h1 className='bdivohpower-h1'>HORSEPOWER</h1>
  <h1 className='bdivohpower2-h1'>800</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb4'>
  <h1 className='bdivotorque-h1'>TORQUE</h1>
  <h1 className='bdivotorque2-h1'>1000NM</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb5'>
  <h1 className='bdivotime-h1'>0-100 KM/H</h1>
  <h1 className='bdivotime2-h1'>2.7 S</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb6'>
  <h1 className='bdivotrans-h1'>TRANSMISSION</h1>
  <h1 className='bastmarttrans2-h1'>5 SPEED DSG</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb7'>
  <h1 className='bdivoweight-h1'>WEIGHT</h1>
   <h1 className='bastmartweight2-h1'>2.795 KG</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb8'>
  <h1 className='bdivoprice-h1'>PRICE</h1>
  <h1 className='bastmartprice2-h1'>200.000$</h1>
</div>
<div className='bspeedline'></div>



<p className='lhuracandrift-p2'>Mercedes-AMG GmbH, commonly known as AMG (Aufrecht, Melcher, Großaspach), is the high-performance subsidiary of Mercedes-Benz<br/>  AG. AMG independently hires engineers and contracts with manufacturers to customize Mercedes-Benz AMG vehicles. The company has its <br/>headquarters in Affalterbach, Baden-Württemberg, Germany. AMG was originally an independent engineering firm specializing in <br/>performance improvements for Mercedes-Benz vehicles. DaimlerChrysler AG took a controlling interest in 1999, then became the sole<br/> owner of AMG in 2005. Mercedes-AMG GmbH is now a wholly owned subsidiary of Mercedes-Benz AG, which is in turn owned by<br/> the Mercedes-Benz Group. </p>


<p className='lhuracandrift-p2'>All AMG engines - with the exception of the "35" M260 2.0 L Inline-4 Turbo and "43" M276 3.0 L V6 Bi-Turbo engine, as well as various other "43" <br/>and "53" models using the new M256 inline 6 engine - are hand built using a "one man, one engine" philosophy at the current AMG plant<br/> in Affalterbach, Germany. </p>






<div className='astmartflex'>
<img src={mercimg2} className='mercamgimg2' alt="" />
<p className='astmartflex-p1'>AMG developed its own V8 engine (dubbed M156 in <br/>development) for the DTM series. The M156 produces 451<br/> horsepower and 443 ft-lbs of torque. The M156, in various<br/> states of tune, was used in models such as the SL 63, G 63,<br/> SLK 63, and S 63 until it was replaced by the M157 5.5 L Biturbo<br/> V8. In 2009, AMG developed the M159 engine, which is based on <br/>the M156 engine, to use in SLS AMG. The M159 produces 583 horsepower and 489 lb-ft of torque in the Mercedes-Benz SLS <br/>AMG GT, and 622 horsepower and 468 lb-ft in the SLS AMG <br/> Black Series. The V8 S 55 AMG had an output comparable <br/> The V8 S 55 AMG had an output comparable to the<br/> V12-powered S600 throughout its production. The S 55 AMG<br/> (2001-02) was outfitted with a 5.4 L 354 hp (264 kW) V8<br/> engine while the later versions (2003-06) sported the same <br/>motor, but supercharged to a rated 493 hp (368 kW). The<br/> S600 (2001-02) was outfitted with a 5.8L 362 hp (270 kW)<br/> V12 engine while the later versions (2003-06) sported a<br/> twin-turbocharged (or Bi-Turbo) 493 hp (368 kW) 5.5L <br/>V12.  </p>
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

      <h1 className='lrevuhypercar-h1'>This incredible MERCEDES BENZ AMG<br/>  is a HYPERcar you will really love.<br/>Please go above to rediscover<br/> this incredible world of<br/>MERCEDES-AMG <br/>CONCEPT </h1>
      <Fade bottom>
      <div className="p10rank">
<div className='p9rank' onClick={suvTop}>
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



<p className='write-mercamg-fixed'>Fuel consumption and emission values of Mercedes Benz Amg*; Fuel consumption combined: 15,9 l/100km (WLTP); CO2-emissions combined: 337 g/km (WLTP)</p>




    </div>









  )
}

export default MercedesAmgConcept