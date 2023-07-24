import React from 'react';
import './Suv.css';
import { useState } from 'react';
import {  BsArrowDownCircleFill } from "react-icons/bs";
import{ BsArrowUpCircleFill } from "react-icons/bs";
import urusPrice from './suvurusprice.jpg';
import g63amgPrice from './suvg63amgprice.jpg';
import bentaygaPrice from './suvbentaygaprice.jpg';
import cadillacPrice from './suvcadillacprice.jpg';
import suvFordF150 from './f4f150.jpeg';
import suvCullinanchoices from './suvcullinan.jpeg';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import urusslide from './urusslide.webp';
import gls600slide from './gls600slide.jpg';
import { TfiArrowUp } from "react-icons/tfi"
import Image2Slider from './Image2Slider';
import fordfslide from './fordf150slide.jpg';
import cadillacslide from './cadillacslide.jpeg';
import bentaygaslide from './bentaygaslide.jpg';
import cullinanslide from './cullinanslide.jpeg';
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
import { BsArrowDownCircle } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { JustSuv } from './SuvPrice';
import { JustType } from './Suv2Price';
import { TfiArrowDown } from "react-icons/tfi"


const Suv = () => {
  const scrollUp = () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 0.920,
        behavior: "smooth"
      });
    }, 200);
  }

  const [count, setCount] = useState(0);

  const handleStart = () => {
    for (let i = 0; i <= 250; i++) {
      setTimeout(() => setCount(i), i * 15);
    }
  };
  const [count2, setCount2] = useState(0);

  const handleStart2 = () => {
    for (let i = 0; i <= 500; i++) {
      setTimeout(() => setCount2(i), i * 15);
    }
  };
  const [count3, setCount3] = useState(0);

  const handleStart3 = () => {
    for (let i = 0; i <= 750; i++) {
      setTimeout(() => setCount3(i), i * 10);
    }
  };

  const countHover = (event)=>{
    event.target.style.background = "white"
    event.target.style.color = "black"
    } 
  const countNo = (event)=>{
    event.target.style.background  ="#680303"
    event.target.style.color = "white"
  }

  const [playing, setPlaying] = useState(false);
  const amgClick = () => {
     const audio = new Audio('https://www.mercedes-amg.com/dam/hq/UAT%20content/Sounds/g63/01_G63_eng-start.mp3/_jcr_content/renditions/original.1542212332301./01_G63_eng-start.mp3');
     if (playing) {
       audio.pause();
     } else {
       audio.play();
     }
     setPlaying(!playing);
     handleClick()
   };

  const [toggled, setToggled] = useState(false);

  const priceHover =(event)=>{
    event.target.style.border="1px solid black"
    event.target.style.backgroundColor="white"
    event.target.style.color= "black"
  }
  const priceNoHover =(event)=>{
    event.target.style.color= "white"
    event.target.style.background="black"
  }

const slides = [
    {url: urusslide},
    {url: gls600slide},
    {url:fordfslide},
    {url: cadillacslide},
    {url:bentaygaslide},
    {url: cullinanslide},
  ];
const containerStyles = {
  width: "1519px",
  height: "700px",
  margin: "50px auto",
  marginTop: "100px",
 }

 const suvTop = () => {
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


const [isClicked, setIsClicked] = useState(false);

const handleClick = () => {
  setIsClicked(!isClicked);
};




  return (
    <div>
       <div className='suv-amg'>
        <Fade bottom>
        <h1 className='suv-h1'>DISCOVER THE SUV WORLD</h1>
         <h1 className='suv-more777' >MORE LEARN</h1>
  </Fade>
  <Fade bottom>
    <div className="suv3news">
      <div className='suv2news' onClick={scrollUp}>  
        <div className='suv-btn-1'><TfiArrowDown/></div>
          </div> 
              </div>
</Fade>


       
       </div>
     <div className='suv-section-1'>
      <Fade bottom>     
         <h1 className='suv-section1-h1'>Wherever the SUV CARS shows its<br/> face, it is met with nothing but awe. Its<br/> passion, perfection and power make every<br/> journey feel like a victory.<br/>LET'S LOOK AT THE PERFORMANCE OF ONE OF<br/> THEM TOGETHER</h1>
         </Fade> 
         <Fade bottom>
      <div className='speed-flex'>
           <div className='flex-1'>
        <button className='btn-speed' onClick={handleStart}>SPEED</button>
            <h1 className='speed-count'>{count}</h1>
           </div>
      </div>    
         </Fade>    

<Fade bottom>
      <div className='speed-flex'>
           <div className='flex-3'>
        <button className='btn-speed' onClick={handleStart2}>HORSEPOWER</button>
            <h1 className='speed-count'>{count2}</h1>
           </div>
      </div> 
      </Fade>

<Fade bottom>
      <div className='speed-flex'>
           <div className='flex-3'>
        <button className='btn-speed' onClick={handleStart3}>TORQUE</button>
            <h1 className='speed-count'>{count3}</h1>
           </div>
      </div>  
</Fade>

<Fade bottom>
  <h1 className='h1-startstop'>Get ready now that I will listen<br/> to such a sound that you will feel <br/>like you are in an SUV</h1>
  </Fade>
 
       <button className='startstop' onClick={amgClick}>{playing ? "stop" : "start"}</button> 
          
        
           <h1 className='yes-h1'>DO YOU LOVE G63 AMG'S<br/> ENGINE'S SOUND?</h1>
        
         
     </div>
     <Fade bottom>
      <h1 className='suv-price-h1'>Please look these luxury jeeps<br/> we have selected for you</h1>  
      </Fade>
      <Fade bottom>

      <div className="Ap777p">
      <Slider {...settings}>
    {JustSuv.map(iitem=>(
        <div className='card'>
          <img className='itemimg' src={iitem.image}/>
          <div className='hypcard777'>{iitem.title}</div>
        </div> 
    ))}
    </Slider>
    </div>



<h1 className='choices-suv'>WHICH IS YOUR CHOICES?</h1>
<div className="App">
      <Slider {...sett2ings}>
    {JustType.map(item=>(
        <div className='card2'>
          <img className='item3img' src={item.image}/>
          <h1 className='bedit777'>{item.title}</h1>
        </div> 
    ))}
    </Slider>
    </div>



<div style={containerStyles}>
  <Image2Slider slides={slides}/>
         </div>
   


<h1 className='suv-end-h1'>If you ask us, both LUX and<br/> OFF ROAD SUV's will<br/> really please you.</h1>
<h1 className='suv-top'>BACK TO TOP</h1>
<div className="p10rank">
<div className='p9rank' onClick={suvTop}>
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

export default Suv