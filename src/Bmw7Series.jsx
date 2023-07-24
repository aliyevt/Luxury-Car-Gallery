import React from 'react';
import "./Bmw7Series.css";
import Fade from 'react-reveal';
import bmw1 from "./bmw8.webp";
import bmw2 from "./bmw10.jpg";
import bmw3 from "./bmw1.jpg";
import bmw4 from "./bmw2.jpg";
import bmw5 from "./bmw3.jpg";
import bmw6 from "./bmw4.jpg";
import { TfiArrowUp } from "react-icons/tfi"
import bmw7 from "./bmw5.jpg";
import bmw8 from "./bmw11.jpg";
import bmw9 from "./bmw12.jpg";
import bmw10 from "./bmw13.jpg";
import bmw11 from "./bmw15.webp";
import bmw12 from "./bmw16.jpg";
import bmw13 from "./bmw17.jpg";
import bmw14 from "./bmw18.jpg";
import bmw15 from "./bmw19.jpg";
import bmw16 from "./bmw20.jpg";
import bmw17 from "./bmw21.jpg";
import bmw18 from "./bmw22.webp";
import { useState } from 'react';
import { BsPlusCircle } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import bmw19 from "./bmw23.jpg";
import bmw21 from "./sbmw.jpg";
import ImageSlider17 from './ImageSlider17';
import bmw22 from "./bmw24.jpeg";
import bmw23 from "./bmw25.jpg";
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


const Bmw7Series = () => {
  const [selectedColor, setSelectedColor] = useState(bmw3);
  const [selectedImage, setSelectedImage] = useState(bmw3);
  const bmwClick1 = () => {
    setSelectedImage(bmw3);
  }
  const bmwClick2 = () => {
    setSelectedImage(bmw4);
  }
  const bmwClick3 = () => {
    setSelectedImage(bmw5);
  }
  const bmwClick4 = () => {
    setSelectedImage(bmw6);
  }
  const bmwClick5 = () => {
    setSelectedImage(bmw7);
  }
const [zoom, setZoom]=useState(1);
const zClick =()=>{
  setZoom(zoom+0.1)
}
const z1Click=()=>{
  setZoom(1)
}
const [images1, setImages1] = useState([bmw13, bmw14]);
const [images2, setImages2] = useState([bmw15, bmw16]);
const [images3, setImages3]  =  useState([bmw17, bmw18])
const [selectedside, setSelectedSide] = useState(images1);
const handleButton1Click = () => {
    setSelectedSide(images1);
  };
  
const handleButton2Click = () => {
    setSelectedSide(images2);
  };

const handleButton3Click = () => {
    setSelectedSide(images3);
  }; 
const rTop = () => {
    setTimeout(() => {
      window.scrollTo({
      top: window.innerHeight * 0,
      behavior: "smooth"
    });
  }, 200);
}  
const slides = [
  {url: bmw19},
  {url: bmw21},
  {url: bmw22},
  {url: bmw23},
];
const containerStyles = {
width: "1519px",
height: "700px",
margin: "0 auto",
marginTop: "-7px",
}








  return (
    <div>
<div className="bmw7s">
    <Fade bottom>
    <h1 className="bmw17s">BMW</h1>
    <h1 className="bmw27s">7 SERIES</h1>
    </Fade>
</div>
<Fade bottom>
<h1 className="bm14">Let's take a look at the BMW</h1>
<div className="bmw37s">
<img src={bmw1} alt="" className="bmw47s" />
<div className='bmw77s'>
  <h1 className="bmw57s">DISCOVER THE BMW 7 SERIES</h1>
  <p className="bmw67s">The BMW 7 Series is a full-size luxury sedan manufactured <br/>and marketed by the German automaker BMW since 1977. It is<br/> the successor to the BMW E3 "New Six" sedan and is now in its<br/> seventh generation. The 7 Series is BMW's flagship car and is<br/> only available in a sedan bodystyle (including long wheelbase<br/> and limousine models). It traditionally introduces technologies<br/> and exterior design themes before other models in BMW's lineup</p>
</div>
</div>
<div className="bmw87s">
  <div>
    <p className="bmw97s">The first generation of the 7 Series was powered by straight-6 petrol<br/> engines, and following generations have been powered by inline-4,<br/> straight-6, V8 and V12 engines with both natural aspiration and <br/>turbocharging. Since 1995, diesel engines have been optional in the<br/> 7 Series. Unlike the 3 Series and 5 Series sedans, BMW has offered a<br/> nonpureblood M variant, the BMW M760 6.6L V12 (at the time the most <br/>powerful BMW ever made, not to be confused with BMW 760 6.6 V12<br/> which does not offer the same performance).</p>
    <p className="bmw107s">* It was built in a 4-door sedan body style with 6-cylinder engines, to replace the <br/>E3 sedans.</p>
  </div>
  <img src={bmw2} alt="" className="bmw117s" />
</div>
</Fade>
<Fade bottom>
<h1 className="bmw127s">CHOOSE YOUR COLOR</h1>
{selectedColor && <div className='bmw207s'><img className='bmw197s' src={selectedImage} alt=''/></div>} 
<div className="bmw137s">
  <button className="bmw147s" onClick={bmwClick1}></button>
  <button className="bmw157s" onClick={bmwClick2}></button>
  <button className="bmw167s" onClick={bmwClick3}></button>
  <button className="bmw177s" onClick={bmwClick4}></button>
  <button className="bmw187s" onClick={bmwClick5}></button>
</div>

<div className="bmw217s">
  <Fade bottom>
  <h1 className="bmw227s">INTERIOR</h1>
  </Fade>
  <Fade bottom>
   <div className="bmw257s">
   <img src={bmw8} alt="" className="bmw237s" />
   <h1 className='bmw247s'>Discover the<br/> incredible <br/>interior of<br/> the BMW 7<br/> Series</h1>
   </div>
   </Fade>
   <Fade bottom>
  <div className="bmw267s">
    <h1 className="bmw277s">   Enjoy these<br/> incredible<br/> seats in the<br/> BMW 7 Series</h1>
    <img src={bmw9} alt="" className="bmw287s" />
  </div>
  </Fade>
  <Fade bottom>
  <div className="bmw297s">
    <img src={bmw10} alt="" className="bmw307s" />
    <h1 className="bmw317s">ENjOY THE<br/> BIG SCREEN<br/> OF THE BMW <br/>7 SERIES</h1>
  </div>
  </Fade>
  <Fade bottom>
   <div className="bmw327s">
    <h1 className="bmw337s">DISCOVER<br/> THE NEWEST<br/> GEAR SYSTEM <br/>OF THE BMW 7 <br/>SERIES</h1>
    <img src={bmw11} alt="" className="bmw347s" />
   </div>
  </Fade>
  <Fade bottom>
  
  </Fade>
</div>
<div className="bmw357s">
   <div className='bmw387s'><img src={bmw12} alt="" style={{ transform: `scale(${zoom})` }} className='bmw367s' /></div> 
    <div>
    <h1 className="bmw377s">LOOK AT THE<br/> POWERFUL <br/>ENGINE.<br/>REVIEW</h1>
    <div className='bmw397s'>
      <div className="bmw407s" onClick={zClick}><BsPlusCircle/></div>
      <div className="bmw417s" onClick={z1Click}><GrPowerReset/></div>
      </div>
    </div>
  </div>
<h1 className="bmw427s">LET'S TAKE A LOOK AT THE<br/> BMW 7 SERIES</h1>
<div className="rrp41">
        <button className="rrp38" onClick={handleButton1Click}>FRONT</button>
        <button className="rrp39" onClick={handleButton2Click}>BACK</button>
        <button className="rrp40" onClick={handleButton3Click}>SIDE</button>
    </div>
<div className="rrp37">
    {selectedside.map((image) => (
        <div className='rrp43'>
      <img src={image} className='rrp42' alt="image" />
       </div>
    ))}
</div>
<div style={containerStyles}>
  <ImageSlider17 slides={slides}/>
</div>



<Fade bottom>
<h1 className="rrp48">PLEASE GO ABOVE TO RE-EXPERIENCE<br/> THIS INCREDIBLE WORLD OF BMW 7 SERIES</h1>
</Fade>
<Fade bottom>
<div className="p10rank">
<div className='p9rank' onClick={rTop}>
  <div className="p8rank" ><TfiArrowUp/></div>
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






</Fade>

    </div>
  )
}

export default Bmw7Series