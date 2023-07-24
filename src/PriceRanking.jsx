import React from 'react';
import { useState } from 'react';
//1M-28M
import rollsBoat from "./rollstail.jpeg"; 
import bDivo from "./bugattidivo5.jpeg.webp";
import lrevu from "./revuelto.jpeg";
import bchiron from "./bug24.jpg";
import mclaren from "./mclarenimg4.jpg";
import paganiZ from "./paga2.jpg";
//400K-700K
import huracan from "./huracan.jpeg";
import m6x6 from "./msafari4.jpeg";
import cullinan from "./cullinanmansory.jpeg";
import phantom from "./rrp9.jpg";
import mulsanne from "./bm1.jpeg";
//200K-377K
import lamboUrus from "./urusmansory.webp";
import mercedesG63amg from "./rank2.jpg";
import bBentayga from "./bent777.jpg";
import mMaybach from "./mercm2.jpg";
import mGls from "./suv2.jpg";
//120K-197K
import bmwX7 from "./bmwx7img1.jpg";
import bmw7Series from "./bmwgallery.jpg";
import mGtr from "./mercg14.jpg";
import porsche from "./porschegt1.jpg";
import mEqs from "./eqs2.jpg";
//47K-100K
import cadillac from "./cad1.jpg";
import tesla from "./tesla5.jpg";
import dodge from "./d3.webp";
import chevrolet from "./ch2.jpg";
import ford from "./f4f150.jpeg";
import "./PriceRanking.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { PriceRank777Guys } from './PriceRank';
import { TfiArrowUp } from "react-icons/tfi";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import { TfiAngleDown } from "react-icons/tfi";
import { TfiAngleUp } from "react-icons/tfi";







const PriceRanking = () => {
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
 const [menu,setMenu]=useState(false)
 const click=()=>{
     setMenu(!menu)
 }

 const prices = [
  {
    "image": rollsBoat,
    "title": "ROLLS-ROYCE BOATTAIL - 28.000.000$",
    "cat": "COUPE CATEGORY"
  },
];

const prices2 = [
  {
    "image": bDivo,
    "title": "BUGATTI DIVO - 17.000.000$",
    "cat": "HYPER CATEGORY"
  },
];
const prices3 = [
  {
    "image": lrevu,
    "title": "LAMBORGHINI REVUELTO - 4.000.000$",
    "cat": "HYPER CATEGORY"
  },
];
const prices4 = [
  {
    "image": bchiron,
    "title": "BUGATTI CHIRON - 3.500.000$",
    "cat": "HYPER CATEGORY"
  },
];
const prices5 = [
  {
    "image": mclaren,
    "title": "MCLAREN 765LT - 2.500.000$",
    "cat": "HYPER CATEGORY"
  },
];
const prices6 = [
  {
    "image": paganiZ,
    "title": "PAGANI ZONDA - 1.700.000$",
    "cat": "HYPER CATEGORY"
  },
];
const prices7 = [
  {
    "image": huracan,
    "title": "LAMBORGHINI HURACAN - 670.000$",
    "cat": "HYPER CATEGORY"
  },
];
const prices8 = [
  {
    "image":  phantom,
    "title": "ROLLS-ROYCE PHANTOM - 570.000$",
    "cat": "SEDAN CATEGORY"
  },
];
const prices9 = [
  {
    "image": m6x6,
    "title": "MERCEDES-AMG 6X6 - 520.000$",
    "cat": "PICKUP CATEGORY"
  },
];
const prices10 = [
  {
    "image": cullinan,
    "title": "ROLLS-ROYCE CULLINAN - 400.000$",
    "cat": "SUV CATEGORY"
  },
];
const prices11 = [
  {
    "image": mulsanne,
    "title": "BENTLEY MULSANNE - 370.000$",
    "cat": "SEDAN CATEGORY"
  },
];
const prices12 = [
  {
    "image": lamboUrus,
    "title": "LAMBORGHINI URUS - 300.000$",
    "cat": "SUV CATEGORY"
  },
];
const prices13 = [
  {
    "image": mercedesG63amg,
    "title": "MERCEDES-AMG G63 - 240.000$",
    "cat": "SUV CATEGORY"
  },
];
const prices14 = [
  {
    "image": bBentayga,
    "title": "BENTLEY BENTAYGA - 220.000$",
    "cat": "SUV CATEGORY"
  },
];
const prices15 = [
  {
    "image": mMaybach,
    "title": "MERCEDES MAYBACH S580 - 200.000$",
    "cat": "SEDAN CATEGORY"
  },
];
const prices16 = [
  {
    "image": mGls,
    "title": "MERCEDES MAYBACH GLS600 - 197.000$",
    "cat": "SUV CATEGORY"
  },
];
const prices17 = [
  {
    "image":  bmwX7,
    "title": "BMW X7 - 165.000$",
    "cat": "SUV CATEGORY"
  },
];
const prices18 = [
  {
    "image": bmw7Series,
    "title": "BMW 7 SERIES - 150.000$",
    "cat": "SEDAN CATEGORY"
  },
];
const prices19 = [
  {
    "image":  mGtr,
    "title": "MERCEDES-AMG GTR - 140.000$",
    "cat": "HYPER CATEGORY"
  },
];
const prices20 = [
  {
    "image": porsche,
    "title": "PORSCHE 911 - 130.000$",
    "cat": "HYPER CATEGORY"
  },
];
const prices21 = [
  {
    "image": mEqs,
    "title": "MERCEDES EQS - 125.000$",
    "cat": "SEDAN CATEGORY"
  },
];
const prices22 = [
  {
    "image":  cadillac,
    "title": "CADILLAC ESCALADE - 95.000$",
    "cat": "SUV CATEGORY"
  },
];
const prices23 = [
  {
    "image": tesla,
    "title": "TESLA MODEL S PLAID - 85.000$",
    "cat": "SEDAN CATEGORY"
  },
];
const prices24 = [
  {
    "image": dodge,
    "title": "DODGE RAM - 77.000$",
    "cat": "PICKUP CATEGORY",
  },
];
const prices25 = [
  {
    "image": chevrolet,
    "title": "CHEVROLET SILVERADO - 65.000$",
    "cat": "PICKUP CATEGORY",
  },
];
const prices26 = [
  {
    "image": ford,
    "title": "FORD F-150 - 57.000$",
    "cat": "PICKUP CATEGORY",
  },
];





const [photo, setPhoto] = useState("");
const [photo2, setPhoto2] = useState("");
const [photo3, setPhoto3] = useState("");
const [photo4, setPhoto4] = useState("");
const [photo5, setPhoto5] = useState("");
const [photo6, setPhoto6] = useState("");
const [photo7, setPhoto7] = useState("");
const [photo8, setPhoto8] = useState("");
const [photo9, setPhoto9] = useState("");
const [photo10, setPhoto10] = useState("");
const [photo11, setPhoto11] = useState("");
const [photo12, setPhoto12] = useState("");
const [photo13, setPhoto13] = useState("");
const [photo14, setPhoto14] = useState("");
const [photo15, setPhoto15] = useState("");
const [photo16, setPhoto16] = useState("");
const [photo17, setPhoto17] = useState("");
const [photo18, setPhoto18] = useState("");
const [photo19, setPhoto19] = useState("");
const [photo20, setPhoto20] = useState("");
const [photo21, setPhoto21] = useState("");
const [photo22, setPhoto22] = useState("");
const [photo23, setPhoto23] = useState("");
const [photo24, setPhoto24] = useState("");
const [photo25, setPhoto25] = useState("");
const [photo26, setPhoto26] = useState("");



const [text, setText]=useState("");
const [tex2t, setTex2t]=useState("");
const [tex3t, setTex3t]=useState("");
const [tex4t, setTex4t]=useState("");
const [tex5t, setTex5t]=useState("");
const [tex6t, setTex6t]=useState("");
const [tex7t, setTex7t]=useState("");
const [tex8t, setTex8t]=useState("");
const [tex9t, setTex9t]=useState("");
const [tex10t, setTex10t]=useState("");
const [tex11t, setTex11t]=useState("");
const [tex12t, setTex12t]=useState("");
const [tex13t, setTex13t]=useState("");
const [tex14t, setTex14t]=useState("");
const [tex15t, setTex15t]=useState("");
const [tex16t, setTex16t]=useState("");
const [tex17t, setTex17t]=useState("");
const [tex18t, setTex18t]=useState("");
const [tex19t, setTex19t]=useState("");
const [tex20t, setTex20t]=useState("");
const [tex21t, setTex21t]=useState("");
const [tex22t, setTex22t]=useState("");
const [tex23t, setTex23t]=useState("");
const [tex24t, setTex24t]=useState("");
const [tex25t, setTex25t]=useState("");
const [tex26t, setTex26t]=useState("");

const [one1, setOne1]=useState("");
const [one2, setOne2]=useState("");
const [one3, setOne3]=useState("");
const [one4, setOne4]=useState("");
const [one5, setOne5]=useState("");
const [one6, setOne6]=useState("");
const [one7, setOne7]=useState("");
const [one8, setOne8]=useState("");
const [one9, setOne9]=useState("");
const [one10, setOne10]=useState("");
const [one11, setOne11]=useState("");
const [one12, setOne12]=useState("");
const [one13, setOne13]=useState("");
const [one14, setOne14]=useState("");
const [one15, setOne15]=useState("");
const [one16, setOne16]=useState("");
const [one17, setOne17]=useState("");
const [one18, setOne18]=useState("");
const [one19, setOne19]=useState("");
const [one20, setOne20]=useState("");
const [one21, setOne21]=useState("");
const [one22, setOne22]=useState("");
const [one23, setOne23]=useState("");
const [one24, setOne24]=useState("");
const [one25, setOne25]=useState("");
const [one26, setOne26]=useState("");




const forClick=()=>{
  setPhoto7("");
  setPhoto8("");
  setPhoto9("");
  setPhoto10("");
  setPhoto11("");
  setPhoto12("");
  setPhoto13("");
  setPhoto14("");
  setPhoto15("");
  setPhoto16("");
  setPhoto17("");
  setPhoto18("");
  setPhoto19("");
  setPhoto20("");
  setPhoto21("");
  setPhoto22("");
  setPhoto23("");
  setPhoto24("");
  setPhoto25("");
  setPhoto26("");
  setPhoto(prices[0].image)
  setText(prices[0].title)
  setOne1(prices[0].cat)
  setPhoto2(prices2[0].image)
  setTex2t(prices2[0].title);
  setOne2(prices2[0].cat)
  setPhoto3(prices3[0].image);
  setTex3t(prices3[0].title);
  setOne3(prices3[0].cat)
  setPhoto4(prices4[0].image);
  setTex4t(prices4[0].title);
  setOne4(prices4[0].cat)
  setPhoto5(prices5[0].image);
  setTex5t(prices5[0].title);
  setOne5(prices5[0].cat)
  setPhoto6(prices6[0].image);
  setTex6t(prices6[0].title);
  setOne6(prices6[0].cat)
  setMenu(!menu)
  setButtonText('');
  even();
}






const for2Click=()=>{
  setPhoto("");
  setPhoto2("");
  setPhoto3("");
  setPhoto4("");
  setPhoto5("");
  setPhoto6("");
  setPhoto12("");
  setPhoto13("");
  setPhoto14("");
  setPhoto15("");
  setPhoto16("");
  setPhoto17("");
  setPhoto18("");
  setPhoto19("");
  setPhoto20("");
  setPhoto21("");
  setPhoto22("");
  setPhoto23("");
  setPhoto24("");
  setPhoto25("");
  setPhoto26("");
  setPhoto7(prices7[0].image);
  setTex7t(prices7[0].title);
  setPhoto8(prices8[0].image);
  setTex8t(prices8[0].title);
  setPhoto9(prices9[0].image);
  setTex9t(prices9[0].title);
  setPhoto10(prices10[0].image);
  setTex10t(prices10[0].title);
  setPhoto11(prices11[0].image);
  setTex11t(prices11[0].title);

  setOne7(prices7[0].cat);
  setOne8(prices8[0].cat);
  setOne9(prices9[0].cat);
  setOne10(prices10[0].cat);
  setOne11(prices11[0].cat);
  setMenu(!menu)
  setButtonText('');
  even();
}

const for3Click=()=>{
  setPhoto("");
  setPhoto2("");
  setPhoto3("");
  setPhoto4("");
  setPhoto5("");
  setPhoto6("");
  setPhoto7("");
  setPhoto8("");
  setPhoto9("");
  setPhoto10("");
  setPhoto11("");
  setPhoto17("");
  setPhoto18("");
  setPhoto19("");
  setPhoto20("");
  setPhoto21("");
  setPhoto22("");
  setPhoto23("");
  setPhoto24("");
  setPhoto25("");
  setPhoto26("");
  setPhoto12(prices12[0].image);
  setTex12t(prices12[0].title);
  setPhoto13(prices13[0].image);
  setTex13t(prices13[0].title);
  setPhoto14(prices14[0].image);
  setTex14t(prices14[0].title);
  setPhoto15(prices15[0].image);
  setTex15t(prices15[0].title);
  setPhoto16(prices16[0].image);
  setTex16t(prices16[0].title);

  setOne12(prices12[0].cat);
  setOne13(prices13[0].cat);
  setOne14(prices14[0].cat);
  setOne15(prices15[0].cat);
  setOne16(prices16[0].cat);
  setMenu(!menu)
  setButtonText('');
  even();
}
const for4Click=()=>{
  setPhoto("");
  setPhoto2("");
  setPhoto3("");
  setPhoto4("");
  setPhoto5("");
  setPhoto6("");
  setPhoto7("");
  setPhoto8("");
  setPhoto9("");
  setPhoto10("");
  setPhoto11("");
  setPhoto12("");
  setPhoto13("");
  setPhoto14("");
  setPhoto15("");
  setPhoto16("");
  setPhoto22("");
  setPhoto23("");
  setPhoto24("");
  setPhoto25("");
  setPhoto26("");
  setPhoto17(prices17[0].image);
  setTex17t(prices17[0].title);
  setPhoto18(prices18[0].image);
  setTex18t(prices18[0].title);
  setPhoto19(prices19[0].image);
  setTex19t(prices19[0].title);
  setPhoto20(prices20[0].image);
  setTex20t(prices20[0].title);
  setPhoto21(prices21[0].image);
  setTex21t(prices21[0].title);
  setOne17(prices17[0].cat)
  setOne18(prices18[0].cat)
  setOne19(prices19[0].cat)
  setOne20(prices20[0].cat)
  setOne21(prices21[0].cat)
  setMenu(!menu)
  setButtonText('');
  even()
}
const for5Click=()=>{
  even()
  setPhoto("");
  setPhoto2("");
  setPhoto3("");
  setPhoto4("");
  setPhoto5("");
  setPhoto6("");
  setPhoto7("");
  setPhoto8("");
  setPhoto9("");
  setPhoto10("");
  setPhoto11("");
  setPhoto12("");
  setPhoto13("");
  setPhoto14("");
  setPhoto15("");
  setPhoto16("");
  setPhoto17("");
  setPhoto18("");
  setPhoto19("");
  setPhoto20("");
  setPhoto21("");
  setPhoto22(prices22[0].image);
  setTex22t(prices22[0].title);
  setPhoto23(prices23[0].image);
  setTex23t(prices23[0].title);
  setPhoto24(prices24[0].image);
  setTex24t(prices24[0].title);
  setPhoto25(prices25[0].image);
  setTex25t(prices25[0].title);
  setPhoto26(prices26[0].image);
  setTex26t(prices26[0].title);
  setOne22(prices22[0].cat)
  setOne23(prices23[0].cat)
  setOne24(prices24[0].cat)
  setOne25(prices25[0].cat)
  setOne26(prices26[0].cat)
  setMenu(!menu)
  setButtonText('');
}

const scrollGal = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0,
      behavior: "smooth"
    });
  }, 200);
}
const even = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0.412,
      behavior: "smooth"
    });
  }, 200);
}



const [buttonText, setButtonText] = useState('PRICE RANKING');
  return (
    <div>
     <h1 className="p1rank">CAR PRICE RANKING</h1>




<div className="p2rank" onClick={click}>{buttonText}
 {photo ? "1.000.000$ - 28.000.000$" : ""} 
 {photo8 ? "400.000$ - 700.000$" : ""} 
 {photo14 ? "190.000$ - 320.000$" : ""} 
 {photo17 ? "120.000$ - 185.000$" : ""} 
 {photo22 ? "47.000$ - 100.000$" : ""} 
</div>
{
  menu ? <div className='p11rank'><TfiAngleUp/></div> : <div className='p11rank'><TfiAngleDown/></div>
} 

{menu &&
<div>

 
        <div className='p5rank' onClick={forClick}>1.000.000$ - 28.000.000$</div>
        <div className='p5rank' onClick={for2Click}>400.000$ - 700.000$</div>
        <div className='p5rank' onClick={for3Click}>190.000$ - 320.000$</div>
        <div className='p5rank' onClick={for4Click}>120.000$ - 185.000$</div>
        <div className="p6rank" onClick={for5Click}>55.000$ - 100.000$</div>


</div>


 }

<div>

   {photo ?<img className='p17rank' src={photo}  /> : null}
   {photo ? <h1 className='p18rank'>{text}</h1>: null}
   {photo ? <h2 className='p19rank'>{one1}</h2>: null}
   {photo2 ? <img className='p17rank' src={photo2} />: null}
   {photo2 ? <h1 className='p18rank'>{tex2t}</h1>: null}
   {photo2 ? <h2 className='p19rank'>{one2}</h2>: null}
   {photo3 ? <img className='p17rank' src={photo3} />: null}
   {photo3 ? <h1 className='p18rank'>{tex3t}</h1>: null}
   {photo3 ? <h2 className='p19rank'>{one3}</h2>: null}
   {photo4 ? <img className='p17rank' src={photo4} />: null}
   {photo4 ? <h1 className='p18rank'>{tex4t}</h1>: null}
   {photo4 ? <h2 className='p19rank'>{one4}</h2>: null}
   {photo5 ? <img className='p17rank' src={photo5} />: null}
   {photo5 ? <h1 className='p18rank'>{tex5t}</h1>: null}
   {photo5 ? <h2 className='p19rank'>{one5}</h2>: null}
   {photo6 ? <img className='p17rank' src={photo6} />: null}
   {photo6 ? <h1 className='p18rank'>{tex6t}</h1>: null}
   {photo6 ? <h2 className='p19rank'>{one6}</h2>: null}
    {/* 400k-700k */}
   {photo7 ?<img className='p17rank' src={photo7}  /> : null}
   {photo7 ? <h1 className='p18rank'>{tex7t}</h1>: null}
   {photo7 ? <h2 className='p19rank'>{one7}</h2>: null}
   {photo8 ? <img className='p17rank' src={photo8} />: null}
   {photo8 ? <h1 className='p18rank'>{tex8t}</h1>: null}
   {photo8 ? <h2 className='p19rank'>{one8}</h2>: null}
   {photo9 ? <img className='p17rank' src={photo9} />: null}
   {photo9 ? <h1 className='p18rank'>{tex9t}</h1>: null}
   {photo9 ? <h2 className='p19rank'>{one9}</h2>: null}
   {photo10 ? <img className='p17rank' src={photo10} />: null}
   {photo10 ? <h1 className='p18rank'>{tex10t}</h1>: null}
   {photo10 ? <h2 className='p19rank'>{one10}</h2>: null}
   {photo11 ? <img className='p17rank' src={photo11} />: null}
   {photo11 ? <h1 className='p18rank'>{tex11t}</h1>: null}
   {photo11 ? <h2 className='p19rank'>{one11}</h2>: null}
   {/* 190K-320K */}
   {photo12 ?<img className='p17rank' src={photo12}  /> : null}
   {photo12 ? <h1 className='p18rank'>{tex12t}</h1>: null}
   {photo12 ? <h2 className='p19rank'>{one12}</h2>: null}
   {photo13 ? <img className='p17rank' src={photo13} />: null}
   {photo13 ? <h1 className='p18rank'>{tex13t}</h1>: null}
   {photo13 ? <h2 className='p19rank'>{one13}</h2>: null}
   {photo14 ? <img className='p17rank' src={photo14} />: null}
   {photo14 ? <h1 className='p18rank'>{tex14t}</h1>: null}
   {photo14 ? <h2 className='p19rank'>{one14}</h2>: null}
   {photo15 ? <img className='p17rank' src={photo15} />: null}
   {photo15 ? <h1 className='p18rank'>{tex15t}</h1>: null}
   {photo15 ? <h2 className='p19rank'>{one15}</h2>: null}
   {photo16 ? <img className='p17rank' src={photo16} />: null}
   {photo16 ? <h1 className='p18rank'>{tex16t}</h1>: null}
   {photo16 ? <h2 className='p19rank'>{one16}</h2>: null}
   {/* 120K-185K */}
   {photo17 ? <img className='p17rank' src={photo17} />: null}
   {photo17 ? <h1 className='p18rank'>{tex17t}</h1>: null}
   {photo17 ? <h2 className='p19rank'>{one17}</h2>: null}
   {photo18 ? <img className='p17rank' src={photo18} />: null}
   {photo18 ? <h1 className='p18rank'>{tex18t}</h1>: null}
   {photo18 ? <h2 className='p19rank'>{one18}</h2>: null}
   {photo19 ? <img className='p17rank' src={photo19} />: null}
   {photo19 ? <h1 className='p18rank'>{tex19t}</h1>: null}
   {photo19 ? <h2 className='p19rank'>{one19}</h2>: null}
   {photo20 ? <img className='p17rank' src={photo20} />: null}
   {photo20 ? <h1 className='p18rank'>{tex20t}</h1>: null}
   {photo20 ? <h2 className='p19rank'>{one20}</h2>: null}
   {photo21 ? <img className='p17rank' src={photo21} />: null}
   {photo21 ? <h1 className='p18rank'>{tex21t}</h1>: null}
   {photo21 ? <h2 className='p19rank'>{one21}</h2>: null}
   {/* 47K-100K */}
   {photo22 ? <img className='p17rank' src={photo22} />: null}
   {photo22 ? <h1 className='p18rank'>{tex22t}</h1>: null}
   {photo22 ? <h2 className='p19rank'>{one22}</h2>: null}
   {photo23 ? <img className='p17rank' src={photo23} />: null}
   {photo23 ? <h1 className='p18rank'>{tex23t}</h1>: null}
   {photo23 ? <h2 className='p19rank'>{one23}</h2>: null}
   {photo24 ? <img className='p17rank' src={photo24} />: null}
   {photo24 ? <h1 className='p18rank'>{tex24t}</h1>: null}
   {photo24 ? <h2 className='p19rank'>{one24}</h2>: null}
   {photo25 ? <img className='p17rank' src={photo25} />: null}
   {photo25 ? <h1 className='p18rank'>{tex25t}</h1>: null}
   {photo25 ? <h2 className='p19rank'>{one25}</h2>: null}
   {photo26 ? <img className='p17rank' src={photo26} />: null}
   {photo26 ? <h1 className='p18rank'>{tex26t}</h1>: null}
   {photo26 ? <h2 className='p19rank'>{one26}</h2>: null}

   <h1 className='p7rank'>LET'S TAKE A LOOK AT THE <br/>CAR PRICE RANKING</h1>
   <div className="App" >
      <Slider {...settings}>
    {PriceRank777Guys.map(iteem=>(
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

    <h1 className='rank7'>GO ABOVE</h1>
     <div className="p10rank">
<div className='p9rank'>
  <div className="p8rank" onClick={scrollGal}><TfiArrowUp/></div>
</div>
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

export default PriceRanking