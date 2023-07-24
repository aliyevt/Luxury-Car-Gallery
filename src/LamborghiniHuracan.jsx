import React from 'react';
import "./Lambohuracan.css";
import huracannews from './huracannews.jpeg';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import huracan2 from "./huracan2.jpg";
import huracan3 from "./huracan4.jpg"
import huracan4 from "./huracan5.webp";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import { TfiArrowUp } from "react-icons/tfi"
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import Fade from 'react-reveal';
import { BsArrowUpCircle } from 'react-icons/bs';

const LamborghiniHuracan = () => {

  


    const divStyle = {
        backgroundSize: 'cover',
        height: '100vh'
      }
      const slideImages = [
        {
            url: huracan4,
        },
        {
          url: huracan2,
        },
      
        {
           url: huracan3, 
        },
      ];
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
      <Fade bottom>
       <div className='backlamboanni'>NEWS</div> 
       <h1 className='lhuracan-h1'>LAMBORGHINI HURACÁN STERRATO:<br/> CALIFORNIA DRIFTING</h1>
       <img className='lhuracannewsimg' src={huracannews} alt=''/>
<h1 className='lhuracandate-h1'>20 APRIL 2023</h1>
<p className='lhuracandrift-p1'>The diverse landscape of California provides the perfect environment in which to appreciate the eclectic spirit of the Huracán Sterrato,<br/> evident as soon as the tires hit tarmac and then sand, on road and raceway.</p>
<p className='lhuracandrift-p2'>
Driving on the panoramic roads of the remarkable Joshua Tree National Park, adventurers appreciate the driving comfort of the Sterrato<br/> on asphalt before hitting the exhilarating dirt tracks in Rally mode at Chuckwalla Valley  Raceway. The circuit in the Coachella Valley <br/>desert combines a traditional tarmac track with sections of dirt surfaces over a total length of about 4km. The pioneering and <br/>unconventional approach of the Lamborghini brand is evident in the Huracán Sterrato's performance in such diverse environments,<br/> with optimized vehicle dynamics for perfect driving control on all surfaces.</p>

<p className='lhuracandrift-p2'>The adventurous character of the Sterrato is clear at first glance: ground clearance is increased by 44mm compared to the Huracan EVO<br/> for greater suspension travel, with wider front and rear tracks of +30mm and +34mm, respectively. The aluminum front underbody<br/>  protection, the reinforced sills, the rear diffuser, and the robust wheel arches protect the car and emphasize its muscularity. The distinctive<br/>  air intakes on the rear bonnet enhance the sporting character of the Sterrato but supply the engine with clean air when driving on dusty<br/>  roads. The 19” rims shod with specially-developed Bridgestone Dueler AT002 tires offer maximum versatility and adaptiveness on<br/>  any surface and any conditions, for optimum driver feedback and enjoyment as well as performance.</p>

<p className='lhuracandrift-p2'>Having explored Joshua Tree National Park and exploited the Sterrato's capabilities in Chuckwalla, the dirt road covered in the desert's fine <br/>sand leads back to Palm Springs, where the pace slows, and the versatile soul of the Huracán Sterrato adapts perfectly to the avenues <br/>surrounded by palm trees in the exclusive California location.</p>




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


      <Fade bottom>
    <h1 className='bcll33'>Please go above to rediscover<br/> this incredible world of<br/> LAMBORGHINI HURACAN</h1>
</Fade>
<div className="p10rank">
<div className='p9rank' onClick={suvTop}>
  <div className="p8rank"><TfiArrowUp/></div>
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



                <p className='write-down-huracan' >Fuel consumption and emission values of Huracán Sterrato*; Fuel consumption combined: 14,9 l/100km (WLTP); CO2-emissions combined: 337 g/km (WLTP)</p>

            



      

    </div>
  )
}

export default LamborghiniHuracan