import React from 'react';
import "./MercedesG63Amg.css";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import Fade from 'react-reveal';
import mg63amg1 from "./mg63amg1.jpg";
import mg63amg2 from "./mg63amg3.jpg";
import { useState } from 'react';
import {  BsXLg } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import mg63amg3 from "./mg63amg2.webp";
import mg63amg4 from "./mg63amg10.webp";
import { TfiArrowDown, TfiArrowUp } from "react-icons/tfi"
import mg63amg5 from "./mg63amg9.webp";
import mg63amg7 from "./mg63amg11.jpeg";
import mg63amg9 from "./mg63amg13.webp";
import mg63amg10 from "./mg63amg14.jpg";
import mg63amg11 from "./mg63amg15.jpg";
import mg63amg12 from "./mg63amg16.jpg";
import{ BsArrowUpCircle } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";


const MercedesGG3Amg = () => {

const [g63spec, setG63spec]=useState(false);
const g63Amg=()=>{
    if (!g63spec) {
      setG63spec(true)
    }
}
const g63Down1= () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: "smooth"
      });
    }, 200);
  }
const g63Amg2=()=>{
    setG63spec(!g63spec)
    /**g63Down2()*/
}

  const g63Down2= () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 0.9,
        behavior: "smooth"
      });
    }, 200);
  }


  const [g63spec2, setG63spec2]=useState(false);
  const g63Amg3=()=>{
    if (!g63spec2) {
      setG63spec2(true);
    }
    }
const g63Down3= () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 3.1,
            behavior: "smooth"
          });
        }, 200);
    }
    const g63Amg4=()=>{
        setG63spec2(!g63spec2)
       /* g63Down4()*/
    }
    const g63Down4= () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 2,
            behavior: "smooth"
          });
        }, 200);
    }

    const [selectedColor, setSelectedColor] = useState(mg63amg3);
    const [selectedImage, setSelectedImage] = useState(mg63amg3);
  
    const handleRedClick = () => {
      setSelectedColor('red');
      setSelectedImage(mg63amg3);
    }
  
    const handleBlackClick = () => {
      setSelectedColor('black');
      setSelectedImage(mg63amg1);
    }
    const handleWhiteClick = () => {
      setSelectedColor('white');
      setSelectedImage(mg63amg5);
    }
    const handleBlueClick = () => {
      setSelectedColor('black');
      setSelectedImage(mg63amg10);
    }
    const handleGrayClick = () => {
      setSelectedColor('black');
      setSelectedImage(mg63amg11);
    }
    const handleYellowClick = () => {
      setSelectedColor('black');
      setSelectedImage(mg63amg12);
    }

const [choose, setChoose]=useState(false);
const cColor=()=>{
  setChoose(!choose);
}    

const g63Down5= () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 8.05,
      behavior: "smooth"
    });
  }, 200);
}

const g63Down7= () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0,
      behavior: "smooth"
    });
  }, 200);
}
const g63Down9= () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 1.2,
      behavior: "smooth"
    });
  }, 200);
}

  return (
    <div>
        <div className='g63amg'>
          <Fade bottom>
        <h1 className='g63amg2'>MERCEDES</h1>
        <h1 className='g63amg3'> G63 AMG</h1>
          </Fade>
          <Fade bottom>
<div className="g633icon777">          
     <div className="g632icon777" onClick={g63Down9}>
        <div className='g63amg4'><TfiArrowDown/></div>
            </div> 
                 </div>
                 </Fade>
      </div>




  <Fade bottom>
  <h1 className='g63amg5'>FIRST GENERATION</h1>
     </Fade>
    <Fade bottom>
        <div className='g63amg6'>
        <img className='g63amg7' src={mg63amg1} alt="" />
            <div>
        <h2 className='g63amg8'>MERCEDES W460 - FIRST GENERATION</h2>
        <p className='g63amg9'>The rarest W460 variants were the 230 GE 2.6 Brabus,<br/> the 280 GE AMG, and the 560 GE (1993). Brabus increased<br/> the engine displacement of the 2.3-litre four-cylinder inline<br/> engine to 2.6 litres, increasing the power to 114 kW (155 PS; 153 bhp). <br/>The W460 was assembled in France under licence by Peugeot for<br/> the French Army with Peugeot engine and transmission from the<br/> 504 and 604 respectively as well as its own seats and wiring<br/> system. The front differential gear lock was omitted because<br/> Peugeot used its own axles. They are easily identified by<br/> rectangular headlamps. In 2009, Mercedes-Benz, celebrating<br/> the 30-year anniversary of the G-Class, introduced the G 280 CDI <br/>EDITION.30 PUR as a five-door long wheelbase station wagon. The <br/>consumers could order theirs with "Off-Road Package 1" or<br/> "Off-Road Package 2". </p>
        <button className='g63amg10' onClick={g63Amg}>SPECIFICATIONS</button>
   
       
            
            </div>
        </div>
    </Fade>





               {g63spec && <div>
  <div className='lurus44'>
    <div className='g77763amg63amg'>
  <div className='g63amg99' onClick={g63Amg2} ><BsXLg /></div>
          </div>
  </div>
  <div className='lurus54'>
<div className='lurus55'>
  <h1 className='lurus56'>CONSUMPTION</h1>
  <div className='lurus57'>
    <p className='lurus58'>COMBINED CONSUMPTION*</p>
    <p className='lurus59'>14,1 l/100km (WLTP)</p>
  </div>
  <hr className='lurushr2'/>
  <div className='lurus60'>
    <p className='lurus61'>COMBINED CO2 EMISSIONS*</p>
    <p className='lurus62'>320 g/km (WLTP)</p>
  </div>
  <hr className='lurushr2'/>

<h1 className='lurus70'>ENGINE</h1>
<div className='lurus71'>
  <p className='lurus73'>NUMBER OF CYLINDERS</p>
  <p className='lurus74'>8</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>DISPLACEMENT</p>
  <p className='lurus77'>3,996 cm³ (243.85 cu in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BORE X STROKE</p>
  <p className='lurus77'>86 x 86 mm (3.39 X 3.39 in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. POWER</p>
  <p className='lurus77'>666 CV (490 kW) @ 6,000 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. TORQUE</p>
  <p className='lurus77'>850 Nm (626.93 lb.-ft.) @ 2,250-4,500 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAXIMUM ENGINE SPEED</p>
  <p className='lurus77'>6,800 rpm</p>
</div>
<hr className='lurushr2'/>
</div>


<div className='lurus63'>
  <h1 className='lurus68'>WHEELS</h1>
  <div className='lurus65'>
    <p className='lurus66'>FRONT RIMS</p>
    <p className='lurus67'>10Jx22" ET20</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR RIMS</p>
    <p className='lurus676'>11.5Jx22" ET14</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>FRONT TIRES</p>
    <p className='lurus677'>PIRELLI P ZERO 285/40 ZR22</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR TIRES</p>
    <p className='lurus678'>PIRELLI P ZERO 325/35 ZR22</p>
  </div>
  <hr className='lurushr2'/>

<h1 className='lurus70'>PERFORMANCE</h1>
<div className='lurus71'>
  <p className='lurus73'>TOP SPEED</p>
  <p className='lurus74'>350 km/h</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-100 KM/H (0-62 MPH)</p>
  <p className='lurus77'>3.3 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-200 KM/H (0-124 MPH)</p>
  <p className='lurus77'>11.5 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BRAKING 100-0 KM/H (62-0 MPH)</p>
  <p className='lurus77'>32,9 m</p>
</div>
<hr className='lurushr2'/>
    </div>
  </div>
</div>}
        
    
<Fade bottom>
<h1 className='g63amg15'>SECOND GENERATION - W463</h1>
</Fade>

<Fade bottom>
<div className='g63amg16'>
    <div>
  <h2 className='g63amg19'>MERCEDES W463 - SECOND GENERATION</h2>   
  <p className='g63amg18'>In contrast to its predecessor, the new G-Class has grown 121 millimeters in width and 53 millimeters in length. The increase in width is for more driving stability, sturdier side impact protection, and more seating comfort. The increased length, especially in the front end, is due to the new 2019 EU pedestrian impact safety regulations: the previous generation did not have enough open space between the car's front end and the rigid components beneath for the crumple zone as to mitigate the injury to a pedestrian's body.</p>
  <button className='g63amg20' onClick={g63Amg3} >SPECIFICATIONS</button>
</div>
 <img className='g63amg17' src={mg63amg2} alt="" />
</div>
</Fade>




               {g63spec2 && <div>
  <div className='lurus44'>
      <div className='g77763am2g63amg'>
  <div className='g63amg99' onClick={g63Amg4} ><BsXLg /></div>
       </div>
  </div>
  <div className='lurus54'>
<div className='lurus55'>
  <h1 className='lurus56'>CONSUMPTION</h1>
  <div className='lurus57'>
    <p className='lurus58'>COMBINED CONSUMPTION*</p>
    <p className='lurus59'>14,1 l/100km (WLTP)</p>
  </div>
  <hr className='lurushr2'/>
  <div className='lurus60'>
    <p className='lurus61'>COMBINED CO2 EMISSIONS*</p>
    <p className='lurus62'>320 g/km (WLTP)</p>
  </div>
  <hr className='lurushr2'/>

<h1 className='lurus70'>ENGINE</h1>
<div className='lurus71'>
  <p className='lurus73'>NUMBER OF CYLINDERS</p>
  <p className='lurus74'>8</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>DISPLACEMENT</p>
  <p className='lurus77'>3,996 cm³ (243.85 cu in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BORE X STROKE</p>
  <p className='lurus77'>86 x 86 mm (3.39 X 3.39 in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. POWER</p>
  <p className='lurus77'>666 CV (490 kW) @ 6,000 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. TORQUE</p>
  <p className='lurus77'>850 Nm (626.93 lb.-ft.) @ 2,250-4,500 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAXIMUM ENGINE SPEED</p>
  <p className='lurus77'>6,800 rpm</p>
</div>
<hr className='lurushr2'/>
</div>


<div className='lurus63'>
  <h1 className='lurus68'>WHEELS</h1>
  <div className='lurus65'>
    <p className='lurus66'>FRONT RIMS</p>
    <p className='lurus67'>10Jx22" ET20</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR RIMS</p>
    <p className='lurus676'>11.5Jx22" ET14</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>FRONT TIRES</p>
    <p className='lurus677'>PIRELLI P ZERO 285/40 ZR22</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR TIRES</p>
    <p className='lurus678'>PIRELLI P ZERO 325/35 ZR22</p>
  </div>
  <hr className='lurushr2'/>

<h1 className='lurus70'>PERFORMANCE</h1>
<div className='lurus71'>
  <p className='lurus73'>TOP SPEED</p>
  <p className='lurus74'>350 km/h</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-100 KM/H (0-62 MPH)</p>
  <p className='lurus77'>3.3 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-200 KM/H (0-124 MPH)</p>
  <p className='lurus77'>11.5 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BRAKING 100-0 KM/H (62-0 MPH)</p>
  <p className='lurus77'>32,9 m</p>
</div>
<hr className='lurushr2'/>
    </div>
  </div>
</div>}



















<Fade bottom>
  <div className='g63amg21'>
    <Fade bottom>
   <div className='g63amg22'>
    <h1 className='g63amg23'>The crowning glory of our creation.</h1>
     <img src={mg63amg3} className='g63amg24' alt="" />
   </div>
</Fade>
<Fade bottom>
<div className='g63amg25'>
<img className='g63amg26'src={mg63amg4} alt=''/>
  <div>
  <h1 className='g63amg27'>Uninhibited driving <br/> pleasure.</h1>
  <p className='g63amg28'>Diverse on-road and off-road drive<br/> programmes, the AMG Driver's Package and <br/>the selectable AMG Performance exhaust <br/>system make every journey a real pleasure.</p>
     </div> 
</div>
</Fade>
<Fade bottom>
  <div className='g63amg29'>
    <div>
    <h1 className='g63amg30'>The AMG V8 engine</h1>
    <p className='g63amg31'>The earth moves, the pulse races: with the 4.0-<br/>litre V8 biturbo engine delivering 430 kW (585<br/> PS), the Mercedes-AMG G 63 makes every<br/> journey feel like a motorised primal scream.</p>
    </div>
  <img src={mg63amg5} className='g63amg32' alt="" />
  </div>
</Fade>
<Fade bottom>
<div className='g63amg33'>
  <img src={mg63amg7} className='g63amg34' alt="" />
  <div>
  <h1 className='g63amg35'>Expressive exterior</h1>
  <p className='g63amg36'>The numerous features like the AMG-specific radiator trim<br/> and 22-inch wheels lend this legendary figure its extrovert<br/> outward appearance.</p>
    </div> 
</div>
</Fade>
  </div>
</Fade>

<Fade bottom>
  <h1 className='g63amg37'>interior of the<br/> Mercedes G63 AMG </h1>
</Fade>
<Fade bottom>
  <h3 className='g63amg38'>Discover the luxurious interior ambience of the new Mercedes G63 AMG</h3>
</Fade>

<Fade bottom>
  <img src={mg63amg9} className='g63amg39' alt=''/>
</Fade>

<Fade bottom>
     <div className='g63amg89'>
  <button className='g63amg87' onClick={cColor}>CHOOSE YOUR COLOR</button>
</div>
</Fade>

<Fade bottom>
{choose &&      
<div className='g63amg84'>
  <div className='g63amg777'>
<div onClick={handleRedClick} className='g63amg79'>RED</div>
<div onClick={handleBlackClick} className='g63amg80'>BLACK</div>
<div onClick={handleWhiteClick} className='g63amg81'>WHITE</div>
<div onClick={handleBlueClick} className='g63amg82'>DARKBLUE</div>
<div onClick={handleGrayClick} className='g63amg85'>GRAY</div>
<div onClick={handleYellowClick} className='g63amg86'>YELLOW</div>
</div>
{selectedColor && <img className='g63amg77' src={selectedImage} alt=''/>} 
</div>                         
      }
  </Fade>

<Fade bottom>
  <h1 className='g63amg93'>Please go up to re-experience<br/> this incredible world of  <br/> Mercedes G63 AMG</h1>
</Fade>
<Fade bottom>
<div className="p10rank">
<div className='p9rank'onClick={g63Down7}>
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



                <p className='write-astmart-fixed'>Fuel consumption and emission values of Mercedes G63 AMG*; Fuel consumption combined: 14,1 l/100km (WLTP); CO2-emissions combined: 320 g/km (WLTP)</p>





    </div>
  )
}

export default MercedesGG3Amg