import React from 'react';
import "./LuxuryHome.css";
import { BsArrowDown } from "react-icons/bs";
import Fade from 'react-reveal';
import revu from "./revuelto.jpeg";
import chi from "./chironback.webp";
import divo from "./bdivo4.jpg";
import mamg from "./mamg1.jpg";
import { useRef } from 'react';
import phantom from "./phantom.jpeg";
import my from "./maybachgerman.jpg";
import urus from "./urus.jpeg";
import mg from "./mg63amg3.jpg";
import eqs from "./eqs.jpeg";
import tesla from "./teslaplaid.jpg";
import conc from "./concept.jpeg";
import conc2 from "./concgal4.jpg";
import culmans from "./cullinanmansory.jpeg";
import culmans2 from "./rollscullinanmansory.jpg";
import rollstail from "./rollstail.jpeg";
import { Link, NavLink} from 'react-router-dom';
import huracannews from './huracannews.jpeg';
import divoo from './divo.jpeg';
import copart from "./copapng.png";
import galadve from "./galimg2.jpeg";
import app from "./gappstore.webp";
import gplay from "./googleplay.webp";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import { TfiArrowUp } from "react-icons/tfi"
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import ImageSlider5 from './ImageSlider5';
import { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillWarning } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";
import { TfiArrowDown } from "react-icons/tfi"


const LuxuryHome = () => {

  const slides = [
    {url: phantom},
    {url: urus},
    {url: chi},
    {url: culmans},
    {url: eqs},
    {url: culmans},
  ];
 const containerStyles = {
  width: "1519px",
  height: "700px",
  margin: "0 auto",
 marginTop: "100px"
 }









  const btne = (e)=>{
  e.target.style.background="black"
  e.target.style.color="white"
  }
  const btnl = (e)=>{
    e.target.style.background="white"
    e.target.style.color="black"
    }

    const scrollLux2 = () => {
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight * 0,
          behavior: "smooth"
        });
      }, 200);
    }
 

  const scroll2 =()=>{
    setTimeout(()=>{
      window.scrollTo({
        top: window.innerHeight * 1.2,
        behavior: "smooth"
      })
    },200)
  }
 


const [comment, setComment] = useState("");
const [comments, setComments] = useState([]);
const [error, setError] = useState("");

 
  const onClickHandler = () => {
    if (comment.trim() === "") {
    setError("PLEASE, ENTER THE COMMENT !!!");
    return;
    }
    setComments((comments) => [...comments, comment]);
    clearTextArea();
    setError("")
    };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  const textareaRef = useRef(null);
  const clearTextArea = () => {
    textareaRef.current.value = ""; 
    setComment("");
  };

  const onDeleteHandler = (index) => {
    const updatedComments = comments.filter((_, i) => i !==  index);
    setComments(updatedComments);
    };
   const thereFore=()=>{
    setComment("")
   }
    



  return (





    <div>
 <div className="luxhome">
<Fade bottom>
     <h1 className="luxhome2">DISCOVER THE LUXURY CARS</h1>
</Fade>
<Fade bottom>     
     <h1 className="luxhome3">ARRIVE THE HIGHEST LEVEL OF THE LUXURY</h1>
  </Fade>
  <Fade bottom>
<div className="lu3xhome4">
<div className='l2uxhome4' onClick={scroll2}>
  <div className="luxhome4" ><TfiArrowDown/></div>
</div>
     </div>
</Fade>

 </div>
<Fade bottom>
<h1 className="luxhome5">HYPERCAR</h1>
<div className="luxhome7">
<img src={revu} alt="" className="luxhome6" />
<img src={chi} alt="" className="luxhome8" />
</div>
<div className="luxhome9">
  <p className="luxhome10">Definitions of sports cars often relate to how the car design is optimised for dynamic performance, without<br/> any specific minimum requirements; both a Triumph Spitfire and Ferrari 488 Pista can be considered sports cars, despite vastly<br/> different levels of performance. Broader definitions of sports cars include cars "in which performance takes<br/> precedence over carrying capacity", or that emphasise the "thrill of driving" or are marketed<br/> "using the excitement of speed and the glamour of the (race) track "However, <br/>other people have more specific definitions, such as "must be a two-seater or a 2+2 <br/>seater" or a car with two seats only. There is no fixed distinction between sports cars and other categories of <br/>performance cars, such as muscle cars and grandtourers,  with some <br/>cars being members of several categories. Traditionally, the most common layout for sports <br/>cars was  a roadster  (a two-seat car without a fixed roof),however there are also <br/>several examples of early sports cars with four seats.</p>
</div>
<div className="luxhome11">
  <img src={divo} alt="" className="luxhome12" />
  <img src={mamg} alt="" className="luxhome13" />
</div>
</Fade>
<div className="luxhome14">
 <Fade bottom><h1 className="luxhome15">SEDAN CARS</h1></Fade> 
 <Fade bottom>
  <div className="luxhome17">
  <img src={phantom} alt="" className="luxhome16" />
  <p className="luxhome18">If you want a luxury and comfortable car, you really won't find<br/>  much betterthan these sedans. The information you will soon<br/>  learn will carry you to the highest level of luxury and comfort.<br/> Luxury sedans are made for people who love luxury and comfort.<br/> They are usually decorated with W-10, W-12 engines and their weight<br/>  varies between 2.5 and 3 tons. Germany's
  Mercedes-Benz Maybach S,<br/> BMW 7 SERIES and AUDI A8 models are referred to as luxury sedans.<br/> 
  England's ROLLS ROYCE PHANTOM, ROLLS ROYCE GHOST. The BENTLEY<br/>  MULSANNE and BENTLEY FLYING SPUR
  models are referred to as luxury<br/> sedans. Of course, since luxury sedans were originally produced in <br/>England, no luxury sedan can be compared to the luxury sedans<br/> of England.</p>
  </div>
<div className="luxhome19">
  <p className="luxhome20">
  A sedan chair, a sophisticated litter, was an enclosed box with <br/> windows used to transport one seated person. Porters at the  <br/>front and rear carried the chair with horizontal poles. Litters<br/> date back to long before ancient Egypt, India, and China. <br/> Sedan chairswere developed in the 1630s. Etymologists suggest<br/>  the name of the chair very probably came through varieties<br/> of Italian from the Latin sedere, meaning "to sit".
  The first<br/>  recordeduse of sedan for an automobile body occurred in<br/> 1912 when the Studebaker Four and Studebaker Six models <br/> were marketed as sedans. There were fully enclosed<br/> automobile bodies before 1912. Hatchback sedans are known <br/>simply as hatchbacks (not hatchback saloons); long-wheelbase <br/>luxury saloons with a division between the driver and passengers<br/> are limousines. An equivalent term for sports sedan in the<br/> United Kingdom is super saloon.
  </p>
  <img src={my} alt="" className="luxhome21" />
</div>
</Fade>
</div>
<Fade bottom>
  <h1 className="luxhome22">SUV CARS</h1>
<div className="luxhome23">
  <img src={urus} alt="" className="luxhome24" />
  <p className="luxhome25">SUV cars have been preferred almost everywhere since  <br/>  the years they were produced. The harsh off-road <br/> conditions and durabilitymake this car different from other<br/>  cars. If you own an SUV, it isvery unlikely that you will sink on<br/> the  road. FORD, CHEVROLET andDODGE in particular make <br/>some really outstanding pickups. It differs according to the<br/>  areas of use in SUV cars. example; You can't do off-road with<br/>  a ROLLSROYCE CULLINAN or LAMBORGHINI URUS. Because this <br/>type of car was made for luxury and speed. If we want to<br/> give another EXAMPLE; we can also mention the BENTLEY <br/>BENTAYGA, MERCEDES-BENZ GLS600 and MERCEDES-BENZ <br/>G63 AMG cars. Of course, since off-road cars have a<br/> powerful engine, they know a little hurt about fuel<br/> consumption. But thanks to the permangence it shows,<br/> you don't think about fuel consumption. But you don't have<br/> to worry about fuel consumption, because nowadays <br/>hybrid and electric pickups are being made.</p>
</div>
<div className="luxhome26">
  <p className="luxhome27">There is no commonly agreed-upon definition of an SUV and <br/>usage of the term varies between countries. Thus, it is "a loose term<br/> that traditionally covers a broad range of vehicles with four-wheel drive.<br/>" Some definitions claim that an SUV must bebuilt on a  light truck<br/>  chassis; however,  broader definitions consider any vehicle<br/> with off-road design features to be an SUV. A crossover<br/> SUV  is often defined as an SUVbuilt with a unibody<br/> construction (as with passenger cars); however,the designations<br/>  are increasingly blurred because of thecapabilities of the<br/>  vehicles, the labelling by marketers, and electrification <br/>of new models. SUVs have been criticized for a <br/>variety of environmental and safety-related reasons. They generally <br/>have poorer fuel efficiency and require more resources to <br/>manufacture than smaller vehicles, contributing<br/> more to climate change and environmental degradation.</p>
  <img src={mg} alt="" className="luxhome28" />
</div>
</Fade>

<div className="luxhome31">
  <Fade bottom>
<h1 className="luxhome29">ELECTRIC CARS</h1>

<div className="luxhome33">
<div className="luxhome30"></div>
<div>
<h1 className='luxhome34'>NO FUEL</h1>
<h1 className='luxhome34'>NO DIESEL</h1>
<h1 className='luxhome34'>JUST ELECTRIC</h1>
</div>
<div className="luxhome32"></div>
</div>

<div className="luxhome37">
<img src={eqs} alt="" className="luxhome35" />
<p className="luxhome36">Although electric cars did not receive much attention in the first<br/>  years of their production, they are now widely used. The biggest<br/> plus of electric cars is that they do not need gasoline or diesel<br/> because they do not have an internal combustion engine. It has<br/> a battery just like a phone, and you plug it in when you run out<br/> of battery. In general, it may be necessary to wait 7-8 hours for<br/> 0-100% to be fully filled. But no one plugs their phone into the<br/> charger at 0%, nor does your car. An electric car or EV is an<br/> automobile that is propelled by one or more electric traction<br/> motors, using only energy stored in batteries. Compared to<br/> conventional internal combustion engine (ICE) vehicles,  have<br/> superior energy conversion efficiency and no exhaust emissions <br/>and lower overall vehicle emissions.</p>
</div>

<div className="luxhome38">
  <p className="luxhome39">
  The electric vehicle battery typically needs to be plugged into a<br/>  main selectricity power supply for recharging in order to maximize <br/>the cruising range. Recharging an electric car can be done at a<br/> variety of charging stations; these charging stations can be installed<br/> in private homes, parking garages and public areas. There are also<br/> research and development in other technologies such as battery<br/> swapping and inductive charging. As the recharging infrastructures <br/>(especially those with fast chargers) are still in its relative infancy, <br/>range anxiety and time cost are frequent psychological obstacles<br/> against electric cars during consumer purchasing decisions.<br/> Worldwide, 10 million plug-in electric cars were sold in 2022, a total<br/> of 14% of new car sales. The Tesla Model 3 became the world's <br/>all-time best-selling electric car in early 2020, and in June 2021 became<br/> the first electric car to pass 1 million global sales.
  </p>
  <img src={tesla} alt="" className="luxhome40" />
</div>
</Fade>

</div>

<Fade bottom>
<h1 className="luxhome41">Concept Cars</h1>
<div className="luxhome43">
<img src={conc} alt="" className="luxhome42" />
<img src={conc2} alt="" className="luxhome44" />
</div>
 <div className="luxhome45">
  <p className="luxhome46">If you're not familiar with concept cars, you'll know what this space shuttle is doing here.
Concept cars<br/> are usually for brands to show off their bodies, and you can often see them
at car shows. Some of them have a really incredible <br/>appearance and you might think
it's not a car. The interior is really like a spaceship. The purpose of the<br/> concept cars
is the body show of the manufacturer and its future face.<br/> Some use unconventional,
exotic, or expensive materials ranging from paper,<br/> carbon fiber to refined alloy. A concept car (also known as a concept vehicle, show vehicle or prototype)<br/> is a car made to showcase new styling and/or new technology. They are often exhibited at motor shows<br/> to gauge customer reaction to new and radicaldesigns which may or may<br/>  not be mass-produced. They can also be quite refined such as<br/> General Motors' Cadillac Sixteen concept.</p>
 </div>
</Fade>





<div className="luxhome47">
  <Fade bottom>
    <h1 className="luxhome48">MANSORY CARS</h1>
    <div className="luxhome51">
      <div className="luxhome50"><BsArrowDown/></div>
      </div>  
     <h1 className="luxhome49">FASTEN YOUR SEAT BELTS!!!</h1>
     <div className="luxhome51">
      <div className="luxhome50"><BsArrowDown/></div>
      </div> 
      <h1 className="luxhome52">WE TAKE FLIGHT!</h1>
      <div className="luxhome54">
      <img src={culmans} alt="" className="luxhome53" />
      </div>
      <div className="luxhome55">
        <p className="luxhome56">Mansory cars are custom made cars. They are specially modified and<br/> only apply to some luxury cars. Forget all the cars you saw above,<br/> because these mansory cars will turn you into a superhero. Words are <br/>not really enough to describe these cars. They are so special, so <br/>magnificent, so incredible, that they use lux material in even the smallest<br/> detail. The vehicles Mansory mods usually have a more aggressive look<br/> and their performance improves. In addition, Mansory also customizes<br/> the interiors of the vehicles. If you own a mansory car, you should know<br/> that you have a really special car. Because people are dying to own these <br/>cars. There's a lot to talk about these cars. ROLLS ROYCE PHANTOM, ROLLS<br/> ROYCE GHOST, ROLLS ROYCE CULLINAN, BENTLEY, LAMBORGHINI URUS,<br/>  LAMBORGHINI AVENTADOR, LAMBORGHINI HURACAN, FERRARI, and MERCEDES<br/> MAYBACH S models are examples of these mansory cars.</p>
        <img src={culmans2} alt="" className="luxhome57" />
      </div>
  </Fade>
</div>

<Fade bottom>
<h1 className='luxhome58'>NEWS</h1>
<h1 className='luxhome59'>LUXURY CARS WORLD</h1>
<img className='luxhome60' src={rollstail} alt="" />
<h2 className='luxhome61'>18 APRIL 2023</h2>
<h3 className='luxhome62'>ROLLS ROYCE BOAT TAIL</h3>

<div className='newsclass'>
        <Fade bottom>  
     <div>
<h1 className='section-15-h1'>ROLLS ROYCE BOAT TAIL: A ONCE IN A LIFETIME<br/> EXPERIENCE</h1>
<p className='section-15-p1'>Crafted in exclusive collaboration between artisans and owners, every element of Boat Tail is<br/> personalised perfection.</p>
    </div>
    </Fade>
<div>
  <Fade bottom>
  <Link to="/rollsroyceboattail"><button className='section-15-btn-1' onMouseEnter={btne} onMouseLeave={btnl} >READ MORE</button></Link>
        </Fade>
    </div>
</div>
<div className='news-2class'>
<img className='huracannews' src={huracannews} alt="" />
    <div>
<h3 className='news-2-date'>20 APRIL 2023</h3>
<h1 className='news-2-h1'>LAMBORGHINI HURACÁN STERRATO:<br/> CALIFORNIA DRIFTING</h1>
<Link to='/lamborghinihuracan'><button className='news-2-btn-1' onMouseEnter={btne} onMouseLeave={btnl}>READ MORE</button></Link>
      </div>
</div>


<div className='news-3class'>
<img className='divonews' src={divoo} alt="" />
    <div>
<h3 className='news-3-date'>25 APRIL 2023</h3>
<h1 className='news-3-h1'>BUGATTIN'S NEWEST AND THE MOST<br/>  AGGRESSIVE CAR</h1>
<Link to='/bugattidivo'><button className='news-3-btn-1' onMouseEnter={btne} onMouseLeave={btnl}>READ MORE</button></Link>
    </div>
</div>
<div className='section-16'>
<Link to="/news"><button className='luxhome67'>SEE MORE</button></Link>
</div>

<div style={containerStyles}>
  <ImageSlider5 slides={slides}/>
           </div>












<h1 className="galselc">Take a look at these car websites that<br/>  we have selected for you</h1>
<div className="luxhome68">
  <div className="luxhome69">
    <div className="luxhome70">
  <p className="pcop">Copart, Inc. or simply Copart is a global provider of online vehicle<br/> auction and remarketing services to automotive resellers such<br/> as insurance, rental car, fleet and finance companies in 11 countries;<br/> the US, Canada, the UK, Germany, Ireland, Brazil, Spain, UAE, Bahrain,<br/> Oman and Finland. Headquartered in Dallas, Texas, Copart has more<br/> than 200 physical locations around the world, where it houses more <br/>than 10,000 acres of vehicle inventory. Copart sells used, wholesale<br/> and repairable vehicles in weekly and bi-weekly online auctions to <br/>buyers ranging from consumers to automotive businesses around <br/>the world.</p>
  <a href="#" > <img src={copart} alt="" className="copimg" /> </a>
      </div>
  </div>
</div>
<div className="galcarsflex">
    <div className="galcars">
      <div className="galhref">
<a href="#"><img src={galadve} alt="" className='galadve' /></a>
</div>
    </div>
  </div>
  <Fade bottom>
  <h1 className="hdownapp">DOWNLOAD MOBILE APP</h1>
</Fade>

<Fade bottom>
 <div className="appflex">
  <img src={app} alt="" />
  <img src={gplay} className='appfleximg' alt="" />
 </div>







 <div className="main-container">
      <div className="comment-flexbox">
        <h1 className="comment-text">COMMENT</h1>
           <div className='commtextarea'>   
        <textarea
            style={{ width: "63%", height: "77px" }}
            placeholder='PLEASE, ENTER THE COMMENT'
           ref={textareaRef} 
          value={comment}
          onChange={onChangeHandler}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onClickHandler(e);
            }
          }}
          className="input-box"
        />
        <span className='cCancel' onClick={thereFore}><AiOutlineClear/></span>
        {error && <p className='error777'> 
        <span className='errIcon'><AiFillWarning/>
        </span>{error}</p>}
               </div> 
        <div className='commbtn'>
        <button onClick={onClickHandler} className="comment-button">
          SUBMIT
        </button>
               </div>
      {comments.map((text,index) => (
              <div className='commcontflex'>
          <div className="comment-container"><span className='userC'><FaUserCircle /></span>
          <span className='cSpan'>{text}</span> 
          </div>
          <span className='del' onClick={() => onDeleteHandler(index)}><RiDeleteBin6Line/></span>
                </div>
      ))}
      </div>
 </div>

  














</Fade>
<Fade bottom>
<h1 className='homeaboveh1'>Please go above to take<br/> another look at these incredible<br/> luxury cars</h1>   
 </Fade>
 <div className="p10rank">
<div className='p9rank'>
  <div className="p8rank" onClick={scrollLux2}><TfiArrowUp/></div>
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
         


    </div>
  )
}

export default LuxuryHome