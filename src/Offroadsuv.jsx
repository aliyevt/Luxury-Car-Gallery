import React from 'react';
import "./Offroadsuv.css";
import {  BsArrowDownCircle } from "react-icons/bs";
import offimg1 from "./offimg1.jpg";
import offimg2 from "./offimg2.jpg";
import { Link } from 'react-router-dom';
import offimg4 from "./offimg4.jpg";
import offimgram from "./offimgram.jpg";
import { useState } from 'react';
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import { TfiArrowDown, TfiArrowUp } from "react-icons/tfi"
import{ BsArrowUpCircle } from "react-icons/bs";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Fade from 'react-reveal';
import off1 from "./off1.jpg";
import off2 from "./off2.jpg";
import off3 from "./off3.jpg";
import off4 from "./off4.jpg";
import off5 from "./off5.jpg";


const Offroadsuv = () => {





const divStyle = {
  backgroundSize: 'cover',
  height: '100vh',
  marginLeft:"-1px",
  marginTop: "77px",
}
const slideImages = [
  {
    url: off1,
  },
  {
    url: off2,
  },
  {
    url: off3,
  },
  {
    url: off4,
  },
  {
    url: off5,
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

const scrollUp = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 1,
      behavior: "smooth"
    });
  }, 200);
}




  return (
    <div>
    
      <div className='off-section1'>

<h1 className='off-section2'>OFF-ROAD SUV</h1>
<h1 className='offroad1h1'>MORE LEARN</h1>
<div className="offroad3icon777">
     <div className="offroad2icon777" onClick={scrollUp}>
<div className='off-section3'><TfiArrowDown/></div>
     </div>
</div>


      </div>
<Fade bottom>
  <h1 className='off-section5'>Let's explore off-road cars together</h1>
  </Fade>
  <Fade bottom>
<div className='off-section6'>
  <div>
<div className='off-seczoom4'>
  <img className='off-section7' src={offimg1} alt=''/>
</div>
  <h1 className='ospecroad'>FORD F-150</h1>
  
  <Link to="/fordf150offroad"><button className='off-section11'>READ MORE</button></Link>
  </div>
  <div>
<div className='off-seczoom3'>
  <img className='off-section8' src={offimg2} alt=''/>
</div>
  <h1 className='ospecroad2'>CHEVROLET SILVERADO</h1>
 
  <Link to="/chevroletsilverado"> <button className='off-section12'>READ MORE</button></Link>
  </div>
</div>



</Fade>







<Fade bottom>
<div className='off-section6'>
  <div>
<div className='off-seczoom2'>
  <img className='off-section7' src={offimgram} alt=''/>
</div>
  <h1 className='ospecroad'>DODGE RAM </h1>
 <Link to={"/dodgeram"}><button className='off-section11' >READ MORE</button></Link>
  </div>
  <div>
<div className='off-seczoom1'>
  <img className='off-section8' src={offimg4} alt=''/>
</div>
  <h1 className='ospecroad2'>MERCEDES G63 AMG 6x6</h1>
<Link to="/mercedestruck"><button className='off-section12' >READ MORE</button></Link>
  </div>
</div>

 
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
<h1 className='off-section20'>If you like off road and big cars,<br/> these trucks are for you.<br/> Please go above to re-experience<br/> the world of these incredible trucks</h1>
</Fade>
<Fade bottom>
<div className="p10rank">
<div className='p9rank' onClick={suvTop}>
  <div className="p8rank" ><TfiArrowUp/></div>
</div>
    </div>
</Fade>









  <div className='ferrusection-18'>
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

export default Offroadsuv