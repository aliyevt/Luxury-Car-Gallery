import React from 'react';
import "./GalleryPage.css";
import { useState } from 'react';
import { Fade } from 'react-reveal';
import { GoSearch } from "react-icons/go";
import { BsXLg } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import limg from "./lambh21.jpg";
import limg2 from "./lambh20.webp";
import limg3 from "./lambh19.jpg";
import limg4 from "./urusslide.webp";
import limg5 from "./huracan.jpeg";
import mbimg from "./mercg7.jpg";
import mbimg2 from "./mercg9.jpg";
import mbimg3 from "./mercm3.jpg";
import mbimg4 from "./mercm1.jpg";
import mbimg5 from "./mercm2.jpg";
import mbimg6 from "./mg63amg9.webp";
import mbimg7 from "./mercg4.jpg";
import bimg from "./bug21.jpg";
import bimg2 from "./bug27.webp";
import bimg3 from "./bug31.webp";
import bimg4 from "./bug35.webp";
import bimg5 from "./bugattidivo4.webp";
import bimg6 from "./bugattidivo2.webp";
import rimg from "./rrp.jpg";
import rimg2 from "./rrp9.jpg";
import rimg3 from "./rrp13.jpeg";
import rimg4 from "./rrp8.jpg";
import rimg5 from "./rollstail1.jpg";
import bmwimg from "./bmw7.jpeg";
import bmwimg2 from "./bmw25.jpg";
import bmwimg3 from "./bmwgallery.jpg";
import bmwimg4 from "./bmw23.jpg";
import bmwimg5 from "./bmw1.jpg";
import bmwimg6 from "./bmw24.jpeg";
import beimg from "./bm14.jpg";
import beimg2 from "./bm18.jpeg";
import beimg3 from "./bm4.jpeg";
import beimg4 from "./bentaygaslide.jpg";
import beimg5 from "./bent777.jpg";
import beimg6 from "./bm1.jpeg";
import beimg7 from "./luxben1.jpg";
import fimg from "./f4f150.jpeg";
import fimg2 from "./fordsuv1500.jpg";
import fimg3 from "./fordddf150.jpg";
import cimg from "./ch1.jpeg";
import cimg2 from "./ch2.jpg";
import cimg3 from "./ch3.jpg";
import dimg from "./d1.jpg";
import dimg2 from "./d3.webp";
import dimg3 from "./d4.jpg";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import { TfiArrowUp } from "react-icons/tfi"
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";


const GalleryPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const questions = [
            
        {
           "id": 1,
           "image": limg,
           "title":"LAMBORGHINI HURACAN",
           "Description":"THIS IS A HYPERCAR"  
       },
       {
           "id": 2,
           "image": beimg,
           "title":"BENTLEY MULSANNE",
           "Description":"THIS IS A HYPERCAR"  
       },
       {
           "id": 3,
           "image": cimg,
           "title": "CHEVROLET SILVERADO",
           "Description":"THIS IS A PICKUP CAR" 
       },
       {
           "id": 4,
           "image": fimg,
           "title":"FORD F-150",
           "Description":"THIS IS A PICKUP CAR" 
       },
       {
           "id": 5,
           "image": mbimg,
           "title":"MERCEDES-AMG GTR",
           "Description":"THIS IS A HYPERCAR" 
       },
       {
           "id": 6,
           "image": bimg,
           "title":"BUGATTI CHIRON",
           "Description":"THIS IS A HYPERCAR" 
       },
       {
           "id": 7,
           "image": rimg,
           "title":"ROLLS-ROYCE PHANTOM",
           "Description":"THIS IS A SEDAN CAR" 
       },
       {
           "id": 8,
           "image": dimg,
           "title":"DODGE RAM",
           "Description":"THIS IS PICKUP CAR" 
       },
       {
           "id": 9,
           "image": bmwimg,
           "title":"BMW 7 SERIES",
           "Description":"THIS IS A SEDAN CAR" 
       },
       {
           "id": 10,
           "image": limg2,
           "title":"LAMBORGHINI HURACAN",
           "Description":"THIS IS A HYPERCAR" 
       },
       {
           "id": 11,
           "image": beimg2,
           "title":"BENTLEY MULSANNE",
           "Description":"THIS IS A SEDAN CAR" 
       },
       {
           "id": 12,
           "image": rimg2,
           "title":"ROLLS-ROYCE PHANTOM",
           "Description":"THIS IS A SEDAN CAR" 
       },
       {
           "id": 13,
           "image": bmwimg2,
           "title":"BMW 7 SERIES",
           "Description":"THIS IS A SEDAN CAR" 
       },
       {
           "id": 14,
           "image": cimg2,
           "title":"CHEVROLET SILVERADO",
           "Description":"THIS IS A PICKUP CAR" 
       },
       {
           "id": 15,
           "image": rimg3,
           "title": "ROLLS-ROYCE PHANTOM",
           "Description":"THIS IS A SEDAN CAR" 
      },
      {
       "id": 16,
       "image": dimg2,
       "title": "DODGE RAM",
       "Description":"THIS IS A PICKUP CAR" 
     },
     {
       "id": 17,
       "image": mbimg3,
       "title": "MERCEDES MAYBACH",
       "Description":"THIS IS A SEDAN CAR" 
     },
     {
       "id": 18,
       "image": limg3,
       "title": "LAMBORGHINI HURACAN",
       "Description":"THIS IS A HYPERCAR" 
     },
     {
       "id": 19,
       "image": bmwimg3,
       "title": "BMW 7 SERIES",
       "Description":"THIS IS A SEDAN CAR" 
     },
     {
       "id": 20,
       "image": beimg6,
       "title": "BENTLEY MULSANNE",
       "Description":"THIS IS A SEDAN CAR" 
     },
     {
       "id": 21,
       "image": bmwimg5,
       "title": "BMW 7 SERIES",
       "Description":"THIS IS A SEDAN CAR" 
     },
     {
       "id": 22,
       "image": rimg5,
       "title": "ROLLS-ROYCE BOAT TAIL",
       "Description":"THIS IS A CABRIOLET CAR" 
     },
     {
       "id": 23,
       "image": limg5,
       "title": "LAMBORGHINI HURACAN",
       "Description":"THIS IS A HYPERCAR" 
     },
     {
       "id": 24,
       "image": rimg4,
       "title": "ROLLS-ROYCE PHANTOM",
       "Description":"THIS IS A SEDAN CAR" 
     },
     {
       "id": 25,
       "image": mbimg4,
       "title": "MERCEDES MAYBACH",
       "Description":"THIS IS A SEDAN CAR" 
     },
     {
       "id": 26,
       "image": bimg6,
       "title": "BUGATTI DIVO",
       "Description":"THIS IS A HYPERCAR" 
     },
     {
       "id": 27,
       "image": dimg3,
       "title": "DODGE RAM",
       "Description":"THIS IS A PICKUP CAR" 
     },
     {
       "id": 28,
       "image": bimg4,
       "title": "BUGATTI CHIRON",
       "Description":"THIS IS A HYPERCAR" 
     },
     {
       "id": 29,
       "image": cimg3,
       "title": "CHEVROLET SILVERADO",
       "Description":"THIS IS A PICKUP CAR" 
     },
     {
       "id": 30,
       "image": mbimg2,
       "title": "MERCEDES-AMG GTR",
       "Description":"THIS IS A HYPERCAR" 
     },
     {
       "id": 31,
       "image": fimg3,
       "title": "FORD F-150",
       "Description":"THIS IS A PICKUP CAR" 
     },
     {
       "id": 32,
       "image": bmwimg4,
       "title": "BMW 7 SERIES",
       "Description":"THIS IS A SEDAN CAR" 
     },
     {
       "id": 33,
       "image": fimg2,
       "title": "FORD F-150",
       "Description":"THIS IS A PICKUP CAR" 
     },
     {
       "id": 34,
       "image": limg4,
       "title": "LAMBORGHINI URUS",
       "Description":"THIS IS A HYPERCAR" 
     },
     {
       "id": 35,
       "image": bmwimg6,
       "title": "BMW 7 SERIES",
       "Description":"THIS IS A SEDAN CAR" 
     },
     {
       "id": 36,
       "image": mbimg5,
       "title": "MERCEDES MAYBACH",
       "Description":"THIS IS A SEDAN CAR" 
     },
     {
       "id": 37,
       "image": beimg7,
       "title": "BENTLEY BENTAYGA ",
       "Description":"THIS IS A SUV CAR" 
     },
     {
       "id": 38,
       "image": beimg3,
       "title": "BENTLEY MULSANNE",
       "Description":"THIS IS A SEDAN CAR" 
     },
     {
       "id": 39,
       "image": beimg4,
       "title": "BENTLEY BENTAYGA",
       "Description":"THIS IS A SUV CAR" 
     },
     {
        "id": 40,
        "image": bimg2,
        "title": "BUGATTI CHIRON",
        "Description":"THIS IS A HYPERCAR" 
      },
      {
        "id": 41,
        "image": bimg5,
        "title": "BUGATTI DIVO",
        "Description":"THIS IS A HYPERCAR" 
      },
      {
        "id": 42,
        "image": beimg5,
        "title": "BENTLEY BENTAYGA",
        "Description":"THIS IS A SUV CAR" 
      },
      {
        "id": 43,
        "image": mbimg6,
        "title": "MERCEDES-AMG G63",
        "Description":"THIS IS A SUV CAR" 
      },
      {
        "id": 44,
        "image": bimg3,
        "title": "BUGATTI CHIRON",
        "Description":"THIS IS A HYPERCAR" 
      },
      {
        "id": 45,
        "image": mbimg7,
        "title": "MERCEDES-AMG GTR",
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
 


<h1 className='galabove'>GO ABOVE</h1>
<div className="p10rank">
<div className='p9rank' onClick={scrollGal}>
  <div className="p8rank" ><TfiArrowUp/></div>
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

export default GalleryPage