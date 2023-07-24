import React from 'react';
import "./LuxuryDealerShips.css";
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LuxuryDealer } from './LuxuryD';
import { Fade } from "react-reveal";
import { TfiArrowUp } from "react-icons/tfi"
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";


const LuxuryDealerShips = () => {
 
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











const [location, setLocation]=useState(false);
const [location2, setLocation2]=useState(true);
const [location3, setLocation3]=useState(false);
const [location4, setLocation4]=useState(false);
const [location5, setLocation5]=useState(false);
const [location6, setLocation6]=useState(false);

const [location7, setLocation7]=useState(false);
const [location8, setLocation8]=useState(true);
const [location9, setLocation9]=useState(false);
const [location10, setLocation10]=useState(false);
const [location11, setLocation11]=useState(false);
const [location12, setLocation12]=useState(false);

const [location13, setLocation13]=useState(false);
const [location14, setLocation14]=useState(true);
const [location15, setLocation15]=useState(false);
const [location16, setLocation16]=useState(false);
const [location17, setLocation17]=useState(false);
const [location18, setLocation18]=useState(false);

const [location19, setLocation19]=useState(false);
const [location20, setLocation20]=useState(true);
const [location21, setLocation21]=useState(false);
const [location22, setLocation22]=useState(false);
const [location23, setLocation23]=useState(false);
const [location24, setLocation24]=useState(false);

const [location25, setLocation25]=useState(false);
const [location26, setLocation26]=useState(true);
const [location27, setLocation27]=useState(false);
const [location28, setLocation28]=useState(false);
const [location29, setLocation29]=useState(false);
const [location30, setLocation30]=useState(false);

const [location31, setLocation31]=useState(false);
const [location32, setLocation32]=useState(true);
const [location33, setLocation33]=useState(false);
const [location34, setLocation34]=useState(false);
const [location35, setLocation35]=useState(false);
const [location36, setLocation36]=useState(false);

const [location37, setLocation37]=useState(false);
const [location38, setLocation38]=useState(true);
const [location39, setLocation39]=useState(false);
const [location40, setLocation40]=useState(false);
const [location41, setLocation41]=useState(false);
const [location42, setLocation42]=useState(false);

const [location43, setLocation43]=useState(false);
const [location44, setLocation44]=useState(true);
const [location45, setLocation45]=useState(false);
const [location46, setLocation46]=useState(false);
const [location47, setLocation47]=useState(false);
const [location48, setLocation48]=useState(false);

const [location49, setLocation49]=useState(false);
const [location50, setLocation50]=useState(true);
const [location51, setLocation51]=useState(false);
const [location52, setLocation52]=useState(false);
const [location53, setLocation53]=useState(false);
const [location54, setLocation54]=useState(false);

const [location55, setLocation55]=useState(false);
const [location56, setLocation56]=useState(true);
const [location57, setLocation57]=useState(false);
const [location58, setLocation58]=useState(false);
const [location59, setLocation59]=useState(false);
const [location60, setLocation60]=useState(false);


const lClick = () => {
  setLocation7("");
  setLocation13("");
  setLocation19("");
  setLocation25("");
  setLocation31("");
  setLocation37("");
  setLocation43("");
  setLocation49("");
  setLocation55("");
if (!location) {
    setLocation(true) 
  }
  dScroll()
};



const lClick2 = () => {
  setLocation3("");
  setLocation4("");
  setLocation5("");
  setLocation6("");
  if(!location2){
    setLocation2(true)
  }
};
const lClick3 = () => {
  setLocation2("");
  setLocation4("");
  setLocation5("");
  setLocation6("");
  if(!location3){
    setLocation3(true)
  }
};
const lClick4 =()=>{
setLocation2("");
setLocation3("");
setLocation5("");
setLocation6("");
  if (!location4) {
    setLocation4(true)
  }
}
const lClick5=()=>{
setLocation2("");
setLocation3("");
setLocation4("");
setLocation6("");
if (!location5) {
  setLocation5(true)
  }
}
const lClick6=()=>{
setLocation2("");
setLocation3("");
setLocation4("");
setLocation5("");
if (!location6) {
    setLocation6(true)         
   }
}
const lClick7=()=>{
   setLocation("");
   setLocation13("");
   setLocation19("");
   setLocation25("");
   setLocation31("");
   setLocation37("");
   setLocation43("");
   setLocation49("");
   setLocation55("");
  if (!location7) {
    setLocation7(true)
  }
  dScroll()
}
const lClick8=()=>{
  setLocation9("");
  setLocation10("");
  setLocation11("");
  setLocation12("");
  if (!location8) {
    setLocation8(true);
  }
}
const lClick9=()=>{
 setLocation8("");
 setLocation10("");
 setLocation11("");
 setLocation12("");
 if (!location9) {
  setLocation9(true);
 }
}
const lClick10=()=>{
  setLocation8("");
  setLocation9("");
  setLocation11("");
  setLocation12("");
  if (!location10) {
   setLocation10(true);
  }
 }
 const lClick11=()=>{
  setLocation8("");
  setLocation9("");
  setLocation10("");
  setLocation12("");
  if (!location11) {
   setLocation11(true);
  }
 } 
 const lClick12=()=>{
  setLocation8("");
  setLocation9("");
  setLocation10("");
  setLocation11("");
  if (!location12) {
   setLocation12(true);
  }
 } 
 const lClick13=()=>{
  setLocation("");
  setLocation7("");
  setLocation19("");
  setLocation25("");
  setLocation31("");
  setLocation37("");
  setLocation43("");
  setLocation49("");
  setLocation55("");
 if (!location13) {
   setLocation13(true)
 }
 dScroll()
}
const lClick14 =()=>{
  setLocation15("");
  setLocation16("");
  setLocation17("");
  setLocation18("");
if (!location14) {
  setLocation14(true);
  }
}
const lClick15=()=>{
  setLocation14("");
  setLocation16("");
  setLocation17("");
  setLocation18("");
  if (!location15) {
    setLocation15(true);
  }
}
const lClick16=()=>{
  setLocation14("");
  setLocation15("");
  setLocation17("");
  setLocation18("");
  if (!location16) {
    setLocation16(true);
  }
}
const lClick17=()=>{
  setLocation14("");
  setLocation15("");
  setLocation16("");
  setLocation18("");
  if (!location17) {
    setLocation17(true);
  }
}
const lClick18=()=>{
  setLocation14("");
  setLocation15("");
  setLocation16("");
  setLocation17("");
  if (!location18) {
    setLocation18(true);
  }
}
const lClick19=()=>{
  setLocation("");
  setLocation7("");
  setLocation13("");
  setLocation25("");
  setLocation31("");
  setLocation37("");
  setLocation43("");
  setLocation49("");
  setLocation55("");
  if (!location19) {
    setLocation19(true);
  }
  dScroll();
}
const lClick20=()=>{
  setLocation21("");
  setLocation22("");
  setLocation23("");
  setLocation24("");
  if (!location20) {
    setLocation20(true);
  }
}
const lClick21=()=>{
  setLocation20("");
  setLocation22("");
  setLocation23("");
  setLocation24("");
  if (!location21) {
    setLocation21(true);
  }
}
const lClick22=()=>{
  setLocation21("");
  setLocation20("");
  setLocation23("");
  setLocation24("");
  if (!location22) {
    setLocation22(true);
  }
}
const lClick23=()=>{
  setLocation21("");
  setLocation22("");
  setLocation20("");
  setLocation24("");
  if (!location23) {
    setLocation23(true);
  }
}
const lClick24=()=>{
  setLocation21("");
  setLocation22("");
  setLocation23("");
  setLocation20("");
  if (!location24) {
    setLocation24(true);
  }
}
const lClick25=()=>{
  setLocation("");
  setLocation7("");
  setLocation13("");
  setLocation19("");
  setLocation31("");
  setLocation37("");
  setLocation43("");
  setLocation49("");
  setLocation55("");
  if (!location25) {
    setLocation25(true);
  }
  dScroll();
}
const lClick26=()=>{
  setLocation27("");
  setLocation28("");
  setLocation28("");
  setLocation30("");
  if (!location26) {
    setLocation26(true);
  }
}
const lClick27=()=>{
  setLocation26("");
  setLocation28("");
  setLocation29("");
  setLocation30("");
  if (!location27) {
    setLocation27(true);
  }
}
const lClick28=()=>{
  setLocation26("");
  setLocation27("");
  setLocation29("");
  setLocation30("");
  if (!location28) {
    setLocation28(true);
  }
}
const lClick29=()=>{
  setLocation26("");
  setLocation27("");
  setLocation28("");
  setLocation30("");
  if (!location29) {
    setLocation29(true);
  }
}
const lClick30=()=>{
  setLocation26("");
  setLocation27("");
  setLocation29("");
  setLocation28("");
  if (!location30) {
    setLocation30(true);
  }
}
const lClick31=()=>{
  setLocation("");
  setLocation7("");
  setLocation13("");
  setLocation19("");
  setLocation25("");
  setLocation37("");
  setLocation43("");
  setLocation49("");
  setLocation55("");
  if (!location31) {
    setLocation31(true);
  }
  dScroll();
}
const lClick32=()=>{
  setLocation33("");
  setLocation34("");
  setLocation35("");
  setLocation36("");
  if (!location32) {
    setLocation32(true);
  }
}
const lClick33=()=>{
  setLocation32("");
  setLocation34("");
  setLocation35("");
  setLocation36("");
  if (!location33) {
    setLocation33(true);
  }
}
const lClick34=()=>{
  setLocation33("");
  setLocation32("");
  setLocation35("");
  setLocation36("");
  if (!location34) {
    setLocation34(true);
  }
}
const lClick35=()=>{
  setLocation33("");
  setLocation34("");
  setLocation32("");
  setLocation36("");
  if (!location35) {
    setLocation35(true);
  }
}
const lClick36=()=>{
  setLocation33("");
  setLocation34("");
  setLocation35("");
  setLocation32("");
  if (!location36) {
    setLocation36(true);
  }
}
const lClick37=()=>{
  setLocation("");
  setLocation7("");
  setLocation13("");
  setLocation19("");
  setLocation25("");
  setLocation31("");
  setLocation43("");
  setLocation49("");
  setLocation55("");
  if (!location37) {
    setLocation37(true);
  }
  dScroll();
}
const lClick38=()=>{
  setLocation39("");
  setLocation40("");
  setLocation41("");
  setLocation42("");
  if (!location38) {
    setLocation38(true);
  }
}
const lClick39=()=>{
  setLocation38("");
  setLocation40("");
  setLocation41("");
  setLocation42("");
  if (!location39) {
    setLocation39(true);
  }
}
const lClick40=()=>{
  setLocation38("");
  setLocation39("");
  setLocation41("");
  setLocation42("");
  if (!location40) {
    setLocation40(true);
  }
}
const lClick41=()=>{
  setLocation38("");
  setLocation39("");
  setLocation40("");
  setLocation42("");
  if (!location41) {
    setLocation41(true);
  }
}
const lClick42=()=>{
  setLocation38("");
  setLocation39("");
  setLocation40("");
  setLocation41("");
  if (!location42) {
    setLocation42(true);
  }
}
const lClick43=()=>{
  setLocation("");
  setLocation7("");
  setLocation13("");
  setLocation19("");
  setLocation25("");
  setLocation31("");
  setLocation37("");
  setLocation49("");
  setLocation55("");
  if (!location43) {
    setLocation43(true);
  }
  dScroll();
}
const lClick44=()=>{
  setLocation45("");
  setLocation46("");
  setLocation47("");
  setLocation48("");
  if (!location44) {
    setLocation44(true);
  }
}
const lClick45=()=>{
  setLocation44("");
  setLocation46("");
  setLocation47("");
  setLocation48("");
  if (!location45) {
    setLocation45(true);
  }
}
const lClick46=()=>{
  setLocation45("");
  setLocation44("");
  setLocation47("");
  setLocation48("");
  if (!location46) {
    setLocation46(true);
  }
}
const lClick47=()=>{
  setLocation45("");
  setLocation46("");
  setLocation44("");
  setLocation48("");
  if (!location47) {
    setLocation47(true);
  }
}
const lClick48=()=>{
  setLocation45("");
  setLocation46("");
  setLocation47("");
  setLocation44("");
  if (!location48) {
    setLocation48(true);
  }
}
const lClick49=()=>{
  setLocation("");
  setLocation7("");
  setLocation13("");
  setLocation19("");
  setLocation25("");
  setLocation31("");
  setLocation37("");
  setLocation43("");
  setLocation55("");
  if (!location49) {
    setLocation49(true);
  }
  dScroll();
}
const lClick50=()=>{
  setLocation51("");
  setLocation52("");
  setLocation53("");
  setLocation54("");
  if (!location50) {
    setLocation50(true);
  }
}
const lClick51=()=>{
  setLocation50("");
  setLocation52("");
  setLocation53("");
  setLocation54("");
  if (!location51) {
    setLocation51(true);
  }
}
const lClick52=()=>{
  setLocation53("");
  setLocation50("");
  setLocation51("");
  setLocation54("");
  if (!location52) {
    setLocation52(true);
  }
}
const lClick53=()=>{
  setLocation50("");
  setLocation51("");
  setLocation52("");
  setLocation54("");
  if (!location53) {
    setLocation53(true);
  }
}
const lClick54=()=>{
  setLocation50("");
  setLocation51("");
  setLocation52("");
  setLocation53("");
  if (!location54) {
    setLocation54(true);
  }
}
const lClick55=()=>{
  setLocation("");
  setLocation7("");
  setLocation13("");
  setLocation19("");
  setLocation25("");
  setLocation31("");
  setLocation37("");
  setLocation43("");
  setLocation49("");
  if (!location55) {
    setLocation55(true);
  }
  dScroll();
}
const lClick56=()=>{
  setLocation60("");
  setLocation59("");
  setLocation58("");
  setLocation57("");
  if (!location56) {
    setLocation56(true);
  }
}
const lClick57=()=>{
  setLocation60("");
  setLocation59("");
  setLocation58("");
  setLocation56("");
  if (!location57) {
    setLocation57(true);
  }
}
const lClick58=()=>{
  setLocation60("");
  setLocation59("");
  setLocation56("");
  setLocation57("");
  if (!location58) {
    setLocation58(true);
  }
}
const lClick59=()=>{
  setLocation60("");
  setLocation58("");
  setLocation57("");
  setLocation56("");
  if (!location59) {
    setLocation59(true);
  }
}
const lClick60=()=>{
  setLocation59("");
  setLocation58("");
  setLocation57("");
  setLocation56("");
  if (!location60) {
    setLocation60(true);
  }
}


const scrollGal = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0,
      behavior: "smooth"
    });
  }, 200);
}

 const dScroll =()=>{
  setTimeout(()=>{
    window.scrollTo({
      top: window.innerHeight * 0.571,
      behavior: "smooth"
    })
  },200)
}

  return (
    <div>
        <h1 className="ldr">FIND YOUR DEALERSHIPS</h1>
        <div className="ldr3">
        <button className='ldr4' onClick={lClick}>BUGATTI</button>
        <button className="ldr4" onClick={lClick7}>LAMBORGHINI</button>
        <button className="ldr4" onClick={lClick13}>ROLLS-ROYCE</button>
        <button className="ldr4" onClick={lClick19}>AUDI</button>
        <button className="ldr4" onClick={lClick25}>ASTON MARTIN</button>
        </div>
        <div className="ldr5">
        <button className="ldr4" onClick={lClick31}>MERCEDES-AMG</button>
        <button className="ldr4" onClick={lClick37}>BMW</button>
        <button className="ldr4" onClick={lClick43}>MCLAREN</button>
        <button className="ldr4" onClick={lClick49}>PORSCHE</button>
        <button className="ldr4" onClick={lClick55}>BENTLEY</button>
        </div>




         {location && <div className='ldr2'>
          <h1 className="ldr9">FIND YOUR BUGATTI DEALER</h1>
          <div className="ldr8">
         <button className='ldr7' onClick={lClick2}>NEW YORK</button>
         <button className="ldr7" onClick={lClick3}>LONDON</button>
         <button className="ldr7" onClick={lClick4}>MANCHESTER</button>
         <button className="ldr7" onClick={lClick5}>PARIS</button>
         <button className="ldr7" onClick={lClick6}>DUBAI</button>
         </div>


          {location2 && 
          <div>
          <h1 className="ldr11">NEW YORK DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.417084410796!2d-74.00597899222946!3d40.765229835516315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25926c4ab5621%3A0xa7def2776e0d6956!2sBugatti%20Manhattan!5e0!3m2!1sen!2saz!4v1689677611118!5m2!1sen!2saz" width="87%" height="377" frameBorder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 711 11th Ave, New York, NY 10019, United States</h2>
          <h2 className="ldr13">PHONE: +12125946200</h2>
              </div>
          </div>}
          {location3 && 
          <div>
          <h1 className="ldr11">LONDON DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158474.1503464102!2d-0.3594238134206938!3d51.638620505113316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052bdde6ed79%3A0x816888c7105409e3!2sH.R.%20Owen%20Bugatti!5e0!3m2!1sen!2saz!4v1689682805610!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 18-20 Bruton St, London W1J 6QD, United Kingdom</h2>
          <h2 className="ldr13">PHONE: +442071387905</h2>
              </div>
          </div>}        
          {location4 && 
          <div>
          <h1 className="ldr11">MANCHESTER DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.753005140642!2d-2.3544740098328423!3d53.31186960080361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a53cd21f0a45b%3A0x96797e1b7e054310!2sBugatti%20Manchester!5e0!3m2!1sen!2saz!4v1689677809834!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: Mobberley Rd, Knutsford WA16 8GT, United Kingdom</h2>
          <h2 className="ldr13">PHONE: +441565859061</h2>
              </div>
          </div>}  
          {location5 && 
          <div>
          <h1 className="ldr11">PARIS DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.5775331779073!2d2.2597232967895504!3d48.8853297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6651d6af76b29%3A0x8678afe2082073dc!2sBugatti%20Paris!5e0!3m2!1sen!2saz!4v1689677844411!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 181 Av. Achille Peretti, 92200 Neuilly-sur-Seine, France</h2>
          <h2 className="ldr13">PHONE: +33175909806</h2>
              </div>
          </div>}  
          {location6 && 
          <div>
          <h1 className="ldr11">DUBAI DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8720040518424!2d55.215306501402!3d25.14001782107093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6a2d2723e8fb%3A0x29255c37fc1054bd!2sBugatti%20UAE%20Showroom!5e0!3m2!1sen!2saz!4v1689678804698!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: Al Manara - Dubai - United Arab Emirates</h2>
          <h2 className="ldr13">PHONE: +9718002842884</h2>
              </div>
          </div>}  
    </div>} 





    {location7 &&
     <div className='ldr2'>
             <h1 className="ldr9">FIND YOUR LAMBORGHINI DEALER</h1> 
          <div className="ldr8">
         <button className='ldr7' onClick={lClick8}>ROMA</button>
         <button className="ldr7" onClick={lClick9}>LAS VEGAS</button>
         <button className="ldr7" onClick={lClick10}>MIAMI</button>
         <button className="ldr7" onClick={lClick11}>PARIS</button>
         <button className="ldr7" onClick={lClick12}>LONDON</button>
         </div> 

         {location8 && 
          <div>
          <h1 className="ldr11">ROMA DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12162774.063513339!2d-7.019250750000017!3d41.90517300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61999dd3f4af%3A0xd87287c5de4d51ed!2sLamborghini%20Roma!5e0!3m2!1sen!2saz!4v1689687471118!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: Via Leonida Bissolati, 62, 00187 Roma RM, Italy</h2>
          <h2 className="ldr13">PHONE: +393476562436</h2>
              </div>
          </div>}  
          {location9 && 
          <div>
          <h1 className="ldr11">LAS VEGAS DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26426460.966074485!2d-154.0422992!3d36.047479500000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c43e066c37f5%3A0x52393cfd52cb76ca!2sLamborghini%20Las%20Vegas!5e0!3m2!1sen!2saz!4v1689687621911!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 7738 Eastgate Rd, Henderson, NV 89011, United States</h2>
          <h2 className="ldr13">PHONE: +18669802832</h2>
              </div>
          </div>}  
          {location10 && 
          <div>
          <h1 className="ldr11">MIAMI DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26887787.01344294!2d-114.46954529374999!3d34.64963746846074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9adf08e9dff4f%3A0xd7aac26241686621!2sLamborghini%20Miami!5e0!3m2!1sen!2saz!4v1689687752555!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 14780 Biscayne Blvd, North Miami Beach, FL 33181, United States</h2>
          <h2 className="ldr13">PHONE: +18332905147</h2>
              </div>
          </div>} 
          {location11 && 
          <div>
          <h1 className="ldr11">PARIS DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686497.6815192467!2d-2.627374087499998!3d48.88618060000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66511856fffff%3A0x18ec2a53836c7f38!2sLamborghini%20Paris!5e0!3m2!1sen!2saz!4v1689687806866!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 2 Rue Bellini, 92800 Puteaux, France</h2>
          <h2 className="ldr13">PHONE: +33184259880</h2>
              </div>
          </div>} 
          {location12 && 
          <div>
          <h1 className="ldr11">LONDON DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1249968.9496313995!2d-2.375715263621173!3d52.27342735455197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876056825acf289%3A0x131ed000675c304b!2sLamborghini%20London!5e0!3m2!1sen!2saz!4v1689687861495!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 27 Old Brompton Rd, South Kensington, London SW7 3TD, United Kingdom</h2>
          <h2 className="ldr13">PHONE: +442071387903</h2>
              </div>
          </div>}  

      </div>}

      {location13 && <div className='ldr2'>
      <h1 className="ldr9">FIND YOUR ROLLS-ROYCE DEALER</h1>
          <div className="ldr8">
         <button className='ldr7' onClick={lClick14}>HOUSTON</button>
         <button className="ldr7" onClick={lClick15}>LONDON</button>
         <button className="ldr7" onClick={lClick16}>MONACO</button>
         <button className="ldr7" onClick={lClick17}>BEVERLY HILLS</button>
         <button className="ldr7" onClick={lClick18}>DUBAI</button>
         </div>
         {location14 &&
         <div>
              <h1 className="ldr11">HOUSTON DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7273581.015192283!2d-106.6886955672957!3d27.10737963249575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640ca3b0ae42461%3A0x100a1bfd993d979a!2sRolls-Royce%20Motor%20Cars%20North%20Houston!5e0!3m2!1sen!2saz!4v1689697050472!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 13921 North Fwy, Houston, TX 77090, United States</h2>
          <h2 className="ldr13">PHONE: +12817683090</h2>
              </div>
         </div>
           }
          {location15 &&
         <div>
              <h1 className="ldr11">LONDON DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.28103475399!2d-0.14814001059607268!3d51.50805989913668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052bdda1cbef%3A0x5e04611cf66340e4!2sRolls-Royce%20Motor%20Cars%20London!5e0!3m2!1sen!2saz!4v1689694002633!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: Berkeley St, London W1J 8HD, United Kingdom</h2>
          <h2 className="ldr13">PHONE: +442071387901</h2>
              </div>
         </div>
           }
           {location16 &&
            <div>
            <h1 className="ldr11">MONACO DEALER</h1>
        <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5545398.615091618!2d-1.939881993775856!3d47.26129229504503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc27c5351be2d%3A0xb97fbe17a4bb788a!2sRolls-Royce%20Motor%20Cars%20Monaco!5e0!3m2!1sen!2saz!4v1689694069657!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        <div className="ldr14">
        <h2 className="ldr12">ADDRESS: 7 Av. Princesse Grace, 98000 Monaco</h2>
        <h2 className="ldr13">PHONE: +37797979730</h2>
            </div>
       </div>
           }
           {location17 &&
              <div>
              <h1 className="ldr11">BEVERLY HILLS DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d422948.28065031266!2d-118.82296850891701!3d34.08787861795696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b95bbc462181%3A0x8d19806c8037fa99!2sRolls-Royce%20Motor%20Cars%20Beverly%20Hills!5e0!3m2!1sen!2saz!4v1689694323724!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 8845 W Olympic Blvd, Beverly Hills, CA 90211, United States</h2>
          <h2 className="ldr13">PHONE: +13106594050</h2>
              </div>
         </div> 
             }
          {location18 &&
          <div>
          <h1 className="ldr11">DUBAI DEALER</h1>
      <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14439.53262441495!2d55.2460461871582!3d25.207162599999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f426382c74fc3%3A0x2d71a48c11c057e8!2sThe%20Rolls-Royce%20Boutique%20(Showroom)!5e0!3m2!1sen!2saz!4v1689698998166!5m2!1sen!2saz" width="87%" height="377" frameBorder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
      <div className="ldr14">
      <h2 className="ldr12">ADDRESS: 46 Al Safa St - Al Wasl - Dubai - United Arab Emirates</h2>
      <h2 className="ldr13">PHONE: +97143855571</h2>
          </div>
     </div> 
               }      
           </div>}

    {
      location19 && <div className='ldr2'>
         <h1 className="ldr9">FIND YOUR AUDI DEALER</h1>
        <div className="ldr8">
        <button className='ldr7' onClick={lClick20}>BIRMINGHAM</button>
        <button className="ldr7" onClick={lClick21}>GERMANY</button>
        <button className="ldr7" onClick={lClick22}>BROOKLYN</button>
        <button className="ldr7" onClick={lClick23}>BEVERLY HILLS</button>
        <button className="ldr7" onClick={lClick24}>SANTA MONICA</button>
        </div>
        {location20 &&
              <div>
              <h1 className="ldr11">BIRMINGHAM DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22858151.716151766!2d-22.401278433061623!3d45.624674712922115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b9772b7155e9%3A0x20f522ccfb661e7d!2sBirmingham%20Audi!5e0!3m2!1sen!2saz!4v1689705207020!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 780 Stratford Rd, Shirley, Solihull B90 4BQ, United Kingdom</h2>
          <h2 className="ldr13">PHONE: +441217465500</h2>
              </div>
         </div> 
             }
          {location21 &&
              <div>
              <h1 className="ldr11">GERMANY DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610209.929928381!2d7.444350864401554!3d50.291309350495844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a72d05a9c8bd13%3A0x487b3ce5943f7c1e!2sAudi%20Centre%20Zwickau!5e0!3m2!1sen!2saz!4v1689705316175!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: Oskar-Arnold-Straße 30, 08056 Zwickau, Germany</h2>
          <h2 className="ldr13">PHONE: +49375560860</h2>
              </div>
         </div> 
             }     
            {location22 &&
              <div>
              <h1 className="ldr11">BROOKLYN DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27038437.265530117!2d-118.31568723657585!3d34.182386349254365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2454ef5ba2aad%3A0x6fb34e37b27b0!2sAudi%20Brooklyn!5e0!3m2!1sen!2saz!4v1689705415400!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 665 65th St, Brooklyn, NY 11220, United States</h2>
          <h2 className="ldr13">PHONE: +17186912446</h2>
              </div>
         </div> 
             } 
             {location23 &&
              <div>
              <h1 className="ldr11">BEVERLY HILLS DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26440.839476942325!2d-118.42343332568359!3d34.0668242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbf618f5330d%3A0xd9e20fc579d10808!2sAudi%20Beverly%20Hills!5e0!3m2!1sen!2saz!4v1689705723632!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 8850 Wilshire Blvd, Beverly Hills, CA 90211, United States</h2>
          <h2 className="ldr13">PHONE: +14242815600</h2>
              </div>
         </div> 
             }  
             {location24 &&
              <div>
              <h1 className="ldr11">SANTA MONICA DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105820.24947577238!2d-118.64097570273437!3d34.021219300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cc9056da59%3A0xb995314b40fee5b8!2sSanta%20Monica%20Audi!5e0!3m2!1sen!2saz!4v1689705841369!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 1020 Santa Monica Blvd, Santa Monica, CA 90401, United States</h2>
          <h2 className="ldr13">PHONE: +13103939922</h2>
              </div>
         </div> 
             }            
    </div>}
    {location25 &&
         <div className='ldr2'>
            <h1 className="ldr9">FIND YOUR ASTON MARTIN DEALER</h1>
        <div className="ldr8">
        <button className='ldr7' onClick={lClick26}>DALLAS</button>
        <button className="ldr7" onClick={lClick27}>CHARLOTTE</button>
        <button className="ldr7" onClick={lClick28}>BEVERLY HILLS</button>
        <button className="ldr7" onClick={lClick29}>LONDON</button>
        <button className="ldr7" onClick={lClick30}>MANCHESTER</button>
        </div>
        {location26 &&
              <div>
              <h1 className="ldr11">DALLAS DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13732708.783112995!2d-116.33346404999998!3d32.82639230000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9e97c3cb9381%3A0x8df266cdf959d692!2sAston%20Martin%20Dallas!5e0!3m2!1sen!2saz!4v1689707566559!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 5300 Lemmon Ave, Dallas, TX 75209, United States</h2>
          <h2 className="ldr13">PHONE: +18336520398</h2>
              </div>
         </div> 
             } 
          {location27 &&
              <div>
              <h1 className="ldr11">CHARLOTTE DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52188.82442644275!2d-80.92991433069538!3d35.161570272759484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569fbf1e34188b%3A0xe8afa90c383f74d0!2sAston%20Martin%20Charlotte!5e0!3m2!1sen!2saz!4v1689707695076!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 400 Tyvola Rd, Charlotte, NC 28217, United States </h2>
          <h2 className="ldr13">PHONE: +17045357100</h2>
              </div>
         </div> 
             }  
          {location28 &&
              <div>
              <h1 className="ldr11">BEVERLY HILLS DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.122605716068!2d-118.38654752439594!3d34.06637117315165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b95b9906da27%3A0xbdc1a59f3c9e118f!2sAston%20Martin%20Beverly%20Hills!5e0!3m2!1sen!2saz!4v1689707814403!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 125 S Robertson Blvd, Beverly Hills, CA 90211, United States</h2>
          <h2 className="ldr13">PHONE: +13109677140</h2>
              </div>
         </div> 
             }      
        {location29 &&
            <div>
            <h1 className="ldr11">LONDON DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39716.01728172374!2d-0.355532651367187!3d51.5269545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611f709126875%3A0xe6df6e90e3af45eb!2sAston%20Martin%20London%20Western%20Avenue!5e0!3m2!1sen!2saz!4v1689707907683!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 618 Western Ave, London W3 0TE, United Kingdom </h2>
          <h2 className="ldr13">PHONE: +442087528720</h2>
              </div>
         </div> 
             }              
        {location30 &&
            <div>
            <h1 className="ldr11">MANCHESTER DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.940085522047!2d-2.2393291233511623!3d53.32642607228345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d9d810619eb%3A0xed8e21f9d066d82d!2sAston%20Martin%20Manchester!5e0!3m2!1sen!2saz!4v1689708053411!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: Water Ln, Wilmslow SK9 5BQ, United Kingdom</h2>
          <h2 className="ldr13">PHONE: +441625548802</h2>
              </div>
         </div> 
             }  
         </div>
    }


    {location31 &&
           <div className='ldr2'>
        <h1 className="ldr9">FIND YOUR MERCEDES-BENZ DEALER</h1>
        <div className="ldr8">
        <button className='ldr7' onClick={lClick32}>BEVERLY HILLS </button>
        <button className="ldr7" onClick={lClick33}>STUTTGART</button>
        <button className="ldr7" onClick={lClick34}>LOS ANGELES</button>
        <button className="ldr7" onClick={lClick35}>MANHATTAN</button>
        <button className="ldr7" onClick={lClick36}>BROOKLYN</button>
        </div>
        {location32 &&
            <div>
            <h1 className="ldr11">BEVERLY HILLS DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6714124.356741177!2d-128.9586636282215!3d34.745993253949514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc023d98c44d%3A0x9cc5e751fd47be10!2sMercedes-Benz%20of%20Beverly%20Hills!5e0!3m2!1sen!2saz!4v1689728030282!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 9250 Beverly Blvd, Beverly Hills, CA 90210, United States</h2>
          <h2 className="ldr13">PHONE: +13106592980</h2>
              </div>
         </div> 
             }  
          {location33 &&
            <div>
            <h1 className="ldr11">STUTTGART DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5348745.74161751!2d1.8130543571501636!3d49.11148653165521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799dabf5b51b0f9%3A0x23603c8a636b031f!2sMercedes-Benz%20dealership%20in%20Stuttgart!5e0!3m2!1sen!2saz!4v1689728161213!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: Heilbronner Str. 339, 70469 Stuttgart, Germany</h2>
          <h2 className="ldr13">PHONE: +4971125900</h2>
              </div>
         </div> 
             }    
          {location34 &&
            <div>
            <h1 className="ldr11">LOS ANGELES DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211732.88447871586!2d-118.61891742960718!3d33.98415108594761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7c15f5f10df%3A0x3b0942cd1b704851!2sMercedes-Benz%20of%20Los%20Angeles!5e0!3m2!1sen!2saz!4v1689728592101!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 1801 S Figueroa St, Los Angeles, CA 90015, United States </h2>
          <h2 className="ldr13">PHONE: +12134253100</h2>
              </div>
         </div> 
             }   
          {location35 &&
            <div>
            <h1 className="ldr11">MANHATTAN DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51325046.535408795!2d-171.30887592001204!3d38.264834724475385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2585af70e1beb%3A0x423a51aa7a17205e!2sMercedes-Benz%20Manhattan!5e0!3m2!1sen!2saz!4v1689728662065!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 770 11th Ave, New York, NY 10019, United States</h2>
          <h2 className="ldr13">PHONE: +12126291600</h2>
              </div>
         </div> 
             }       
          {location36 &&
            <div>
            <h1 className="ldr11">BROOKLYN DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51325046.535408795!2d-171.30887592001204!3d38.264834724475385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24369d07aaef5%3A0x7256e61908fb3e8b!2sMercedes-Benz%20of%20Brooklyn!5e0!3m2!1sen!2saz!4v1689728739659!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 1800 Shore Pkwy, Brooklyn, NY 11214, United States</h2>
          <h2 className="ldr13">PHONE: +17182585100</h2>
              </div>
         </div> 
             }       
             </div>}
        {location37 &&
             <div className='ldr2'>
              <h1 className="ldr9">FIND YOUR BMW DEALER</h1>
          <div className="ldr8">
          <button className='ldr7' onClick={lClick38}>MUNICH</button>
          <button className="ldr7" onClick={lClick39}>MIAMI</button>
          <button className="ldr7" onClick={lClick40}>MANHATTAN</button>
          <button className="ldr7" onClick={lClick41}>BROOKLYN</button>
          <button className="ldr7" onClick={lClick42}>BEVERLY HILLS</button>
          </div>
          {location38 &&
            <div>
            <h1 className="ldr11">MUNICH DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170120.4743539161!2d11.461497802511117!3d48.22332483537309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e7479b35fd393%3A0xdc50344834554bb5!2sBMW%20Niederlassung%20M%C3%BCnchen%20Filiale%20Fr%C3%B6ttmaning!5e0!3m2!1sen!2saz!4v1689755338447!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: Werner-Heisenberg-Allee 10, 80939 München, Germany</h2>
          <h2 className="ldr13">PHONE: +4989353580</h2>
              </div>
         </div> 
             }  
          {location39 &&
            <div>
            <h1 className="ldr11">MIAMI DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920299.3450416117!2d-80.92643543194941!3d25.707095277956224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6a90fa98b03%3A0xfac1676aeec67b74!2sBraman%20BMW%20Miami!5e0!3m2!1sen!2saz!4v1689755508620!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 2060 Biscayne Blvd, Miami, FL 33137, United States</h2>
          <h2 className="ldr13">PHONE: +17865775220</h2>
              </div>
         </div> 
             }   
          {location40 &&
            <div>
            <h1 className="ldr11">MANHATTAN DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51325046.535408795!2d-171.30887592001204!3d38.264834724475385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2585b9114678b%3A0x1538f6ae115c8ee8!2sBMW%20of%20Manhattan!5e0!3m2!1sen!2saz!4v1689755595095!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 555 W 57th St, New York, NY 10019, United States </h2>
          <h2 className="ldr13">PHONE: +12125862269</h2>
              </div>
         </div> 
             }    
          {location41 &&
            <div>
            <h1 className="ldr11">BROOKLYN DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51325046.535408795!2d-171.30887592001204!3d38.264834724475385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24f89c3dcb9d3%3A0xcea5c78e85b81ad0!2sBMW%20of%20Brooklyn%20Sales!5e0!3m2!1sen!2saz!4v1689755658943!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS:9326 4th Ave, Brooklyn, NY 11209, United States</h2>
          <h2 className="ldr13">PHONE: +17187595940</h2>
              </div>
         </div> 
             }      
          {location42 &&
            <div>
            <h1 className="ldr11">BEVERLY HILLS DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211492.1242819233!2d-118.56293126109124!3d34.08067803679673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8e72b51e061%3A0xe27693083960a17e!2sBeverly%20Hills%20BMW!5e0!3m2!1sen!2saz!4v1689755733963!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 5070 Wilshire Blvd, Los Angeles, CA 90036, United States</h2>
          <h2 className="ldr13">PHONE: +18777944678</h2>
              </div>
         </div> 
             }            
              </div>}
          {location43 &&
             <div className='ldr2'>
              <h1 className="ldr9">FIND YOUR MCLAREN DEALER</h1>
            <div className="ldr8">
            <button className='ldr7' onClick={lClick44}>LONDON</button>
            <button className="ldr7" onClick={lClick45}>MANCHESTER</button>
            <button className="ldr7" onClick={lClick46}>BIRMINGHAM</button>
            <button className="ldr7" onClick={lClick47}>SAN FRANCISCO</button>
            <button className="ldr7" onClick={lClick48}>BEVERLY HILLS</button>
            </div>
            {location44 &&
            <div>
            <h1 className="ldr11">LONDON DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4784777.45947645!2d-7.56333549987393!3d54.15674597250056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876050bf3115191%3A0x7ceb609d61dd9303!2sMcLaren%20London!5e0!3m2!1sen!2saz!4v1689757573079!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: One, 100 Knightsbridge, London SW1X 7LJ, United Kingdom</h2>
          <h2 className="ldr13">PHONE: +442078080260</h2>
              </div>
         </div> 
             }  
          {location45 &&
            <div>
            <h1 className="ldr11">MANCHESTER DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4784777.45947645!2d-7.56333549987393!3d54.15674597250056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a546ba0cae25f%3A0xeb24e494f9457a48!2sMcLaren%20Manchester!5e0!3m2!1sen!2saz!4v1689757628502!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: Deanway Technology Centre, Wilmslow Rd, Handforth, Wimslow SK9 3FB,<br/> United Kingdom</h2>
          <h2 className="ldr13">PHONE: +441625243061</h2>
              </div>
         </div> 
             }    
          {location46 &&
            <div>
            <h1 className="ldr11">BIRMINGHAM DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4784777.45947645!2d-7.56333549987393!3d54.15674597250056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b9fef1af5401%3A0x8a18f56699669894!2sMcLaren%20Birmingham%20(Rybrook)!5e0!3m2!1sen!2saz!4v1689757709319!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 2635C, McLaren Birmingham, Stratford Rd, Solihull B94 5NH, United Kingdom</h2>
          <h2 className="ldr13">PHONE: +441564787180</h2>
              </div>
         </div> 
             }    
        {location47 &&
            <div>
            <h1 className="ldr11">SAN FRANCISCO DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202824.3101857633!2d-122.28852902187501!3d37.4104057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba7c7c2c7d9d%3A0xfbc4cc440e8e1c0e!2sMcLaren%20San%20Francisco!5e0!3m2!1sen!2saz!4v1689757782871!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 4190 El Camino Real, Palo Alto, CA 94306, United States</h2>
          <h2 className="ldr13">PHONE: +16503528660</h2>
              </div>
         </div> 
             }   
        {location48 &&
            <div>
            <h1 className="ldr11">BEVERLY HILLS DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.3880087842344!2d-118.38979581690141!3d34.0595665039343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b956bd2fdd65%3A0x5110d33572fea46b!2sMcLaren%20Beverly%20Hills!5e0!3m2!1sen!2saz!4v1689757830661!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 8833 W Olympic Blvd, Beverly Hills, CA 90211, United States</h2>
          <h2 className="ldr13">PHONE: +13106594050</h2>
              </div>
         </div> 
             }    
             </div>}  
        {location49 &&<div className='ldr2'>
        <h1 className="ldr9">FIND YOUR PORSCHE DEALER</h1>
            <div className="ldr8">
            <button className='ldr7' onClick={lClick50}>BEVERLY HILLS</button>
            <button className="ldr7" onClick={lClick51}>BROOKLYN</button>
            <button className="ldr7" onClick={lClick52}>MANHATTAN</button>
            <button className="ldr7" onClick={lClick53}>STUTTGART</button>
            <button className="ldr7" onClick={lClick54}>LONDON</button>  
            </div> 
          {location50 &&
            <div>
            <h1 className="ldr11">BEVERLY HILLS DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.814921771262!2d-118.44485612439676!3d34.04861837315839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb778fa454d5%3A0xd7792886bba0d233!2sBeverly%20Hills%20Porsche!5e0!3m2!1sen!2saz!4v1689761690089!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 11011 Santa Monica Blvd, Los Angeles, CA 90025, United States</h2>
          <h2 className="ldr13">PHONE: +18883913469</h2>
              </div>
         </div> 
             } 
          {location51 &&
            <div>
            <h1 className="ldr11">BROOKLYN DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193718.50485275866!2d-74.31566400546876!3d40.6552007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b82f69f06e5%3A0xc134e5c8e7cbb9c9!2sPorsche%20Brooklyn!5e0!3m2!1sen!2saz!4v1689761772532!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 3906 2nd Ave, Brooklyn, NY 11232, United States</h2>
          <h2 className="ldr13">PHONE: +19179479689</h2>
              </div>
         </div> 
             } 
          {location52 &&
            <div>
            <h1 className="ldr11">MANHATTAN DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193719.18518422393!2d-74.31566475831482!3d40.65496638877486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259c32e81bbc9%3A0xde16a1cb3d61eedf!2sManhattan%20Motorcars%20Porsche!5e0!3m2!1sen!2saz!4v1689761851318!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 711 11th Ave, New York, NY 10019, United States</h2>
          <h2 className="ldr13">PHONE: +18773985126</h2>
              </div>
         </div> 
             }   
          {location53 &&
            <div>
            <h1 className="ldr11">STUTTGART DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168342.98006832664!2d9.022923387624745!3d48.755939003299574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799da80f9e76845%3A0x187a543ed0b6bbea!2sPorsche%20Zentrum%20Stuttgart!5e0!3m2!1sen!2saz!4v1689761913260!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: Siemensstraße 2, 70469 Stuttgart, Germany </h2>
          <h2 className="ldr13">PHONE: +4971199523991</h2>
              </div>
         </div> 
             }  
          {location54 &&
            <div>
            <h1 className="ldr11">LONDON DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5085610.954106884!2d-9.685643575000045!3d51.5093912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d5de82ac2cb%3A0xb749759f33386451!2sPorsche%20Centre%20East%20London!5e0!3m2!1sen!2saz!4v1689762011980!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 101 Woolwich Manor Way, London E6 6EY, United Kingdom </h2>
          <h2 className="ldr13">PHONE: +442032030440</h2>
              </div>
         </div> 
             }         
            </div>}  
         {location55 && <div className='ldr2'>
          <h1 className="ldr9">FIND YOUR BENTLEY DEALER</h1>
            <div className="ldr8">
            <button className='ldr7' onClick={lClick56}>BIRMINGHAM</button>
            <button className="ldr7" onClick={lClick57}>MANCHESTER</button>
            <button className="ldr7" onClick={lClick58}>AUSTIN</button>
            <button className="ldr7" onClick={lClick59}>DALLAS</button>
            <button className="ldr7" onClick={lClick60}>HOUSTON</button>  
            </div> 
        {location56 &&
            <div>
            <h1 className="ldr11">BIRMINGHAM DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5112075.932515575!2d-9.686355786496463!3d51.27191087474402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bacfdf383d41%3A0x17305ac682fae4b4!2sBentley%20Birmingham!5e0!3m2!1sen!2saz!4v1689763935922!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 2 Wingfoot Way, Fort Pkwy, Birmingham B24 9HF, United Kingdom</h2>
          <h2 className="ldr13">PHONE: +441217562348</h2>
              </div>
         </div> 
             }  
          {location57 &&
            <div>
            <h1 className="ldr11">MANCHESTER DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5112075.932515575!2d-9.686355786496463!3d51.27191087474402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a53685bec82fd%3A0xfd29784a24f003c8!2sBentley%20Manchester!5e0!3m2!1sen!2saz!4v1689763981386!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: Mobberley Rd, Knutsford WA16 8GT, United Kingdom</h2>
          <h2 className="ldr13">PHONE: +441565859244</h2>
              </div>
         </div> 
             }
          {location58 &&
            <div>
            <h1 className="ldr11">AUSTIN DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14188099.943688342!2d-114.96842435000003!3d29.751850600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cd29114b1191%3A0x415e0d2875419846!2sBentley%20Austin!5e0!3m2!1sen!2saz!4v1689764094341!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 12989 Research Blvd, Austin, TX 78750, United States </h2>
          <h2 className="ldr13">PHONE: +17373048195</h2>
              </div>
         </div> 
             }
          {location59 &&
            <div>
            <h1 className="ldr11">DALLAS DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14188099.943688342!2d-114.96842435000003!3d29.751850600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9e97cd58d285%3A0x6e70e0f9aed53132!2sBentley%20Dallas!5e0!3m2!1sen!2saz!4v1689764138043!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 5300 Lemmon Ave, Dallas, TX 75209, United States</h2>
          <h2 className="ldr13">PHONE: +12147365664</h2>
              </div>
         </div> 
             }
          {location60 &&
            <div>
            <h1 className="ldr11">HOUSTON DEALER</h1>
          <p className='ldr10'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14188099.943688342!2d-114.96842435000003!3d29.751850600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c138ae3d5c07%3A0xb812b6b22605cca1!2sBentley%20Houston!5e0!3m2!1sen!2saz!4v1689764178887!5m2!1sen!2saz" width="87%" height="377" frameBorder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="ldr14">
          <h2 className="ldr12">ADDRESS: 1530 W Loop S, Houston, TX 77027, United States</h2>
          <h2 className="ldr13">PHONE: +17135615278</h2>
              </div>
         </div> 
             }
              
              
                </div>}

                <div className="App">
      <Slider {...settings}>
    {LuxuryDealer.map(item=>(
        <div className='card2'>
          <img className='item2img' src={item.image}/>
        </div> 
    ))}
    </Slider>
    </div>
          
                
 
    <h1 className='rank7'>GO ABOVE</h1>
     <div className="p10rank">
<div className='p9rank'>
  <div className="p8rank" onClick={scrollGal}><TfiArrowUp/></div>
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

export default LuxuryDealerShips