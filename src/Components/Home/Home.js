import React from 'react'
import { Carousel } from 'react-bootstrap'
import DailyDealsProducts from '../../BoatProducts/DailyDeals/DailyDealsProducts'
// import SunburnProducts from '../../BoatSunburn/SunburnProducts/SunburnProducts'
// import Products_Catagory from '../../Shop/Products_Catagory/Products_Catagory'
import './Home.scss'

export default function Home() {
  return (
    <>
    <div className='home'>
    
    <Carousel>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="../../../images/boat1.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="../../../images/boat2.jpg"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="../../../images/boat3.jpg"
      alt="Third slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../../images/boat4.jpg"
      alt="fourth slide"
    />
    
  </Carousel.Item>
</Carousel>


<marquee scrollamount="10" className='flaunt'>
      
      <span className="text-stroke"></span>
      <span className="text-white">FLAUNT YOUR FITNESS </span>
      
      <span className="text-stroke">FLAUNT YOUR FITNESS </span>
      <span className="text-stroke"></span>
      <span className="text-white"></span>
      <span className="text-stroke"></span>
      <span className="text-stroke"></span>
      <span className="text-stroke"></span>
      
      <span className="text-stroke"></span> 
      <span className="text-white">FLAUNT YOUR FITNESS </span>
      <span className="text-stroke">FLAUNT YOUR FITNESS </span>
      <span className="text-stroke"></span>
      <span className="text-white"></span>
      <span className="text-stroke"></span>
      <span className="text-stroke"></span>
      <span className="text-stroke"></span>
      
      <span className="text-stroke"></span>
      <span className="text-white">FLAUNT YOUR FITNESS </span>
      <span className="text-stroke">FLAUNT YOUR FITNESS </span>
      <span className="text-stroke"></span>
      <span className="text-white"></span>
      <span className="text-stroke"></span>
      <span className="text-stroke"></span>
      <span className="text-stroke"></span>
      
    </marquee>

    <div className='dailydeals'> <DailyDealsProducts /></div>
  
     
      
 

 
     
    </div>  
    </>
  )
}
