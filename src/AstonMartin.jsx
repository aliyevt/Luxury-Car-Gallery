import React from 'react'
import astmart from "./amartinnews.jpeg";
import "./AstonMartin.css";
import astmart2 from "./astmart2.jpg";
import astmart3 from "./astmart3.jpg";
import astmart5 from "./astmart5.jpg";
import astmart7 from "./astmart7.webp";
import astmart9 from "./astmart9.webp";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import { TfiArrowUp } from "react-icons/tfi"
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import Fade from 'react-reveal';
import { BsArrowUpCircle } from 'react-icons/bs';





const AstonMartin = () => {



  const divStyle = {
    backgroundSize: 'cover',
    objectFit: "cover",
    height: '110vh'
  }
  const  slideImages= [
    {url: astmart3 },
    {url: astmart5 },
    {url: astmart7 },
    {url: astmart9 },
  ];
  const suvTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 0,
        behavior: "smooth"
      });
},200);
}



  return (
    <div>
      <Fade bottom>
<div className='backlamboanni'>NEWS</div>
<h1 className='lhuracan-h1'>ASTON MARTIN: MANSORY LAUNCHED<br/> PREMIERE</h1>
<img src={astmart} className='astmartimg1' alt="" />
<h1 className='lhuracandate-h1'>27 MAY 2023</h1>

<h1 className='bdivotechspech1'>Technical Specifications</h1>
<div className='bbb'>
<h1 className='bdivospeed-h1'>SPEED</h1>
<h1 className='bdivospeed2-h1'>350 KM/H</h1>
</div>
<div className='bspeedline'></div>

<div className='bbb2'>
  <h1 className='bdivoengine-h1'>ENGINE</h1>
  <h1 className='bdivoengine2-h1'>4.0 W12</h1>
</div>
<div className='bspeedline'></div>

<div className='bbb3'>
  <h1 className='bdivohpower-h1'>HORSEPOWER</h1>
  <h1 className='bdivohpower2-h1'>900</h1>
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
   <h1 className='bastmartweight2-h1'>2.595 KG</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb8'>
  <h1 className='bdivoprice-h1'>PRICE</h1>
  <h1 className='bastmartprice2-h1'>400.000$</h1>
</div>
<div className='bspeedline'></div>


<p className='lhuracandrift-p2'>Aston Martin Lagonda Global Holdings PLC is a British manufacturer of luxury sports cars and grand tourers. Its predecessor was founded in 1913 <br/>by Lionel Martin and Robert Bamford. Steered from 1947 by David Brown, it became associated with  expensive grand touring cars in the 1950s<br/> and 1960s, and with the fictional character James Bond following his use of a DB5  model in the 1964 film Goldfinger. Their sports cars are<br/> regarded as a British cultural icon. Aston Martin has held a Royal Warrant as purveyor of motorcars to Charles III since 1982, and has over<br/>  160 car dealerships in 53 countries, making it a global automobile brand. </p>

<p className='lhuracandrift-p2'>The company is traded on the London Stock Exchange and is a constituent of the FTSE 250 Index. In 2003 it received the Queen's Award for<br/>  Enterprise for outstanding contribution to international trade. The company has survived seven bankruptcies throughout its history.</p>


<div className='astmartflex'>
<img src={astmart2} className='astmartimg2' alt="" />
<p className='astmartflex-p1'>The headquarters and main production of its sports<br/> cars and grand tourers are in a 55-acre (22 ha) facility<br/>  inGaydon, Warwickshire, England, on the former site of<br/> RAF Gaydon, adjacent to the Jaguar Land Rover Gaydon<br/>  Centre.The old 3.6-acre (1.5 ha) facility in Newport Pagnell,<br/> Buckinghamshire is the present home of the Aston Martin <br/>Works classic car department, which focuses on heritage <br/>sales, service, spares and restoration operations. <br/> Aston Martin has been involved in motorsport at <br/>various points in its history, mainly in sports car racing,<br/> and also in Formula One. The Aston Martin brand is <br/>increasingly being used, mostly through licensing, on<br/> other products including a submarine, real estate<br/> development, and aircraft.</p>
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





  <h1 className='lrevuhypercar-h1'>This incredible ASTON MARTIN VANTAGE<br/> Mansory  is a hypercar you will really love.<br/>Please go above to rediscover<br/> this incredible world of<br/> ASTON MARTIN VANTAGE</h1>
  <Fade bottom>
  <div className="p10rank">
<div className='p9rank'onClick={suvTop}>
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



<p className='write-astmart-fixed'>Fuel consumption and emission values of Aston Martin*; Fuel consumption combined: 17,9 l/100km (WLTP); CO2-emissions combined: 337 g/km (WLTP)</p>








    </div>
  )
}

export default AstonMartin