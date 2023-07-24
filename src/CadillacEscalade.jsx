import React from 'react';
import "./CadillacEscalade.css";
import Fade from 'react-reveal';
import {  BsArrowDownCircle } from "react-icons/bs";
import {  BsArrowUpCircle } from "react-icons/bs";
import { useState } from 'react';
import cad1 from "./cad2.jpg";
import { GiCancel } from "react-icons/gi";
import cadimg2 from "./cad3.jpg";
import cad3 from "./cad5.webp";
import { TfiArrowUp } from "react-icons/tfi"
import { TfiArrowDown } from "react-icons/tfi"
import cad4 from "./cad7.jpg";
import cad5 from "./cad9.jpg";
import cad7 from "./cad10.webp";
import cad9 from "./cad13.webp";
import cad10 from "./cad14.webp";
import cad11 from "./cad15.webp";
import cad12 from "./cad16.webp";
import cad13 from "./cad17.webp";
import cad14 from "./cad18.webp";
import cad15 from "./cad19.webp";
import cad16 from "./cad20.webp";
import cad17 from "./cad21.webp";
import cad18 from "./cad22.webp";
import cad19 from "./cad23.webp";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import {RiYoutubeFill} from "react-icons/ri";
import {RiNetflixFill} from "react-icons/ri";
import {BsTiktok}  from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";



const CadillacEscalade = () => {
    
    const [g63spec, setG63spec]=useState(false);
    const [g63spec2, setG63spec2]=useState(false);
    const [cad, setCad]=useState(false);
    const [cad2, setCad2]=useState(false);
    const [cadd3, setCad3]=useState(false);
    const g63Amg=()=>{
        setG63spec(!g63spec)
    }
      const g63Amg2=()=>{
        setG63spec(!g63spec)
    }
      const g63Amg3=()=>{
        setG63spec2(!g63spec2)
        }
        const g63Amg4=()=>{
            setG63spec2(!g63spec2)
        }
        const cadClick =()=>{
            setCad(!cad)
        }
        const cadClick2 =()=>{
            setCad(!cad)
        }
        const cadClick3 =()=>{
          setCad2(!cad2)
      }
      const cadClick4 =()=>{
          setCad2(!cad2)
      }

      const cadClick5 =()=>{
        setCad3(!cadd3)
    }
    const cadClick7 =()=>{
        setCad3(!cadd3)
    } 
      
    const [selectedColor, setSelectedColor] = useState(cad15);
    const [selectedImage, setSelectedImage] = useState(cad15);
  
    const handleRedClick = () => {
      setSelectedColor('red');
      setSelectedImage(cad13);
    }
  
    const handleBlackClick = () => {
      setSelectedColor('black');
      setSelectedImage(cad15);
    }
    const handleWhiteClick = () => {
      setSelectedColor('white');
      setSelectedImage(cad14);
    }
    const handleBlueClick = () => {
      setSelectedColor('blue');
      setSelectedImage(cad17);
    }
    const handleGrayClick = () => {
      setSelectedColor('gray');
      setSelectedImage(cad12);
    }
    const handleCoffeeClick = () => {
      setSelectedColor('coffee');
      setSelectedImage(cad16);
    }
    const handleDgrayClick = () => {
      setSelectedColor('dgary');
      setSelectedImage(cad18);
    }
    const handleCreamClick = () => {
      setSelectedColor('cream');
      setSelectedImage(cad19);
    }
    
    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
    const [hovered2, setHovered2] = useState(false);
    const handleMouseEnter2 = () => {
      setHovered2(true);
    };
  
    const handleMouseLeave2 = () => {
      setHovered2(false);
    };
    const [hovered3, setHovered3] = useState(false);
    const handleMouseEnter3 = () => {
      setHovered3(true);
    };
  
    const handleMouseLeave3 = () => {
      setHovered3(false);
    };
    const [hovered4, setHovered4] = useState(false);
    const handleMouseEnter4 = () => {
      setHovered4(true);
    };
  
    const handleMouseLeave4 = () => {
      setHovered4(false);
    };
    const [hovered5, setHovered5] = useState(false);
    const handleMouseEnter5 = () => {
      setHovered5(true);
    };
  
    const handleMouseLeave5 = () => {
      setHovered5(false);
    };
    const [hovered6, setHovered6] = useState(false);
    const handleMouseEnter6 = () => {
      setHovered6(true);
    };
  
    const handleMouseLeave6 = () => {
      setHovered6(false);
    };
    const [hovered7, setHovered7] = useState(false);
    const handleMouseEnter7 = () => {
      setHovered7(true);
    };
  
    const handleMouseLeave7 = () => {
      setHovered7(false);
    };
    const [hovered9, setHovered9] = useState(false);
    const handleMouseEnter9 = () => {
      setHovered9(true);
    };
  
    const handleMouseLeave9 = () => {
      setHovered9(false);
    };


    const cUp= () => {
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight * 0,
          behavior: "smooth"
        });
      }, 200);
    }
    const cDown= () => {
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight * 1.1,
          behavior: "smooth"
        });
      }, 200);
    }



  return (
    <div>

<div className='cad'>
  <Fade bottom>
    <h1 className='cad1'>CADILLAC </h1>
    <h1 className='cad2'>ESCALADE</h1>
  </Fade>  
  <Fade bottom>
<div className="cad3icon777">
  <div className="cad2icon777" onClick={cDown}>
    <div className="cad3" ><TfiArrowDown/></div>
       </div>  
</div>    
</Fade>


</div>





<Fade bottom>
    <Fade bottom>
    <h1 className='cad4'>FIRST GENERATION - GMT 400</h1>
    </Fade>
    <Fade bottom>
    <div className="cad5">
        <img src={cad1} alt="" className="cad6" />
         <div>
        <h2 className="cad7">CADILLAC GMT 400 - FIRST GENERATION</h2>  
        <p className="cad8"> The Escalade's underpinnings were borrowed from the Yukon<br/> Denali line, with the GMC logos on the center caps replaced <br/>with Cadillac's crest. The Escalade also used the same 5.7 L<br/> Vortec 5700 V8 at 255 hp (190 kW), which was underpowered <br/>compared to the Navigator's 300 hp (224 kW) and 365 lb⋅ft <br/>(495 N⋅m) 5.4 Liter InTech V8. All first-generation Escalades and <br/>Denalis featured Auto-Trac selectable 4x4. The 1999-2000 <br/>Escalade achieves 11 mpg8-US (21 L/100 km) city and 15 mpg-US <br/>(16 L/100 km) highway based on U.S. EPA test protocols.  The only<br/> exterior differences for the Cadillac Escalade (other than <br/>badging) was a slightly different grill treatment and smooth <br/>cladding with emblems placed on the sheetmetal.</p>
        <button className='cad9' onClick={g63Amg}>SPECIFICATIONS</button>
        </div>
    </div>
    </Fade>
</Fade>
<Fade bottom>

{g63spec && <div>
  <div className='lurus44'>
  <div className='g63amg99' onClick={g63Amg2} ><GiCancel /></div>
  </div>
  <div className='lurus54'>
<div className='lurus55'>
  <h1 className='lurus56'>CONSUMPTION</h1>
  <div className='lurus57'>
    <p className='lurus58'>COMBINED CONSUMPTION*</p>
    <p className='lurus59'>21,5 l/100km (WLTP)</p>
  </div>
  <hr className='lurushr2'/>
  <div className='lurus60'>
    <p className='lurus61'>COMBINED CO2 EMISSIONS*</p>
    <p className='lurus62'>520 g/km (WLTP)</p>
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
  <p className='lurus77'>5,997 cm³ (543.87 cu in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BORE X STROKE</p>
  <p className='lurus77'>97 x 97 mm (3.39 X 3.39 in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. POWER</p>
  <p className='lurus77'>777 CV (495 kW) @ 6,000 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. TORQUE</p>
  <p className='lurus77'>400 Nm (627.97 lb.-ft.) @ 5,577-4,500 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAXIMUM ENGINE SPEED</p>
  <p className='lurus77'>7,700 rpm</p>
</div>
<hr className='lurushr2'/>
</div>


<div className='lurus63'>
  <h1 className='lurus68'>WHEELS</h1>
  <div className='lurus65'>
    <p className='lurus66'>FRONT RIMS</p>
    <p className='lurus67'>17Jx27" ET27</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR RIMS</p>
    <p className='lurus676'>15.5Jx25" ET17</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>FRONT TIRES</p>
    <p className='lurus677'>PIRELLI P ZERO 585/47 ZR27</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR TIRES</p>
    <p className='lurus678'>PIRELLI P ZERO 324/47 ZR55</p>
  </div>
  <hr className='lurushr2'/>

<h1 className='lurus70'>PERFORMANCE</h1>
<div className='lurus71'>
  <p className='lurus73'>TOP SPEED</p>
  <p className='lurus74'>230 km/h</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-100 KM/H (0-62 MPH)</p>
  <p className='lurus77'>7.3 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-200 KM/H (0-124 MPH)</p>
  <p className='lurus77'>17.5 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BRAKING 100-0 KM/H (62-0 MPH)</p>
  <p className='lurus77'>47,9 m</p>
</div>
<hr className='lurushr2'/>
    </div>
  </div>
</div>}
</Fade>
<Fade bottom>
    <h1 className="cad10">SECOND GENERATION - GMT 800</h1>
</Fade>
<Fade bottom>
    <div className="cad11">
        <div>
            <h2 className="cad12">CADILLAC GMT 800 - SECOND GENERATION</h2>
            <p className="cad13">Unlike its Chevrolet and GMC siblings, which launched for the<br/> 2000 model year, Cadillac delayed the Escalade's switch to the<br/> GMT820 chassis until February 2001 as a 2002 model, the last of<br/> the three General Motors full-size truck and SUV brands to switch<br/> to the new chassis; Cadillac unveiled the 2002 model year<br/> Escalade in August 2000 at Pebble Beach, while continuing to <br/>sell the 2000 model year trucks. Rear-wheel drive was standard,<br/> as was a 5.3 L V8. All-wheel drive was standard on the ESV and EXT<br/> and was optional on the short wheelbase Escalade.  The special<br/> high-output Vortec 6.0 L V8 engine was the sole engine choice on<br/> all-wheel drive models whether it was the short wheelbase, ESV,<br/> or EXT until mid-year 2005 when the 5.3L was dropped altogether.</p>
            <button className="cad15" onClick={g63Amg3}>SPECIFICATION</button>
        </div>
        <img src={cadimg2} alt="" className="cad14" />
    </div>
</Fade>

<Fade bottom>

{g63spec2 && <div>
  <div className='lurus44'>
  <div className='g63amg99' onClick={g63Amg4} ><GiCancel /></div>
  </div>
  <div className='lurus54'>
<div className='lurus55'>
  <h1 className='lurus56'>CONSUMPTION</h1>
  <div className='lurus57'>
    <p className='lurus58'>COMBINED CONSUMPTION*</p>
    <p className='lurus59'>21,7 l/100km (WLTP)</p>
  </div>
  <hr className='lurushr2'/>
  <div className='lurus60'>
    <p className='lurus61'>COMBINED CO2 EMISSIONS*</p>
    <p className='lurus62'>520 g/km (WLTP)</p>
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
  <p className='lurus77'>6,297 cm³ (747.87 cu in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BORE X STROKE</p>
  <p className='lurus77'>77 x 77 mm (5.79 X 5.79 in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. POWER</p>
  <p className='lurus77'>777 CV (790 kW) @ 7,777 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. TORQUE</p>
  <p className='lurus77'>447 Nm (723.97 lb.-ft.) @ 5,257-7,500 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAXIMUM ENGINE SPEED</p>
  <p className='lurus77'>7,457 rpm</p>
</div>
<hr className='lurushr2'/>
</div>


<div className='lurus63'>
  <h1 className='lurus68'>WHEELS</h1>
  <div className='lurus65'>
    <p className='lurus66'>FRONT RIMS</p>
    <p className='lurus67'>70Jx59" ET97</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR RIMS</p>
    <p className='lurus676'>11.5Jx22" ET14</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>FRONT TIRES</p>
    <p className='lurus677'>PIRELLI P ZERO 587/40 ZR27</p>
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
  <p className='lurus74'>250 km/h</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-100 KM/H (0-62 MPH)</p>
  <p className='lurus77'>6.7 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-200 KM/H (0-124 MPH)</p>
  <p className='lurus77'>15.7 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BRAKING 100-0 KM/H (62-0 MPH)</p>
  <p className='lurus77'>52,7 m</p>
</div>
<hr className='lurushr2'/>
    </div>
  </div>
</div>}
</Fade>



<Fade bottom>
<h1 className="cad16">THIRD GENERATION - GMT 900</h1>
</Fade>

<Fade bottom>
<div className="cad17">
    <img src={cad3} alt="" className="cad18" />
    <div className='cad22'>
        <h2 className="cad19">CADILLAC GMT 900 - THIRD GENERATION</h2>
        <p className="cad20">The Escalade moved to the new GMT900 platform for the<br/> 2007 model year, along with all its companion models<br/> (Silverado/Sierra/Avalanche/Escalade EXT, Tahoe/Suburban/<br/>Yukon/Yukon XL/Yukon Denali) which were launched <br/>simultaneously. The regular Escalade was again joined by a <br/> stretched ESV version as well as a new EXT sport utility truck.<br/>  The 2007 Escalade was the official vehicle of Super Bowl XL, with<br/> MVP Hines Ward being awarded one of the first Escalades<br/> produced. The Escalade uses an all-aluminum 6.2 L Vortec V8.<br/> This pushrod engine includes variable valve timing, a first in a <br/>mass-produced non-overhead cam engine. The system adjusts<br/> both intake and exhaust timing between two settings.</p>
        <button className="cad21" onClick={cadClick}>SPECIFICATIONS</button>
    </div>
</div>
</Fade>



<Fade bottom>

{cad && <div>
  <div className='lurus44'>
  <div className='g63amg99' onClick={cadClick2} ><GiCancel /></div>
  </div>
  <div className='lurus54'>
<div className='lurus55'>
  <h1 className='lurus56'>CONSUMPTION</h1>
  <div className='lurus57'>
    <p className='lurus58'>COMBINED CONSUMPTION*</p>
    <p className='lurus59'>21,1 l/100km (WLTP)</p>
  </div>
  <hr className='lurushr2'/>
  <div className='lurus60'>
    <p className='lurus61'>COMBINED CO2 EMISSIONS*</p>
    <p className='lurus62'>520 g/km (WLTP)</p>
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
  <p className='lurus77'>6,997 cm³ (543.85 cu in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BORE X STROKE</p>
  <p className='lurus77'>97 x 97 mm (3.39 X 3.39 in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. POWER</p>
  <p className='lurus77'>777 CV (490 kW) @ 6,000 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. TORQUE</p>
  <p className='lurus77'>497 Nm (626.93 lb.-ft.) @ 2,250-4,500 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAXIMUM ENGINE SPEED</p>
  <p className='lurus77'>7,700 rpm</p>
</div>
<hr className='lurushr2'/>
</div>


<div className='lurus63'>
  <h1 className='lurus68'>WHEELS</h1>
  <div className='lurus65'>
    <p className='lurus66'>FRONT RIMS</p>
    <p className='lurus67'>95Jx22" ET20</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR RIMS</p>
    <p className='lurus676'>77.5Jx22" ET17</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>FRONT TIRES</p>
    <p className='lurus677'>PIRELLI P ZERO 285/40 ZR27</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR TIRES</p>
    <p className='lurus678'>PIRELLI P ZERO 377/35 ZR22</p>
  </div>
  <hr className='lurushr2'/>

<h1 className='lurus70'>PERFORMANCE</h1>
<div className='lurus71'>
  <p className='lurus73'>TOP SPEED</p>
  <p className='lurus74'>270 km/h</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-100 KM/H (0-62 MPH)</p>
  <p className='lurus77'>5.9 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-200 KM/H (0-124 MPH)</p>
  <p className='lurus77'>15.5 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BRAKING 100-0 KM/H (62-0 MPH)</p>
  <p className='lurus77'>77,9 m</p>
</div>
<hr className='lurushr2'/>
    </div>
  </div>
</div>}
</Fade>
<Fade bottom>
    <h1 className="cad23">FOURTH GENEARTION - GMT K2XL</h1>
</Fade>

<Fade bottom>
  <div className="cad24">
    <div>
      <h2 className="cad25">CADILLAC GMT K2XL - FOURTH GENERATION</h2>
      <p className="cad26">On October 7, 2013, Cadillac unveiled the fourth generation<br/> Escalade and Escalade ESV at a star-studded event in New York<br/>  City, just nearly a month after GM unveiled their next-generation<br/>  SUVs from Chevrolet and GMC. Cadillac began its campaign to<br/>  promote the Escalade on August 14, 2013, and started posting<br/>  teasers online on September 23, 2013, with help from the<br/>  photographer Autumn de Wilde, who helped reveal more<br/> images  ahead of the unveiling. A YouTube page called<br/>  "Escalade Reveal" was set up to showcase the videos along with<br/> the countdown to the unveiling. The Escalade was planned to<br/> switch to the unibody Lambda platform but was quickly nixed <br/> due tocustomer aversion.</p>
      <button className="cad28" onClick={cadClick3}>SPECIFICATION</button>
    </div>
    <img src={cad4} alt="" className="cad27" />
  </div>
</Fade>

<Fade bottom>
  
{cad2 && <div>
  <div className='lurus44'>
  <div className='g63amg99' onClick={cadClick4} ><GiCancel /></div>
  </div>
  <div className='lurus54'>
<div className='lurus55'>
  <h1 className='lurus56'>CONSUMPTION</h1>
  <div className='lurus57'>
    <p className='lurus58'>COMBINED CONSUMPTION*</p>
    <p className='lurus59'>21,1 l/100km (WLTP)</p>
  </div>
  <hr className='lurushr2'/>
  <div className='lurus60'>
    <p className='lurus61'>COMBINED CO2 EMISSIONS*</p>
    <p className='lurus62'>520 g/km (WLTP)</p>
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
  <p className='lurus77'>6,597 cm³ (543.85 cu in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BORE X STROKE</p>
  <p className='lurus77'>97 x 97 mm (3.39 X 3.39 in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. POWER</p>
  <p className='lurus77'>777 CV (490 kW) @ 6,000 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. TORQUE</p>
  <p className='lurus77'>597 Nm (626.93 lb.-ft.) @ 2,250-4,500 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAXIMUM ENGINE SPEED</p>
  <p className='lurus77'>7,700 rpm</p>
</div>
<hr className='lurushr2'/>
</div>


<div className='lurus63'>
  <h1 className='lurus68'>WHEELS</h1>
  <div className='lurus65'>
    <p className='lurus66'>FRONT RIMS</p>
    <p className='lurus67'>95Jx22" ET20</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR RIMS</p>
    <p className='lurus676'>77.5Jx22" ET17</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>FRONT TIRES</p>
    <p className='lurus677'>PIRELLI P ZERO 285/40 ZR27</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR TIRES</p>
    <p className='lurus678'>PIRELLI P ZERO 377/35 ZR22</p>
  </div>
  <hr className='lurushr2'/>

<h1 className='lurus70'>PERFORMANCE</h1>
<div className='lurus71'>
  <p className='lurus73'>TOP SPEED</p>
  <p className='lurus74'>297 km/h</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-100 KM/H (0-62 MPH)</p>
  <p className='lurus77'>4.7 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-200 KM/H (0-124 MPH)</p>
  <p className='lurus77'>14.7 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BRAKING 100-0 KM/H (62-0 MPH)</p>
  <p className='lurus77'>87,7 m</p>
</div>
<hr className='lurushr2'/>
    </div>
  </div>
</div>}
</Fade>

<Fade bottom>
  <h1 className="cad29">FIFTH GENERATION - GM T1XL</h1>
</Fade>
<Fade bottom>
  <div className="cad30">
    <img src={cad5} alt="" className="cad31" />
    <div className='cad35'>
      <h2 className="cad32">CADILLAC GM T1XL - FIFTH GENERATION</h2>
      <p className='cad33'>The fifth generation Escalade debuted on February 4,<br/> 2020, in Beverly Hills, California, for the 2021 model year,<br/> with sales commencing in the fall of 2020. Although<br/> production of the 2021 Escalade was pushed back due<br/> to the growing pandemic, GM had the vehicle scheduled<br/> to hit dealerships as planned. Dealers started taking pre-<br/>orders on April 23, 2020. To hype up the Escalade, Cadillac<br/> launched a 3D visualizer showcasing the vehicle. This<br/> visualizer lets the user interact with the Escalade and<br/> Escalade ESV by turning on the lights, changing the color,<br/> changing the rims, and looking at the interior. You don't want<br/> to miss this state-of-the-art Cadillac escalade  </p>
      <button className="cad34" onClick={cadClick5}>SPECIFICATION</button>
    </div>
  </div>
</Fade>


<Fade bottom>
{cadd3 && <div>
  <div className='lurus44'>
  <div className='g63amg99' onClick={cadClick7} ><GiCancel /></div>
  </div>
  <div className='lurus54'>
<div className='lurus55'>
  <h1 className='lurus56'>CONSUMPTION</h1>
  <div className='lurus57'>
    <p className='lurus58'>COMBINED CONSUMPTION*</p>
    <p className='lurus59'>21,1 l/100km (WLTP)</p>
  </div>
  <hr className='lurushr2'/>
  <div className='lurus60'>
    <p className='lurus61'>COMBINED CO2 EMISSIONS*</p>
    <p className='lurus62'>520 g/km (WLTP)</p>
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
  <p className='lurus77'>6,797 cm³ (543.85 cu in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BORE X STROKE</p>
  <p className='lurus77'>97 x 97 mm (3.39 X 3.39 in)</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. POWER</p>
  <p className='lurus77'>777 CV (490 kW) @ 6,000 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAX. TORQUE</p>
  <p className='lurus77'>677 Nm (626.93 lb.-ft.) @ 2,250-4,500 rpm</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>MAXIMUM ENGINE SPEED</p>
  <p className='lurus77'>7,777 rpm</p>
</div>
<hr className='lurushr2'/>
</div>


<div className='lurus63'>
  <h1 className='lurus68'>WHEELS</h1>
  <div className='lurus65'>
    <p className='lurus66'>FRONT RIMS</p>
    <p className='lurus67'>95Jx22" ET20</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR RIMS</p>
    <p className='lurus676'>77.5Jx22" ET17</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>FRONT TIRES</p>
    <p className='lurus677'>PIRELLI P ZERO 285/40 ZR27</p>
  </div>
  <hr className='lurushr2'/>

  <div className='lurus69'>
    <p className='lurus66'>REAR TIRES</p>
    <p className='lurus678'>PIRELLI P ZERO 377/35 ZR22</p>
  </div>
  <hr className='lurushr2'/>

<h1 className='lurus70'>PERFORMANCE</h1>
<div className='lurus71'>
  <p className='lurus73'>TOP SPEED</p>
  <p className='lurus74'>307 km/h</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-100 KM/H (0-62 MPH)</p>
  <p className='lurus77'>4.5 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>ACCELERATION 0-200 KM/H (0-124 MPH)</p>
  <p className='lurus77'>13.7 s</p>
</div>
<hr className='lurushr2'/>
<div className='lurus75'>
  <p className='lurus73'>BRAKING 100-0 KM/H (62-0 MPH)</p>
  <p className='lurus77'>77,7 m</p>
</div>
<hr className='lurushr2'/>
    </div>
  </div>
</div>}
</Fade>
<Fade bottom>
  <div className="cad37">
    <Fade bottom>
    <h1 className="cad38">INTERIOR</h1>
    </Fade>
<Fade bottom>
  <div className="cad39">
   <h1 className="cad40">gear<br/> system<br/> equipped <br/>with the <br/>latest<br/> technology</h1>
   <img src={cad7} alt="" className="cad41" />
  </div>
</Fade>
<Fade bottom>
  <div className="cad42">
    <img src={cad9} alt="" className="cad43" />
    <h1 className="cad44">Enjoy<br/> your<br/> journeys<br/> with<br/> larger<br/> baggage</h1>
  </div>
</Fade>
<Fade bottom>
  <div className="cad45">
    <h1 className="cad46">Steering<br/> wheel<br/> equipped <br/> with <br/>the <br/>latest<br/> technology</h1>
    <img src={cad10} alt="" className="cad47" />
  </div>
</Fade>
<Fade bottom>
  <div className="cad48">
    <img src={cad11} alt="" className="cad49" />
    <h1 className="cad50">A<br/> comfortable<br/> walk <br/>with <br/>the most<br/> comfortable<br/> seats</h1>
  </div>
</Fade>
  </div>
</Fade>

<Fade bottom>
     <div className='g63amg89'>
  <h1 className='cad63'>CHOOSE YOUR COLOR</h1>
</div>
</Fade>



<Fade bottom>
  
<div className='cad52'>
  <div className='cad62'></div>
  {selectedColor && <img className='cad51' src={selectedImage} alt=''/>} 
  <div className='cad53'>
<div onClick={handleBlackClick} onMouseEnter={handleMouseEnter9}
      onMouseLeave={handleMouseLeave9} style={{
       height: hovered9 ? "60px" : "50px",
        marginTop: hovered9 ? "-5px" : "0px",
        marginBottom: hovered9 ? "-5px" : "0px"
      }} className='cad54'></div>
<div onClick={handleRedClick} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} style={{
       height: hovered ? "60px" : "50px",
        marginTop: hovered ? "-5px" : "0px",
        marginBottom: hovered ? "-5px" : "0px"
      }}  className='cad55'></div>
<div onClick={handleWhiteClick} onMouseEnter={handleMouseEnter2}
      onMouseLeave={handleMouseLeave2} style={{
       height: hovered2 ? "60px" : "50px",
        marginTop: hovered2 ? "-5px" : "0px",
        marginBottom: hovered2 ? "-5px" : "0px"
      }}  className='cad56'></div>
<div onClick={handleGrayClick} onMouseEnter={handleMouseEnter3}
      onMouseLeave={handleMouseLeave3} style={{
       height: hovered3 ? "60px" : "50px",
        marginTop: hovered3 ? "-5px" : "0px",
        marginBottom: hovered3 ? "-5px" : "0px"
      }}  className='cad57'></div>
<div onClick={handleCoffeeClick} onMouseEnter={handleMouseEnter4}
      onMouseLeave={handleMouseLeave4} style={{
       height: hovered4 ? "60px" : "50px",
        marginTop: hovered4 ? "-5px" : "0px",
        marginBottom: hovered4 ? "-5px" : "0px"
      }}  className='cad58'></div>
<div onClick={handleBlueClick} onMouseEnter={handleMouseEnter5}
      onMouseLeave={handleMouseLeave5} style={{
       height: hovered5 ? "60px" : "50px",
        marginTop: hovered5 ? "-5px" : "0px",
        marginBottom: hovered5 ? "-5px" : "0px"
      }}  className='cad59'></div>
<div onClick={handleDgrayClick} onMouseEnter={handleMouseEnter6}
      onMouseLeave={handleMouseLeave6} style={{
       height: hovered6 ? "60px" : "50px",
        marginTop: hovered6 ? "-5px" : "0px",
        marginBottom: hovered6 ? "-5px" : "0px"
      }}  className="cad60"></div>
<div onClick={handleCreamClick} onMouseEnter={handleMouseEnter7}
      onMouseLeave={handleMouseLeave7} style={{
       height: hovered7 ? "60px" : "50px",
        marginTop: hovered7 ? "-5px" : "0px",
        marginBottom: hovered7 ? "-5px" : "0px"
      }}  className="cad61"></div>
</div>
</div>   
  </Fade>


<Fade bottom>
  <h1 className="cad69">Please go above to re-experience <br/>this incredible world of<br/> Cadillac Escalade</h1>
</Fade>

<Fade bottom>
<div className="p10rank">
<div className='p9rank'onClick={cUp}>
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



<p className='write-astmart-fixed'>Fuel consumption and emission values of Cadillac Escalade*; Fuel consumption combined: 21,7 l/100km (WLTP); CO2-emissions combined: 777 g/km (WLTP)</p>








    </div>
  )
}

export default CadillacEscalade