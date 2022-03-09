import React,{useState} from 'react'
import { Dropdown} from 'react-bootstrap'
import './Hedaer.scss'
import { Link } from 'react-router-dom';
import {Navbar,Container,Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGift,faUser,faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Search_Result from '../../Search_Result/Search_Result';

export default function Header() {


  const [filter,setFilter]=useState("");
  const inputEvent=(event)=>{
      const data5=event.target.value;
      console.log(data5);
      setFilter(data5);

  };
  

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
         
     <div className="announcement">
            <Nav.Link as ={Link} to='/SunburnProducts'> 
            <div className="announcement__inner">
              <b>10% OFF upto Rs.500 using Pay with Rewards</b>
            </div>
            </Nav.Link>
      </div>

    <>
  
  
  <Navbar className='nvbr'>
  <Container >
    <Navbar.Brand as ={Link} to="/" className='logo'>
      <img
        src="../../../images/boat.png"
        width="90"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        id='logoimg'
      />
    </Navbar.Brand>

    <Nav className="me-auto" >


   
<Nav.Link as={Link} to="/shopproduct" className={`${loc.pathname==="/shopproduct"?"active1":" "}`}><h5 className='nvitem'>Shop</h5></Nav.Link>
<span class="vertical-separator"></span>
      <Nav.Link as={Link} to="/SunburnProducts" className={`${loc.pathname==="/SunburnProducts"?"active1":" "}`}><h5 className='nvitem'>boAt x Sunburn</h5></Nav.Link>
      <span className="vertical-separator"></span>
      <Nav.Link as={Link} to="/DailyDeals"  className={`${loc.pathname==="/DailyDeals"?"active1":" "}`}><h5 className='nvitem'>Daily deals</h5></Nav.Link>
      <span className="vertical-separator"></span>
      
      <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark"  className='drptog'>
      More
    </Dropdown.Toggle>

    <Dropdown.Menu  className='dropmenu'>
    <Dropdown.Item href="/RockInIndia" className='nvitemh'><h5 className='nvitem1'>Rock in India</h5></Dropdown.Item>
    <Dropdown.Item href="/boathead" className='nvitemh'><h5 className='nvitem1'>Meet the boAtheads</h5></Dropdown.Item>
      <Dropdown.Item href="/contact" className='nvitemh'><h5 className='nvitem1'>Contact Us</h5></Dropdown.Item>
      <Dropdown.Item href="/about" className='nvitemh'><h5 className='nvitem1'>About boAt</h5></Dropdown.Item>
      <Dropdown.Item href="/Earn" className='nvitemh'><h5 className='nvitem1'>Earn Rs.100</h5></Dropdown.Item>
    
      

    </Dropdown.Menu>
  </Dropdown>
    </Nav>
  </Container>
  



  <Dropdown >
  <Dropdown.Toggle   variant='dark' className='drptogsearch'>
  <div className='search'> 
  <input   type="text" placeholder="    Search..." className='search1' value={filter}
                    onChange={inputEvent}>

  </input>
  {filter ==="" ? null : <Search_Result nam={filter}/> }
 
</div>
    </Dropdown.Toggle>

    <Dropdown.Menu  className='dropmenu1'>
     
      <Dropdown.Item as={Link} to='/shopproduct/Wireless Earbuds' className='nvitemhs'><h5 className='nvitem1s'>Wireless Earbuds</h5></Dropdown.Item>
      <Dropdown.Item as={Link} to='/shopproduct/Home Audio' className='nvitemhs'><h5 className='nvitem1s'>Home Audio</h5></Dropdown.Item>
      <Dropdown.Item as={Link} to='/shopproduct/Wireless Headphones' className='nvitemhs'><h5 className='nvitem1s'>Wireless Headphones</h5></Dropdown.Item>
      <Dropdown.Item as={Link} to='/shopproduct/Smart Watches' className='nvitemhs'><h5 className='nvitem1s'>Smart Watches</h5></Dropdown.Item>
      <Dropdown.Item as={Link} to='/shopproduct/Wireless Speakers' className='nvitemhs'><h5 className='nvitem1s'>Wireless Speakers</h5></Dropdown.Item>
      <Dropdown.Item as={Link} to='/shopproduct/Mobile Accessories' className='nvitemhs'><h5 className='nvitem1s'>Mobile Accessories</h5></Dropdown.Item>
      <Dropdown.Item as={Link} to='/shopproduct/Wired Earphones' className='nvitemhs'><h5 className='nvitem1s'>Wired Earphones</h5></Dropdown.Item>
    

    </Dropdown.Menu>
    </Dropdown>
  


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
 <Dropdown.Item className='nvitemh'  as={Link} to="/login"><h5 className='nvitem1'>Log in</h5></Dropdown.Item>
 <Dropdown.Item  className='nvitemh'  as={Link} to="/registration"><h5 className='nvitem1'>Create Account</h5></Dropdown.Item>
 
 </>
  }
     
      
    </Dropdown.Menu>
    </Dropdown>


</div>
  
  <div >
  <Nav.Link type="submit"  className='cart'  as={Link} to="/cart"><FontAwesomeIcon icon={faCartPlus} /></Nav.Link>
  <span className='spn' >Cart</span>
  </div>

  

  

  </Navbar>

  
 
</>
    </>
  )
}
