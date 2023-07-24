import React from 'react';
import "./Cadillaclimo.css";
import {  BsArrowDownCircle } from "react-icons/bs";
import {  BsArrowUpCircle } from "react-icons/bs";
import Fade from 'react-reveal';
import { BsSpeedometer2 } from "react-icons/bs";
import { GiClockwork } from "react-icons/gi";
import { Slide } from 'react-slideshow-image';
import { RiInstagramLine } from "react-icons/ri";
import { TbEngine } from "react-icons/tb";
import { TfiArrowUp, TfiArrowDown } from "react-icons/tfi"
import cadl1 from "./cadl1.webp";
import cadl2 from "./cadl2.jpg";
import cadl3 from "./cadl3.webp";
import cadl4 from "./cadl4.jpg";
import cadl5 from "./cadl5.jpg";
import cadl6 from "./cadl6.webp";
import cadl7 from "./cadl8.jpg";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";








const Cadillaclimo = () => {

  const divStyle = {
    backgroundSize: 'cover',
    objectFit: "cover",
    height: '100vh'
  }
  const  slideImages= [
    {url: cadl5 },
    {url: cadl6 },
    {url: cadl7 },
  ];
  const cDown= () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 0,
        behavior: "smooth"
      });
    }, 200);
  }

  const cDown2= () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 1.640,
        behavior: "smooth"
      });
    }, 200);
  }


  return (
    <div>
      <div className="cadl">
        <Fade bottom>
        <h1 className="cadl2">Experience these American limousines</h1>    
        <h1 className="cadl3">MORE THAN A LIMOUSINE</h1>
        </Fade>
        <Fade bottom>
  <div className="cadl3icon777">    
     <div className="cadl2icon777" onClick={cDown2}>
        <div className="cadl4"><TfiArrowDown/></div>
          </div>
              </div>  
</Fade>

      </div>
<Fade bottom>
  <div className="cadl5">
    <div>
    <div className="cadl6"><BsSpeedometer2/></div>
    <h1 className="cadl9">300 KM/H</h1>
    </div>
    <div>
    <div className="cadl7"><GiClockwork/></div>
    <h1 className="cadl10">0-100 / 4.5 S</h1>
    </div>
    <div>
    <div className="cadl8"><TbEngine/></div>
    <h1 className="cadl11">8.0L, W-16 DIESEL</h1>
    </div>
  </div>
</Fade>
<Fade bottom>
  <hr className='cadl13'/>
</Fade>
<Fade bottom>
  <h1 className="cadl12">Presidential state car - CADILLAC THE ONE<br/>2009-2018</h1>
</Fade>
<Fade bottom>
  <div className="cadl14">
    <div>
    <p className="cadl15">The 2009-2018 presidential state car went into serviceon January 20, <br/>  2009,and drove President Obama the two miles (3.2 km) down<br/> Pennsylvania Avenue from his inauguration to the inaugural parade. <br/>A Cadillac, the presidential state car was not based on any single<br/> model of car, though it had the "dual-textured grille and the dinner<br/> plate-sized Cadillac coat-of-arms badge" emblematic of the Cadillac<br/>  Due to the weight of the car, it could only reach about 60 mph (97 km/h),<br/> and only achieved 3.7 to 8 miles per US gallon (64 to 29 L/100 km; 4.4 to 9.6<br/> mpg-imp). The limousine was reported to cost between $300,000 and <br/>$1,500,000 (equivalent to about $400,000-1,900,000 in 2022). The car had more <br/>five-inch (130 mm) bulletproof glass than the previous model.</p>
    <a href="https://en.wikipedia.org/wiki/Presidential_state_car_(United_States)#2009%E2%80%932018_custom_Cadillac" className="cadl15-1">CADILLAC THE ONE</a>
    </div>
    <img src={cadl1} alt="" className="cadl16" />
  </div>
</Fade>


<Fade bottom>
  <h1 className="cadl17">PRESIDENTIAL STATE CAR - CADILLAC THE BEAST <br/> CURRENT MODEL</h1>
</Fade>
<Fade bottom>
  <div className="cadl18">
    <img src={cadl2} alt="" className="cadl19" />
    <div>
    <p className="cadl20">When first commissioned by the Secret Service in 2014, GeneralMotors (GM)<br/>  was awarded three contracts for the new limousine. Each state car was<br/> expected to cost US$1-1.5 million, and by January 2016, GM had been paid<br/> $15,800,765 (equivalent to $19,266,768 in 2022) for its work on the new model.<br/> Still nicknamed "the Beast" (as established with the 2001-2009 model), the<br/> current model debuted with a trip by President Trump to New York City on<br/> September 24, 2018. " Road & Track described the state car as "massive and <br/>tall", and weighing 15,000-20,000 pounds (6,800-9,100 kg). In addition to <br/>defensive measures designed to protect the president, this state car also <br/>has stores of blood in the president's type for medical emergencies. The car is <br/>hermetically sealed against chemical attacks, and features run-flat tires.</p>
    <a href="https://en.wikipedia.org/wiki/Presidential_state_car_(United_States)#Current_model" className='cadl20-1'>CADILLAC THE BEAST</a>
    </div>
  </div>
</Fade>


<Fade bottom>
  <h1 className="cadl21">LINCOLN TOWN CAR - SPECIAL MODEL</h1>
</Fade>

<Fade bottom>
  <div className="cadl22">
      <p className="cadl23">The Lincoln Town Car is a model line of full-size luxury sedans that was<br/> marketed by the Lincoln division of the American automaker Ford Motor<br/> Company. Deriving its name from a limousine body style, Lincoln<br/> marketed the Town Car from 1981 to 2011, with the nameplate previously <br/>serving as the flagship trim of the Lincoln Continental. Produced across<br/> three generations for 30 model years, the Town Car was marketed directly<br/>  against luxury sedans from Cadillac and Chrysler. Marketed nearly exclusively<br/> as a four-door sedan (a two-door sedan was offered for 1981 only), many<br/> examples of the Town Car were used for fleet and livery (limousine) service.<br/>That factory was closed in September 2011; the final Lincoln Town Car came<br/> off the assembly line on August 29, 2011. Within the Lincoln model line, the<br/>  Town Car was not directly replaced; the nameplate was used from 2012 to<br/> 2019 to denote livery/limousine/hearse variants of the Lincoln MKT.</p>
    <img src={cadl3} alt="" className="cadl25" />
  </div>
</Fade>
<Fade bottom>
  <div className="cadl26">
    <img src={cadl4} alt="" className="cadl27" />
    <div>
      <p className="cadl28">The third generation of the Lincoln Town Car was unveiled at the 1997<br/>  New York International Auto Show, going on sale in November 1997.<br/> For the 1998 model year, all three Panther-platform sedans underwent<br/> complete exterior and interior redesigns, with the Town Car given the<br/> most extensive revision. Shifting away from the straight-lined design<br/> language used by full-size Lincoln sedans for over 35 years, the 1998<br/> Town Car adopted the rounded exterior of the Lincoln Mark VIII and<br/>  1995 Lincoln Continental. The third-generation Town Car was <br/>introduced nearly concurrently with the Lincoln Navigator, the first<br/> SUV sold by the Lincoln division. The third generation of the Town <br/>Car marked several major changes within Lincoln-Mercury. </p>
      <a href="https://en.wikipedia.org/wiki/Lincoln_Town_Car" className="cadl24">LINCOLN TOWN CAR</a>
    </div>
  </div>
</Fade>


<Fade bottom>
  <h1 className="cadl29">Let's take a look <br/>at THE ENGLAND limousines</h1>
</Fade>

<Fade bottom>
  
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
</Fade>
<Fade bottom>
  <h1 className="cadl30">please go up to<br/> re-experience the world <br/> of these incredible limousines</h1>
</Fade>


<Fade bottom>
<div className="p10rank">
<div className='p9rank' onClick={cDown}>
  <div className="p8rank"><TfiArrowUp/></div>
</div>
      </div>
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

export default Cadillaclimo