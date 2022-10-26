import React from 'react'
import './dailySpecials.css'
import { Carousel } from 'react-carousel3';
import carosel1 from '../../assets/pic1.webp';
import  carosel2 from '../../assets/pic3.webp';
import  carosel3 from '../../assets/pic4.webp';
import  carosel4 from '../../assets/pic5.webp';
import  carosel5 from '../../assets/pic6.jpg';
import  carosel7 from '../../assets/pic7.webp';
import  carosel6 from '../../assets/pic8.webp';

const DailySpecials = () => {
  const style = {
    width: 297,
    height: 296,
  };
  
  return (
     <>
    <h1 className='heading' style={{paddingTop:"40px",color:"red"}}>Daily Specials</h1>
    <div className='daily-specials'>

      <div className="special-images max-width">
      <Carousel height={460} width={980} yOrigin={42} yRadius={48} autoPlay={true}>
      <div key={1} style={style}>
      <img src={carosel1} alt="my-image" />
      </div>
      <div key={2} style={style}>
      <img src={carosel2} alt="my-image" />
      </div>
      <div key={3} style={style}>
      <img src={carosel3} alt="my-image" />
      </div>
      <div key={4} style={style}>
      <img src={carosel4} alt="my-image" />
      </div>
      <div key={5} style={style}>
      <img src={carosel5} alt="my-image" />
      </div>
      <div key={6} style={style}>
      <img src={carosel6} alt="my-image" />
      </div>
      <div key={7} style={style}>
      <img src={carosel7} alt="my-image" />
      </div>
    </Carousel>
    </div>
    <div className="special-content ">
       <p style={{color:"orange"}}>
       We use locally sourced ingredients, avoid preservatives whenever possible, and offer vegan-friendly dishes.
       We serve a new special every day. Head over to Facebook and see what we’re serving today.
       </p>
      </div>
    </div>
    </>
  )
}

export default DailySpecials
