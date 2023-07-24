import React from 'react';
import './Mansory.css';
import { useState, useEffect, useRef } from 'react';
import { BsArrowDownCircleFill } from "react-icons/bs";
import{ BsArrowDownCircle } from "react-icons/bs";
import aventadormans from './lamboavenmans.webp';
import aventador2mans from './lamboaven2mans.jpg';
import { BsSpeedometer2 } from "react-icons/bs";
import { TbEngine } from "react-icons/tb";
import { GiClockwork } from "react-icons/gi";
import mansv12eng from './mansoryengine.jpg';
import mansv16eng from './mansoryengine2.jpeg';
import { BsPlusCircleFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import urusmansory from './urusmansory.webp';
import bentmans from './bentleymansory.jpg';
import mercsmans2 from './mercsmans2.webp';
import chiron from './chiron2.jpeg';
import roycetail from './roycetail.jpeg';
import lamborghinimp3 from './lamborghiniaudiomp3.mp3';
import manslambnews from './manslambnews.webp';
import {Routes, Route, Link, NavLink,} from 'react-router-dom';
import amartinnews from './amartinnews.jpeg';
import{ BsArrowUpCircle } from "react-icons/bs";
import urusPrice from './urusmans2price.webp';
import urus2Price from './urusmansprice.webp';
import manschiron from './chiron4.jpeg';
import norchiron from './chiron.jpeg';
import mansbent from './mansbentfspur.jpg';
import norbent from './norbentfspur.jpg';
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { TfiArrowDown, TfiArrowUp } from "react-icons/tfi"
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import Fade from 'react-reveal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {PriceThereFore} from './Price';















const Mansory = () => {

const [zoom,setZoom]=useState(1);
const [zoom2, setZoom2]=useState(1)
const close =()=>{
   setZoom(zoom+0.1)
}
const reset =()=>{
  setZoom(1)
}
const close2 =()=>{
  setZoom2(zoom2+0.1)
}
const reset2 =()=>{
 setZoom2(1)
}



const spanStyle = {
  color: 'white',
  fontSize: '50px',
  position: 'relative',
  fontWeight: "900",
  top: '70px',
  left: "90px",
  fontFamily: 'Roboto, sans-serif',
}
const spanStyle2 = {
  color: 'white',
  fontSize: '50px',
  position: 'relative',
  fontWeight: "900",
  top: '70px',
  left: "90px",
  fontFamily: 'Roboto, sans-serif',
}
const spanStyle3 = {
  color: 'white',
  fontSize: '50px',
  position: 'relative',
  fontWeight: "900",
  top: '85px',
  left: "90px",
  fontFamily: 'Roboto, sans-serif',
}
const spanStyle4 = {
  color: 'white',
  fontWeight: "900",
  fontSize: '55px',
  position: 'relative',
  top: '70px',
  left: "100px",
  fontFamily: 'Roboto, sans-serif',
}
const spanStyle5 = {
  color: 'black',
  fontWeight: "900",
  fontSize: '55px',
  position: 'relative',
  top: '70px',
  left: "100px",
  fontFamily: 'Roboto, sans-serif',
}
const spanStyle6 = {
  color: 'black',
  fontWeight: "900",
  fontSize: '55px',
  marginTop: '200px',
  position: 'relative',
  top: '70px',
  left: "100px",
  fontFamily: 'Roboto, sans-serif',
}
const divStyle = {
  backgroundSize: 'cover',
  height: '100vh'
}
const slideImages = [
  {
      url: aventador2mans,
      caption: "LAMBORGHINI AVENTADOR",
  },
  {
    url:bentmans,
    caption2 : "BENTLEY FLYING SPUR",
  },

  {
     url: urusmansory, 
     caption3: "LAMBORGHINI URUS",
  },
  {
    url: mercsmans2,
    caption4: "MERCEDES S580",
  },
  {
    url: chiron,
    caption5: "BUGATTI CHIRON",
  },
  {
    url: roycetail,
    caption6: "ROLLS ROYCE BOATTAIL"
  }
];



const [playing, setPlaying] = useState(false);
const urusSound = () => {
   const audio = new Audio(lamborghinimp3);
   if (playing) {
     audio.pause();
   } else {
     audio.play();
   }
   setPlaying(!playing);
 };


const[power, setPower]=useState(0)
const hPower =()=>{
  for(let i=0;  i <=850;  i++){
    setTimeout(() => setPower(i), i * 10);
  }
}

const[fast, setFast]=useState(0)
const hFast =()=>{
  for(let i=0;  i <=370;  i++){
    setTimeout(() => setFast(i), i * 10);
  }
}

const seeMoreenter = (event)=>{
  event.target.style.background = "white"
  event.target.style.color = "black"
  event.target.style.border = "1px solid gray"
  } 
const seeMoreleave = (event)=>{
  event.target.style.background  ="black"
  event.target.style.color = "white"
}

const mansUp =()=>{
  setTimeout(()=>{
    window.scrollTo({
     top:0,
     behavior: "smooth"
    })
 },100) 
}

const [features, setFeatures]=useState(false);
const norUrus=()=>{
  setFeatures(!features)
};
const [features2, setFeatures2]=useState(false);
const mansUrus=()=>{
  setFeatures2(!features2)
};


const [features3, setFeatures3]=useState(false);
const norChiron=()=>{
  setFeatures3(!features3)
};
const [features4, setFeatures4]=useState(false);
const mansChiron=()=>{
  setFeatures4(!features4)
};

const [features5, setFeatures5]=useState(false);
const norBentley=()=>{
  setFeatures5(!features5)
};
const [features6, setFeatures6]=useState(false);
const mansBentley=()=>{
  setFeatures6(!features6)
};



const scrollUpMans = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0.940,
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














  return (
    <div>   
<div className='mansory'>
<Fade bottom>
<h1 className='mansory-h1'>DISCOVER THE MANSORY </h1> 
<h1 className='mansory2-h1'>MORE LEARN</h1>
</Fade>
<Fade bottom>
<div className="mansory3icon777">
    <div className="mansory2icon777" onClick={scrollUpMans}>
<div className='mansory1-icon'><TfiArrowDown/></div>
    </div>
</div>
</Fade>


</div>
<Fade bottom>
<h1 className='mansory-what-h1'>What are mansory cars<br/> and for what purpose are they made?</h1>
<div className='mansory-what-flex'>
  <div>
<p className='mansory-what-p1'>Mansory is a German company specializing in the modification and customization of luxury cars. The company makes a number of changes to improve the performance of vehicles and customize their design. Mansory covers the body of vehicles with carbon fiber and improves the aerodynamic characteristics of the car. They also customize the interior of the cars. The prices of the cars that Mansory modifies are quite high. Mansory works on vehicles from a number of manufacturers, including Aston Martin, Audi, Bentley, BMW, Bugatti, Ferrari, Lamborghini, Lotus Cars, Maserati, Mercedes-Benz, Rolls-Royce, and Tesla.</p>
    <div className='mans-features-flex'>
      <div>
<div className='mans-speed'><BsSpeedometer2/></div>
<p className='mans-speed-p1'>HIGHEST SPEED</p>
        </div>
        <div>
<div className='mans-0-100'><GiClockwork/></div>
<p className='mans-0-100-p1'>FASTEST 0-100</p>
            </div>
            <div>
<div className='mans-engine'><TbEngine/></div>
<p className='mans-engine-p1'>POWERFUL ENGINE</p>
                 </div>
           </div>
</div>
<img src={aventador2mans} className='img-aventador-mans' alt=''/>
</div>
<h1 className='mans-eng-rew'>Let's take a review at<br/> the engines of these Mansory Cars</h1>
<div className='mansory-v-12engine'>
  <div className='mansv12eng'>
<img src={mansv12eng}  style={{ transform: `scale(${zoom})` }} alt=''/>
    </div>
<div>
<p className='v12eng-p1'>A V12 engine is a twelve-cylinder piston engine where two banks of six cylinders are<br/> arrangedin a V configuration around a common crankshaft. V12 engines  are more <br/>common than V10 engines. However, they  are less  common than V8 engines.<br/> The first V12 engine was built in 1904 for use in racing boats. Due to the balanced <br/>nature of the engine and the smooth delivery  of power, V12 engines were found <br/> in early luxury automobiles,  boats, aircraft, and tanks. Aircraft V12 engines<br/> reached their apogee during World War II, following  which they were mostly  <br/>replaced by jet engines. In Formula One racing, V12 engines were common during<br/>  the late 1960s and early 1990s.
</p>
<h1 className='v12eng-h1'>REVIEW</h1>
<div className='mansplusreset'>   
<div className='manszoomicon' onClick={close}><BsPlusCircleFill/></div>
<div className='mansreseticon' onClick={reset}><GrPowerReset/></div>
        </div>
    </div>
</div>


<div className='mansory-v-12engine'>
<div>
<p className='v12eng-p1'>A V12 engine is a twelve-cylinder piston engine where two banks of six cylinders<br/> are arrangedin a V configuration around a common crankshaft. V12 engines <br/> are more common than V10 engines. However, they  are less  common than V8<br/> engines. The first V12 engine was built in 1904 for use in racing boats. Due to<br/>  the balanced nature of the engine and the smooth delivery  of power, V12<br/> engines were found  in earlyluxury automobiles,  boats, aircraft,  and tanks.<br/> Aircraft V12 engines reached their apogee during World War II, following<br/>   which they were mostly replaced by jet engines. In Formula One racing,<br/>  V12 engines were common during  the late 1960s and early 1990s.
</p>
<h1 className='v12eng-h1'>REVIEW</h1>
<div className='mansplusreset'>   
<div className='manszoomicon' onClick={close2}><BsPlusCircleFill/></div>
<div className='mansreseticon' onClick={reset2}><GrPowerReset/></div>
        </div>
    </div>
  <div className='mansv16eng'>
<img src={mansv16eng}  style={{ transform: `scale(${zoom2})` }} alt=''/>
    </div>    
</div>

<h1 className='review-h1-mansory'>Let's take a<br/> review at the Mansory Cars</h1>


<div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                 <span style={spanStyle}>{slideImage.caption}</span> 
                 <span style={spanStyle2}>{slideImage.caption2}</span>  
                 <span style={spanStyle3}>{slideImage.caption3}</span>  
                 <span style={spanStyle4}>{slideImage.caption4}</span>  
                 <span style={spanStyle5}>{slideImage.caption5}</span>  
                 <span style={spanStyle6}>{slideImage.caption6}</span>  
              </div>
            </div>
          ))} 
        </Slide>
      </div>

<h1 className='urus-system'>The sound of this <br/>Lamborghini URUS YOU MUST listen </h1>
<div className='urus-sound'>
<button onClick={urusSound} className='urus-start-btn'>{playing? "STOP" : "START"}</button>
<h1 className='more-power'>Adorned with V12 engines,<br/> these Mansory cars take you to<br/> the heights of luxury</h1>
</div>
 <div className='mansory-power'> 
<button className='more-hpower' onClick={hPower}>MORE HORSEPOWER</button>
<h1 className='hpower-h1'>{power}</h1>
<button className='moreFast' onClick={hFast}>MORE FAST</button>
<h1 className='hfast-h1'>{fast}</h1>
</div>

<div className='back-mansnews'>NEWS</div>
<h1 className='mlambnewsh1'>LAMBORGHINI</h1>
<div className='mlambnewsflex'>
<img src={manslambnews} className='mlambnews' alt=''/>
<div>
<p className='mlambdate'>25 MAY 2023</p>
<h1 className='mlambprem'>LAMBORGHINI REVUELTO - MANSORY <br/>PREMIERE</h1>
<button className='mlambbtn'>READ MORE</button>
     </div>
</div>

<h1 className='mlambnewsh1'>ASTON MARTIN</h1>
<div className='mlambnewsflex'>
<img src={amartinnews} className='mlambnews' alt=''/>
<div>
<p className='mlambdate'>27 MAY 2023</p>
<h1 className='mlambprem'>ASTON MARTIN - MANSORY LAUNCHED <br/>PREMIERE</h1>
<button className='mlambbtn'>READ MORE</button>
     </div>
</div>

<div className='mansnewscenter'>
<Link to="/news"><button className='mansnewsbtn' onMouseEnter={seeMoreenter} onMouseLeave={seeMoreleave}>SEE ALL</button></Link>
</div>

<h1 className='mansh1pricecom'>PRICE COMPARISON</h1>


<div className="App">
      <Slider {...settings}>
    {PriceThereFore.map(item=>(
        <div className='card'>
          <h1 className='pName'>{item.name}</h1>
          <img className='itemimg' src={item.image}/>
          <div className='card777'>{item.title}</div> 
          <h2>{item.link}</h2>
        </div> 
    ))}
    </Slider>
    </div>
















 <div>
<h1 className='mansup'>GO UP TO EXPERIENECE<br/> THIS INCREDIBLE WORLD OF MANSORY AGAIN</h1>
</div>
<div className='flexmansup'> 
<div className="p10rank">
<div className='p9rank'onClick={mansUp}>
  <div className="p8rank"><TfiArrowUp/></div>
</div>
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

export default Mansory