import React from 'react';
import "./LamborghiniUrus.css";
import lurus2 from "./lurus2.webp";
import lurus3 from "./lurus3.webp";
import Fade from 'react-reveal';
import lurus4 from "./lurus4.webp";
import lurus5 from "./lurus5.webp";
import lurus6 from "./lurus6.jpg";
import { Slide } from 'react-slideshow-image';
import { useState } from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import { Bs0Circle, BsXLg } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import lurus7 from "./urusmans2price.webp";
import lurus8 from "./lurus7.webp";
import { BsPlusCircle } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import lurusgall1 from "./urusmansprice.webp";
import lurusgall2 from "./urusmansory.webp";
import lurusgall3 from "./lurusgall3.webp";
import { TfiArrowDown, TfiArrowUp } from "react-icons/tfi"
import lurusgall5 from "./lurusgall5.jpg";
import{ BsArrowUpCircle } from "react-icons/bs";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";





const LamborghiniUrus  = () => {

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
  const divStyle = {
    backgroundSize: 'cover',
    height: '90vh',
  }
  const slideImages = [
    {
      url: lurus4,
      caption: "URUS S",
    },
    {
      url: lurus5,
      caption2: "URUS PERFORMANTE",
    },
  ];

const [urus, setUrus]=useState(false);
const cUrus=()=>{
  if (!urus) {
    setUrus(true)
  }
}
  
const cUrus2=()=>{
  setUrus(!urus)
  toUrus2()
}

const toUrus= () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 5.3,
      behavior: "smooth"
    });
  }, 200);
}

const toUrus2= () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 4.3,
      behavior: "smooth"
    });
  }, 200);
}
const toUrus3= () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 6.5,
      behavior: "smooth"
    });
  }, 200);
}

const [urus2, setUrus2]=useState(false);
const cUrus3=()=>{
  if (!urus2) {
    setUrus2(true)
  }
}
const cUrus4=()=>{
  setUrus2(!urus2)
}
const toUrus4= () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 5.4,
      behavior: "smooth"
    });
  }, 200);
}

const lurusUp= () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0,
      behavior: "smooth"
    });
  }, 200);
}

const lurusDown= () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0.977,
      behavior: "smooth"
    });
  }, 200);
}

const divStyle2 = {
  backgroundSize: 'cover',
  height: '100vh'
}
const slideImages2 = [
  {
    url: lurusgall1,
  },
  {
    url: lurusgall2,
  },
  {
    url: lurusgall3,
  },
  {
    url: lurusgall5,
  },
 
];

  return (
    <div>   
       <div className='lurus1'>
 <Fade bottom>
         <h1 className='lurus2'>LAMBORGHINI</h1>
         <h1 className='lurus3'>URUS</h1>
 </Fade>
 <Fade bottom>
 <div className="lurus3icon777">
    <div className="lurus2icon777" onClick={lurusDown}>
      <div className='lurus4'><TfiArrowDown/></div>
    </div>
</div>
</Fade>
        </div> 

      <Fade bottom>
     <div className='lurus5'>
        <img src={lurus3} className='lurus8' alt="" />
           <div>
         <img className='lurus6' src={lurus2} alt="" />
           <p className='lurus7'>Lamborghini Urus is the first Super Sport Utility Vehicle in the world,<br/> merging the soul of a super sports car with the practical functionality<br/> of an SUV. Powered by Lamborghini's 4.0-liter twin-turbo V8 engine,<br/> the Urus is all about a performance mindset that brings together <br/> fsun-to-drive and astounding vehicle capabilities. The design,<br/> performance, driving dynamics and unbridled emotion flow<br/> effortlessly into this visionary realization of authentic Lamborghini DNA.</p>
               </div>
        </div>  
  </Fade>    


<div className='lurus9'>
    <Fade bottom>
    <img className='lurus10' src={lurus6} alt=''/> 
    </Fade>
    <Fade bottom>
    <h1 className='lurus12'>DESIGN</h1>
    </Fade>
    <Fade bottom>
    <p className='lurus13'>A declaration of freedom, Urus enables you to discover any terrain, from track to<br/> sand, ice, gravel or rocks. It is the absolute all-round super sports car and more. <br/>It allows you to explore new paths and new ways to express yourself—to accept<br/> challenges confidently and to live life to the fullest. You are not afraid to go far: <br/>this is what you aspire to. Unlock any road, unlock your personality.
 </p>
 </Fade>
 <Fade bottom>
    <img className='lurus11' src={lurus7} alt="" />
    </Fade>
</div>


<Fade bottom>
  <h1 className='lurus14'>CHOOSE YOUR URUS</h1>
</Fade>

<Fade bottom>
<div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                 <span style={spanStyle}>{slideImage.caption}</span> 
                 <span style={spanStyle2}>{slideImage.caption2}</span>   
              </div>
            </div>
          ))} 
        </Slide>
      </div>
</Fade>
      
  

<div className='lurus15'>
  <Fade bottom>
  <img className='lurus16' src={lurus8} alt=''/>
  </Fade>
  <div>
    <Fade bottom>
  <h1 className='lurus17'>CONNECT WITH YOUR<br/> URUS PERFORMANTE</h1>
  <p className='lurus18'>The exclusive and advanced suite of connected<br/> technologies is ready to raise driving engagement<br/> to a level never experienced before. Lamborghini<br/> Connect gives Urus Performante drivers peace of<br/> mind when they are not at the wheel and provides <br/>always-up-to-date functions on board. The Urus<br/> does not use Lamborghini's hallmark of naturally<br/> aspirated V10 (as used in the concept) or V12 engines.<br/> The Urus accelerates from 0 to 62 mph (100 km/h)<br/> in 3.6 seconds and reaches a top speed of 207 mph <br/>(350 km/h). </p>
</Fade>
<Fade bottom>
<div className='lurus20'>
    <div className="l777urus45"onClick={cUrus}>
<div className='lurus19'><AiOutlinePlus/></div>
   </div>
<div className='lurus21'>Connected services<br/> of URUS</div>
    </div>
          </Fade>
  </div> 
</div>
<Fade bottom>
{urus && <div >

  <div className='lurus44'>
    <div className="l777urus45">
  <div className='lurus45' onClick={cUrus2}><BsXLg /></div>
           </div>
  </div>




  <div className='lurus22'>
<div className='lurus23'>
<h1 className='lurus24'>CONNECTED NAVIGATION SERVICES</h1>
<p className='lurus25'>Real-time travel, route and destination updates.</p>
<p className='lurus26'>Online Smart Routing</p>
<hr className='lurushr1'/>
<p className='lurus26-1'>First/Last Mile Navigation</p>
<hr className='lurushr1'/>
<p className='lurus26-1'>Traffic Light information</p>
<hr className='lurushr1'/>
<p className='lurus26-1'>Local Hazard Information</p>
<hr className='lurushr1'/>
<p className='lurus26-1'>Wechat POI Integration</p>
<hr className='lurushr1'/>
</div>

<div className='lurus27'>
  <h1 className='lurus28'>PEACE OF MIND</h1>
  <p className='lurus25'>The maximum convenience in managing the status and condition of your car.</p>
  <p className='lurus29'>Your Urus at your fingertips whenever and wherever you want.</p>
  <p className='lurus30'>Vehicle Status Report</p>
  <hr className='lurushr1'/>
  <p className='lurus26-1'>Remote Lock / Unlock</p>
  <hr className='lurushr1'/>
  <p className='lurus26-1'>Remote Horn and Light</p>
  <hr className='lurushr1'/>
  <p className='lurus26-1'>Car Finder</p>
  <hr className='lurushr1'/>
  <p className='lurus26-1'>Remote Trip Statistics</p>
  <hr className='lurushr1'/>
   </div>
</div>


<div className='lurus31'>
     <div>
<h1 className='lurus32'>SAFETY AND SECURITY</h1>
<p className='lurus33'>Advanced assistance services for monitoring the car and ensuring <br/> the safety ofthe people onboard.</p>
<p className='lurus34'>Era-Glonass</p>
<hr className='lurushr2'/>
<p className='lurus35'>Anti Theft Alarm Notification</p>
<hr className='lurushr2'/>
<p className='lurus35'>Valet Alert</p>
<hr className='lurushr2'/>
<p className='lurus35'>Curfew Alert</p>
<hr className='lurushr2'/>
<p className='lurus35'>Speed Alert</p>
<hr className='lurushr2'/>
     </div>


<div className='lurus40'>
<h1 className='lurus36'>ENTERTAINMENT</h1>
<p className='lurus33'>Cutting-edge features that make the travel experience even more<br/>  enjoyable and engaging.</p>
<p className='lurus34'>Hybrid Radio</p>
<hr className='lurushr2'/>
<p className='lurus35'>Online Radio</p>
<hr className='lurushr2'/>
<p className='lurus35'>Song Recognition</p>
<hr className='lurushr2'/>
<p className='lurus35'>Smartphone Interface</p>
<hr className='lurushr2'/>
<p className='lurus35'>Natural Language Interaction</p>
<hr className='lurushr2'/>
</div>

</div>

<Fade bottom>
<p className='lurus41'>*The Lamborghini Connect services vary according to model and country availability. The information on this page is intended to<br/> provide a general overview. For service availability in your country please contact your Lamborghini Dealer.</p>
</Fade>
  </div>}
  
  
</Fade>
  



<Fade bottom>
<h1 className='bdivotechspech1'>Technical Specifications</h1>
</Fade>
<Fade bottom>
<div className='bbb'>
<h1 className='bdivospeedl-h1'>SPEED</h1>
<h1 className='bdivospeed2-h1'>350 KM/H</h1>
</div>
<div className='bspeedline'></div>

<div className='bbb2'>
  <h1 className='bdivoengine-h1'>ENGINE</h1>
  <h1 className='bdivoengine2-h1'>4.0 W12</h1>
</div>
<div className='bspeedline'></div>

<div className='bbb3'>
  <h1 className='bdivohpower-h1'>HORSEPOWER</h1>
  <h1 className='bdivohpower2-h1'>700</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb4'>
  <h1 className='bdivotorque-h1'>TORQUE</h1>
  <h1 className='bdivotorque2-h1'>1000NM</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb5'>
  <h1 className='bdivotime-h1'>0-100 KM/H</h1>
  <h1 className='bdivotime2-h1'>3.3 S</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb6'>
  <h1 className='bdivotrans-h1'>TRANSMISSION</h1>
  <h1 className='bastmarttrans2-h1'>7 SPEED DSG</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb7'>
  <h1 className='bdivoweight-h1'>WEIGHT</h1>
   <h1 className='bastmartweight2-h1'>2.595 KG</h1>
</div>
<div className='bspeedline'></div>
<div className='bbb8'>
  <h1 className='bdivoprice-h1'>PRICE</h1>
  <h1 className='bastmartprice2-h1'>300.000$</h1>
</div>
<div className='bspeedline'></div>
</Fade>

<Fade bottom>
<div className='lurus50'>
  <div className='lurus52'>
     <div className="l777urus45">
  <div className='lurus51' onClick={cUrus3}><AiOutlinePlus/></div>
      </div>  
  <p className='lurus53'>Expand all<br/>Technical Specifications</p>
      </div>  
</div>
</Fade>

<Fade bottom>

{urus2 && <div>
  <div className='lurus44'>
    <div className="l777urus45">
  <div className='lurus45' onClick={cUrus4}><BsXLg /></div>
           </div>
  </div>

  <div className='lurus54'>
<div className='lurus55'>
  <h1 className='lurus56'>CONSUMPTION</h1>
  <div className='lurus57'>
    <p className='lurus58'>COMBINED CONSUMPTION*</p>
    <p className='lurus59'>14,1 l/100km (WLTP)</p>
  </div>
  <hr className='lurushr2'/>
  <div className='lurus60'>
    <p className='lurus61'>COMBINED CO2 EMISSIONS*</p>
    <p className='lurus62'>320 g/km (WLTP)</p>
  </div>
  <hr className='lurushr2'/>

<h1 className='lurus70'>ENGINE</h1>
<div className='lurus71'>
  <p className='lurus73'>NUMBER OF CYLINDERS</p>
  <p className='lurus74'>8</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>DISPLACEMENT</p>
  <p className='lurus77'>3,996 cm³ (243.85 cu in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BORE X STROKE</p>
  <p className='lurus77'>86 x 86 mm (3.39 X 3.39 in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. POWER</p>
  <p className='lurus77'>666 CV (490 kW) @ 6,000 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. TORQUE</p>
  <p className='lurus77'>850 Nm (626.93 lb.-ft.) @ 2,250-4,500 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAXIMUM ENGINE SPEED</p>
  <p className='lurus77'>6,800 rpm</p>
</div>
<hr className='lurushr2'/>
</div>


<div className='lurus63'>
  <h1 className='lurus68'>WHEELS</h1>
  <div className='lurus65'>
    <p className='lurus66'>FRONT RIMS</p>
    <p className='lurus67'>10Jx22" ET20</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR RIMS</p>
    <p className='lurus676'>11.5Jx22" ET14</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>FRONT TIRES</p>
    <p className='lurus677'>PIRELLI P ZERO 285/40 ZR22</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR TIRES</p>
    <p className='lurus678'>PIRELLI P ZERO 325/35 ZR22</p>
  </div>
  <hr className='lurushr2'/>

<h1 className='lurus70'>PERFORMANCE</h1>
<div className='lurus71'>
  <p className='lurus73'>TOP SPEED</p>
  <p className='lurus74'>350 km/h</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-100 KM/H (0-62 MPH)</p>
  <p className='lurus77'>3.3 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-200 KM/H (0-124 MPH)</p>
  <p className='lurus77'>11.5 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BRAKING 100-0 KM/H (62-0 MPH)</p>
  <p className='lurus77'>32,9 m</p>
</div>
<hr className='lurushr2'/>
    </div>
  </div>
</div>}


</Fade>




<Fade bottom>
<div className="slide-container">
        <Slide>
         {slideImages2.map((slideImage2, index)=> (
            <div key={index}>
              <div style={{ ...divStyle2, 'backgroundImage': `url(${slideImage2.url})` }}>  
              </div>
            </div>
          ))} 
        </Slide>
      </div>
</Fade>
    
  
  
 

<Fade bottom>
<h1 className='lurus93'>Please go up to re-experience<br/> this incredible world of Lamborghini urus</h1>
</Fade>

<Fade bottom>
<div className="p10rank">
<div className='p9rank'>
  <div className="p8rank" onClick={lurusUp}><TfiArrowUp/></div>
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


 <p className='write-astmart-fixed'>Fuel consumption and emission values of Urus Performante*; Fuel consumption combined: 14,1 l/100km (WLTP); CO2-emissions combined: 320 g/km (WLTP)</p>



     
      </div>
  )
}

export default LamborghiniUrus 