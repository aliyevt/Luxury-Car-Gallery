import React from 'react';
import "./Tesla.css";
import cyberimg1 from "./tcybertruck.jpg";
import { TfiArrowUp } from "react-icons/tfi"
import { BsArrowDown, BsArrowDownCircle } from "react-icons/bs";
import tcyber1 from "./tcyberimg1.jpg";
import tcyber2 from "./tcyberimg2.webp";
import tcyber4 from "./tcyberimg4.webp";
import tcyber5 from "./tcyberimg5.jpg";
import tmodelplaid1 from "./tmodelplaid.jpg";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { useState } from 'react';
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
import{ BsArrowUpCircle } from "react-icons/bs";




const Tesla = () => {



  const divStyle = {
    backgroundSize: 'cover',
    height: '100vh'
  }
  const slideImages = [
    {
      url: tcyber1,
    },
    {
      url: tcyber2,
    },
    {
      url: tcyber4,
    },
    {
      url: tcyber5,
    },
  ];

  const scrollUp = () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 0.9,
        behavior: "smooth"
      });
    }, 200);
  }


const teslaMil = ()=>{
  for(let i=0; i<=500; i++ ){
    setTimeout(()=>setMil(i), i*10)
  }
}


const [mil, setMil]=useState(0);

const a=(event)=>{
  event.target.style.color="black"
    event.target.style.backgroundColor="white";
    event.target.style.border="1px solid gray";
}
const b=(event)=>{
  event.target.style.color="white"
  event.target.style.background="black";
  
}

const c=(event)=>{
  event.target.style.color="black";
}

const d=(event)=>{
  event.target.style.color="white";
}


const [show, setShow] = useState(false);
const [show2, setShow2] = useState(false);
const [show3, setShow3] = useState(false);

const teslaAp= () => {
  setShow(!show);
};
const teslaAp2= () => {
  setShow2(!show2);
};
const teslaAp3= () => {
  setShow3(!show3);
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
      
      <div className='tesla-section1'>
      <Fade bottom>
        <h1 className='tesla-section2-h1'>DISCOVER THE  TESLA CYBERTRUCK</h1>
                </Fade>
      </div>

<Fade bottom>
<div className='tesla-section7'>
<img className='tesla-section5-img' src={cyberimg1} alt=''/>
<p className='tesla-section6-p'>The Tesla Cybertruck is an upcoming battery electric light-duty<br/> truck announced by Tesla, Inc. in November 2019. Three models<br/>  have been announced, with EPA range estimates of 400-800<br/>  kilometers (250-500 mi) and an estimated 0-100 km/h (0-62 mph)<br/>  time of 2.9-6.5 seconds, depending on the model. The stated goal<br/> of Tesla in developing the Cybertruck is to provide a sustainable<br/>  energy substitute for the roughly 6,500 fossil-fuel-powered trucks<br/>  sold per day in the United States of America. The base price of the <br/>rear-wheel drive (RWD) model of the vehicle was announced to be<br/> US$39,900, with all-wheel drive (AWD) models starting at US$49,900.</p>
</div>
</Fade>



<Fade bottom>
<div className='tesla-section9'>
  <Fade bottom>
<video className='tesla-section8-video' src="https://www.tesla.com/xNVh4yUEc3B9/performance_video_desktop.mp4" autoPlay loop muted></video>
</Fade>
</div>
</Fade>

<Fade bottom>
<div className='tesla-seccont'>
<div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
       
              </div>
            </div>
          ))} 
        </Slide>
      </div>
</div>
</Fade>

<Fade bottom>
<h1 className='tesla-section10'>How many miles <br/>can you go with a full charge ?</h1>
</Fade>
<Fade bottom>
<div className='tesla-section12'>
<div className='tesla-section11' onClick={teslaMil}><BsArrowDownCircle/></div>
</div>
</Fade>
<Fade bottom>
<h1 className='tesla-section13'>{mil}</h1>
</Fade>
<Fade bottom>
<hr className='tesla-sectionhr'/>
</Fade>
<Fade bottom>
  <h1 className='tesla-section16'>To get this incredible <br/> Tesla Cyber truck now,please go to Tesla's<br/> official website at the link below</h1>
</Fade>
<Fade bottom>
<div className='tesla-section14'>
<a onMouseEnter={a} onMouseLeave={b} className='tesla-section15'  href="https://www.tesla.com/cybertruck/design#payment">ORDER NOW</a>
</div>
</Fade>
<Fade bottom>
<hr className='tesla-sectionhr2'/>
</Fade>
<Fade bottom>
<h1 className='tesla-section18'>TESLA MODEL S PLAID</h1>
</Fade>
<Fade bottom>
<div className='tesla-section17'>
  <Fade bottom>
  <div className='tesla-section19'>
    <div className='tesla-section22'>
      <h2 className='tesla-section20'>396 mi</h2>
      <p className='tesla-section21'>Range (EPA est.)</p>
    </div>
      <div className='tesla-section22'>
        <h2 className='tesla-section20'>1-99 s</h2>
        <p className='tesla-section21'>0-60 mph*</p>
      </div>
      <div className='tesla-section22'>
        <h2 className='tesla-section20'>200 mph</h2>
        <p className='tesla-section21'>Top Speed*</p>
      </div>
      <div className='tesla-section22'>
        <h2 className='tesla-section20'>1,020 hp</h2>
        <p className='tesla-section21'>Horsepower</p>
      </div>
  </div>
</Fade>
<Fade bottom>
<div className='tesla-section23'>
  <a href="https://www.tesla.com/models/design#overview" className='tesla-section24'>ORDER NOW</a>
  <a href="https://www.tesla.com/drive?selectedModel=models" className='tesla-section25'>DEMO DRIVE</a>
   </div>
</Fade>
</div>
</Fade>
  

 <Fade bottom>
<h1 className='tesla-section27'>Interior of the Future</h1>
<div className='tesla-section26'></div>
<h1 className='tesla-section29'>Redesigned Second Row</h1>
<p className='tesla-section30'>Seating for three adults, with extra legroom,<br/> headroom and a stowable armrest with integrated storage and wireless charging.</p>
<Fade bottom>
<video className='tesla-section28' autoPlay loop muted src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-4-Second-Row-Desktop.mp4"></video>
   </Fade>
</Fade>


<Fade bottom>
<div className='tesla-section31'>
 <Fade bottom>
  <h2 className='tesla-section36'>Perfect Environment</h2>
  <p className='tesla-section37'>Air vents are hidden throughout the cabin, while <br/>tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.</p>
</Fade>

<Fade bottom>
  <div className='tesla-section33'>
<img className='tesla-section32' src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-A-Desktop"/>
<div>
<h3 className='tesla-section34'>Stay Connected</h3>
<p className='tesla-section35'>Instantly connect with multi-device Bluetooth, or fast<br/> charge devices with wireless and 36-watt USB-C charging.</p>
</div>
         </div>
</Fade>



    <Fade bottom>
<div className='tesla-section38'>
  <div>
  <h3 className='tesla-section39'>Immersive Sound</h3>
  <p className='tesla-section40'>A 22-speaker, 960-watt audio system with Active Road,<br/> Noise Reduction offers immersive listening and studio-<br/>grade sound quality.</p>
       </div>  
      <video className='tesla-section41' src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Grid-2-Audio-Desktop.mp4" autoPlay loop muted></video>
</div>
</Fade>


<Fade bottom>
<div className='tesla-section42'>
  <img className='tesla-section43' src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-D-Desktop" alt=''/>
<div>
  <h3 className='tesla-section44'>Room for Everything</h3>
  <p className='tesla-section45'>With front and rear trunks and fold-flat seats you can fit<br/> your bike without taking the wheel off—and your luggage<br/> too.</p>
</div>
               </div>
</Fade>

<Fade bottom>
<div className='tesla-section46'>
    <div>
  <h3 className='tesla-section47'>Relentless Performance</h3>
  <p className='tesla-section48'>Staggered, performance wheels and tires keep the car<br/> planted and help transfer maximum power down to the<br/> road.</p>
  </div>
<img className='tesla-section49' src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-A-Desktop-Global" alt=''/>
</div>
</Fade>

<Fade bottom>
<div className='tesla-section50'>
  <img className='tesla-section51' src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-B-Desktop-Global" alt=''/>
  <div>
    <h3 className='tesla-section52'>Optimized Aerodynamics</h3>
    <p className='tesla-section53'>Attention to detail on all exterior surfaces makes Model S<br/> the most aerodynamic production car on Earth.</p>
  </div>
</div>
</Fade>

<Fade bottom>
<div className='tesla-section54'>
     <div>
  <h3 className='tesla-section55'>Refined Styling</h3>
  <p className='tesla-section56'>An iconic silhouette meets refreshed, elegant proportions.</p>
       </div>  
  <img className='tesla-section57' src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-C-Desktop-Global" alt=''/> 
</div>
</Fade>
</div>
</Fade>

<Fade bottom>
  <h1 className='tesla-section58'>Features</h1>
  <p className='tesla-section59'>Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing<br/> functionality to make your car more capable over time, including:</p>
</Fade>
<Fade bottom>
  <div className='tesla-section62'>
  <button className='tesla-section61' onClick={teslaAp}>AUTOPILOT</button>
</div>
</Fade>
<Fade bottom>
{show && <video className='tesla-section60' src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model_S_Navigate_0-mp4.mp4" autoPlay loop muted></video>}
</Fade>
<Fade bottom>
  <div className='tesla-section63'>
    <button className='tesla-section64' onClick={teslaAp2}>SUMMON</button>
  </div>
</Fade>
<Fade bottom>
  {show2 && <video className='tesla-section60' src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/summon_1-mp4.mp4" autoPlay loop muted></video>}
</Fade>
<Fade bottom>
  <div className='tesla-section63'>
    <button className='tesla-section64' onClick={teslaAp3}>AUTOPARK</button>
  </div>
</Fade>
<Fade bottom>
  {show3 && <video className='tesla-section60' src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/parking-mp4.mp4" autoPlay loop muted></video>}
</Fade>

<Fade bottom>
  <h1 className='tesla-section65'>Please go up to experience <br/>these incredible Tesla cars again</h1>
</Fade>
<Fade bottom>
<div className="p10rank">
<div className='p9rank' onClick={suvTop}>
  <div className="p8rank"><TfiArrowUp/></div>
</div>
      </div>
</Fade>
 









<div className='ferrusection-18'>
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



   <p className='write-astmart-fixed'> Electric consumption and emission values of Tesla
    Cybetruck*;  Electric consumption combined: 400 KWH /500km (WLTP); Average charging time: 9 hours
    </p>

  



    </div>
  )
}

export default Tesla