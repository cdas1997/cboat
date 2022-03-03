import React from 'react'
import ProductData from '../Product.json'
import { useParams } from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Productdetails.scss'



export default function Productdetails() {

  const value=useParams();
    console.log("useParams value",value);
    let data=ProductData.Product.find((prod)=>prod.P_id===value.pid);
    console.log("passed value",data);

  
   
    return (
       
        <div className="Dcontainer" >
            
            <div className='naviga'>
            <a className='pagepath2' href="/">Home</a> 
            <h5 className='pagepath1'>/{data.P_name}</h5>
            </div>
          
            {
                   
                    <Card className='div2' key={data.P_id} style={{ width: '25rem' }}>
  <Card.Img className='Dimg' variant="top" src={data.P_Image} />
  <Card.Body>
    <Card.Title ><Link to={`/sub_catagory/${data.P_id}`} className='Dlink'>{data.P_name} </Link></Card.Title>
    <div>
        Price: {data.P_price}
        </div>
        <div className='Ddescription'>
            {data.descripsion}
        </div>
    
    <Button variant="dark" className='Dbutn'><Link to={`/sub_catagory/${data.P_id}`} className='Dlink'>ADD TO CART</Link></Button>
    <Button variant="dark" className='Dbutn'><Link to={`/sub_catagory/${data.P_id}`} className='Dlink'>BUY NOW</Link></Button>
  </Card.Body>
           </Card>
                    
                    
                }
        </div>
 )
}
