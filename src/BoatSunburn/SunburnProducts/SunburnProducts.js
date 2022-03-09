import React,{useState} from 'react'
import SunData from '../Sunburn.json'
import './SunburnProducts.scss'
import {Card,Button,Nav,Pagination} from 'react-bootstrap'
import {Link} from 'react-router-dom'





export default function SunburnProducts() {
  

  const addItem=()=>{
    alert("Item Added to the Cart");
  }
  

const [noOfElement,setnoOfElement]=useState(3);
const slice=SunData.ProductSun.slice(0,noOfElement);

const loadMore=()=>{
  setnoOfElement(noOfElement +3);
}
    
    return (
       
        <div className="Dcontainer" >
            
            <div className='naviga'>
            <Nav.Link className='pagepath2' as={Link} to="/">Home</Nav.Link> 
            <h5 className='pagepath1'>/ Sunburn</h5>
            </div>
            
          
            {
                   slice.map((prod,index)=>
                    <Card className='div1' key={prod.P_id} style={{ width: '25rem' }}>
  <Card.Img className='Dimg' variant="top" src={prod.P_Image} />
  <Card.Body>
    <Card.Title ><Link to={`/SunburnProductsdetails/${prod.P_id}`} className='Dlink'>{prod.P_name} </Link></Card.Title>
    <Card.Text>
      Price: {prod.P_price}
    </Card.Text>
    
    <Button variant="dark" className='Dbutn' ><Link to={`/SunburnProductsdetails/${prod.P_id}`} className='Dlink1'>ADD TO CART</Link></Button>
    <Button variant="dark" className='Dbutn'><Link to={`/SunburnProductsdetails/${prod.P_id}`} className='Dlink1'>DETAILS</Link></Button>
  </Card.Body>
           </Card>
                    )
                    
                }
                                     
  <div>
    <Pagination className='pagination1'><button className='pagination' onClick={()=>loadMore()}>Load More Products</button></Pagination>
    
  </div>
        </div>
 )
}
