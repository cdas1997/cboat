import React from 'react'
import SunData from '../Sunburn.json'
import './SunburnProducts.scss'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'





export default function SunburnProducts() {

    
    return (
       
        <div className="Dcontainer" >
            
            <div className='naviga'>
            <a className='pagepath2' href="/">Home</a> 
            <h5 className='pagepath1'>/Sunburn</h5>
            </div>
            
          
            {
                    SunData.ProductSun.map((prod)=>
                    <Card className='div1' key={prod.P_id} style={{ width: '25rem' }}>
  <Card.Img className='Dimg' variant="top" src={prod.P_Image} />
  <Card.Body>
    <Card.Title ><Link to={`/sub_catagory/${prod.P_id}`} className='Dlink'>{prod.P_name} </Link></Card.Title>
    <Card.Text>
      Price: {prod.P_price}
    </Card.Text>
    
    <Button variant="dark" className='Dbutn'><Link to={`/SunburnProductsdetails/${prod.P_id}`} className='Dlink'>ADD TO CART</Link></Button>
    <Button variant="dark" className='Dbutn'><Link to={`/SunburnProductsdetails/${prod.P_id}`} className='Dlink'>DETAILS</Link></Button>
  </Card.Body>
           </Card>
                    )
                    
                }
        </div>
 )
}
