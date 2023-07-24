import React from 'react';
import './Sedan.css';
import rollsbr from './phantombritish.jpg';
import bentleybr from './bentleybritish.jpg';
import maybegr from './maybachgerman.jpg';
import { BsSpeedometer2 } from "react-icons/bs";
import { GiClockwork } from "react-icons/gi";
import { TbEngine } from "react-icons/tb";
import { TfiArrowUp } from "react-icons/tfi"
import maybe from './maybach.jpg';
import { BsArrowDownCircleFill } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import{ BsArrowUpCircle } from "react-icons/bs";
import { useState } from 'react';
import Image3Slider from './Image3Slider';
import rollsgal from './rollsgallery.jpeg';
import bmwgal from './bmwgallery.jpg';
import mercgal from './mercm22.webp';
import bentgal from './bmw1.jpg';
import rollsint from './rollsinteriorgallery.jpg';
import {Routes, Route, Link, NavLink,} from 'react-router-dom';
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
import { TfiArrowDown } from "react-icons/tfi";
import { TypeSedan } from './SedanType';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import s777edan from "./rrp8.jpg";


const Sedan = () => {

  const scrollUp = () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 1.4,
        behavior: "smooth"
      });
    }, 200);
  }
  const scrollUp2 = () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 4.750,
        behavior: "smooth"
      });
    }, 200);
  }
const slides = [
  {url:rollsgal},

  {url: mercgal},
  
  {url:bmwgal},
  {url: s777edan},
  {url:bentgal},

  {url:rollsint}, 
];
const containerStyles = {
width: "1519px",
height: "710px",
margin: "50px auto",
marginTop: "100px",
}

const sedanTop = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0,
      behavior: "smooth"
    });
  }, 200);
}

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
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
var sett2ings = {
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





  return (
    <div>
     
      <div className='sedan-header'>
    <Fade bottom>
        <h1 className='sedan-phantom'>DISCOVER THE SEDAN WORLD</h1>
        <h1 className='sedan-h1'>MORE LEARN</h1>
    </Fade>
    <Fade bottom>
       <div className="sedan3icon777">
    <div className="sedan2icon777" onClick={scrollUp}>
        <div className='sedan-down-icon'><TfiArrowDown/></div>
    </div>
           </div>
      </Fade>

      </div>







       <Fade bottom>
    <h1 className='sedan-header-0'>Are you looking <br/> for a luxury sedan?</h1> 
    <h1 className='sedan-header-2'>What are luxury sedans?</h1>  
    <h1 className='sedan-header-3'>which sedans are luxury sedans?</h1>  
<div className='lux-about'>
    <p className='sedan-p1'>A luxury car is a car that provides above-average to high-end levels of comfort, features, and equipment. Often more expensive materials and surface finishes are used, and buyers expect better build quality. The usually higher pricing and more upscale appearance is often associated with higher social status of the users, compared to low and mid-market segment cars.
    The term is relative and partially subjective, reflecting both objective qualities of a car, as well as the projected and perceived image of the car marque. Luxury brands rank above premium brands, though there is no clear demarcation between the two. Traditionally, luxury cars have used a front-engine, rear-wheel drive (FR) layout. The FR layout is more expensive to produce and produces lower fuel economy than a front-wheel drive layout, however, it allows for larger engines (particularly straight-six, V8, and V12) to be used. ROLLS ROYCE PHANTOM, ROLLS ROYCE GHOST, BENTLEY FLYING SPUR, BENTLEY MULSANNE, CADILLAC FLEETWOOD, MERCEDES S SERIES and BMW 7 SERIES are examples of these sedans we can show. Let's take a look at luxury sedans together.</p>
    <img className='maybach' src={maybe}alt=''/>
</div>
<hr className='hr-1'/>
<h1 className='sedan-section-1'>The luxury sedans<br/> that are popular today<br/> are German and British sedans</h1>
<h1 className='sedan-section-2'>Let's take a look at some of them</h1>
<div className="Ap777p">
      <Slider {...settings}>
    {TypeSedan.map(iitem=>(
        <div className='card'>
          <img className='itemimg' src={iitem.image}/>
          <div className='hypcard777'>{iitem.title}</div>
        </div> 
    ))}
    </Slider>
    </div>









<div className='limo-back'>
<div className="limo3icon777">
  <div className="limo2icon777"onClick={scrollUp2}>
<div className='icon-limo'><TfiArrowDown/></div>
   </div>
</div>  



<h1 className='limo-h1'>OF COURSE, THERE ARE ALSO<br/> LIMOUSINE VERSIONS OF THESE<br/> LUXURY SEDANS</h1>
<h1 className='limo-h1-1'>Let's take a review at it together</h1>        
<p className='limo-p1'>A limousine  for short, is a large, chauffeur-driven luxury vehicle with a <br/>partition between the driver compartment and the passenger <br/>compartment which can be operated mechanically by hand or by a button electronically.<br/> A luxury sedan with a very long wheelbase and driven by a professional driver is called a stretch limousine.</p>
</div>
<div className='theone'>
<div className='theone-flex'>
  <div>
<p className='p-theone'>This Cadillac the One was only 1 producedand is only given <br/> to the President of the United States of America for as long as they<br/>  arein office. Decommissioned presidential state cars are ,<br/>dismantled and destroyed with the assistance of the Secret<br/> Service to prevent their secrets from being known to outside parties.<br/>Late 20th-century and 21st-century presidential motorcades have consisted.</p>
<Link to='/cadillaclimo'><button className='btn-theone'>THE ONE</button></Link> 
     </div>
<div>
<div className='icon-speed'><BsSpeedometer2 /></div>
<p className='speed-p1'>300 KM/H</p>
</div>
<div>
<div className='icon-0-100'><GiClockwork/></div>
<p className='p0-100-p1'>0-100 / 4.5 S</p>
</div>
<div>
<div className='icon-engine'><TbEngine/></div>
<p className='engine-V-16'>V-16, 8.0 DIESEL</p>
     </div>
   </div>
</div>
<h1 className='sedan-gallery'>Take a check at this<br/> gallery of luxury sedans</h1>
<div style={containerStyles}>
  <Image3Slider slides={slides}/>
         </div>
<h1 className='h1-luxend'>Are you lost in the world of luxury sedans? <br/>yes it is really difficult not to<br/> get lost in the world of sedans</h1>
<div className="p10rank">
<div className='p9rank' onClick={sedanTop}>
  <div className="p8rank"><TfiArrowUp/></div>
</div>
      </div>
</Fade>







<div className='section-18'>
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

export default Sedan