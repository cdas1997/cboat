import React from 'react'
import SunData from '../Sunburn.json'
import { useParams } from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
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
            <a className='pagepath2' href="/">Home</a> 
            <h5 className='pagepath1'>/{data.P_name}</h5>
            </div>
            
            
          
            {
                   
                    <Card className='div1' key={data.P_id} style={{ width: '25rem' }}>
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
    
    <Button variant="dark" className='Dbutn'><Link to={`/sub_catagory/${data.P_id}`} className='Dlink'>ADD TO CART</Link></Button>
    <Button variant="dark" className='Dbutn'><Link to={`/SunburnProductsdetails/${data.P_id}`} className='Dlink'>BUY NOW</Link></Button>
  </Card.Body>
           </Card>
                    
                    
                }
        </div>
 )
}
