import React from 'react';
import "./BugattiChironEditionNore.css";
import { Fade } from 'react-reveal';
import buggg from "./bug53.webp";
import buggg2 from "./bug54.webp";
import buggg3 from "./bug55.webp";
import buggg4 from "./bug56.webp";
import buggg5 from "./bug57.webp";
import buggg6 from "./bug58.webp";
import buggg7 from "./bug59.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BugEdCh } from './BugattiEditChiron';
import bugg8 from "./bug49.webp";
import bugg9 from "./bug50.webp";
import bugg10 from "./bug51.webp";
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



const BugattiChironEditionNore = () => {

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
  return (
    <div>
<div className='bcen'>
    <Fade bottom>
    <h1 className="bcen2">CHIRON EDITION</h1>
    <h1 className="bcen3">NOIRE</h1>
    </Fade>
</div>
<Fade bottom>
    <div className="bcen4">
<div className="bcen5">
    <div>
        <Fade bottom>
        <h1 className="bcen6">INSPIRED BY A MYTH</h1>
        </Fade>
        <Fade bottom>
        <p className="bcen7">The story of BUGATTI's La Voiture Noire is a renowned myth within the<br/> world of automotive. Created by Jean Bugatti, the black Type 57 SC<br/> Atlantic went missing at the beginning of the Second World War and<br/> was never seen again. In March 2019, BUGATTI's Design team created<br/> a modern interpretation of this incredible vehicle for the 21st century.</p>
        </Fade>
        <Fade bottom>
        <p className="bcen8">From there, gifting the La Voiture Noire DNA to the CHIRON family came <br/>naturally: in 2021, BUGATTI offered its customers a CHIRON version in a <br/>new, exclusive configuration. The CHIRON Noire embodies the spirit and<br/> design elements of the legendary La Voiture Noire, carrying out an<br/> extraordinary line of automotive history.</p>
        </Fade>
    </div>
    <Fade bottom>
    <img src={buggg} alt="" className="bcen9" />
    </Fade>
</div>
    </div>
<Fade bottom>
<img src={buggg2} className='bcen10' alt="" />
</Fade>
<div className="bcen11">
    <h1 className='bcen12'>NOIRE SPORTIVE</h1>
    <div className="bcen13">
        <p className="bcen14">The CHIRON Noire Sportive possesses a unique, sporty character that<br/> shines through each of the design elements, all of which are dominated<br/> by black gradients.</p>
        <p className="bcen15">From the matte black finish of the exposed carbon fiber and outer <br/>body  details to the “Noire” inscriptions that adorn the inlays of the <br/>center console and the headrests, through the aluminum trim <br/>parts of the interior, the Noire Sportive is phenomenal power in a<br/> shell of luxury and grace. </p>
    </div>

<Fade bottom>
    <div className="bcen16">
        <img src={buggg3} alt="" className="bcen17" />
        <div className='bcen20'>
            <img src={buggg4} alt="" className="bcen18" />
            <img src={buggg5} alt="" className="bcen19" />
        </div>
    </div>
</Fade>
<Fade bottom>
    <div className="bcen21">
        <img src={buggg6} alt="" className="bcen22" />
        <div className='bcen27'>
            <h1 className="bcen23">NOIRE ÉLÉGANCE</h1>
            <p className="bcen24">The Noire Élégance's figure is covered in black exposed<br/> carbon,  while the Caractère wheels show the calipers <br/>finished in black.  The dark shade of the car's body is <br/> underlined by the C-shaped BUGATTI line, which is finished<br/> in matte polished aluminum.</p>
            <p className='bcen25'>The interior is entirely dominated by black, with the inner<br/> signature line in aluminum with a silk-matte finish being <br/>the only exception. “Noire” inscriptions adorn the side<br/>  panels, the underside of the rearwing, the door sills, the<br/> outside of the center console, and the headrests.</p>
            <p className="bcen26">Every element of the Noire Élégance spells out its exclusivity.</p>
        </div>
    </div>
</Fade>
<Fade bottom>
    <div className="bcen28">
        <div>
            <h1 className="bcen29">LUXURY AND POWER</h1>
            <p className="bcen30">Powered by the iconic 8.0-liter 16-cylinder engine, the CHIRON<br/> Noire is technically based on the CHIRON Sport—a firm chassis <br/>setting and lightweight components, for a bold driving experience.<br/> This special-edition model is limited to 20 vehicles, all sold out.</p>
            <p className="bcen31"><i>“The true form of luxury is individuality,”</i> says BUGATTI President <br/>Stephan Winkelmann. The CHIRON Noire embodies exactly<br/> that value.</p>
        </div>
        <img src={buggg7} alt="" className="bcen32" />
    </div>
</Fade>
</div>
<Fade bottom>
<div className="App">
      <Slider {...settings}>
    {BugEdCh.map(item=>(
        <div className='card2'>
          <img className='item2img' src={item.image}/>
        </div> 
    ))}
    </Slider>
    </div>
</Fade>
<Fade bottom>
<div className="bcll31" >
<Fade bottom>
    <h1 className="bcll28">Fuel consumption - Chiron Sport <br/>"Edition Noire"</h1>
</Fade>
<Fade bottom>
    <div className="bcll29">
<img src={bugg8} alt="" className="bcll30" />
<img src={bugg10} alt="" className="bcll32" />
<img src={bugg9} alt="" className="bcll32" />
    </div> 
</Fade>
</div> 
</Fade>
<Fade bottom>
    <h1 className='bcll33'>Please go above to rediscover<br/> this incredible world of<br/> Bugatti Chiron  SPORT "Edition Noire"</h1>
</Fade>
<Fade bottom>
<div className="bcll34">
    <div className="bcll35" onClick={suvTop}><BsArrowUpCircle/></div>
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

export default BugattiChironEditionNore