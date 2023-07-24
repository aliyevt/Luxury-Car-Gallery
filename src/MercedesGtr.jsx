import React from 'react';
import "./MercedesGtr.css";
import Fade from 'react-reveal';
import gtr from "./mercg8.png";
import gtr2 from "./mercg9.jpg";
import gtr3 from "./mercg14.jpg";
import gtr4 from "./mercg11.jpg";
import { TfiArrowUp } from "react-icons/tfi"
import gtr5 from "./mercg12.jpg";
import gtr6 from "./mercg13.jpg";
import { useState, useEffect } from 'react';
import gtr7 from   "./mercg.jpg";
import gtr8 from "./mercg15.jpg";
import gtr9 from "./mercg16.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GtrHyper } from './Mercedes';
import { BsArrowUpCircle } from 'react-icons/bs';
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";


const MercedesGtr = () => {
    const [images8, setImages8] = useState([gtr2, gtr3]);
  const [images9, setImages9] = useState([gtr4, gtr7]);
  const [images10, setImages10] =  useState([gtr5, gtr6]);
  const [selectedside, setSelectedSide] = useState(images8);   
 const mmClick1=()=>{
    setSelectedSide(images8);
 }
 const mmClick2 =()=>{
    setSelectedSide(images9);
 }
 const mmClick3 =()=>{
    setSelectedSide(images10);
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
  const [lloading, setLLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
{lloading ?  
    <div className='ba777'> 
     <h1 className='bc777'>MERCEDES-AMG GTR</h1>   
    <div className='bug17'>
     <img src={gtr} className='lgtr' alt="" /> 
     </div> 
   </div>

       : 
        <div>



        <div className="mgtr">
            <Fade bottom>
            <h1 className="mgtr2">MERCEDES-AMG</h1>
            <h1 className="mgtr3">GTR</h1>
            </Fade>
        </div>
<Fade bottom>
<div className="mgtr4">
    <Fade bottom>
    <img src={gtr} alt="" className="mgtr5" />
    </Fade>
    <Fade bottom>
    <div className='mgtr8'>
        <h1 className="mgtr6">DISCOVER THE MERCEDES-AMG<br/> GTR</h1>
        <p className="mgtr7">The Mercedes-AMG GT (C190 / R190) is a grand tourer produced in coupé and<br/>  roadster bodystyles by German automobile manufacturer Mercedes-AMG. <br/>The car was introduced on 9 September 2014 and was officially unveiled to<br/> the public in October 2014 at the Paris Motor Show. After the SLS AMG, it is<br/>  the second sports car developed entirely in-house by Mercedes-AMG. <br/>Recently, a new variant called the AMG GT Black Series has been released.</p>
        <p className="mgtr9">* On 28 October 2021, Mercedes-Benz announced the new Mercedes-AMG R232 SL-Class as <br/>the direct successor for the roadster version.</p>
    </div>
    </Fade>
</div>
<Fade bottom>
<h1 className="pgt14">let's take a look<br/> this incredible mercedes-amg gtr</h1>
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
<Fade bottom>
<h1 className="pgt17">MOTORSPORT</h1>
</Fade>
<Fade bottom>
<div className="mgtr10">
    <p className="mgtr11">Shortly after its introduction, Mercedes-AMG CEO at the time, Tobias Moers<br/>  promised a Black Series variant of the Mercedes-AMG GT. The new high<br/> performance variant was called the AMG GT R. The GT S was the Formula 1<br/> safety car for the 2015, 2016 and 2017 seasons, having made its debut in that<br/> role at the 2015 Australian Grand Prix. The GT R was used as F1's safety car<br/> from 2018 to 2022. Since 2022, the GT R was replaced by the Black Series.<br/> The Mercedes-AMG family was given a facelift in 2017, along with the<br/> introduction of the GT C roadster variant and the Edition 50 model, <br/> which is a limited-edition derivative of the GT C variant.</p>
    <img src={gtr8} alt="" className="mgtr12" />
</div>
</Fade>
<Fade bottom>
    <div className="mgtr13">
        <img src={gtr9} alt="" className="mgtr14" />
        <p className="mgtr15">The key improvements made as part of the facelift include increased <br/>power output from the M178 engine for the GT and GT S variants (10 kW<br/> and 9 kW respectively) and the inclusion of the 'Panamericana' grille<br/> from the GT3, GT4 and GT R variants as standard equipment for all variants. <br/>The GT's exterior design was kept similar to that of the preceding SLS AMG. <br/>The vehicle structure is made up of 93% aluminium, with the front module<br/> base made up of magnesium.  The exterior lead designer was Mark<br/> Fetherston, whose previous works include the W176 A-Class, the CLA-Class,<br/> and SLS AMG.</p>
    </div>
</Fade>
<div className="App">
      <Slider {...settings}>
    {GtrHyper.map(item=>(
        <div className='card2'>
          <img className='item2img' src={item.image}/>
        </div> 
    ))}
    </Slider>
    </div>
    <Fade bottom>
    <h1 className="pgt29">Please go up to re-experience<br/> this incredible world<br/> of MERCEDES-AMG GTR </h1>
</Fade>

<Fade bottom>
<div className="p10rank">
<div className='p9rank'>
  <div className="p8rank" onClick={suvTop}><TfiArrowUp/></div>
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


</Fade>


</div>
}


    </div>
  )
}

export default MercedesGtr