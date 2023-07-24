import React from 'react';
import "./Lamboanni.css";
import newsimg from "./newsluximg.webp";
import lferru from "./ferruricolambo.webp"
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import ferrulamboimg1 from "./ferrulamboimg1.webp";
import ferrulamboimg2 from "./ferrulamboimg2.webp";
import ferrulamboimg3 from "./ferrulamboimg3.webp";
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

const divStyle = {
  backgroundSize: 'cover',
  height: '100vh'
}
const slideImages = [
  {
      url: ferrulamboimg1,
  },
  {
    url: ferrulamboimg2,
  },

  {
     url: ferrulamboimg3, 
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

const LamborghiniAnniversary = () => {
  return (
    <div>
      <Fade bottom>
<div className='backlamboanni'>NEWS</div>
<h1 className='lamboanninewsjen1'>HAPPY 60TH BIRTHDAY AUTOMOBILI<br/> LAMBORGHINI!</h1>
<img className='lamboanniimg1jen1' src={newsimg} alt=''/>
<h2 className='lamboanninewsjen1date1'>7 MAY 2023</h2>
<p className='lamboannicenterjen1p1'>Sixty years ago, precisely on May 7, 1963, <i>“Automobili Ferruccio Lamborghini SAS”</i>  was registered as a company. It was the first name of <br/> an industrial adventure that, starting from scratch, has revolutionized the automotive industry and created style icons, evolving up<br/>  to becoming today the world-famouscompany <i>“Automobili Lamborghini S.p.A.”</i>  with more than 2000 employees and that delivered a<br/> good 9233 cars in 2022.</p>
<div className='lferruflex'>
<img src={lferru} className='lferrulamboimg' alt="" />
<p className='lferrup1'>Automobili Lamborghini has planned a number of<br/>  internationalevents to celebrate its 60th anniversary.<br/>  Each one is distinguishedby its own specificity,<br/> but they all have in common the desire to involve<br/> the customers and their Lamborghinis, the official<br/>  Lamborghini Clubs, the dealerships and fans<br/> around the world. The international program<br/> of celebrations began in January with the<br/> inauguration of the newly renovated Lamborghini<br/> Museum in Sant'Agata Bolognese and the exhibition<br/><i>“The Future Began In 1963”.</i> </p>
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


<h1 className='ferrulambofollowh1'>Follow our page<br/> so you don't miss out<br/> on the latest Lamborghini news</h1>
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












    </div>
  )
}

export default LamborghiniAnniversary