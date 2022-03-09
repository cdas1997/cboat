import React from 'react'
import { useParams,Link } from 'react-router-dom'
import ShopData from '../Shop.json'
import {Card,Button,Nav} from 'react-bootstrap'
import './Products_Sub_Catagory.scss'


export default function Products_Sub_Catagory() {

  
    const val=useParams();
    console.log("params value for sub topic",val);
    const topic_data=ShopData.ShopProducts.find((top1)=>top1.catagory===val.pid);
    console.log("topic data",topic_data);
    return (
        <>
          <div className="Dcontainer" >
            <div className='naviga'>
            <Nav.Link className='pagepath2' as={Link} to="/">Home</Nav.Link> 
            
            <h5 className='pagepath1'>/ {topic_data.catagory}</h5>
            </div>
            {
                    topic_data.sub_catagory.map((top)=>

                    <Card className='div1' key={top.sub_catagory_id} style={{ width: '25rem' }}>
  <Card.Img className='Dimg' variant="top" src={top.sub_image1} />
  <Card.Body>
    <Card.Title ><Link to={`/shopproductdetails/${val.pid}/${top.sub_name}`} className='Dlink'>{top.sub_name} </Link></Card.Title>
    <Card.Text>
      Price: {top.sub_price}
      <br />
     Product_id: {top.sub_catagory_id}
    </Card.Text>
    
    <Button variant="dark" className='Dbutn'><Link to={`/shopproductdetails/${val.pid}/${top.sub_name}`} className='Dlink1'>ADD TO CART</Link></Button>
    <Button variant="dark" className='Dbutn'><Link to={`/shopproductdetails/${val.pid}/${top.sub_name}`} className='Dlink1'>DETAILS</Link></Button>
  </Card.Body>
           </Card>
                    )
                    
                }
          
          
            </div>
        </>
    )
}
