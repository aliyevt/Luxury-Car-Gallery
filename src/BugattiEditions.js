import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BugSpecial } from './BugattiSpec';
import "./BugattiEditions.css";

const BugattiEditions = () => {
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
  return (
    <div>
<div className="App">
      <Slider {...settings}>
    {BugSpecial.map(item=>(
        <div className='card2'>
          <img className='item3img' src={item.image}/>
          <h1 className='bedit777'>{item.title}</h1>
        </div> 
    ))}
    </Slider>
    </div>

    </div>
  )
}

export default BugattiEditions