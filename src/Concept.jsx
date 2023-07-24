import React from 'react'
import { useState } from 'react'
import './Concept.css'
import{ BsArrowDownCircle } from "react-icons/bs";
import {Routes, Route, Link, NavLink,} from 'react-router-dom';
import conc1img from './concept.jpeg';
import concgal2 from "./concgal2.jpg";
import concgal3 from "./c777oncept.webp";
import concgal4 from "./concgal4.jpg";
import conc from "./concgal0.png"; 
import concgal5 from "./concgal5.jpg";
import { TfiArrowUp } from "react-icons/tfi";
import { TfiArrowDown } from "react-icons/tfi"
import concgal6 from "./concept777.jpg";
import concgal7 from "./con2c777.jpg";
import { Slide } from 'react-slideshow-image';
import concpremmerc from "./concpremmerc.jpg";
import concpremmclaren from "./concpremmclaren.jpg";
import concprembmww from "./concprembmww.jpg";
import conctruck from './conctruck.jpg';
import concspectruck from "./concspectruck.jpg";
import{ BsArrowUpCircle } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import mamg from "./mamg3.webp";
import Fade from 'react-reveal';
import { BsXLg } from "react-icons/bs";


const Concept = () => {



 
  const spanStyle2 = {
    color: 'black',
    fontSize: '87px',
    position: 'relative',
    fontWeight: "900",
    top: '144px',
    left: "150px",
  }
  const spanStyle3 = {
    color: 'white',
    fontSize: '81px',
    position: 'relative',
    fontWeight: "900",
    top: "127px",
    left: "130px",
  }
  const spanStyle4 = {
    color: 'white',
    letterSpacing: "3px",
    fontWeight: "900",
    fontSize: '81px',
    position: 'relative',
    top: '107px',
    left: "110px",
  }
  const spanStyle5 = {
    color: "white",
    fontWeight: "900",
    fontSize: '83px',
    position: 'relative',
    top: '117px',
    left: "130px",
  }
  const spanStyle6 = {
    color: 'white',
    fontWeight: "900",
    fontSize: '83px',
    marginTop: '200px',
    position: 'relative',
    top: '87px',
    left: "130px",
  }
  const spanStyle7 = {
    color: 'white',
    fontWeight: "900",
    fontSize: '83px',
    marginTop: '200px',
    position: 'relative',
    top: '130px',
    left: "107px",
  }













  const divStyle = {
    backgroundSize: 'cover',
    objectFit: "cover",
    marginLeft: "-0.5px",
    height: '110vh'
  }
  const slideImages = [
   
    {
      url:concgal2,
      caption2 : "AUDI RS7",
    },
  
    {
       url: concgal3, 
       caption3: "CHEVROLET CAMARO",
    },
    {
      url: concgal4,
      caption4: "BMW 7 SERIES",
    },
    {
      url: mamg,
      caption5: "MERCEDES AMG",
    },
    {
      url: concgal6,
      caption6: "CADILLAC CTS"
    },
    {
      url: concgal7,
      caption7: "ASTON MARTIN"
    }
  ];






  const seeMoreenter = (event)=>{
    event.target.style.background = "white"
    event.target.style.color = "black"
    event.target.style.border = "1px solid gray"
    } 
  const seeMoreleave = (event)=>{
    event.target.style.background  ="black"
    event.target.style.color = "white"
  }



const [truck, setTruck]=useState(false);
const cTruck = ()=>{
  if (!truck) {
    setTruck(true);
  }
}
const notCancel=()=>{
  setTruck("");
}

const mTruckEnter =(event)=>{
   event.target.style.color="white"
   event.target.style.background="black"
}
const mTruckLeave =(event)=>{
  event.target.style.color="black"
  event.target.style.background="white"
  event.target.style.border="1px solid gray"
}

const mTruck2Enter =(event)=>{
  event.target.style.color="black"
  event.target.style.background="white"
}
const mTruc2kLeave =(event)=>{
 event.target.style.color="white"
 event.target.style.background="black"
}

const [truck2, setTruck2]=useState(false);
const cSpecTruck = ()=>{
   if (!truck2) {
      setTruck2(true)
   }
}
const close777C2oncept=()=>{
  setTruck2("")
}

const [cyber, setCyber]=useState(false);
const cyberTruck = ()=>{
if (!cyber) {
  setCyber(true)
}
}
const close777Concept=()=>{
  setCyber("")
}
const scrollUpConcept = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 1.15,
      behavior: "smooth"
    });
  }, 200);
}

const cyberEnter = (event)=>{
   event.target.style.color="white"
   event.target.style.background="black"
}
const cyberLeave =(event)=>{
  event.target.style.color="black"
  event.target.style.background="white"
  event.target.style.border="1px solid gray"
}

const concUp =()=>{
  setTimeout(()=>{
    window.scrollTo({
     top:0,
     behavior: "smooth"
    })
 },100) 
}



  return (
    <div>
<div className='concept'>
  <Fade bottom>
  <h1 className='conc-h1'>Discover the CONCEPT CARS</h1>
  <h1 className='conc2-h1'>MORE LEARN</h1>
  </Fade>
  <Fade bottom>
  <div className="conc3icon777">
     <div className="conc2icon777" onClick={scrollUpConcept}>
  <div className='conciconup'><TfiArrowDown/></div>
     </div>
</div>
</Fade>
</div>  




<Fade bottom>
<h1 className='conc3h1'>Why the Concept Cars Look<br/>  Like Spaceships?</h1>
<div className='concimgflex'>
<img className='conc1img' src={conc1img} alt="" />
<div>
<p className='concwhat-p1'>A concept car (also known as a concept vehicle, show vehicle or prototype)<br/> is a car made to showcase new styling and/or new technology. They are<br/> often exhibited at motor shows to gauge customer reaction to new and<br/> radical designs which may or may not be mass-produced. General Motors<br/> designer Harley Earl is generally credited with inventing the concept car,<br/> and did much to popularize it through its traveling Motorama shows <br/>of the 1950s. Concept cars never go into production directly. In modern<br/> times all would have to undergo many changes before the design is<br/> finalized for the sake of practicality, safety, regulatory compliance, and cost. </p>

<p className='concwhat-p2'>Concept cars are often radical in engine or design. Some use<br/> non-traditional, exotic, or expensive materials, ranging from<br/> paper to carbon fiber to refined alloys. Others have unique<br/> layouts, such as gullwing doors, 3 or 5 (or more) wheels, or <br/>special abilities not usually found on cars. Because of these<br/> often impractical or unprofitable leanings, many concept<br/> cars never get past scale models or even drawings in<br/> computer design.</p>
      </div>
</div>
</Fade>
<Fade buttom>
<h1 className='concrevih1'>LET'S TAKE A<br/> REVIEW AT THE CONCEPT CARS</h1>
  </Fade>
       <Fade bottom>
<div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                 <span style={spanStyle2}>{slideImage.caption2}</span>  
                 <span style={spanStyle3}>{slideImage.caption3}</span>  
                 <span style={spanStyle4}>{slideImage.caption4}</span>  
                 <span style={spanStyle5}>{slideImage.caption5}</span>  
                 <span style={spanStyle6}>{slideImage.caption6}</span>  
                 <span style={spanStyle7}>{slideImage.caption7}</span>  
              </div>
            </div>
          ))} 
        </Slide>
      </div>
   </Fade>

<Fade bottom>
<div className='concnews'>NEWS</div>
<h1 className='concnewsmerc'>MERCEDES AMG GTR</h1>
<div className='concmercflex'>
      <div className='conczoommerc'>
<img src={concpremmerc} alt='' />
      </div>
      <div>
<p className='concpremmercp1'>21 MAY 2023</p>
<h1 className='concpremmerch1'>MERCEDES AMG GTR - CONCEPT<br/> PREMIERE</h1>
<Link to="/mercedesamgconcept"><button className='concpremmercbtn'>READ MORE</button></Link>

       </div>
</div>
</Fade>
<Fade bottom>
<h1 className='concnewsmerc'>BMW X7</h1>
<div className='concmercflex'>
      <div className='conczoommerc'>
<img src={concprembmww} alt='' />
      </div>
      <div>
<p className='concpremmercp1'>17 MAY 2023</p>
<h1 className='concpremmerch1'>BMW X7 LAUNCHED YESTERDAY - CONCEPT<br/> PREMIERE</h1>
<Link to="/bmwx7"><button className='concprembmwbtn'>READ MORE</button></Link>

       </div>
</div>
</Fade>

<Fade bottom>
<h1 className='concnewsmerc'>MCLAREN 720S</h1>
<div className='concmercflex'>
      <div className='conczoommerc'>
<img src={concpremmclaren} alt='' />
      </div>
      <div>
<p className='concpremmercp1'>27 MAY 2023</p>
<h1 className='concpremmerch1'>MCLAREN 720S LAUNCHED  - CONCEPT<br/> PREMIERE</h1>
<Link to="/mclaren720s"><button className='concpremmcbtn'>READ MORE</button></Link>

       </div>
</div>
</Fade>
<Fade bottom>
<div className='concnewscenter'>
<Link to="/news"><button className='concnewsbtn' onMouseEnter={seeMoreenter} onMouseLeave={seeMoreleave}>SEE ALL</button></Link>
</div>
<h1 className='conctruckh1'>Take a look at these Concept trucks</h1>
</Fade>
<Fade bottom>
<div className='conctruckflex'>
<img className='conctruck' src={conctruck} />
<div>
<h1 className='conctruck2-h1'>Mercedes premiered its<br/> new concept truck</h1>
<h1 className='conctruck3-h1'>It is expected to be<br/> released in 2027</h1>
<button className='conctruckbtn' onClick={cTruck} onMouseEnter={mTruckEnter} onMouseLeave={mTruckLeave} >HOW MUCH IS THE PRICE ?</button>
{truck &&<div className='cmerctruck'> 
  <p className='cmerctruckp1'>It is estimated that the price of these concept <br/>
   Mercedes trucks will start at $ 500,000 and go<br/> up to $ 1M. For more detailed information and<br/>  other models, please go to the official page of<br/> MERCEDES BENZ.</p> 
   <div className='bsxlg' onClick={notCancel}><BsXLg/></div>
  </div>}
     </div>
   
</div>
</Fade>

<Fade bottom>
<div className='cspectruckflex'>
<img src={concspectruck} className='concspectruck' alt=''/>
     <div>
<h1 className='cspectruckh1'>These Concept Trucks<br/> look like something out<br/> of a cartoon</h1>
<button className='cspectruckbtn' onClick={cSpecTruck} onMouseEnter={mTruckEnter} onMouseLeave={mTruckLeave}>DO THEY REALLY EXIST ?</button>

{truck2 && 
     <div className='cspectruck'>
<p className='cspectruckp1'>These concept trucks are bought by<br/> collectors at auctions. So far, only 5<br/> units have been produced, and each of them <br/>takes months to produce. PRICES It starts at<br/> $700.000 and goes up to $5m.</p>   
<div className='bsxlg777' onClick={close777C2oncept}><BsXLg/></div>
 </div>}
     </div>
</div>
</Fade>

<Fade bottom>
<div className='conceptteslatruck'>
<h1 className='concteslacyberh1'>TESLA PREMIERED ITS NEW  CYBERTRUCK</h1>
<h1 className='concteslacyber2h1'>BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR</h1>
</div>
<div className='cwhatcyberbtn'>
<button className='cwhatcyber' onMouseEnter={cyberEnter} onMouseLeave={cyberLeave} onClick={cyberTruck}>WHAT IS THE CYBERTRUCK ?</button>
</div>
</Fade>
{cyber && 
<div className='flexcyberbtn'>
     <Fade bottom> 
<div className='cyberbtndiv'>
  <p className='concadd3'>The Tesla Cybertruck is an upcoming battery electric light-duty truck announced by Tesla, Inc. in November 2019. Three models have been announced, with EPA range estimates of 400-800 kilometers (250-500 mi) and an estimated 0-100 km/h (0-62 mph) time of 2.9-6.5 seconds, depending on the model. The stated goal of Tesla in developing the Cybertruck is to provide a sustainable energy substitute for the roughly 6,500 fossil-fuel-powered trucks sold per day in the United States of America. The base price of the rear-wheel drive (RWD) model of the vehicle was announced to be US$39,900, with all-wheel drive (AWD) models starting at US$49,900.</p>
<img src={conc} className='concadd2' alt="" />
<div className='conc777x' onClick={close777Concept}><BsXLg/></div>
       </div>
  </Fade> 


      </div>}


<Fade bottom>
<h1 className='conceptscrollup'>GO UP TO EXPERIENECE<br/> THIS INCREDIBLE WORLD OF concept AGAIN</h1>
<div className="p10rank">
<div className='p9rank' onClick={concUp}>
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

export default Concept