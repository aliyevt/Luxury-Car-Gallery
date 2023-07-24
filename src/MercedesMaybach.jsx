import React from 'react';
import "./MercedesMaybach.css";
import Fade from 'react-reveal';
import mm1 from "./mercm5.png";
import mm2 from "./mercm7.jpeg";
import { TfiArrowUp } from "react-icons/tfi"
import mm3 from "./mercm8.jpg";
import mm4 from "./mercm9.webp";
import mm5 from "./mercm10.webp";
import mm6 from "./mercm11.jpeg";
import mm7 from "./mercm12.jpg";
import mm8 from "./mercm6.jpg";
import mm9 from "./mercm3.jpg";
import { useState } from 'react';
import mm10 from "./mercm13.jpg";
import mm11 from "./mercm14.jpg";
import mm12 from "./mercm15.jpeg";
import mm13 from "./mercm16.webp";
import mm14 from "./mercm17.jpeg";
import mm15 from "./mercm18.jpg";
import mm16 from "./mercm1.jpg";
import mm17 from "./mercm19.webp";
import mm18 from "./mercm20.jpg";
import mm20 from "./mercm2.jpg";
import mm24 from "./mercm4.jpg";
import mm25 from "./mercm25.jpg";
import mm21 from "./mercm21.jpg";
import mm22 from "./mercm22.webp";
import mm23 from "./mercm23.jpg";
import mm26 from "./mercm24.webp";
import ImageSlider18 from './ImageSlider18';
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









const MercedesMaybach = () => {
    const [images1, setImages1] = useState([mm3, mm2]);
    const [images2, setImages2] = useState([mm4, mm5]);
    const [images3, setImages3] =  useState([mm7, mm6]);
    const [images4, setImages4] =  useState([mm8, mm9]);
    const [selectedgene, setSelectedGene] = useState(images1);
    const handleButton1Click = () => {
        setSelectedGene(images1);
      };
    const handleButton2Click = () => {
        setSelectedGene(images2);
      };
    const handleButton3Click = () => {
        setSelectedGene(images3);
      }; 
      const handleButton4Click = () => {
        setSelectedGene(images4);
      }; 
      const [images5, setImages5] = useState([mm10, mm11]);
      const [images6, setImages6] = useState([mm12, mm13]);
      const [images7, setImages7] =  useState([mm14, mm15]);
      const [selectedint, setSelectedInt] = useState(images5);
      const handleButton5Click = () => {
          setSelectedInt(images5);
        };
      const handleButton6Click = () => {
          setSelectedInt(images6);
        };
      const handleButton7Click = () => {
          setSelectedInt(images7);
        }; 
      const [images8, setImages8] = useState([mm16, mm17]);
      const [images9, setImages9] = useState([mm18, mm20]);
      const [images10, setImages10] =  useState([mm24, mm25]);
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
     const slides = [
        {url: mm21},
        {url: mm22},
        {url: mm23},
        {url: mm26},
        {url: mm14},
      ];
     const containerStyles = {
      width: "1519px",
      height: "700px",
      margin: "0 auto",
      marginTop: "-7px",
     }
     const rTop = () => {
        setTimeout(() => {
          window.scrollTo({
          top: window.innerHeight * 0,
          behavior: "smooth"
        });
      }, 200);
    }  





  return (
    <div>
     <div className="mm">
        <Fade bottom>
        <h1 className="mm2">MERCEDES</h1>
        <h1 className="mm3">MAYBACH</h1>
        </Fade>
        </div>   
<Fade bottom>
    <h1 className="mm4">LET'S LOOK AT<br/> THE MERCEDES MAYBACH</h1>
    <div className="mm5">
        <img src={mm1} alt="" className="mm6" />
        <div className='mm9'>
        <h1 className="mm7">WHAT IS THE MERCEDES MAYBACH ?</h1>
        <p className="mm8">The Mercedes-Benz S-Class, formerly known as Sonderklasse (German for <br/>"special class", abbreviated as "S-Klasse"), is a series of full-sized luxury<br/>  sedans, limousines and armored sedans produced by the German<br/> automaker Mercedes-Benz. The S-Class is the designation for top-of-the-<br/>line Mercedes-Benz models and was officially introduced in 1972 with the W116,<br/> and has remained in use ever since. The S-Class is the flagship vehicle for<br/> Mercedes-Benz. In 2009, Mercedes-Benz launched a long-wheelbase version<br/> of the S-Guard, known as the Pullman Guard.</p>
        <p className="mm10">* The S-Class has debuted many of the company's latest innovations, including drivetrain<br/> technologies, interior features, and safety systems (such as the first seatbelt pretensioners).</p>
        </div>
    </div>
    <Fade bottom>
    <h1 className="mm11">FROM PAST TO FUTURE</h1>
    <h1 className="mm12">MERCEDES MAYBACH</h1>
    </Fade>
    <Fade bottom>
    <div className="mm13">
        <button className="mm14" onClick={handleButton1Click}>MERCEDES W116</button>
        <button className="mm15" onClick={handleButton2Click}>MERCEDES W140</button>
        <button className="mm15" onClick={handleButton3Click}>MERCEDES W222</button>
        <button className="mm15" onClick={handleButton4Click}>MERCEDES W223</button>
    </div>
    </Fade>
    <Fade bottom>
    <div className="rrp37">
    {selectedgene.map((image) => (
        <div className='rrp43'>
      <img src={image} className='rrp42' alt="image" />
       </div>
    ))}
</div>
  </Fade>
<h1 className="mm16">DISCOVER THE INTERIOR</h1> 
<h1 className="mm17"> FROM PAST TO THE FUTURE</h1>
<Fade bottom>
    <div className="mm13">
        <button className="mm18" onClick={handleButton5Click}>MERCEDES W140</button>
        <button className="mm19" onClick={handleButton6Click}>MERCEDES W222</button>
        <button className="mm19" onClick={handleButton7Click}>MERCEDES W223</button>
    </div>
    </Fade>
    <Fade bottom>
    <div className="rrp37">
    {selectedint.map((immage) => (
        <div className='rrp43'>
      <img src={immage} className='rrp42' alt="image" />
       </div>
    ))}
</div>
  </Fade>
<Fade bottom>
<h1 className="mm20">look at the mercedes <br/>maybach from every side</h1>
</Fade>
<Fade bottom>
<div className="mm13">
        <button className="mm21" onClick={mmClick1}>FRONT</button>
        <button className="mm22" onClick={mmClick2}>BACK</button>
        <button className="mm22" onClick={mmClick3}>SIDE</button>
</div>
<Fade bottom>
    <div className="rrp37">
    {selectedside.map((immmage) => (
        <div className='rrp43'>
        <img src={immmage} className='rrp42' alt="image" />
        </div>
    ))}
</div>
  </Fade>
    </Fade>
 <div style={containerStyles}> 
  <ImageSlider18 slides={slides}/>
</div>
<Fade bottom>
<h1 className="rrp48">PLEASE GO ABOVE TO RE-EXPERIENCE<br/> THIS INCREDIBLE WORLD OF MERCEDES MAYBACH</h1>
</Fade>
<Fade bottom>
<div className="p10rank">
<div className='p9rank' onClick={rTop}>
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
  )
}

export default MercedesMaybach