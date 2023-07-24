import React from 'react'
import "./News.css"
import {Routes, Route, Link, NavLink,} from 'react-router-dom';
import newsimg from "./newsluximg.webp";
import newsdivo from "./divo.jpeg";
import huracannews from"./huracannews.jpeg";
import newslambo from "./manslambnews.webp";
import newsamartin from "./amartinnews.jpeg";
import newsmerc from "./concpremmerc.jpg";
import newsbmw from "./concprembmww.jpg";
import newsmclaren from "./concpremmclaren.jpg"
import newsrolls from "./rollstail.jpeg";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import { TfiArrowUp } from "react-icons/tfi"
import {RiTwitterLine} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import Fade from 'react-reveal';
import { BsArrowUpCircle } from 'react-icons/bs';


const divoEnter=(event)=>{
      event.target.style.color="white";
      event.target.style.background="black";
}

const divoLeave=(event)=>{
  event.target.style.color="black";
  event.target.style.background="white";
  event.target.style.border="1px solid gray"
}
const suvTop = () => {
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight * 0,
          behavior: "smooth"
        });
    }, 200);
  }

const News = () => {
  return (
    <div>
      <Fade bottom>
      <div className='news-section'>NEWS</div>
      <h1 className='newssection1-h1'>CARS</h1>
      <h1 className='newssection2-h1'>LUXURY WORLD</h1>
      <img className='newsimg1' src={newsimg} alt=''/>
      <h2 className='newslamboanniverh2'>7 MAY 2023</h2>
      <h3 className='newslamboanniverh3'>LAMBORGHINI anniversary</h3>
      <div className='newslamboanflex'>
      <h1 className='newslamboanniverh1'>HAPPY 60TH BIRTHDAY AUTOMOBILI LAMBORGHINI!</h1>
 <Link to='/lamborghinianniversary'><div><button className='newslamboanbtn' onMouseEnter={divoEnter} onMouseLeave={divoLeave}>READ MORE</button></div>
     </Link>     
      
      </div>
      <p className='newslamboooanp1'>Sixty years ago, precisely on May 7, 1963, “Automobili Ferruccio Lamborghini SAS” was<br/> registered as a company. </p>
      <h1 className='newssection3h1'>Keep up with the<br/> latest Luxury Cars news</h1>
      <div className='newsdivoflex'>
      <img className='newsdivo' src={newsdivo} alt=''/>
      <div>
      <p className='newsdivodatep1'>25 APRIL 2023</p>
      <h1 className='newsdivoh1'>BUGATTIN'S NEWEST AND THE MOST<br/> AGGRESSIVE CAR</h1>
<Link to='/bugattidivo'> <button className='newsdivobtn' onMouseEnter={divoEnter} onMouseLeave={divoLeave}>READ MORE</button></Link>      
            </div>
      </div>

      <div className='newsdivoflex'>
      <img className='newsdivo' src={huracannews} alt=''/>
      <div>
      <p className='newsdivodatep1'>20 APRIL 2023</p>
      <h1 className='newsdivoh1'>LAMBORGHINI HURACÁN STERRATO: <br/>CALIFORNIA DRIFTING</h1>
 <Link to='/lamborghinihuracan'><button className='newsdivobtn' onMouseEnter={divoEnter} onMouseLeave={divoLeave}>READ MORE</button></Link>     
            </div>
      </div>


      <div className='newsdivoflex'>
      <img className='newsdivo' src={newslambo} alt=''/>
      <div>
      <p className='newsdivodatep1'>25 MAY 2023</p>
      <h1 className='newsdivoh1'>LAMBORGHINI REVUELTO - MANSORY <br/>PREMIERE</h1>
<Link to="/lamborghinirevuelto"><button className='newsdivobtn' onMouseEnter={divoEnter} onMouseLeave={divoLeave}>READ MORE</button></Link>          
            </div>
      </div>

      <div className='newsdivoflex'>
      <img className='newsdivo' src={newsamartin} alt=''/>
      <div>
      <p className='newsdivodatep1'>27 MAY 2023</p>
      <h1 className='newsdivoh1'>ASTON MARTIN - MANSORY LAUNCHED <br/>PREMIERE</h1>
<Link to="/astonmartin"><button className='newsdivobtn' onMouseEnter={divoEnter} onMouseLeave={divoLeave}>READ MORE</button></Link>      
            </div>
      </div>

      <div className='newsdivoflex'>
      <img className='newsdivo' src={newsmerc} alt=''/>
      <div>
      <p className='newsdivodatep1'>21 MAY 2023</p>
      <h1 className='newsdivoh1'>MERCEDES AMG GTR - CONCEPT <br/>PREMIERE</h1>
<Link to="/mercedesamgconcept"><button className='newsdivobtn' onMouseEnter={divoEnter} onMouseLeave={divoLeave}>READ MORE</button>   </Link>      
      
            </div>
      </div>

      <div className='newsdivoflex'>
      <img className='newsdivo' src={newsbmw} alt=''/>
      <div>
      <p className='newsdivodatep1'>17 MAY 2023</p>
      <h1 className='newsdivoh1'>BMW X7 LAUNCHED YESTERDAY - CONCEPT <br/>PREMIERE</h1>
<Link to="/bmwx7"><button className='newsdivobtn' onMouseEnter={divoEnter} onMouseLeave={divoLeave}>READ MORE</button></Link>  
            </div>
      </div>

      <div className='newsdivoflex'>
      <img className='newsdivo' src={newsmclaren} alt=''/>
      <div>
      <p className='newsdivodatep1'>27 MAY 2023</p>
      <h1 className='newsdivoh1'>MCLAREN 720S LAUNCHED - CONCEPT <br/>PREMIERE</h1>
<Link to="/mclaren720s"><button className='newsdivobtn' onMouseEnter={divoEnter} onMouseLeave={divoLeave}>READ MORE</button></Link>       
            </div>
      </div>

      <div className='newsdivoflex'>
      <img className='newsdivo' src={newsrolls} alt=''/>
      <div>
      <p className='newsdivodatep1'>18 APRIL 2023</p>
      <h1 className='newsdivoh1'>ROLLS ROYCE BOAT TAIL: A ONCE IN A<br/> LIFETIME EXPERIENCE</h1>
<Link to="/rollsroyceboattail"><button className='newsdivobtn' onMouseEnter={divoEnter} onMouseLeave={divoLeave}>READ MORE</button></Link>      
    
            </div>
      </div>

      <Fade bottom>
    <h1 className='bcll33'>PLEASE GO ABOVE TO SEE <br/>AGAIN THE NEWS</h1>
</Fade>
<Fade bottom>
<div className="p10rank">
<div className='p9rank' onClick={suvTop}>
  <div className="p8rank" ><TfiArrowUp/></div>
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
  )
}

export default News