import React from 'react'
import SunData from '../Sunburn.json'
import { useParams } from 'react-router-dom'
import {Card,Button,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './SunburnProductsdetails.scss'



export default function SunburnProductsdetails() {

  const value=useParams();
    console.log("useParams value",value);
    let data=SunData.ProductSun.find((prod)=>prod.P_id===value.pid);
    console.log("passed value",data);

  
   
    return (
       
        <div className="Dcontainer" >
            <div className='naviga'>
            <Nav.Link className='pagepath2' as={Link} to="/">Home</Nav.Link> 
            <h5 className='pagepath1'>/ {data.P_name}</h5>
            </div>
            
            
          
            {
                   
                    <Card className='div23' key={data.P_id} style={{ width: '25rem' }}>
  <Card.Img className='Dimg' variant="top" src={data.P_Image} />
  <Card.Body>
    <Card.Title ><Link to={`/SunburnProductsdetails/${data.P_id}`} className='Dlink'>{data.P_name} </Link></Card.Title>
    <Card.Text>
        <div>
        Price: {data.P_price}
        </div>
        <div className='Ddescription'>
            {data.descripsion}
        </div>
     
    </Card.Text>
    
    <Button variant="dark" className='Dbutn' disabled><Link to={`/SunburnProductsdetails/${data.P_id}`} className='Dlink1'>ADD TO CART</Link></Button>
    <Button variant="dark" className='Dbutn' disabled><Link to={`/SunburnProductsdetails/${data.P_id}`} className='Dlink1'>BUY NOW</Link></Button>
  </Card.Body>
           </Card>
                    
                    
                }
        </div>
 )
}
