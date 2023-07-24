import React from 'react';
import "./MercedesEqs.css";
import { Fade } from 'react-reveal';
import meqs from "./mercedeseqs2.jpeg";
import meqs2 from "./mercedeseqs3.jpeg";
import meqs3 from "./mercedeseqs4.jpeg";
import meqs4 from "./mercedeseqs5.webp";
import meqs5 from "./mercedeseqs6.webp";
import meqs6 from "./mercedeseqs7.webp"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { EqsMercedes } from './MercedesElectric';
import { EqsInterior } from './MercedesEqsInt';
import meqs15 from "./mercedeseqs16.webp"
import { EqsExterior } from './MercedesEqsExt';
import { TfiArrowUp } from 'react-icons/tfi';
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";



const MercedesEqs = () => {

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
      var setttings = {
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
      var settingss = {
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
        <div className="meqs">
<Fade bottom>
    <h1 className="meqs2">MERCEDES</h1>
    <h1 className="meqs3">EQS</h1>
</Fade>
        </div>
<div className="meqs4">
<Fade bottom>
<h1 className="meqs5">DISCOVER THE EQS</h1>
</Fade>
<Fade bottom>
<div className="meqs6">
    <Fade bottom>
    <img src={meqs} alt="" className="meqs7" />
    </Fade>
    <div>
        <Fade bottom>
        <h1 className="meqs8">THIS IS FOR PIONEERS.</h1>
        <h3 className="meqs9">The all-electric EQS SUV.</h3>
        </Fade>
    </div>
</div>
</Fade>
<Fade bottom>
    <div className="meqs10">
        <div>
            <Fade bottom>
            <h1 className="meqs11">Eye-catching style.</h1>
            <h3 className="meqs12">The EQS SUV's bold, seamless lines take our<br/> Progressive Luxury philosophy to a new<br/> dimension. On or off-road, this futuristic and<br/> purposeful look is sure to turn heads. </h3>
            </Fade>
        </div>
        <Fade bottom>
        <img src={meqs3} alt="" className="meqs13" />
        </Fade>
    </div>
</Fade>
<Fade bottom>
    <div className="meqs14">
        <Fade bottom>
        <img src={meqs2} alt="" className="meqs15" />
        </Fade>
        <div className='meqs19'>
            <Fade bottom>
            <h1 className="meqs16">Everything at your<br/> fingertips.</h1>
            <h3 className='meqs17'>The Mercedes-Benz User Experience (MBUX)*<br/> multimedia system offers an intuitive,<br/> immersive user experience. In the cockpit, the<br/> MBUX Hyperscreen stretches the entire length<br/> of the dashboard. In the rear, passengers can<br/> optionally access content via two high-<br/>resolution 29.5 cm (11.6 inch) displays.</h3>
            <h3 className="meqs18">* The availability of the communication module<br/> (LTE) is temporarily limited for certain vehicles<br/> due to supply bottlenecks. Please note that<br/> especially Mercedes me connect services<br/> including the emergency call system (eCall) are<br/> not available in the affected vehicles. Ongoing<br/> actual information is available at your<br/> Mercedes-Benz dealer.</h3>
            </Fade>
        </div>
    </div>
</Fade>
<Fade bottom>
<h1 className="meqs20">Luxury, everywhere.</h1>
<h2 className="meqs21">The spacious cabin is a comfortable, connected lounge with a choice of<br/> electrically adjustable backrests, seat climate control,<br/> entertainment screens in the secondrow<br/>  and space for up to seven seats. </h2>
</Fade>
<Fade bottom>
  <h1 className="meqs22">THE MERCEDES-BENZ EQC </h1>
</Fade>
<Fade bottom>
    <div className="meqs23">
        <Fade bottom>
        <img src={meqs4} alt="" className="meqs24" />
        <h1 className="meqs25">The ease<br/> of electric.</h1>
        </Fade>
    </div>
</Fade>
<Fade bottom>
    <div className="meqs26">
        <Fade bottom>
        <h1 className="meqs27">Be remarkable<br/> everywhere.</h1>
        <img src={meqs5} alt="" className="meqs28" />
        </Fade>
    </div>
</Fade>
<Fade bottom>
<div className="meqs29">
    <Fade bottom>
        <img src={meqs6} alt="" className="meqs30" />
        <h1 className="meqs31">Sit back and<br/> enjoy your car.</h1>
    </Fade>
</div>
</Fade>
</div>
<Fade bottom>
<h1 className="meqs32">Shaping the<br/> future. Exterior<br/> design.</h1>
</Fade>

<Fade bottom>
<div className="App">
      <Slider {...settings}>
    {EqsMercedes.map(iteem=>(
        <div className='card2'>
          <div className='bcss22'>
          <img className='iteem2img' src={iteem.image}/>
             <div className='meqs34'>
          <h1>{iteem.title}</h1>
               <div className='bcss24'>
          <h1>{iteem.text1}</h1>
          <p className='meqs33'>{iteem.text2}</p>
          <p>{iteem.text3}</p>
          <p>{iteem.text4}</p></div>
             </div>
           </div>
        </div> 
    ))}
    </Slider>
   </div>
</Fade>
<Fade bottom>
    <h1 className="meqs35">State-of-the-art<br/> technology</h1>
</Fade>
<Fade bottom>
<div className="App">
      <Slider {...setttings}>
    {EqsInterior.map(item=>(
        <div className='card2'>
          <img className='item2img' src={item.image}/>
        </div> 
    ))}
    </Slider>
    </div>
</Fade>
<Fade bottom>
<h1 className="meqs36">You're always in<br/> charge. <br/>Energising the<br/> EQC.</h1>
<p className='meqs38'>The EQC offers convenient charging solutions that adapt to your lifestyle: whether at<br/> home using the Wallbox charger, or on the road at one of the public charging stations. </p>
</Fade>
<Fade bottom>
    <img src={meqs15} alt="" className="meqs37" />
</Fade>
<Fade bottom>
    <h2 className="meqs39">Where do you see yourself in the future? </h2>
    <p className="meqs40">With a comprehensive charging infrastructure and faster. <br/>acceleration - the EQC offers you the freedom to move<br/> freely.</p>
</Fade>
<Fade bottom>
<div className="App">
      <Slider {...settingss}>
    {EqsExterior.map(item=>(
        <div className='card2'>
          <img className='item2img' src={item.image}/>
        </div> 
    ))}
    </Slider>
    </div>
</Fade>

<Fade bottom>
    <h1 className="meqs41">Please go above to re-experience<br/> this incredible Mercedes EQS and EQC</h1>
</Fade>
<Fade bottom>
      <div className="p10rank">
<div className='p9rank' onClick={suvTop}>
  <div className="p8rank" ><TfiArrowUp/></div>
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

export default MercedesEqs