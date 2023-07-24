import React from 'react';
import "./Ranking.css";
import bugattiChiron from"./chironback.webp";
import bugattiDivo from "./bdivo.webp";
import lamboRevuelto from "./revuelto.jpeg";
import lamboHuracan from "./huracan.jpeg";
import mclaren from "./mclarenimg4.jpg";
import mercedesGtr from "./mercg14.jpg";
import porsche from "./porschegt4.jpg";
import rollsroyce from "./rrp.jpg";
import bentleyMulsanne from "./bm1.jpeg";
import mercedesMaybach from "./mercm21.jpg";
import bmw from "./bmw25.jpg";
import rCullinan from "./cullinanmansory.jpeg";
import lamboUrus from "./lurus1.webp";
import mercedesG63amg from "./rank2.jpg";
import mercedesgls600 from "./gls600slide.jpg";
import bentleyBentayga from "./luxben1.jpg";
import cadillac from "./cad1.jpg";
import { useState } from 'react'; 
import { GoSearch } from "react-icons/go";
import { BsXLg } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Fade } from 'react-reveal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Rank777Guys } from './Rank';
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { TfiArrowLeft, TfiArrowUp } from "react-icons/tfi"

const Ranking = () => {

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

    const [searchTerm, setSearchTerm] = useState("");
    const questions = [
            
         {
            "id": 1,
            "type": "HYPER",
            "rank": "1",
            "image": bugattiChiron,
            "title":"HYPER",
            "Description": "BUGATTI CHIRON"  
        },
        {
            "id": 2,
            "type": "HYPER",
            "rank": "2",
            "image": bugattiDivo,
            "title":"HYPER",
            "Description":"BUGATTI DIVO"  
        },
        {
            "id": 3,
            "type": "HYPER",
            "rank": "3",
            "image": lamboRevuelto,
            "title":"HYPER",
            "Description": "LAMBORGHINI REVUELTO"  
        },
        {
            "id": 4,
            "type": "HYPER",
            "rank": "4",
            "image": lamboHuracan,
            "title":"HYPER",
            "Description":"LAMBORGHINI HURACAN"  
        },
        {
            "id": 5,
            "type": "HYPER",
            "rank": "5",
            "image": mclaren,
            "title":"HYPER",
            "Description": "MCLAREN 720S"  
        },
        {
            "id": 6,
            "type": "HYPER",
            "rank": "6",
            "image": mercedesGtr,
            "title":"HYPER",
            "Description": "MERCEDES-AMG GTR"  
        },
        {
            "id": 7,
            "type": "HYPER",
            "rank": "7",
            "image": porsche,
            "title":"HYPER",
            "Description": "PORSCHE 911"  
        },
        {
            "id": 8,
            "type": "SEDAN",
            "rank": "1",
            "image": rollsroyce,
            "title":"SEDAN",
            "Description": "ROLLS-ROYCE PHANTOM"  
        },
        {
            "id": 9,
            "type": "SEDAN",
            "rank": "2",
            "image": bentleyMulsanne,
            "title":"SEDAN",
            "Description": "BENTLEY MULSANNE"  
        },
        {
            "id": 10,
            "type": "SEDAN",
            "rank": "3",
            "image": mercedesMaybach,
            "title":"SEDAN",
            "Description": "MERCEDES MAYBACH S580"  
        },
        {
            "id": 11,
            "type": "SEDAN",
            "rank": "4",
            "image": bmw,
            "title":"SEDAN",
            "Description": "BMW 7 SERIES"  
        },
        {
            "id": 12,
            "type": "SUV",
            "rank": "1",
            "image": rCullinan,
            "title": "SUV",
            "Description":"ROLLS-ROYCE CULLINAN"  
        },
        {
            "id": 13,
            "type": "SUV",
            "rank": "2",
            "image": lamboUrus,
            "title": "SUV",
            "Description": "LAMBORGHINI URUS"  
        },
        {
            "id": 14,
            "type": "SUV",
            "rank": "3",
            "image": mercedesG63amg,
            "title": "SUV",
            "Description": "MERCEDES-AMG G63"  
        },
        {
            "id": 15,
            "type": "SUV",
            "rank": "4",
            "image": mercedesgls600,
            "title": "SUV",
            "Description": "MERCEDES MAYBACH GLS600"  
        },
        {
            "id": 16,
            "type": "SUV",
            "rank": "5",
            "image": bentleyBentayga,
            "title": "SUV",
            "Description": "BENTLEY BENTAYGA"  
        },
        {
            "id": 17,
            "type": "SUV",
            "rank": "6",
            "image": cadillac,
            "title": "SUV",
            "Description": "CADILLAC ESCALADE"  
        },
    ]

    const scrollGal = () => {
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight * 0,
          behavior: "smooth"
        });
      }, 200);
    }
    const rankClick = () => {
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight * 0.6,
          behavior: "smooth"
        });
      }, 200);
    }


  return (
    <div>



<Fade bottom>
<h1 className='rank-h1'>car type ranking</h1>
</Fade>

     <div className="rank-title">  
      <input className='search' type="text" placeholder="Please enter the car type, Exp; 'SUV' "/>
      <div className='galsearchicon' onClick={()=>{ document.querySelector('.search').value = '';
    }}><BsXLg/></div>
      <div className='galcar2' onClick={()=>{
        if (document.querySelector('.search').value === '') {
          alert('PLEASE, ENTER THE CAR TYPE!!! EXAMPLE: "HYPER"');
        }
        else{
          setSearchTerm(document.querySelector('.search').value);
        }
      }  
    }><div onClick={rankClick} className='galcar3'><GoSearch/></div> </div>       
    </div> 
     <Fade bottom>
       <div className='energyuniverse777'>
      <div className="p9rank"onClick={() => { 
      setSearchTerm('');}}>
          <div className='p8rank' >   
            <TfiArrowLeft/>
                   </div>
                        </div>
</div>
</Fade>   
      <div className='dataContainer-gal'>   
        {
 searchTerm && questions
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return val;
              }
            }).map((val) => {
              return (
                <div className="data-gal777" key={val.id}>
                      <h1 className='type777'>{val.type}</h1> 
                    <h1 className='rank777'>{val.rank}</h1>
                  <img className='img-gal777' src={val.image} alt="" />
                  <h3 className='h3filter-gal'>{val.title}</h3>
                  <h3>{val.Description}</h3>
                </div>
              )
            })
           }
   </div>


<div className="rank1" style={ {display: searchTerm ? "none" : "block",}}>
  

<h1 className='rank2'>LET'S TAKE A LOOK AT THE <br/>CAR TYPE RANKING</h1>
<div className="App">
      <Slider {...settings}>
    {Rank777Guys.map(iteem=>(
        <div className='card2'>
          <div className='bcss22'>
          <img className='rank4' src={iteem.image}/>
             <div className='bcss23'>
          <h1>{iteem.title}</h1>
               <div className='bcss24'>
                <h1 className='rank3'>{iteem.text1}</h1>
                <h1 className='rank5'>{iteem.text}</h1>
            </div>
             </div>
           </div>
        </div> 
    ))}
    </Slider>
    </div>
</div> 


<h1 className='rank7'>GO ABOVE</h1>
<div className='rankup4icon777'>
  <div className="rankup3icon777">
  <div className="rankup2icon777" onClick={scrollGal}><TfiArrowUp/></div>
    </div>
</div>
<div className="p777r2guysank">
   <div className="p777rguysank">
<Link to="/priceranking">price ranking</Link>
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


    </div>
  )
}

export default Ranking