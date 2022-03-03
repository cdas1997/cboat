import React,{useState} from 'react'
import { Dropdown} from 'react-bootstrap'
import './Hedaer.scss'
import { Link } from 'react-router-dom';
import {Navbar,Container,Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGift,faUser,faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

export default function Header() {

  const isAuth=window.localStorage.getItem('Token');
  console.log("token is",isAuth);

  const isUsername=window.localStorage.getItem('username');
  console.log("username is",isUsername);

  const navigate=useNavigate();

  const loc=useLocation();
    console.log("location is ",loc);

  const hndleLogout=()=>{
    window.localStorage.clear();
    navigate('/login');

  }


  
  
  return (
    <>
         
     <div class="announcement">
            <a href="https://www.boat-lifestyle.com/collections/offer-zone">
            <div class="announcement__inner">
              <b>10% OFF upto Rs.500 using Pay with Rewards</b>
            </div>
            </a>
      </div>

      <>
  
  
  <Navbar className='nvbr'>
  <Container >
    <Navbar.Brand href="/" className='logo'>
      <img
        src="../../../images/boat.png"
        width="90"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>

    <Nav className="me-auto" >
    <Dropdown>
  <Dropdown.Toggle variant="dark" id="dropdown-basic" className='drptog'>
    Shop
   
  </Dropdown.Toggle>
  <Dropdown.Menu className='dropdown-menu show' >


  <div >
              <div className="row" className="shopitem">
  
                        <div className="col-12 col-lg-3">
                        
                            
                          <li class=" drop-items">
                            <a href="/WirelessEarbuds" class="">
                              
                              	<span class="visually-hidden">Airdopes True Wireless</span>
                              	<img src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS.png?v=1612338251" alt="Airdopes True Wireless" className='shopimg'/>
                              
                              
                            </a>

                            
                          </li>
                            
                        </div>
                        <div className="col-12 col-lg-3">
                            
                          <li class=" drop-items">
                            <a href="/WirelessHeadphones" class="">
                              
                              	<span class="visually-hidden">Rockerz Wireless</span>
                              	<img src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271.png?v=1612338387" alt="Rockerz Wireless" className='shopimg'/>
                              
                              
                            </a>

                            
                          </li>
                            

                        </div>
                        <div className="col-12 col-lg-3">
                        <li class=" drop-items">
                            <a href="/SmartWatches" class="">
                              
                              	<span class="visually-hidden">Wearables Smart Watch</span>
                              	<img src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear.jpg?v=1644836883" alt="Wearables Smart Watch" className='shopimg'/>
                              
                              
                            </a>

                            
                          </li>

                        </div>
                        
                        <div className="col-12 col-lg-3">
                        <li class=" drop-items">
                            <a href="/WiredEarphones" class="">
                              
                              	<span class="visually-hidden">Bassheads Wired</span>
                              	<img src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895.png?v=1612338356" alt="Bassheads Wired" className='shopimg'/>
                              
                              
                            </a>

                            
                          </li>
                        
                       </div>

        </div> 
        <div className="row" className="shopitem">

                       <div className="col-12 col-lg-3">
                       <li class=" drop-items">
                            <a href="/WirelessSpeakers" class="">
                              
                              	<span class="visually-hidden">Stone Speakers</span>
                              	<img src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5.png?v=1612338436" alt="Stone Speakers" className='shopimg'/>
                              
                              
                            </a>

                            
                          </li>
                           
                        </div>
                        <div className="col-12 col-lg-3">
                        <li class=" drop-items">
                            <a href="/collections/home-audio" class="">
                              
                              	<span class="visually-hidden">Aavante Home Audio</span>
                              	<img src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a.png?v=1622452897" alt="Aavante Home Audio" className='shopimg'/>
                              
                              
                            </a>

                            
                          </li>
                           
                        </div>
                        <div className="col-12 col-lg-3">
                        <li class=" drop-items">
                            <a href="/collections/mobile-accessories" class="">
                              
                              	<span class="visually-hidden">Mobile Accessories</span>
                              	<img src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash.jpg?v=1644836858" alt="Mobile Accessories" className='shopimg'/>
                              
                              
                            </a>

                            
                          </li>
                           
                        </div>
                        <div className="col-12 col-lg-3">
                        <li class=" drop-items">
                            <a href="/collections/trebel-audiowear-for-women" class="">
                              
                              	<span class="visually-hidden">Trebel</span>
                              	<img src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09.png?v=1615033153" alt="Trebel" className='shopimg'/>
                              
                              
                            </a>

                            
                          </li>
                        </div>
                </div>

                <div className="row" className="shopitem">

                       <div className="col-12 col-lg-4">
                       <li class=" drop-items">
                            <a href="/SunburnProducts" class="">
                              
                              	<span class="visually-hidden">Limited Edition</span>
                              	<img src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition.png?v=1612338560" alt="Limited Edition" className='shopimg'/>
                              
                              
                            </a>

                            
                          </li>
                       </div>
                       
                       <div className="col-12 col-lg-4">
                       <li class=" drop-items">
                            <a href="/collections/misfit-by-boat" class="">
                              
                              	<span class="visually-hidden">Best Trimmer for Men</span>
                              	<img src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop.png?v=1624859990" alt="Best Trimmer for Men" className='shopimg'/>
                              
                              
                            </a>

                            
                          </li>
                       </div>
                       
                       <div className="col-12 col-lg-4">
                       <li class=" drop-items">
                            <a href="/collections/immortal-gaming" class="">
                              
                              	<span class="visually-hidden">Immortal Gaming</span>
                              	<img src="//cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image.png?v=1626094103" alt="Immortal Gaming" className='shopimg'/>
                              
                              
                            </a>

                            
                          </li>
                       </div>
                      
                       
                      
                      
                 </div>      
    </div> 
  </Dropdown.Menu>
    
</Dropdown>


<span class="vertical-separator"></span>
      <Nav.Link as={Link} to="/SunburnProducts" className={`${loc.pathname==="/SunburnProducts"?"active1":" "}`}><h5 className='nvitem'>boAt + Sunburn</h5></Nav.Link>
      <span class="vertical-separator"></span>
      <Nav.Link as={Link} to="/DailyDeals"  className={`${loc.pathname==="/DailyDeals"?"active1":" "}`}><h5 className='nvitem'>Daily deals</h5></Nav.Link>
      <span class="vertical-separator"></span>
      
      <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark"  className='drptog'>
      More
    </Dropdown.Toggle>

    <Dropdown.Menu  className='dropmenu'>
     
      <Dropdown.Item href="#/action-2" className='nvitemh'><h5 className='nvitem1'>Gifting</h5></Dropdown.Item>
      <Dropdown.Item href="#/action-3" className='nvitemh'><h5 className='nvitem1'>Offer zone</h5></Dropdown.Item>
    
      <Dropdown.Item href="#/action-4" className='nvitemh'><h5 className='nvitem1'>Float your boAt</h5></Dropdown.Item>
      <Dropdown.Item href="#/action-4" className='nvitemh'><h5 className='nvitem1'>Meet the boAtheads</h5></Dropdown.Item>
      <Dropdown.Item href="#/action-4" className='nvitemh'><h5 className='nvitem1'>Earn Rs.100</h5></Dropdown.Item>

    </Dropdown.Menu>
  </Dropdown>
    </Nav>
  </Container>
  


 

    <input   type="text" placeholder="    Search..." className='search'></input>


  
  {/* <button type="submit" className='mglass'><FontAwesomeIcon icon={faMagnifyingGlass} /></button> */}


  <div >
     <Nav.Link type="submit"  className='giftcard'  as={Link} to="/gift-cards"><FontAwesomeIcon icon={faGift} /></Nav.Link>
     <span className='spn' >Gift Cards</span>
  </div>
 
  
<div >
<Nav.Link type="submit"  className='user'  ><FontAwesomeIcon icon={faUser} /></Nav.Link>

<Dropdown>


  {isAuth?
  <>
    <Dropdown.Toggle  variant="dark"  className='drptog1'>
        {isUsername}
    </Dropdown.Toggle>
  </>
  :
  <>
  <Dropdown.Toggle  variant="dark"  className='drptog1'>
      My Profile
    </Dropdown.Toggle>
  </>  
  }

    <Dropdown.Menu  className='dropmenu' >
      <h5 className='boathead'>Hi boAthead!</h5>
 
 
  {isAuth?
  <>
 <Dropdown.Item  className='nvitemh' ><button className='butn' onClick={hndleLogout}>LOG OUT</button></Dropdown.Item>
 </>
 :
 <>
 <Dropdown.Item  className='nvitemh'  as={Link} to="/registration"><h5 className='nvitem1'>Registration</h5></Dropdown.Item>
 <Dropdown.Item className='nvitemh'  as={Link} to="/login"><h5 className='nvitem1'>Log in</h5></Dropdown.Item>
 </>
  }
     
      
    </Dropdown.Menu>
    </Dropdown>

{/* <span className='spn' >My Profile</span> */}
</div>
  
  <div >
  <Nav.Link type="submit"  className='cart'><FontAwesomeIcon icon={faCartPlus} /></Nav.Link>
  <span className='spn' >Cart</span>
  </div>

  

  

  </Navbar>

  
 
</>
    </>
  )
}
