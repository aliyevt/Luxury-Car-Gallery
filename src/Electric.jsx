import React from 'react'
import './Electric.css'
import { useState } from 'react'
import{ BsArrowDownCircleFill } from "react-icons/bs";
import{ BsArrowDownCircle } from "react-icons/bs";
import{ BsArrowUpCircleFill } from "react-icons/bs";
import {Routes, Route, Link, NavLink,} from 'react-router-dom';
import teslacharger from './teslacharger.jpg';
import tesla4 from './tesla4.jpg';
import eqsmerc from './mercedeseqs.jpg';
import eqs2 from './eqs2.jpg';
import { TfiArrowDown, TfiArrowUp } from "react-icons/tfi"
import tesla5 from './tesla5.jpg';
import electricengine from './electricengine.jpeg';
import eqsgal from './eqsgallery.jpg';
import eqs2gal from './eqs2gallery.jpg'
import eqsintgal from './eqsinteriorgallery.jpg'
import { BsPlusCircleFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import teslagal from './plaid2gallery.jpeg';
import teslagal3 from './plaidgallery.jpg';
import Image4Slider from './Image4Slider';
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import Fade from 'react-reveal';




const Electric = () => {

const [look, setLook] = useState(false);
const tesla = ()=>{
  setLook(!look)
}

const [look2, setLook2] = useState(false);
const eqs = ()=>{
  setLook2(!look2)
}

const scrollUp = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0.920,
      behavior: "smooth"
    });
  }, 200);
}

const [zoom, setZoom]=useState(1);
const incZoom =()=>{
  setZoom(zoom+0.1);
}
const handleReset = () => {
  setZoom(1);
};


const containerStyles = {
  width: "1519px",
  height: "710px",
  margin: "50px auto",
  marginTop: "100px",
}

const slides = [
  {url: teslagal },
  {url: eqsgal },
  {url: teslagal3 },
  {url: eqs2gal },
  {url: eqsintgal},
];

const electricUp = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0,
      behavior: "smooth"
    });
  }, 200);
}




  return (
    <div>
   <div className='tesla'>
    <Fade bottom>
<h1 className='tesla-h1'>DISCOVER THE ELECTRIC CARS</h1>
<h1 className='tesla-h1-1'>MORE LEARN</h1>
    </Fade>
    <Fade bottom>
   <div className="electric3icon777">
      <div className="electric2icon777" onClick={scrollUp}>
          <div className='tesla-up'><TfiArrowDown/></div>
      </div>
  </div>
</Fade>

</div>

<Fade bottom>
<h1 className='tesla-what'>WHAT IS THE ELECTRIC CARS?</h1>
<h1 className='tesla-what-2'>HOW GOOD ARE THEY?</h1>
<div className='tesla-flex'>
  <img className='tesla-img1' src={teslacharger} alt=''/>
  <img className='tesla-img2' src={eqsmerc} alt=''/>
</div>
<div className='tesla-flex2'>
    <img className='tesla-img3' src={tesla4} alt="" />
    <div>
  <p className='tesla-p1'> Tesla is one of the world's most valuable companies and, as of 2023, is the world's most valuable automaker. In 2022, the company had the most worldwide salesof battery<br/>  electric vehicles, capturing 18% of the market. Through its subsidiary Tesla Energy,<br/> the company develops and is a major installer of photovoltaic systems in the<br/> United States. Tesla Energy is also one of the largest global suppliers of battery<br/> energy storage systems, with 6.5 gigawatt-hours (GWh) installed in 2022. Tesla was incorporated in July 2003 by Martin Eberhard and Marc Tarpenning as Tesla Motors.<br/> The company's name is a tribute to inventor and electrical engineer Nikola Tesla.<br/> In February 2004, via a $6.5 million investment, Elon Musk became the largest<br/> shareholder of the company. The Model Y is a compact crossover utility vehicle.</p>
<Link to='/tesla'><button className='btn-tesla'>TESLA</button></Link>
</div>
</div>
<h1 className='tesla-price-h1'>Let's take a look at the<br/> features and prices of these<br/> electric cars</h1>

 <div className='electric-price'> 
  <div>
  <div className='tesla-price'><img src={tesla5} alt=''/></div>
  <h2 className='plaid'>TESLA MODEL S PLAID</h2>
  <p className='plaid-p1'>The Tesla Model S is an electric executive car built by Tesla, Inc. since 2012.<br/> The Model S features a battery-powered dual-motor, all-wheel drive<br/> layout, although earlier versions featured a rear-motor and rear-wheel drive<br/> layout. It has a liftback body style. A refresh of the Tesla Model S, codenamed<br/> "Palladium", was introduced in June 2021, offering a new "Plaid and Plaid+"<br/> performance model, along with a revised interior, powertrain, and suspension.</p>

  </div>





  <div>
  <div className='eqs-price'><img src={eqs2} alt=''/></div>
  <h2 className='plaid'>MERCEDES EQS</h2>
  <p className='plaid-p1'>The Mercedes-Benz EQS (V297) is a battery electric full-size luxury liftback car produced<br/> by German automobile manufacturer Mercedes-Benz Group. It was released in<br/> September 2021 in Germany and the fourth quarter of the year in the United States.<br/>As a battery-electric vehicle, it is part of the Mercedes-Benz EQ family. The production model debuted on 15 April 2021. The EQS 450+ variant with 245 kW costs €106,374,<br/> while the all-wheel-drive model EQS 580 4MATIC is listed at €135,529. The EQS is the<br/> first EQ model that is based on the technical platform specific to the electric models, called the MEA.</p>
 


  </div>

</div>


<div className="elecmeqs">
<Link to="/mercedeseqs">
  <button className="elecmeqs2">  mercedes eqs</button>
</Link>
</div>




<h1 className='electric-engine'>let's review electric cars engines</h1>
<div className='tesla-eng-flex'>
     <div>
  <h2 className='elec-eng-h2'>ELECTRICITY ENGINE</h2>
  <p className='p-engine'>An electric motor is an electrical machine that converts electrical energy into<br/> mechanical energy. Most electric motors operate through the interaction<br/>  between the motor's magnetic field and electric current in a wire winding to  generate<br/> force in the form of torque applied on the motor's shaft. An electric  generator is<br/> mechanically  identical to an electric motor, but operates with a reversed flow of<br/> power,converting mechanical energy into electrical energy. Electric motors produce<br/> linear or rotary force (torque) intended to propel some external mechanism, such,<br/> as a fan or an elevator.</p>
  <h2 className='review-h3'>REVIEW</h2>
      <div className='incdcr-flex'>
  <div className='div-plus' onClick={incZoom}><BsPlusCircleFill /></div>
  <div className='div-minus' onClick={handleReset}><GrPowerReset/></div>
             </div>
       </div>
      <div className='elec-engine-div'>
       <img className='elec-engine' src={electricengine}  style={{ transform: `scale(${zoom})` }} alt="" />
       </div>
</div>
<h1 className='video-h1'> You should definitely experience these <br/>Tesla cars that you won't<br/>  find anywhere else with autopilot mode, all-electric <br/> motor, and a brain of its own.</h1>
<video src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4" autoPlay loop muted className='tesla-video'></video>
<h1 className='choose-h1'>CHOOSE YOUR ELECTRIC CAR</h1>
<div style={containerStyles}>
  <Image4Slider slides={slides}/>
           </div>

<h1 className='electric-down'>Click on the button below to<br/> review the specifications, prices and comparisons<br/> of these incredible cars</h1>
<div className="p10rank">
<div className='p9rank' onClick={electricUp}>
  <div className="p8rank" ><TfiArrowUp/></div>
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

export default Electric