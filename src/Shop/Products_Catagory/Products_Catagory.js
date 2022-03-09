import React from 'react'
import ShopData from '../Shop.json'
import './Products_Catagory.scss'
import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'

export default function Products_Catagory() {
    return (
        <>
        <div className='shop'>
        <div className="row" id="shopitem">{
        ShopData.ShopProducts.map((top)=>

<div className="col-12 col-lg-3">
<ul key={top.catagory_id} class=" drop-items" >
<li   >
<Navbar.Brand as ={Link} to={`/shopproduct/${top.catagory}`} >
  <div><img src={top.img} alt="Stone Speakers" className='shopimg'   /></div>
  {/* <div><h5><Link to={`/shopproduct/${top.catagory_id}`} className='link1'>{top.catagory}</Link></h5> </div> */}
  </Navbar.Brand>      
          
           
       
    

     
   </li>
   </ul>
 </div>
        )}
 </div>
 </div>
        </>
    )
}



// <div className='topic' >
// <h2 className='topi'>Topics</h2>
//   {
//       ShopData.ShopProducts.map((top)=>
      
          
             
       
//       )
//   }
//   </div>