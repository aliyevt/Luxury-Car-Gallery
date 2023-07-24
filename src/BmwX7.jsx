import React from 'react';
import bmw from "./concprembmww.jpg";
import "./BmwX7.css";
import bmwx7img1 from "./bmwx7img1.jpg";
import bmwx7img2 from "./bmwx7img2.jpg";
import bmwx7img3 from "./bmwx7img3.jpg";
import bmwx7img5 from "./bmwx7img5.jpg";
import bmwx7img7 from "./bmwx7img7.jpg";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
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
import Fade from 'react-reveal';
import { BsArrowUpCircle } from 'react-icons/bs';


const BmwX7 = () => {



  const divStyle = {
    backgroundSize: 'cover',
    height: '105vh'
  }
  const slideImages = [
    {
      url: bmwx7img2,
    },
    {
      url: bmwx7img3,
    },
    {
      url:bmwx7img7,
    },
    {
      url: bmwx7img5,
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
<h1 className='lhuracan-h1'>BMW X7 LAUNCHED  - CONCEPT <br/>PREMIERE</h1>
<img src={bmw} className='astmartimg1' alt="" />
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
  <h1 className='bdivohpower2-h1'>620</h1>
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
   <h1 className='bastmartweight2-h1'>2.995 KG</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb8'>
  <h1 className='bdivoprice-h1'>PRICE</h1>
  <h1 className='bastmartprice2-h1'>350.000$</h1>
</div>
<div className='bspeedline'></div>
<p className='lhuracandrift-p2'>Bayerische Motoren Werke AG, abbreviated as BMW , is a German multinational manufacturer of luxury vehicles and motorcycles <br/> headquartered in Munich, Bavaria, Germany. The company was founded in 1916 as a manufacturer of aircraft engines, which<br/> it produced from 1917 to 1918 and again from 1933 to 1945. Automobiles are marketed under the brands BMW, Mini and Rolls-Royce, <br/>and motorcycles are marketed under the brand BMW Motorrad. In 2017, BMW was the world's fourteenth-largest producer of motor<br/> vehicles, with 2,279,503 vehicles produced. The company has significant motor-sport history, especially in touring cars, sports cars,<br/> and the Isle of Man TT. </p>



<p className='lhuracandrift-p2'>BMW is headquartered in Munich and produces motor vehicles in Germany, Brazil, China, India, Mexico, the Netherlands, South Africa,<br/> the United Kingdom, and the United States. The Quandt family is a long-term shareholder of the company, following investments by<br/> the brothers Herbert and Harald Quandt in 1959 that saved BMW from bankruptcy, with the remaining shares owned by the public.</p>




<div className='bmwww-flexxx'>
<img src={bmwx7img1} className='bmwx7img2' alt="" />
<p className='astmartflex-p1'>The BMW X7 is a full-sized luxury sport utility vehicle<br/>  manufacturedby BMW. It is BMW's largest and most<br/>  expensive SUV in its line-up. The X7 was first <br/> announced by BMW in March 2014. It was officially <br/> unveiled on October 17, 2018, with pre-orders being <br/> taken online. The X7 has been available at dealers <br/> since March 2019. BMW provided a preview of the <br/>  upcoming X7 with the showing of the Concept X <br/> 7 iPerformance at the 2017 International Motor Show   <br/> in Frankfurt. Production of the X7 started in 2018 at the  <br/>  BMW US Manufacturing Company plant in Greer,<br/>  South Carolina.
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



      <h1 className='lrevuhypercar-h1'>This incredible BMW X7<br/>  is a hypercar you will really love.<br/>Please go above to rediscover<br/> this incredible world of<br/> BMW X7</h1>

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


     <p className='write-astmart-fixed'>Fuel consumption and emission values of BMW X7*; Fuel consumption combined: 17,9 l/100km (WLTP); CO2-emissions combined: 337 g/km (WLTP)</p>



    </div>
  )
}

export default BmwX7