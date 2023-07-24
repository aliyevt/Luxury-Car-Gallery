import React from 'react';
import "./BugattiChironSuper.css";
import { Fade } from 'react-reveal';
import bugggg from "./bug61.webp";
import bugggg2 from "./bug62.webp";
import bugggg3 from "./bug63.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BugattiUltra } from './BugattiSport';
import { Bug777Sport } from './Bugatti2Sport';
import bugg8 from "./bug49.webp";
import bugg9 from "./bug50.webp";
import bugg10 from "./bug51.webp";
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

const BugattiChironSuperSport = () => {




  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
        <div className="bcss">
            <Fade bottom>
<h1 className='bcss2'>BUGATTI CHIRON </h1>
<h1 className="bcss3">SUPER SPORT 300+</h1>
            </Fade>
        </div>
    <div className="bcss6">
<Fade bottom>   
    <h1 className="bcss4">UNRIVALED</h1>
    <h1 className='bcss5'>THE RECORD-BREAKING BUGATTI</h1>
    <p className="bcss7">To mark the sensational record-breaking run that exceeded the magical threshold of 300 miles (482,80 km) per hour for the first time, Bugatti proudly<br/> presents the Chiron Super Sport 300+. Limited to 30 units, this very special editionof the Chiron is visually and technically inspired  by the<br/> record-breaking vehicle.</p>
</Fade>
</div>
<Fade bottom>
  <img src={bugggg} alt="" className="bcss8" />
</Fade>
<div className="bcss9">
      <h1 className="bcss11">UNRIVALED PERFORMANCE</h1>
      <h2 className='bcss12'>EXPERIENCE A MASTERPIECE OF FUNCTION<br/> AND AERODYNAMICS</h2>
  <div className="bcss10">
    <div className='bcss16'>
      <h2 className="bcss15">BEAUTY AND BEAST IN A NEW DIMENSION</h2>
      <p className="bcss13">The Chiron Super Sport 300+ bodywork has been extended and<br/> aerodynamically optimized for extremely high speed performance.<br/> The perfect balance between low drag and downforce improves<br/> performance and stability, even at speeds over 420 km/h. The<br/> iconic W16 8.0-liter engine now delivers an output of 1.176 kW/1.600 HP,<br/> exceeding the Chiron by 100 HP.</p>
    </div>
 <img src={bugggg2} alt="" className="bcss14" /> 
  </div>
<Fade bottom>
<div className="bcss17">
  <img src={bugggg3} alt="" className="bcss18" />
  <div className='bcss21'>
    <h2 className="bcss19">AERODYNAMICS - STREAMLINED FOR SUCCESS</h2>
    <p className="bcss20">Air curtains located at the corners of the front bumper and air outlets<br/> on the front wheel housings release excess pressure, generating slight<br/> downforce and reducing resistance. The new rear design is also sure<br/> to turn heads. The so-called Longtail extends the body 25 centimeters,<br/> allowing the laminar flow to pass over a longer surface, and reducing<br/> the aerodynamic stall by more than 40 percent. The new exhaust<br/> tailpipe configuration and the diffuser in the rear end also generate<br/> negative lift, while further reducing the drag.</p>
  </div>
</div>
</Fade>
</div>
<Fade bottom>
<div className="App">
      <Slider {...settings}>
    {BugattiUltra.map(item=>(
        <div className='card2'>
          <img className='item2img' src={item.image}/>
        </div> 
    ))}
    </Slider>
    </div>
</Fade>


<Fade bottom>
<div className="App">
      <Slider {...settings}>
    {Bug777Sport.map(iteem=>(
        <div className='card2'>
          <div className='bcss22'>
          <img className='iteem2img' src={iteem.image}/>
             <div className='bcss23'>
          <h1>{iteem.title}</h1>
               <div className='bcss24'>
          <p>{iteem.text}</p>
          <p>{iteem.text2}</p>
          <p>{iteem.text3}</p>
          <p>{iteem.text4}</p>
          <p>{iteem.text5}</p>
          <p>{iteem.text6}</p>
          <p>{iteem.text7}</p>
          <p>{iteem.text8}</p></div>
             </div>
           </div>
        </div> 
    ))}
    </Slider>
    </div>
</Fade>
<Fade bottom>
<div className="bcll31" >
<Fade bottom>
    <h1 className="bcll28">Fuel consumption - Chiron SUPER Sport 300+</h1>
</Fade>
<Fade bottom>
    <div className="bcll29">
<img src={bugg8} alt="" className="bcll30" />
<img src={bugg10} alt="" className="bcll32" />
<img src={bugg9} alt="" className="bcll32" />
    </div> 
</Fade>
</div> 
</Fade>
<Fade bottom>
    <h1 className='bcll33'>Please go above to rediscover<br/> this incredible world of<br/> Bugatti Chiron  SUPER SPORT 300+</h1>
</Fade>
<Fade bottom>
<div className="bcll34">
    <div className="bcll35" onClick={suvTop}><BsArrowUpCircle/></div>
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

export default BugattiChironSuperSport