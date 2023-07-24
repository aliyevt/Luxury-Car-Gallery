import React from 'react';
import "./PaganiZonda.css";
import Fade from 'react-reveal';
import { useState, useEffect } from 'react';
import paga from "./paga6.webp";
import paga2 from "./paga7.jpg";
import paga3 from "./paga8.jpg";
import paga4 from "./paga9.jpg";
import paga5 from "./paga10.jpg";
import paga6 from "./paga11.jpg";
import paga7 from "./paga12.webp";
import paga8 from "./paga13.jpg";
import paga9 from "./paga1.jpg";
import { TfiArrowUp } from "react-icons/tfi"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { PaganiGuys } from './Pagani';
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
import paga77 from "./paga5.jpg";


const PaganiZonda = () => {
    const [images1, setImages1] = useState([paga2, paga3]);
    const [images2, setImages2] = useState([paga4, paga5]);
    const [images3, setImages3] =  useState([paga6, paga7]);
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
  const [loaading, setLoaading] = useState(true);
useEffect(() => {
  setTimeout(() => {
    setLoaading(false);
  }, 1500);
}, []);
  return (
    <div>
{loaading ?  
    <div className='a77777'> 
     <h1 className='bc777'>PAGANI ZONDA</h1>   
    <div className='bug17'>
     <img src={paga} className='lpaganizonda' alt="" /> 
     </div> 
   </div>

       : 
        <div>




        <div className="pag">
            <Fade bottom>
            <h1 className="pag2">PAGANI</h1>
            <h1 className="pag3">ZONDA</h1>
            </Fade>
        </div>
<Fade bottom>
<div className="pag4">
    <img src={paga} alt="" className="pag5" />
    <div className='pag9'>
        <h1 className="pag6">DISCOVER THE PAGANI ZONDA</h1>
        <p className="pag7">The Pagani Zonda is a mid-engine sports car produced by Italian<br/> sports car manufacturer Pagani. It debuted at the 1999 Geneva<br/> Motor Show. Produced on commission in limited units, as of 2019<br/> a total of 140 cars had been built, including development mules.</p>
        <p className="pag8">* Variants include a 2-door coupé and roadster variant, along with a third new <br/>variant being the barchetta.</p>
    </div>
</div>
<Fade bottom>
<h1 className="pgt14">let's take a look<br/> this incredible pagani zonda</h1>
</Fade>
<Fade bottom>
<div className="pgt15">
    <button className="pgt16" onClick={mmClick1}>FRONT</button>
    <button className="pgt16" onClick={mmClick2}>BACK</button>
    <button className="pgt16" onClick={mmClick3}>SIDE</button>
</div>
</Fade>
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
<div className="pag10">
    <img src={paga8} alt="" className="pag11" />

</div>
    <p className="pag14">Power output of the engine increased to 650 PS (478 kW; 641 hp) and 780 N⋅m (575 lb⋅ft) of torque.<br/> Production of the Roadster F was limited to 25 units. These techniquesenabled the Roadster to have<br/>  virtually the same weight as the coupé, 1,230 kg (2,712 lb). The Zonda Roadster F Clubsport is a light<br/>  weight version of the Zonda Roadster F. Only five were built, hence the name, with deliveries set to<br/> June 2009 for all five cars. The Zonda Cinque was developed at the request of a Pagani dealer in<br/> Hong Kong.</p>
<div className="pag12">
    <img src={paga9} alt="" className="pag13" />
</div>
<Fade bottom>
<div className="App">
      <Slider {...settings}>
    {PaganiGuys.map(item=>(
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
<div className='p9rank'>
  <div className="p8rank" onClick={suvTop}><TfiArrowUp/></div>
</div>
      </div>
     </Fade>

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

export default PaganiZonda