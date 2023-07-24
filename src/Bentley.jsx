import React from 'react';
import "./Bentley.css";
import Fade from 'react-reveal';
import luxbent1 from "./luxbent2.png";
import bent1 from "./bentint1.jpg";
import bent2 from "./bent2.jpg";
import bent4 from  "./bent4.jpg";
import { BsArrowDownCircle } from "react-icons/bs";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import{ BsArrowUpCircle } from "react-icons/bs";
import bf1 from "./bentf1.jpg";
import bf2 from "./bentf2.jpg";
import bf3 from "./bentf3.jpg";
import bf4 from "./bf4.jpg";
import bf5 from "./bf5.jpg";
import bs1 from "./bseat1.jpg";
import { RiInstagramLine } from "react-icons/ri";
import { TfiArrowUp } from "react-icons/tfi";
import { TfiArrowDown } from "react-icons/tfi"
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import bent777b from "./bent777.jpg";


const Bentley = () => {


    const a =(event)=>{
        event.target.style.border="none";
        event.target.style.background="black"
        event.target.style.color="white"
      }
      const b =(event)=>{
        event.target.style.border="1px solid black";
        event.target.style.background="white"
        event.target.style.color="black"
      }
      
      

      const divStyle = {
        backgroundSize: 'cover',
        height: '80vh',
        marginLeft:"-2px",
        objectFit: "cover"
      }
      const slideImages = [
        {
          url: bent1,
        },
        {
          url: bent2,
        },
        {
          url:bent4,
        },
     
      ];


      const oView = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 1.4,
            behavior: "smooth"
          });
        }, 200);
      }
      const perf = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 2.7,
            behavior: "smooth"
          });
        }, 200);
      }
      const des = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 4.45,
            behavior: "smooth"
          });
        }, 200);
      }
      const tech = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 5.1,
            behavior: "smooth"
          });
        }, 200);
      }
      const pers = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 7,
            behavior: "smooth"
          });
        }, 200);
      }
      const toBent = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 0.927,
            behavior: "smooth"
          });
        }, 200);
      }


      const bUp =()=>{
        setTimeout(()=>{
          window.scrollTo({
           top:0,
           behavior: "smooth"
          })
       },100) 
      }
      const tFor = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 1.05,
            behavior: "smooth"
          });
        }, 200);
      }




  return (
    <div>

<div className='luxsuv-section'>
  <Fade bottom>
<h1 className='luxsuv-sec1'>BENTLEY</h1>
<h1 className='luxsuv-sec2'>BENTAYGA</h1>
</Fade>
<Fade bottom>
<div className="bent3icon777">
      <div className="bent2icon777" onClick={toBent}>
<div className='luxsuv-sec3'><TfiArrowDown/></div>
      </div>
</div>
</Fade>
      </div>
<Fade bottom>
<h1 className='luxsuv-sec4'>LET'S TAKE A LOOK<br/> AT THE BENTLEY BENTAYGA</h1>
</Fade>

<Fade bottom>
<div className='luxsuv-sec5'>  
<button className='luxsuv-sec7' onClick={oView} onMouseEnter={a} onMouseLeave={b}>OVERVIEW</button>
<button className='luxsuv-sec8' onClick={perf} onMouseEnter={a} onMouseLeave={b}>PERFORMANCE</button>
<button className='luxsuv-sec8' onClick={des} onMouseEnter={a} onMouseLeave={b}>DESIGN</button>
<button className='luxsuv-sec8' onClick={tech} onMouseEnter={a} onMouseLeave={b}>TECHNOLOGY</button>
<button className='luxsuv-sec8' onClick={pers} onMouseEnter={a} onMouseLeave={b}>PERSONALISATION</button>
  </div>
</Fade>

<Fade bottom>
<div className='luxsuv-sec9'>
  <img className='luxsuv-sec10' src={luxbent1} alt=''/>
  <div>
  <h1 className='lux-sec11'>UNRIVALLED POWER</h1>
  <p className='lux-sec12'>This is the most powerful Bentayga ever built.<br/> Capable of producing 626 bhp (635 PS) and 900 Nm <br/> (664 lb-ft) of torque, it can accelerate from zero to<br/>  60 mph in just 3.8 seconds (0 to 100 km/h in 3.9 <br/> seconds) - and on to a top speed of 190 mph (306<br/>  km/h).*</p>
  <p className='lux-sec13'>*With the optional Carbon Ceramic brakes</p>
  </div>
  <div>
  <p className='lux-sec14'>Yet the drive is only one dimension of this remarkable<br/> car. A unique Speed aesthetic is on display, inside and <br/>out. And with the level of hand-craftsmanship that<br/> only Bentley can deliver, it stands on its own as an<br/> example of luxury design. The Bentayga Speed is truly<br/> a car without parallel. Consider it the ultimate sports-<br/>focused, super-luxury SUV.</p>
  <p className='lux-sec15'>The vehicle is not available in Europe, and is therefore not subject<br/> to Directive 1999/94/EG</p>
    </div>
</div>
</Fade>
<Fade bottom>
<img className='lux-sec16' src={bent777b} alt=''/>
</Fade>


<Fade bottom>
    <h1 className='lux-sec17'>W12 ENGINE</h1>
</Fade>
<Fade bottom>
    <div className='lux-sec18'>
        <div>
        <h1 className='lux-sec19'>190 MPH</h1>
        <h2 className='lux-sec20'>MAX SPEED</h2>
        </div>
        <div>
        <h1 className='lux-sec19'>3.7 S</h1>
        <h2 className='lux-sec20'>0-100 KM/H</h2>
        </div>
        <div>
        <h1 className='lux-sec19'>627 HP</h1>
        <h2 className='lux-sec20'>HORSEPOWER</h2>
        </div>
        <div>
        <h1 className='lux-sec19'>900 NM</h1>
        <h2 className='lux-sec20'>TORQUE</h2>
        </div>
    </div>
</Fade>

<Fade bottom>
<div className='lux-sec21'>
    <div>
        <h1 className='lux-sec22'>PERFORMANCE</h1>
        <h1 className='lux-sec23'>ENGINEERED TO <br/>EXCITE</h1>
        <div className='kk777' onClick={tFor}><BsArrowUpCircle/></div>
    </div>
    <div className='lux-sec37'>
<h3 className='lux-sec26'>ENHANCED SPORTS MODE</h3>
<p className='lux-sec25'>Choose between four driving modes: Comfort<br/> maximises ride refinement, while Enhanced Sports<br/>  mode tunes the engine, transmission and chassis <br/> settings for unbridled exhilaration. Bentley mode <br/> offers a mid-point, while Custom lets you configure<br/>  your own settings.</p>
<h3 className='lux-sec26'>TURN UP THE VOLUME</h3>
<p className='lux-sec25'>Driving the Bentayga Speed is an experience that<br/> delights all the senses - and the roar of the 6.0 litre<br/> W12 engine as you accelerate is integral to the thrill<br/> of the drive. You can push this effect to the limit<br/> with the optional titanium Sports Exhaust.</p>
<h3 className='lux-sec26'>COMPLETE CONTROL</h3>
<p className='lux-sec25'>The Bentley Dynamic Ride system delivers<br/> exceptional handling, keeping the cabin more stable <br/> when cornering hard, without compromising ride<br/>  comfort when cruising on the highway.</p>
</div>


<div className='lux-sec36'>
<h3 className='lux-sec26'>GO BEYOND THE ROAD</h3>
<p className='lux-sec25'>The All-Terrain Specification is fitted as standard,<br/> offering four additional driving modes for low-<br/>traction surfaces such as snow, mud, gravel and even<br/> wet grass. It also includes added underfloor<br/> protection.</p>
<h3 className='lux-sec26'>POWER WITH RESPONSIBILITY</h3>
<p className='lux-sec25'>Variable displacement technology ensures maximum<br/> engine efficiency and range between fill-ups, by<br/> deactivating six of the car's 12 cylinders when the<br/> full power of the engine is not required.</p>
<h3 className='lux-sec26'>STOP FASTER</h3>
<p className='lux-sec25'>The front wheels can be equipped with a set of 440<br/> mm carbon ceramic disc brakes. The most powerful<br/> brakes ever fitted to a Bentley, they are among the<br/> largest in the production car world.</p>
       </div>
    </div>
</Fade>

<Fade bottom>
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

</Fade>

<Fade bottom>
<div className='lux-sec40'>
  <div>
<h1 className='lux-sec41'>DESIGN</h1>
<h1 className='lux-sec42'>A DARK TAKE ON<br/> BENTLEY<br/> CRAFTSMANSHIP</h1>
<div className='kkkk777'>
  <div className='kkkkk777' onClick={tFor}><BsArrowUpCircle/></div>
  </div>
</div>
<p className='lux-sec43'>The Bentayga Speed is instantly recognisable, thanks<br/> to features including a body-coloured carbon fibre <br/>styling kit. Much of the exterior detailing, including<br/> the front matrix grille and Speed badging, is rendered<br/> in a dark tint finish, with the front and rear lights <br/>tinted dark to match. Red brake callipers peer <br/>through the unique 22” wheels, while the oil and fuel<br/> filler caps feature a stunning jewel finish.</p>
<p className='lux-sec44'>Inside, there are Speed emblems on the treadplates,<br/> the fascia and the seats. A unique Speed colour split<br/>  is applied to the diamond-quilted leather upholstery,<br/>  which can be commissioned in any colour from<br/>  Bentley 's full range. For the finishing touches,<br/> sports-style pedals complement performance-<br/> inspired graphics on the instrument panel.</p>
</div>
</Fade>
<div className='sLine2'></div>
<div className='sLine'></div>
  
<Fade bottom>
  <h1 className='lux-sec45'>TECHNOLOGY</h1>
  <h1 className='lux-sec46'>FORWARD-LOOKING <br/>FEATURES</h1>
</Fade>

<Fade bottom>
  <div className='lux-sec47'>
       <div className='lux-sec49'>
    <img className='lux-sec48' src={bf1} alt=''/>
    <h2 className='lux-sec52'>ASSISTANCE WHEN YOU WANT IT</h2>
    <p className='lux-sec53'>Despite its power, the Bentayga Speed is incredibly<br/> easy to drive, thanks to a suite of driver assistance <br/> features for use when driving in the city, including <br/> assisted parking and traffic sign recognition.</p>
    </div>
    <div className='lux-sec50'>
    <img className='lux-sec48' src={bf2} alt=''/>
     <h2 className='lux-sec52'>MAKE THE CONNECTION</h2>
     <p className='lux-sec53'>The car is completely connected, thanks to a built-<br/> in Wi-Fi hotspot. The wired and wireless <br/>implementations of both Android Auto*  and Apple <br/> CarPlay** mean you can use your phone <br/> seamlessly with car's infotainment system.</p>
    </div>
    <div className='lux-sec51'>
    <img className='lux-sec48' src={bf3} alt=''/>
    <h2 className='lux-sec52'>CONNECTED CAR SERVICES</h2>
    <p className='lux-sec53'>My Bentley connected services include Online radio<br/>  and over-the-air map updates. The My Bentley<br/>  smartphone app lets you connect to your car <br/> wherever you are - to  locate it when parked, <br/> for example,or check the status  of locks and windows.</p>
          </div>
  </div>
</Fade>

<Fade bottom>
  <p className='lux-sec54'>*Android is a trademark of Google LLC<br/>
**Apple CarPlay is a registered trademark of Apple Inc.</p>
  </Fade>


  <Fade bottom>
  <div className='lux-sec47'>
       <div className='lux-sec49'>
    <img className='lux-sec48' src={bf4} alt=''/>
    <h2 className='lux-sec52'>AUDIOPHILE SOUND</h2>
    <p className='lux-sec53'>The car is fitted with the Bentley Signature Audio <br/>system as standard, while audiophiles can upgrade<br/>  to the phenomenal Naim for Bentley system, <br/>featuring 20 speakers and a 1,720-watt amplifier,<br/> for unrivalled sound.</p>
    </div>
    <div className='lux-sec50'>
    <img className='lux-sec48' src={bf5} alt=''/>
     <h2 className='lux-sec52'>REAR-SEAT CONTROL</h2>
     <p className='lux-sec53'>Passengers in the rear of the car benefit from the<br/> Touch Screen Remote (TSR), a wireless controller <br/>that provides access to some of the most<br/> commonly used in-car functions, from heating and <br/>ventilation to the audio system.</p>
    </div>
    <div className='lux-sec51'>
    <img className='lux-sec48' src={bent4} alt=''/>
    <h2 className='lux-sec52'>SCREEN TIME</h2>
    <p className='lux-sec53'>The optional Bentley Rear Entertainment system adds<br/> two 10.1” touchscreens to the backs of the front seats,<br/> allowing passengers to watch content from their <br/>personal devices, plug in games consoles and even<br/>  play their music on the audio system</p>
          </div>
  </div>
  <div className='kkk777'>
  <div className='kk777' onClick={tFor}><BsArrowUpCircle/></div>
  </div>
</Fade>




<Fade bottom>
  <div className='lux-sec55'>
    <img className='lux-sec56' src={bs1} alt=''/>
    <div className='lux-sec59'>
    <h1 className='lux-sec57'>PERSONALISATION</h1>
    <h1 className='lux-sec58'>FREEDOM OF <br/>CHOICE</h1>
    <p className='lux-sec60'>The Bentayga Speed can be commissioned with<br/> Bentley's full range of interior hide colours and colour<br/>  splits, as well as an equally wide range of handcrafted <br/> veneers. In addition to a wide selection of traditional<br/>  high-gloss woods, there are also three open-pore wood<br/>  finishes that use less lacquer for a matte effect.  More <br/>contemporary still are the technical finishes on offer,<br/>  ranging from carbon fibre to Dark Tint Diamond <br/> Brushed Aluminium.</p>
    <p className='lux-sec61'>In addition to the driver assistance features that come<br/> as standard, you can add the full Touring Specification,<br/> which includes features that make long journeys easier<br/> and safer, from a head-up display to a night vision <br/>camera.</p>
    <div className="bs777" onClick={tFor}><BsArrowUpCircle/></div>
    </div>
  </div>
</Fade>

<Fade bottom>
<h1 className='lux-sec65'>Please go up to re-experience <br/>this incredible  Bentley Bentayga</h1>
</Fade>
<Fade bottom>
<div className="p10rank">
<div className='p9rank'onClick={bUp}>
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



  <p className='write-astmart-fixed'>Bentley Bentayga on this page: WLTP drive cycle: fuel consumption, mpg (l/100 km) - Combined 21.7-94.2 (3-13). Combined CO₂ - 68-294 g/km.</p>

    </div>
  )
}

export default Bentley