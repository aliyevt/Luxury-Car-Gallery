import React from 'react';
import "./Gallery.css";
import { useState } from 'react';
import divo from "./divo.jpeg";
import eqs2 from "./eqs2.jpg";
import huracan from "./huracan5.webp";
import ford from "./fordf150slide.jpg"
import merg600 from "./gls600slide.jpg";
import lurus from "./lurus1.webp";
import rolls from "./rollsphantom.jpg";
import bmwx7 from "./bmwx7img3.jpg"; 
import mc1 from "./mclarenimg4.jpg";
import tesla from "./tesla5.jpg";
import astmart from "./astmart5.jpg";
import divo2 from "./bdivo4.jpg";
import bent from "./bentleymansory.jpg";
import chiron from "./chiron1.jpeg";
import chiron2 from "./chiron2.jpeg";
import chiron3 from "./chiron4.jpeg";
import mercg from "./mg63amg1.jpg";
import cad from "./cad9.jpg";
import audi from "./audigerman.jpg";
import rolls2 from "./phantom.jpeg";
import glsm from "./glsmaybach600.jpg";
import lurusm from "./urusmansory.webp";
import cad2 from "./cad7.jpg";
import mercss from "./mercedesgallery.webp";
import dodge from "./off2.jpg";
import chevy from "./off5.jpg";
import bbent from "./suvbentaygaprice.jpg";
import lhur from "./huracan2.jpg";
import mmerc from "./mercsmans2.webp";
import bbsbent from "./norbentfspur.jpg";
import ibmw from "./bmwx7img7.webp";
import ffordi from "./offimg1.jpg";
import iibmw from "./bmwx7img2.jpg";
import itesla from "./concteslacyber.webp";
import ircul from "./suvcullinan.jpeg";
import irbt from "./rollstail.jpeg";
import imgast from "./astmart3.jpg";
import cadlimo from "./theone.webp";
import mcimg from "./mclaren.jpeg";
import { GoSearch } from "react-icons/go";
import { BsXLg } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import Fade from 'react-reveal';
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import { TfiArrowUp } from "react-icons/tfi"
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Gallery = () => {
    const [searchTerm, setSearchTerm] = useState("");

    

    const questions = [
            
         {
            "id": 1,
            "image": huracan,
            "title":"LAMBORGHINI HURACAN",
            "Description":"THIS IS A HYPERCAR"  
        },
        {
            "id": 2,
            "image": eqs2,
            "title":"MERCEDES EQS",
            "Description":"THIS IS A SEDAN CAR"  
        },
        {
            "id": 3,
            "image": divo,
            "title":"BUGATTI DIVO",
            "Description":"THIS IS A HYPERCAR" 
        },
        {
            "id": 4,
            "image": ford,
            "title":"FORD F-150",
            "Description":"THIS IS A PICKUP CAR" 
        },
        {
            "id": 5,
            "image": merg600,
            "title":"MERCEDES GLS600",
            "Description":"THIS IS A SUV CAR" 
        },
        {
            "id": 6,
            "image": lurus,
            "title":"LAMBORGHINI URUS",
            "Description":"THIS IS A SPORT-SUV CAR" 
        },
        {
            "id": 7,
            "image": rolls,
            "title":"ROLLS ROYCE PHANTOM",
            "Description":"THIS IS A SEDAN CAR" 
        },
        {
            "id": 8,
            "image": bmwx7,
            "title":"BMW X7",
            "Description":"THIS IS A SUV CAR" 
        },
        {
            "id": 9,
            "image": mc1,
            "title":"MCLAREN 720S",
            "Description":"THIS IS A HYPERCAR" 
        },
        {
            "id": 10,
            "image": tesla,
            "title":"TESLA MODEL S PLAID",
            "Description":"THIS IS A SEDAN CAR" 
        },
        {
            "id": 11,
            "image": astmart,
            "title":"ASTON MARTIN VANTAGE",
            "Description":"THIS IS A HYPERCAR" 
        },
        {
            "id": 12,
            "image": divo2,
            "title":"BUGATTI DIVO",
            "Description":"THIS IS A HYPERCAR" 
        },
        {
            "id": 13,
            "image": bent,
            "title":"BENTLEY FLYING SPUR",
            "Description":"THIS IS A SEDAN CAR" 
        },
        {
            "id": 14,
            "image": chiron,
            "title":"BUGATTI CHIRON",
            "Description":"THIS IS A HYPERCAR" 
        },
        {
            "id": 15,
            "image": mercg,
            "title": "MERCEDES G63 AMG",
            "Description":"THIS IS A SUV CAR" 
       },
       {
        "id": 16,
        "image": cad,
        "title": "CADILLAC ESCALADE",
        "Description":"THIS IS A SUV CAR" 
      },
      {
        "id": 17,
        "image": audi,
        "title": "AUDI A8",
        "Description":"THIS IS A SEDAN CAR" 
      },
      {
        "id": 18,
        "image": rolls2,
        "title": "ROLLS ROYCE PHANTOM",
        "Description":"THIS IS A SEDAN CAR" 
      },
      {
        "id": 19,
        "image": glsm,
        "title": "MERCEDES GLS600",
        "Description":"THIS IS A SUV CAR" 
      },
      {
        "id": 20,
        "image": lurusm,
        "title": "LAMBORGHINI URUS",
        "Description":"THIS IS A SPORT-SUV CAR" 
      },
      {
        "id": 21,
        "image": cad2,
        "title": "CADILLAC ESCALADE",
        "Description":"THIS IS A SUV CAR" 
      },
      {
        "id": 22,
        "image": chiron2,
        "title": "BUGATTI CHIRON",
        "Description":"THIS IS A HYPERCAR" 
      },
      {
        "id": 23,
        "image": mercss,
        "title": "MERCEDES S580",
        "Description":"THIS IS A SEDAN CAR" 
      },
      {
        "id": 24,
        "image": dodge,
        "title": "DODGE RAM",
        "Description":"THIS IS A PICKUP CAR" 
      },
      {
        "id": 25,
        "image": chevy,
        "title": "CHEVROLET SILVERADO",
        "Description":"THIS IS A PICKUP CAR" 
      },
      {
        "id": 26,
        "image": bbent,
        "title": "BENTLEY BENTAYGA",
        "Description":"THIS IS A SUV CAR" 
      },
      {
        "id": 27,
        "image": lhur,
        "title": "LAMBORGHINI HURACAN",
        "Description":"THIS IS A HYPERCAR" 
      },
      {
        "id": 28,
        "image": mmerc,
        "title": "MERCEDES S580",
        "Description":"THIS IS A SEDAN CAR" 
      },
      {
        "id": 29,
        "image": bbsbent,
        "title": "BENTLET FLYING SPUR",
        "Description":"THIS IS A SEDAN CAR" 
      },
      {
        "id": 30,
        "image": chiron3,
        "title": "BUGATTI CHIRON",
        "Description":"THIS IS A HYPERCAR" 
      },
      {
        "id": 31,
        "image": ibmw,
        "title": "BMW X7",
        "Description":"THIS IS A SUV CAR" 
      },
      {
        "id": 32,
        "image": ffordi,
        "title": "FORD-F150",
        "Description":"THIS IS A PICKUP CAR" 
      },
      {
        "id": 33,
        "image": iibmw,
        "title": "BMW X7",
        "Description":"THIS IS A SUV CAR" 
      },
      {
        "id": 34,
        "image": itesla,
        "title": "TESLA CYBERTRUCK",
        "Description":"THIS IS A SUV CAR" 
      },
      {
        "id": 35,
        "image": ircul,
        "title": "ROLLS ROYCE CULLINAN",
        "Description":"THIS IS A SUV CAR" 
      },
      {
        "id": 36,
        "image": irbt,
        "title": "ROLLS ROYCE BOATTAIL",
        "Description":"THIS IS A COUPE CAR" 
      },
      {
        "id": 37,
        "image": imgast,
        "title": "ASTON MARTIN DB7",
        "Description":"THIS IS A COUPE CAR" 
      },
      {
        "id": 38,
        "image": cadlimo,
        "title": "CADILLAC THE ONE",
        "Description":"THIS IS A LIMOUSINE" 
      },
      {
        "id": 39,
        "image": mcimg,
        "title": "MCLAREN 720S",
        "Description":"THIS IS A HYPERCAR" 
      },
      
    
    ];


    const scrollGal = () => {
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight * 0,
          behavior: "smooth"
        });
      }, 200);
    }
    






  return (
    <div>
<Fade bottom>
<h1 className='gal-h1-car'>find the car you want</h1>
</Fade>
 
     <div className="inp-galcar">  
      <input className='search' type="text" placeholder="please enter the car model"/>
      <div className='galsearchicon' onClick={()=>{ document.querySelector('.search').value = '';
    }}><BsXLg/></div>
      <div className='galcar2' onClick={()=>{
        if (document.querySelector('.search').value === '') {
          alert('PLEASE, ENTER A CAR BRAND!!! EXAMPLE: "BUGATTI"');
        }
        else{
          setSearchTerm(document.querySelector('.search').value);
        }
      }  
    }><div  className='galcar3'><GoSearch/></div> </div>
    
            
    </div> 
        
     <Fade bottom>
       <div className='gallefticon2'>
      <div className='gallefticon' onClick={() => { 
      setSearchTerm('');}}>   
      <BsFillArrowLeftSquareFill/>
      </div>
</div>
</Fade>   


     <div className='dataContainer-gal'>  
        {
          questions
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return val;
              }
            }).map((val) => {
              return (
                <div className="data-gal" key={val.id}>
                  <img className='img-gal' src={val.image} alt="" />
                  <h3 className='h3filter-gal'>{val.title}</h3>
                  <p>{val.Description}</p>
                </div>
              )
            })
           }
   </div>


<div className="universe"><Link to="/gallerypage">NEXT</Link></div>
<h1 className='galabove'>GO ABOVE</h1>


<div className="p10rank">
<div className='p9rank' onClick={scrollGal}>
  <div className="p8rank"><TfiArrowUp/></div>
</div>
      </div>





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

<p className='write-astmart-fixed'>Fuel consumption and emission values of All Luxury Suv's*; Fuel consumption combined: 17,9 l/100km (WLTP); CO2-emissions combined: 337 g/km (WLTP)</p>


  </div>
  )
}

export default Gallery