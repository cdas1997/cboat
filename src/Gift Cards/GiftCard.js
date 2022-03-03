import React from 'react'
import './GiftCard.scss'
import {Carousel} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

function GiftCard() {
  return (
    <div>
        <div className="row" id='giftcardcontainer'>
        <div className='naviga'>
            <a className='pagepath2' href="/">Home</a> 
            <h5 className='pagepath1'>/GiftCard</h5>
            <span className='lowprice'>Lowest Price</span>
            </div>
         
            <div className="col-6 col-lg-6" id='giftcardcom'>
           
 <Carousel className='cardcarousal'>
   
  <Carousel.Item>
 
    <img
      className="d-block w-100"
      src="../../../images/giftcard1.png"
      alt="First slide"
      id='cardimg'
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../../images/giftcard2.png"
      alt="Second slide"
      id='cardimg'
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../../images/giftcard3.png"
      alt="Third slide"
      id='cardimg'
    />

   
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../../images/giftcard4.png"
      alt="Third slide"
      id='cardimg'
    />

   
  </Carousel.Item>
</Carousel>
</div>

            <div className="col-6 col-lg-6" id='giftcardcom1'>
        <div><h1  className='giftcardfont1'>Gift Cards</h1>
        <span ><FontAwesomeIcon icon={faStar} className='giftcardfont'/> </span>
        <span><FontAwesomeIcon icon={faStar} className='giftcardfont'/> </span>
        <span><FontAwesomeIcon icon={faStar} className='giftcardfont'/> </span>
        <span><FontAwesomeIcon icon={faStar} className='giftcardfont'/> </span>
        <span><FontAwesomeIcon icon={faStar} className='giftcardfont'/> </span>
        <span className='giftcardfont1'>(9) </span>
        </div>

        <div>
            <button className='giftcardbtn'>Rs.500.00</button>
            <button className='giftcardbtn'>Rs.1000.00</button>
            <button className='giftcardbtn'>Rs.2000.00</button>
            <button className='giftcardbtn'>Rs.5000.00</button>
        </div>

        <div>
          <h1 className='giftcardfont'>RS. 5,000.00</h1>
          <span className='giftcardfont1'>Inclusive all taxes</span>
        </div>

        <div>
          <button className='giftcardbtn1'>NOTIFY ME</button>
        </div>
            </div>
</div>

    </div>
  )
}

export default GiftCard