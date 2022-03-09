import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruckFast,faPercent,faShield} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faYoutube,faInstagram,faTwitter,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

import './Footer.scss'
import {Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';
import ScrollToTop from '../../ScrollToTop/ScrollToTop'


export default function Footer() {
    return (
        <>
      
<footer  className='container1'>

<div >
<marquee scrollamount="10"  className='flaunt1'>
     
     <span class="text-stroke">No. 1 Wireless Hearable Brand In India</span>
     <span class="text-white"> No. 1 Wireless Hearable Brand In India</span>
     <span class="text-stroke"> No. 1 Wireless Hearable Brand In India</span>
     <span class="text-stroke"> No. 1 Wireless Hearable Brand In India</span>
     <span class="text-white"> No. 1 Wireless Hearable Brand In India</span>
     <span class="text-stroke"> No. 1 Wireless Hearable Brand In India</span>
     
     
   </marquee>
</div>

<div className="fot1">
                        <div className="col-4 mx-auto">
                           
                            <FontAwesomeIcon icon={faTruckFast} className='icn4' />
                                <h3  className='icnf'>Free Shipping</h3>
                        </div>
                        <div className="col-4 mx-auto">
                            
                            <FontAwesomeIcon icon={faPercent} className='icn4'/>
                            <h3 className='icnf'>Exclusive Deals</h3>

                        </div>
                        <div className="col-4 mx-auto">
                           
                            <FontAwesomeIcon icon={faShield} className='icn4'/>
                                <h3 className='icnf'>Secure Checkout</h3>
                            

                        </div>
                        
</div>


<div className="col-12 mx-auto" id='fot2'>

<p className='paraf'>India's fastest growing audio & wearables brand. The most incredible range of wireless earphones,
     earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!</p>
 </div>
   
    <div className="row">
        <div className="col-12 col-lg-11 mx-auto" >
            <div className="row">

            <div className="col-6 col-lg-4">
                <img src="../../../images/boat.png" alt="bt"  width="90"
        height="60" className='img1'/>
                    <p  className='nvlink1'>Subscribe to email alerts. We promise not to spam your inbox.</p>
                <input type="email" placeholder="Email Address*" className='inpt'></input>
                <button type="submit" className='ebtn'>SUBSCRIBE</button>
                </div>
                
                <div className="col-6 col-lg-3">
                    <h2 className='fotf'>   SHOP</h2>
                    <ul>
                    <li>
                    <Nav.Link className='nvlink' href='/shopproduct/Wireless Earbuds'>True Wireless Earbuds</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link className='nvlink' href='/shopproduct/Wireless Headphones'>Wireless Headphones</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link className='nvlink' href='/shopproduct/Wired Earphones'>Wired Headphones</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link className='nvlink' href='/shopproduct/Wireless Speakers'>Wireless Speakers</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link className='nvlink' href='/shopproduct/Home Audio'>Home Audio</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link className='nvlink' href='/shopproduct/Mobile Accessories'>Mobile Accessories</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link className='nvlink' href='/shopproduct/Smart Watches'>Smart Watches</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link className='nvlink' href='/shopproduct/TRebel'>TRebel</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link className='nvlink' href='/shopproduct/Misfit'>Misfit</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link className='nvlink' href='/gift-cards'>Gift Card</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link className='nvlink' href='/RockInIndia'>Rock In India</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link className='nvlink' href='/Earn' >Earn Rs.100</Nav.Link>
                        </li>
                        
                    </ul>

                </div>
                <div className="col-6 col-lg-3">
                    <h2 className='fotf'>HELP</h2>
                    <ul>
                    <li>
                        <Nav.Link className='nvlink'  href='/term'>Track Your Order</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link className='nvlink'  href='/term'>Warranty & Support</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link className='nvlink'  href='/term'>Return Policy</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link className='nvlink'  href='/term'>Service Centers</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link className='nvlink'  href='/term'>Bulk Order</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link className='nvlink'  href='/term'>FAQs</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link className='nvlink'  href='/contact'>Contact Us</Nav.Link>
                        </li>
                    </ul>

                </div>
                <div className="col-6 col-lg-2">
                    <h2 className='fotf'>COMPANY</h2>
                    <ul>
                        <li>
                        <Nav.Link className='nvlink' href='/about'>About boAt</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link className='nvlink'  href='/news'>News</Nav.Link>
                        </li>
                        <li>
                        <Nav.Link className='nvlink' as={Link} to="/sub_catagory/p03">Read Our Blog</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link className='nvlink' href='/security'>Security</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link className='nvlink' href='/term'>Terms Of Service</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link className='nvlink'  href='/term'>Privacy Policy</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link className='nvlink' href='/term'>Partner Offers T&Cs</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link className='nvlink'  href='/term'>Investor Relations</Nav.Link>
                        </li>
                        
                    </ul>

                </div>

               

            </div>
            
     <div className="col-6 col-lg-2" >
                    <h2 className='fotf'>Follow Us</h2>
                    <div className="row">
                        <div className="col-2 mx-auto">
                            <a href="https://www.youtube.com/">
                            <FontAwesomeIcon icon={faFacebook} className='icn3' />
                                
                            </a>

                        </div>
                        <div className="col-2 mx-auto">
                            <a href="https://www.youtube.com/" >
                            <FontAwesomeIcon icon={faYoutube} className='icn'/>
                                
                            </a>

                        </div>
                        <div className="col-2 mx-auto">
                            <a href="https://www.youtube.com/">
                            <FontAwesomeIcon icon={faInstagram} className='icn1'/>
                                
                            </a>

                        </div>
                        <div className="col-2 mx-auto ">
                            <a href="https://www.youtube.com/">
                            <FontAwesomeIcon icon={faTwitter} />
                                
                            </a>

                        </div>
                        <div className="col-2 mx-auto ">
                            <a href="https://www.youtube.com/">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                                
                            </a>

                        </div>
                    </div>

                </div>


        </div>

    </div>


    
   <div className="row" >
    <div className="col-12 col-lg-12 mx-auto" >
        <div className="row">

            <div className="col-6 col-lg-4">
            <img src="../../../Images/footer.png" alt="Payment method" />
            </div>
            
            <div className="col-6 col-lg-6" id='play'>
                <h5 className='link2'>DOWNLOAD THE APP</h5>
            <img src="../../../Images/googleplay.png" alt="Payment method"   className='link3'/>
            <img src="../../../Images/apple.png" alt="Payment method"  className='link4'/>
            </div>
           

        </div>
      </div>
      <ScrollToTop  />
  </div>

    <hr />
            <div className="copyright">

                <p >Copyright © 2021 by <a className="link1" href="http://localhost:3000/">cboAt.com</a> . All Right Reserved. </p>
           
            </div>
            <div>
                
            </div>


            
    
</footer>

            
        </>
    )
}
