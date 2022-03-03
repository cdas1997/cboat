import React,{useState} from 'react'
import ProductData from '../Product.json'
import './DailyDealsProduct.scss'
import {Card,Button,Pagination} from 'react-bootstrap'
import {Link} from 'react-router-dom'





export default function DailyDealsProducts() {


  let active = 1;
  let items = [];
  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  

const [noOfElement,setnoOfElement]=useState(3);
const slice=ProductData.Product.slice(0,noOfElement);

const loadMore=()=>{
  setnoOfElement(noOfElement +3);
}
    
    return (
       
        <div className="Dcontainer" >
            
            <div className='naviga'>
            <a className='pagepath2' href="/">Home</a> 
            <h5 className='pagepath1'>/Daily Deals</h5>
            </div>
            
          
            {
                    slice.map((prod,index)=>
                    <Card className='div1' key={prod.P_id} style={{ width: '25rem' }}>
  <Card.Img className='Dimg' variant="top" src={prod.P_Image} />
  <Card.Body>
    <Card.Title ><Link to={`/sub_catagory/${prod.P_id}`} className='Dlink'>{prod.P_name} </Link></Card.Title>
    <Card.Text>
      Price: {prod.P_price}
    </Card.Text>
    
    <Button variant="dark" className='Dbutn'><Link to={`/ProductDetails/${prod.P_id}`} className='Dlink'>ADD TO CART</Link></Button>
    <Button variant="dark" className='Dbutn' ><Link to={`/ProductDetails/${prod.P_id}`} className='Dlink'>DETAILS</Link></Button>
  </Card.Body>
           </Card>
                    )
                    
                }
                       
  <div>
    <Pagination className='pagination1'><button className='pagination' onClick={()=>loadMore()}>{items}</button></Pagination>
    
  </div>


        </div>
 )
}
