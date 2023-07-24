import React from 'react';
import "./BugattiChironLesLegendes.css";
import { Fade } from 'react-reveal';
import bugg from "./bug48.webp";
import bugg2 from "./bug47.webp";
import bugg3 from "./bug41.webp";
import bugg4 from "./bug46.webp";
import { TfiArrowUp } from "react-icons/tfi"
import bugg5 from "./bug44.webp";
import bugg6 from "./bug43.webp";
import bugg7 from "./bug42.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Bug2Spec } from './Bugatti2Spec';
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


const BugattiChironLesLegendes = () => {
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
<div className="bcll">
    <Fade bottom>
    <h1 className="bcll2">CHIRON SPORT</h1>
    <h1 className="bcll3">“LES LÉGENDES DU CIEL”</h1>
    </Fade>
</div>
<Fade bottom>
    <Fade bottom>
<div className="bcll4">
    <div>
        <h2 className="bcll5">EXCLUSIVE EDITION PAYING TRIBUTE TO LEGENDARY<br/> FRENCH PILOTS</h2>
        <p className="bcll6">Both aviation and racing were heavily pushed forward in France at the outset of<br/> last century. Both stood for courage, speed, and extraordinary technology. No<br/> wonder Ettore Bugatti became as fascinated by aviation and pilots as he<br/> was by motor cars. And no wonder the most courageous pilots of the time were<br/> fascinated by BUGATTI's agile, light, and speedy vehicles, embodying on the road<br/> what their planes were in the sky. With the exclusive edition “Les Lége</p>
        <p className="bcll8">With the exclusive edition “Les Légendes du Ciel”, BUGATTI pays homage to the<br/> unique and fruitful relationship between our founder and France's legendary pilots<br/> and race car drivers Louis Blériot, Roland Garros, Robert Benoist, Bartolomeo<br/> Costantini, and Albert Divo.</p>
    </div>
    <img src={bugg} alt="" className="bcll7" />
</div>
    </Fade>
<Fade bottom>
    <img src={bugg2} alt="" className="bcll9" />
</Fade>
<Fade bottom>
    <div className="bcll10">
        <div>
        <h1 className="bcll11">AN HOMAGE TO FRANCE'S<br/> DAREDEVILS OF THE SKY</h1>
        <p className="bcll12">The model is based on a CHIRON Sport in matt grey (“Gris Serpent”),<br/>  mirroring themetallic exterior colour of the early 20th century planes.<br/>  A broad high-contrast,white gloss runway-like center stripe spans<br/> over the car's complete body from the back to the front. The double<br/> wing front is a reminiscence of the Nieuport 17 biplane flown by so<br/>  many of those pilots. And the horseshoe radiator grille's mesh pattern<br/>  resembles planes flying in parade formation. The logo (a propeller)<br/> and lettering “Les Légendes du Ciel” are applied to the left and right<br/> front fenders. The Bleu-Blanc-Rouge French tricolor decorates the car's <br/>exposed-carbon-fiber side sills, paying tribute to BUGATTI's and the<br/> Daredevils' origins.</p>
        </div>
        <img src={bugg3} alt="" className="bcll13" />
    </div>
</Fade>
<Fade bottom>
    <h1 className="bcll14">THE COCKPIT</h1>
</Fade>
<Fade bottom>
    <div className="bcll15">
        <p className="bcll16">The hyper sports car's interior is entirely brown Gaucho leather, as fine <br/> and yet asrobust as in the original Nieuport 17's cockpit. The pattern of<br/> the parade formation is repeated in the seat's stitching, and so are the<br/> propeller logo and lettering on the seats' head rests as well as on an <br/>aluminum inlay of the middle console.</p>
        <p className="bcll17">The biplane and BUGATTI's earliest successful racing car, the Type 13, are<br/> commemorated in a hand-sketched scene on the door panels.</p>
    </div>
</Fade>
<Fade bottom>
    <div className="bcll18">
        <img src={bugg5} alt="" className="bcll19" />
        <div className='bcll22'>
            <img src={bugg6} alt="" className="bcll20" />
            <img src={bugg4} alt="" className="bcll21" />
        </div>
    </div>
</Fade>
<Fade bottom>
    <div className="bcll23">
        <img src={bugg7} alt="" className="bcll24" />
        <div className='bcll27'>
        <h1 className="bcll25">RARITY, SPEED, AND EXTRAORDINARY <br/>TECHNOLOGY</h1>
        <p className="bcll26">The edition “Les Légendes du Ciel” impresses with its minimalist character<br/> through its colors and the polished aluminum and would entirely be in the<br/> mind of legendary pilot Roland Garros, who once called Ettore Bugatti the<br/> “incomparable artist who alone knows how to give life to steel.” The W16<br/> engine with a capacity of 8.0 liters delivers 1,500 PS and 1,600 Nm of torque.<br/> Its maximum speed is electronically limited only at 420 km/h. The exclusive<br/> edition Chiron Sport “Les Légendes du Ciel” is limited to 20 units. Production<br/> starts by end of 2020.</p>
        </div>
    </div>
</Fade>
<Fade bottom>
<div className="App">
      <Slider {...settings}>
    {Bug2Spec.map(item=>(
        <div className='card2'>
          <img className='item2img' src={item.image}/>
        </div> 
    ))}
    </Slider>
    </div>
</Fade>
<div className="bcll31" >
<Fade bottom>
    <h1 className="bcll28">Fuel consumption - Chiron Sport <br/>"Les Légendes du Ciel"</h1>
</Fade>
<Fade bottom>
    <div className="bcll29">
<img src={bugg8} alt="" className="bcll30" />
<img src={bugg10} alt="" className="bcll32" />
<img src={bugg9} alt="" className="bcll32" />
    </div> 
</Fade>
</div> 

<Fade bottom>
    <h1 className='bcll33'>Please go above to rediscover<br/> this incredible world of<br/> Bugatti Chiron  SPORT
"LES LÉGENDES DU CIEL"</h1>
</Fade>


<Fade bottom>
<div className="p10rank">
<div className='p9rank'>
  <div className="p8rank" onClick={suvTop}><TfiArrowUp/></div>
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

export default BugattiChironLesLegendes