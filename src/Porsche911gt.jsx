import React from 'react';
import "./Porsche911gt.css";
import Fade from 'react-reveal';
import pgt from "./porschegt7.png";
import pgt2 from "./porschegt8.jpg";
import { useState, useEffect } from 'react';
import pgt3 from "./porschegt1.jpg";
import pgt5 from "./porschegt15.jpg";
import pgt7 from "./porschegt9.jpg";
import pgt8 from "./porschegt10.jpg";
import { TfiArrowUp } from "react-icons/tfi"
import pgt9 from "./porschegt11.jpg";
import pgt10 from "./porschegt4.jpg";
import pgt11 from "./porschegt12.jpg";
import pgt12 from "./porschegt3rs.jpeg";
import pgt13 from "./porschegt13.jpg";
import pgt14 from "./porschegt14.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { PorscheThereFore } from './Porsche';
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import{ BsArrowUpCircle } from "react-icons/bs";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import pgtt from "./paga20.png"





const Porsche911gt = () => {
    const [images1, setImages1] = useState([pgt7, pgt5]);
    const [images2, setImages2] = useState([pgt9, pgt3]);
    const [images3, setImages3] =  useState([pgt8, pgt10]);
    const [selectedside, setSelectedSide] = useState(images1);   
   const mmClick1=()=>{
      setSelectedSide(images1);
   }
   const mmClick2 =()=>{
      setSelectedSide(images2);
   }
   const mmClick3 =()=>{
      setSelectedSide(images3);
   }

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
  const [looaading, setLooaading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLooaading(false);
    }, 1500);
  }, []);






  return (
    <div>
{looaading ?  
    <div className='a777777'> 
     <h1 className='bc777'>PORSCHE 911</h1>   
    <div className='bug17'>
     <img src={pgtt} className='lporsche911' alt="" /> 
     </div> 
   </div>

       : 
        <div>










        <div className="pgt">
            <Fade bottom>
                <div className='pgt4'>
            <span className="pgt2">PORSCHE</span>
            <span className="pgt3">911</span>
                </div>
            </Fade>
        </div>
        <Fade bottom>
<div className="pgt5">
    <Fade bottom>
    <img src={pgt} alt="" className="pgt6" />
    </Fade>
    <div className='pgt11'>
        <Fade bottom>
    <h1 className="pgt7">DISCOVER THE PORSCHE 911</h1>
        </Fade>
        <Fade bottom>
    <p className='pgt8'>The Porsche 911 is a two-door 2+2 high performance rear-engined<br/> sports car introduced in September 1964 by Porsche AG of Stuttgart,<br/> Germany. It has a rear-mounted flat-six engine and originally a <br/>torsion bar suspension. The car has been continuously enhanced<br/> through the years but the basic concept has remained unchanged.<br/> The engines were air-cooled until the introduction of the 996 series<br/> in 1998.</p>
      </Fade>
      <Fade bottom>
    <p className="pgt9">* The 911 has been raced extensively by private and factory teams, in a variety of classes. </p>
    <p className="pgt10">* It is among the most successful competition cars.</p>
    </Fade>
    </div>
</div>
<div className="pgt13">
<img src={pgt2} alt="" className="pgt12" />
</div>
<h1 className="pgt14">let's take a look<br/> this incredible porsche 911</h1>
<div className="pgt15">
    <button className="pgt16" onClick={mmClick1}>FRONT</button>
    <button className="pgt16" onClick={mmClick2}>BACK</button>
    <button className="pgt16" onClick={mmClick3}>SIDE</button>
</div>
<Fade bottom>
    <div className="rrp37">
    {selectedside.map((immmage) => (
        <div className='rrp43'>
        <img src={immmage} className='rrp42' alt="image" />
        </div>
    ))}
</div>
  </Fade>
<h1 className="pgt17">MOTORSPORT</h1>
<div className="pgt18">
    <img src={pgt11} alt="" className="pgt19" />
</div>
<div className="pgt21">
<img src={pgt12} alt="" className="pgt20" />
<p className="pgt22">The 911 has been raced extensively by private and factory<br/> teams, in a variety of classes. It is among the most successful<br/> competition cars. In the mid-1970s, the naturally aspirated 911<br/> Carrera RSR won world championship races including Targa Florio<br/> and the 24 Hours of Daytona. The 911-derived 935 turbo also won<br/> the 24 Hours of Le Mans in 1979. Porsche won the World Championship<br/> for Makes in 1976, 1977, 1978, and 1979 with 911-derived models. In a<br/> 1999 poll to determine the Car of the Century, the 911 was fifth. It is<br/> one of two in the top five that had remained continuously in<br/> production (the original Beetle remained in production until 2003).  <br/>The one millionth example was manufactured in May 2017 and is in <br/>the company's permanent collection
</p>
</div>
<img src={pgt13} alt="" className="pgt23" />
<div className="pgt24">
    <div className='pgt28'>
    <h1 className='pgt27'>DESIGN</h1>
    <p className="pgt25">With power and torque increase, the 2.4-litre cars  also<br/> got a newer, stronger transmission, identified by its<br/> Porsche type number 915. Derived from the transmission<br/>  in the 908 race car, the 915 did away with the 901 <br/> transmission's "dog-leg" style first gear arrangement,<br/> opting for a traditional H pattern with first gear up to the<br/>  left, second gear underneath first, etc. Weight was down<br/> to 960 kg (2,120 lb). </p>
    </div>
   <img src={pgt14} alt="" className="pgt777" /> 
</div>
</Fade>
<Fade bottom>
<div className="App">
      <Slider {...settings}>
    {PorscheThereFore.map(item=>(
        <div className='card2'>
          <img className='item2img' src={item.image}/>
        </div> 
    ))}
    </Slider>

    </div>
       <Fade bottom>
<h1 className="pgt29">Please go up to re-experience<br/> this incredible world of Porsche 911</h1>
 </Fade>
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
}
    </div>
  )
}

export default Porsche911gt