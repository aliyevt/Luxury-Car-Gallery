import React from 'react';
import "./BugattiChironHyper.css";
import { useState, useEffect } from 'react';
import bug12 from "./bug12.jpg";
import bug15 from "./bug17.png";
import Fade from 'react-reveal';
import bug from "./bug3.png";
import bug2 from "./bug1.webp";
import bug3 from "./bug2.jpg";
import bug4 from "./bug4.webp"
import { TfiArrowUp } from "react-icons/tfi"
import bug5 from "./bug5.webp";
import bug7 from "./bug11.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BugattiInterior } from './BugattiInt';
import chbb from "./chironbb.webp";
import chbw from "./chironbw.webp";
import chdb from "./chirondb.webp";
import chgb from "./chirongb.webp";
import chrb from "./chironrb.webp";
import chrw from "./chironrw.webp";
import chyb from "./chironyb.webp";
import cobw from "./colorbw.webp";
import codb from "./colordb.webp";
import cogb from "./colorgb.webp";
import corb from "./colorrb.webp";
import corw from "./colorrw.webp";
import coyb from "./coloryb.webp";
import cobb from "./cobb.webp";
import { BugattiType } from './BugattiType';
import BugattiEditions from './BugattiEditions';
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



const BugattiChironHyper = () => {
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
      const [selHyper, setSelHyper]=useState(chbw);
      const [hyperImage, setHyperImage]=useState(chbw);
      const bbClick =()=>{
         setHyperImage(chbb);
      }
      const dbClick =()=>{
         setHyperImage(chdb);
      }
      const bwClick =()=>{
         setHyperImage(chbw);
      }
      const ybClick =()=>{
         setHyperImage(chyb);
      }
      const gbClick =()=>{
         setHyperImage(chgb);
      }
      const rwClick =()=>{
         setHyperImage(chrw);
      }
      const rbClick =()=>{
         setHyperImage(chrb);
      }



  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>


{loading ? 

<div className='a777'>
   <h1 className='bc777'>BUGATTI CHIRON</h1>
   <div className='bug17'>
     <img src={bug15} className='bug15' alt="" /> 
     </div>
</div>

       : 
        <div>
            <div className="bc">
  <Fade bottom>
  <h1 className="bc2">BUGATTI</h1>
  <h1 className='bc3'>CHIRON</h1>
  </Fade>
</div>
<Fade bottom>
<div className="bc4">
    <img src={bug} alt="" className="bc5" />
    <div className='bc8'>
      <h1 className="bc6">DISCOVER THE BUGATTI CHIRON</h1>
      <p className="bc7">The CHIRON is the fastest, most powerful, and exclusive production<br/> super sports car in BUGATTI's history. Its sophisticated design, innovative<br/> technology, and iconic, performance-oriented form make it a unique<br/> masterpiece of art, form and technique, that pushes boundaries beyond<br/> imagination.</p>
      <p className="bc9">* Every element of the CHIRON is a combination of reminiscence to its history and the most<br/> innovative technology. </p>
      <p className="bc10">* BUGATTI owes its distinctive character to a family of artists and engineers, and has always <br/>strived to offer the extraordinary, the unrivaled, the best.</p>
    </div>
  </div>
</Fade>
<Fade bottom>
<div className="bc12">
<img src={bug5} alt="" className="bc11" />
</div>
</Fade>

<Fade bottom>
<div className="App">
      <Slider {...settings}>
    {BugattiInterior.map(item=>(
        <div className='card2'>
          <img className='item2img' src={item.image}/>
        </div> 
    ))}
    </Slider>
    </div>
</Fade>

<Fade bottom>
  <h1 className="bc13">FORM FOLLOWS PERFORMANCE</h1>
  <div className="bc14">
    <p className="bc15">To reach its unprecedented levels of performance, the CHIRON effortlessly<br/> merges its captivating beauty with sleek, muscular efficiency; a spectacular<br/> reinterpretation of the BUGATTI design DNA. The intelligent air intake<br/> management significantly improves aerodynamics and enhances the <br/>cooling efficiency for engine and brakes.</p>
    <p className="bc16">The distinctive quad LED headlights, for example, also serve as intakes<br/>  routing airto the front brakes - and thus work as a remarkable example<br/>  of functionality fusing with aesthetics. This enthusiasm for performance-<br/>oriented design continues in the interior, complemented by<br/> BUGATTI's exquisite sense of comfort and luxury.</p>
  </div>
  <img src={bug7} className='bc17' alt="" />
</Fade>

<Fade bottom>
  <h1 className="bc18">DISCOVER YOUR INSPIRATION</h1>
  <div className="bc19">
    <p className="bc20">Each CHIRON is one of a kind; an exquisite masterpiece of breathtaking power<br/> and unrivaled beauty. To build each customer's unique work of art, BUGATTI<br/> designers collaborate closely with the owner to create a car that fits their<br/> personality, while matching the brand's captivating legend status and ardent<br/> commitment to utmost quality. There are virtually no limits to the levels of<br/> personalization that can be achieved.</p>
     <p className="bc21">A vast selection of color and material combinations is available, <br/>from the finest hand-picked leather to precious metals. Individual <br/>engravings or embroidery add the personalized finishing touch,<br/>  making every CHIRON as unique as itsowner. Below you can be<br/> inspired by a small selection of the countless possibilities<br/> available:</p> 
  </div>
</Fade>

{selHyper &&<img className='ahyperimg' src={hyperImage} alt=''/>}
<div className="acimg">
  <img src={cobw} onClick={bwClick} className='aacimgg'alt="" />
  <img src={codb} onClick={dbClick} className='aacimgg' alt="" />
  <img src={cogb} onClick={gbClick} className='aacimgg' alt="" />
  <img src={coyb} onClick={ybClick} className='aacimgg' alt="" />
  <img src={corw} onClick={rwClick} className='aacimgg' alt="" />
  <img src={corb} onClick={rbClick} className='aacimgg' alt="" />
  <img src={cobb} onClick={bbClick} className='aacimgg' alt="" />
</div>
<Fade bottom>
  <Fade bottom>
<h1 className="bc22">CHOOSE YOUR BUGATTI</h1>
</Fade>
<Fade bottom>
<div className="App">
      <Slider {...settings}>
    {BugattiType.map(item=>(
        <div className='card2'>
          <img className='item2img' src={item.image}/>
          <h1 className='bc23'>{item.title}</h1>
        </div> 
    ))}
    </Slider>
    </div>
</Fade>
<Fade bottom>
  <h1 className="bc24">SPECIAL EDITIONS</h1>
</Fade>
<BugattiEditions/>
<Fade bottom>
    <h1 className='bcll33'>Please go above to rediscover<br/> this incredible world of<br/> Bugatti Chiron </h1>
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

export default BugattiChironHyper