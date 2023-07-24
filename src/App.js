import './App.css';
import {Routes, Route, Link, NavLink,} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useState, useEffect, Component } from 'react';
import { useLayoutEffect } from 'react';
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import { BsWechat } from "react-icons/bs";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import Suv from './Suv';
import { BsXLg } from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai";
import {AiOutlineMinus} from "react-icons/ai";
import Sedan from './Sedan';
import Hyper from './Hyper';
import Electric from './Electric';
import Mansory from './Mansory';
import NotFound from './NotFound';
import Luxurysuv from './Luxurysuv';
import Concept from './Concept';
import Offroadsuv from './Offroadsuv';
import Cadillaclimo from './Cadillaclimo';
import Tesla from './Tesla';
import News from './News';
import LamborghiniAnniversary from './LamborghiniAnniversary';
import Bugattidivo from './Bugattidivo';
import LamborghiniHuracan from './LamborghiniHuracan';
import LamborghiniRevuelto from './LamborghiniRevuelto';
import AstonMartin from './AstonMartin';
import MercedesAmgConcept from './MercedesAmgConcept';
import BmwX7 from './BmwX7';
import Mclaren720S from './Mclaren720S';
import RollsRoyceBoatTail from './RollsRoyceBoatTail';
import Bentley from './Bentley';
import LamborghiniUrus from './LamborghiniUrus ';
import MercedesGG3Amg from './MercedesGG3Amg';
import CadillacEscalade from './CadillacEscalade';
import Tests from './Tests';
import Gallery from './Gallery';
import Air from './Air';
import LuxuryHome from './LuxuryHome';
import { CiMenuBurger } from "react-icons/ci";
import FordF150offroad from './FordF150offroad';
import ChevroletSilverado from './ChevroletSilverado';
import DodgeRam from './DodgeRam';
import MercedesTruck from './MercedesTruck';
import RollsRoycePhantom from './RollsRoycePhantom';
import BentleyMulsanne from './BentleyMulsanne';
import Bmw7Series from './Bmw7Series';
import MercedesMaybach from './MercedesMaybach';
import airIcon from "./airbnbicon.png";
import Porsche911gt from './Porsche911gt';
import LamborghiniHuracanHyper from './LamborghiniHuracanHyper';
import PaganiZonda from './PaganiZonda';
import MercedesGtr from './MercedesGtr';
import BugattiChironHyper from './BugattiChironHyper';
import BugattiChironLesLegendes from './BugattiChironLesLegendes';
import BugattiChironEditionNore from './BugattiChironEditionNore';
import BugattiChironSuperSport from './BugattiChironSuperSport';
import GalleryPage from './GalleryPage';
import Ranking from './Ranking';
import PriceRanking from './PriceRanking';
import LuxuryDealerShips from './LuxuryDealerShips';
import MercedesEqs from './MercedesEqs';




function App() {
  const [isShown, setShown]=useState(false);
  const [font, setFont]=useState(25);
  const [font2, setFont2]=useState(25);
  const [font3, setFont3]=useState(27);
  const [font4, setFont4]=useState(60);
  const [height, setHeight]=useState(464);
  const btn1Enter = (event)=>{
    event.target.style.background = "#6a1601"
    event.target.style.color = "white"
    } 
  const btn1Leave = (event)=>{
    event.target.style.background  ="white"
    event.target.style.color = "black"
  }

 const inceraseFont = ()=>{
  inceraseFont2()
  inceraseFont3()
  inceraseFont4()
  inceraseHeight5()
  setFont(prevFont=> prevFont + 1);
 }
 const decreaseFont = ()=>{
  decreaseFont2()
  decreaseFont3()
  decreaseFont4()
  decreaseHeight5()
  setFont(prevFont=> prevFont - 1);
 }
 const inceraseFont2 = ()=>{
  setFont2(prevFont=> prevFont + 1);
 }
 const decreaseFont2 = ()=>{
  setFont2(prevFont=> prevFont - 1);
 }
 const inceraseFont3 = ()=>{
  setFont3(prevFont=> prevFont + 1);
 }
 const decreaseFont3 = ()=>{
  setFont3(prevFont=> prevFont - 1);
 }
 const inceraseFont4 = ()=>{
  setFont4(prevFont=> prevFont + 1);
 }
 const decreaseFont4 = ()=>{
  setFont4(prevFont=> prevFont - 1);
 }
 const inceraseHeight5 = ()=>{
  setHeight(prevFont=> prevFont + 5);
 }
 const decreaseHeight5 = ()=>{
  setHeight(prevFont=> prevFont - 5);
 }
const{pathname}=useLocation();
useLayoutEffect(()=>{
  window.scrollTo({top:0,behavior: "auto"});
},[pathname])


let time = new Date().toLocaleTimeString()
const [currentTime, setCurrentTime] =useState(time)
const Time= ()=>{
  let time = new Date().toLocaleTimeString();
  setCurrentTime(time)
}
setInterval(Time,1000)

const [isNetflix, setIsNetflix] = useState(true);
const iconClick = () => {
  setIsNetflix(!isNetflix);
};



//const [dm, setDm]=useState(false);






  return (
    <div> 
         
      <div className='navbar'>
  <Link to='./'>HOME</Link>
  <Link to='./suv'>SUV</Link>
  <Link to='./sedan' >SEDAN</Link>
  <Link to='./hyper'>HYPER</Link>
  <Link to='./electric'>ELECTRIC</Link>
  <Link to='./mansory' >MANSORY</Link>
  <span className='la'>L&A</span>
  <Link to='./concept'><span className='dm'>CONCEPT</span></Link>
  <Link to='./gallery'>GALLERY</Link>
  <Link to='./tests'>TESTS</Link>

 { 
  isNetflix ?  <span className='icon' onClick={() => { setShown(true); iconClick(); }}>
  <CiMenuBurger/>
</span> :
  <span className='icon-2' onClick={() => { setShown(false); iconClick(); }}>
  <BsXLg/>
</span>

}













<span className='ctime'>{currentTime}</span>
      {isShown &&(<div className='hide-menu' style={{height: height, }} >
                      <div className='brand-column'> 
           <div className='menu-brand' style={{fontSize: font}}>BRANDS</div>
      
<a href='https://www.bugatti.com/chiron/'><button className='menu-btn-1'onMouseEnter={btn1Enter} onMouseLeave={btn1Leave} >BUGATTI</button></a>
<a href="https://www.lamborghini.com/en-en"><button className='menu-btn-2' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave} >LAMBORGHINI</button></a> 
<a href="https://www.rolls-roycemotorcars.com/en_GB/home.html"><button className='menu-btn-3' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave} >ROLLS ROYCE</button></a>  
<a href="https://www.mercedes-benz.com/en/vehicles/"><button className='menu-btn-4' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave} >MERCEDES</button></a>    
<a href="https://www.ferrari.com/en-EN"><button className='menu-btn-5' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave} >FERRARI</button></a>  
<a href="https://www.mclaren.com/"><button className='menu-btn-6' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave}>MCLAREN</button></a>      
<a href="https://www.cadillac.com/"><button className='menu-btn-7' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave}>CADILLAC</button></a>                        
<a href="https://www.bentleymotors.com/en.html"><button className='menu-btn-7' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave}>BENTLEY</button></a>        
<a href="https://www.tesla.com/"><button className='menu-btn-7' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave}>TESLA</button></a>    
<a href="https://www.porsche.com/usa/"><button className='menu-btn-7' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave}>PORSCHE</button></a>      
<a href="https://www.dodge.com/"><button className='menu-btn-7' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave}>DODGE</button></a>   
<a href="https://www.ford.com/"><button className='menu-btn-7' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave}>FORD</button></a>   
<a href="https://www.chevrolet.com/"><button className='menu-btn-7' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave}>CHEVROLET</button></a>  
<a href="https://www.mansory.com/"><button className='menu-btn-7' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave}>MANSORY</button></a>  
<a href="https://www.bmw.com/en/index.html"><button className='menu-btn-7' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave}>BMW</button></a>  
<a href="https://www.ford.com/"><button className='menu-btn-7' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave}>AUDI</button></a>  
<a href="https://www.ford.com/"><button className='menu-btn-7' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave}>JEEP</button></a>  
<a href="https://www.ford.com/"><button className='menu-btn-7' onMouseEnter={btn1Enter} onMouseLeave={btn1Leave}>LAND ROVER</button></a>  
        </div>    
        <div className='line-1'></div>
          <div className='flex-social'>
            <div>
      <div className='social' style={{fontSize: font2}}>SOCIAL</div>
                 <div className='medias-1'>
<div className='instagram-2'><a href="#" style={{fontSize: font3}}><RiInstagramLine/></a></div>
<div className='twitter-2'><a href="#" style={{fontSize: font3}}><RiTwitterLine/></a></div>
<div className='facebook-2'><a href="#" style={{fontSize: font3}}><RiFacebookFill/></a></div>
<div className='linkedin-2'><a href="#" style={{fontSize: font3}}><RiLinkedinFill/></a></div>
<div className='youtube-2'><a href="#" style={{fontSize: font3}}><RiYoutubeFill/></a></div>
<div className='netflix-2'><a href="#" style={{fontSize: font3}}><RiNetflixFill/></a></div>
<div className='rankcol'>
<Link to="/ranking">
  <div onClick={iconClick}><p className='apprank' onClick={() => setShown(false) }>
    <h3>ranking</h3>
                    </p>
                       </div>
                           </Link>
                        
<Link to="/luxurydealerships">
 <div onClick={iconClick}><p className='apprank2'onClick={() => setShown(false) } >
    <h3>DEALERSHIPS</h3> 
        </p>
            </div>
                 </Link>  




   </div>  


                 </div>
                 <div className='medias-2'>
<div className='tiktok-2'><a href="#" style={{fontSize: font3}}><BsTiktok/></a></div>
<div className='discord-2'><a href="#" style={{fontSize: font3}}><FaDiscord/></a></div>
<div className='webchat-2'><a href="#" style={{fontSize: font3}}><BsWechat/></a></div>
                 </div> 
           </div>
               <div>
       <Link to="/air" onClick={iconClick}><img onClick={() => setShown(false) } src={airIcon} className='a7ir' alt=''/></Link>
            <div className='settings' style={{fontSize: font2}}>SETTINGS</div>
         <div className='icon-flex'>
      <div className='text-size' style={{fontSize: font2}}>TEXT SIZE</div>
  <div className='icon-incre' onClick={inceraseFont} name={inceraseFont4}><AiOutlinePlus/></div>
  <div className='icon-decre' onClick={decreaseFont}><AiOutlineMinus/></div>
      </div>
    </div>
  </div>
</div>)} 








        
   
    </div>


 <Routes>
    <Route path='/' element={<LuxuryHome/>}/>
    <Route path='/suv' element={<Suv/>}/>
    <Route path='/sedan' element={<Sedan/>}/>
    <Route path='/hyper' element={<Hyper/>}/>
    <Route path='/electric' element={<Electric/>}/>
    <Route path='/mansory' element={<Mansory/>}/>
    <Route path='/luxurysuv' element={<Luxurysuv/>}/>
    <Route path='/offroadsuv' element={<Offroadsuv/>}/>
    <Route path='/news' element={<News/>}/>
    <Route path='/concept' element={<Concept/>}/>
    <Route path='/tesla' element={<Tesla/>}/>
    <Route path='/lamborghinianniversary' element={<LamborghiniAnniversary/>}/>
    <Route path='/cadillaclimo' element={<Cadillaclimo/>}/>
    <Route path='/bugattidivo' element={<Bugattidivo/>}/>
    <Route path='/lamborghinihuracan' element={<LamborghiniHuracan/>}/>
    <Route path='/lamborghinirevuelto' element={<LamborghiniRevuelto/>}/>
    <Route path='/astonmartin' element={<AstonMartin/>}/>
    <Route path='/mercedesamgconcept' element={<MercedesAmgConcept/>}/>
    <Route path='/bmwx7' element={<BmwX7/>}/>
    <Route path='/mclaren720s' element={<Mclaren720S/>}/>
    <Route path='/rollsroyceboattail' element={<RollsRoyceBoatTail/>}/>
    <Route path='/bentley' element={<Bentley/>}/>
    <Route path='/lamborghiniurus' element={<LamborghiniUrus/>}/>
    <Route path='/mercedesg63amg' element={<MercedesGG3Amg/>}/>
    <Route path='/cadillacescalade' element={<CadillacEscalade/>}/>
    <Route path='/tests' element={<Tests/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/air' element={<Air/>}/>
    <Route path='/fordf150offroad' element={<FordF150offroad/>}/>
    <Route path='/chevroletsilverado' element={<ChevroletSilverado/>}/>
    <Route path='/dodgeram' element={<DodgeRam/>}/>
    <Route path='/mercedestruck' element={<MercedesTruck/>}/>
    <Route path='/rollsroycephantom' element={<RollsRoycePhantom/>}/>
    <Route path='/bentleymulsanne' element={<BentleyMulsanne/>}/>
    <Route path='/bmw7series' element={<Bmw7Series/>}/>
    <Route path='/mercedesmaybach' element={<MercedesMaybach/>}/>
    <Route path='/porsche911gt' element={<Porsche911gt/>}/>
    <Route path='/lamborghinihuracanhyper' element={<LamborghiniHuracanHyper/>}/>
    <Route path='/paganizonda' element={<PaganiZonda/>}/>
    <Route path='/mercedesgtr' element={<MercedesGtr/>}/>
    <Route path='/bugattichironhyper' element={<BugattiChironHyper/>}/>
    <Route path='/bugattichironleslegendes' element={<BugattiChironLesLegendes/>}/>
    <Route path='/bugattichironeditionnore' element={<BugattiChironEditionNore/>}/>
    <Route path='/bugattichironsupersport' element={<BugattiChironSuperSport/>}/>
    <Route path='/gallerypage' element={<GalleryPage/>}/>
    <Route path='/ranking' element={<Ranking/>}/>
    <Route path='/priceranking' element={<PriceRanking/>}/>
    <Route path='/luxurydealerships' element={<LuxuryDealerShips/>}/>
    <Route path='/mercedeseqs' element={<MercedesEqs/>}/> 
    <Route path='*' element={<NotFound/>}/>
 </Routes>
    </div>
  );
}

export default App;

