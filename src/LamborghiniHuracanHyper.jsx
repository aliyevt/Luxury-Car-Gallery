import React from 'react';
import "./LamborghiniHuracanHyper.css";
import Fade from 'react-reveal';
import { useState, useEffect } from 'react';
import lambo1 from "./lambh2.webp";
import lambo2 from "./lambh3.jpg";
import lambo3 from "./lambh4.jpg";
import lambo4 from "./lambh5.jpg";
import lambo5 from "./lambh6.jpg";
import lambo6 from "./lambh7.jpg";
import lambo7 from "./lambh8.webp";
import lambo8 from "./lambh9.webp";
import lambo9 from "./lambh10.webp";
import { TfiArrowUp } from "react-icons/tfi";
import lambo10 from "./lambh11.webp";
import lambo11 from "./lambh12.webp";
import lambo12 from "./lambh13.webp";
import lambo13 from "./lambh14.webp";
import lambo14 from "./lambh15.webp";
import lambo15 from "./lambh16.webp";
import { Slide } from 'react-slideshow-image';
import lambo16 from "./lambh17.jpg";
import lambo17 from "./lambh18.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LamboHur } from './Lamborghini';
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
import lambh21 from "./lambh24.png";


const LamborghiniHuracanHyper = () => {
  const [images8, setImages8] = useState([lambo2, lambo3]);
  const [images9, setImages9] = useState([lambo4, lambo5]);
  const [images10, setImages10] =  useState([lambo6, lambo7]);
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
 const spanStyle = {
  color: 'black',
  fontWeight: "400",
  fontSize: '30px',
  position: 'relative',
  top: '500px',
  left: "130px",
  fontFamily: 'Roboto, sans-serif',
}
const spanStyle2 = {
  color: 'black',
  fontWeight: "400",
  fontSize: '30px',
  marginTop: '200px',
  position: 'relative',
  top: '500px',
  left: "130px",
  fontFamily: 'Roboto, sans-serif',
}
const spanStyle3 = {
  color: 'black',
  fontWeight: "400",
  fontSize: '30px',
  position: 'relative',
  top: '500px',
  left: "130px",
  fontFamily: 'Roboto, sans-serif',
}
const spanStyle4 = {
  color: 'black',
  fontWeight: "400",
  fontSize: '30px',
  marginTop: '200px',
  position: 'relative',
  top: '500px',
  left: "130px",
  fontFamily: 'Roboto, sans-serif',
}
const divStyle = {
  backgroundSize: 'cover',
  height: '87vh',
  objectFit: "cover",
  marginTop: "-77px",
}
const slideImages = [
  {
    url: lambo12,
    caption: "HURACÁN EVO SPYDER",
  },
  {
    url: lambo13,
    caption2: "HURACÁN STO",
  },
  {
    url: lambo14,
    caption3: "HURACÁN TECNICA",
  },
  {
    url: lambo15,
    caption4: "HURACÁN STERRATO",
  }
];

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
 <div className='a7777'> 
   <h1 className='bc777'>LAMBORGHINI HURACAN</h1>
   <div className='bug17'>
     <img src={lambh21} className='lhyperhur' alt="" /> 
     </div>
 </div>

       : 
        <div>


      <div className="lmbh">
        <Fade bottom>
        <h1 className="lmbh2">LAMBORGHINI</h1>
        <h1 className="lmbh3">HURACAN</h1>
        </Fade>
      </div>
      <Fade bottom>
      <div className="lmbh4">
        <Fade bottom>
        <img src={lambo1} alt="" className="lmbh5" />
        </Fade>
        <div className="lmbh6">
          <Fade bottom>
          <h1 className="lmbh7">DISCOVER THE LAMBORGHINI<br/> HURACAN</h1>
          <p className="lmbh8">The Lamborghini Huracán  is a sports car manufactured by Italian <br/>automotive manufacturer Lamborghini replacing the previous V10<br/> offering, the Gallardo.  The car has full LED headlamps, which ensure<br/> higher contrast in night conditions.</p>
          <p className="lmbh9">* The Huracán's name (huracán being the Spanish word for hurricane) is inspired by a<br/> Spanish fighting bull.</p>
          </Fade>
        </div>
      </div>
</Fade>
<Fade bottom>
  <Fade bottom>
<h1 className="pgt14">let's take a look this<br/>  incredible lamborghini huracan</h1>
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
<div className="lmbh10">
    <img src={lambo9} alt="" className="lmbh11" />
    <div>
  <img src={lambo8} alt="" className="lmbh13" />
   <p className="lmbh12">Discover all the new models of this exclusive car family, created<br/>  to shape to your deepest emotions. Combining the highest<br/> expression of Lamborghini's power with the exclusive refinement<br/> of Italian handicraft, this series embodies authentic design and <br/>state-of-the-art mechanical technology. The Lamborghini Huracán <br/>is the perfect fusion of technology and design. With its crisp,<br/> streamlined lines, designed to cut through the air and tame the<br/> road, you'll get a thrill just by looking at it. </p>
  </div>
</div>
<img src={lambo10} alt="" className="lmbh14" />
<div className="lmbh15">
<div>
    <h1 className="lmbh17">DESIGN</h1>
    <p className="lmbh18">Sculptured and sensual, the Huracán's design is<br/> based on the spiky hexagonal forms of the carbon<br/>  atom, while the seamless roof profile is an <br/>  unmistakablemark of the Lamborghini DNA. The<br/>  Huracán is unique even in the dark, thanks to the<br/>  alluringly “technological” light of its full-LED lighting<br/> system. Choose your favourite Lamborghini Huracán<br/> and discover its technical specifications. </p>
</div>
  <img src={lambo11} alt="" className="lmbh16" /> 
</div>
<h1 className="lmbh19">CHOOSE YOUR HURACAN</h1>
<Fade bottom>
<div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                 <span style={spanStyle}>{slideImage.caption}</span> 
                 <span style={spanStyle2}>{slideImage.caption2}</span>   
                 <span style={spanStyle3}>{slideImage.caption3}</span> 
                 <span style={spanStyle4}>{slideImage.caption4}</span>  
              </div>
            </div>
          ))} 
        </Slide>
      </div>
</Fade>
<Fade bottom>
<h1 className="pgt17">MOTORSPORT</h1>
</Fade>
<Fade bottom>
<div className="lmbh21">
<p className="lmbh22">The Huracán received a mid-cycle update in 2019, now being<br/> called the Huracán Evo. It now shares its engine and some of<br/> the technology with the Performante variant. The updated<br/> version of the Huracán has a more aggressive design language,<br/> the new front bumper has integrated aeroblades for improved<br/> downforce along with the rear styling inspired by the Performante <br/>variant, having the same rear diffuser, exhaust pipe position and<br/> radiators.</p>
<img src={lambo17} alt="" className="lmbh20" />
</div>
</Fade>
<Fade bottom>
<div className="lmbh23">
   <img src={lambo16} alt="" className="lmbh25" />
  <p className="lmbh24">The Huracán Evo GT Celebration is a limited edition model<br/>  with a limited production of 36 units. It pays tribute to the<br/> victories of 2018 and 2019 at the 24 Hours of Daytona and the<br/> 12 Hours of Sebring. The number 36 is the sum time of the<br/> two famous endurance races, also known as the “36 Hours of<br/> Florida”. In June 2019, Lamborghini introduced an off-road<br/> concept sports car based on the Huracán Evo called the<br/> Huracán Sterrato. Fog lights fitted at the front and a roof rack<br/> complete the aggressive exterior appearance. </p>
</div>
</Fade>
<div className="App">
      <Slider {...settings}>
    {LamboHur.map(item=>(
        <div className='card2'>
          <img className='item2img' src={item.image}/>
        </div> 
    ))}
    </Slider>
    </div>
    <Fade bottom>
    <h1 className="pgt29">Please go up to re-experience<br/> this incredible world<br/> of Lamborghini Huracan</h1>
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

export default LamborghiniHuracanHyper