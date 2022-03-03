import React from 'react'
import ShopData from '../Shop.json'
// import './WirelessEarbuds.scss'
import {Link} from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'

export default function SmartWatches() {
    const data=ShopData.ShopProducts[2];
    console.log("data is",data);
    
    return (
        <>
          <div className="Dcontainer" >
            <div className='naviga'>
            <a className='pagepath2' href="/">Home</a> 
            <h5 className='pagepath1'>/SmartWatches</h5>
            </div>



            
            {
                    data.sub_catagory.map((top)=>
                    <Card className='div1' key={top.sub_catagory_id} style={{ width: '25rem' }}>
  <Card.Img className='Dimg' variant="top" src={top.sub_image1} />
  <Card.Body>
    <Card.Title ><Link to={`/sub_catagory/${top.sub_catagory_id}`} className='Dlink'>{top.sub_name} </Link></Card.Title>
    <Card.Text>
      Price: {top.sub_price}
    </Card.Text>
    
    <Button variant="dark" className='Dbutn'><Link to={`/SmartWatchesDetails/${top.sub_catagory_id}`} className='Dlink'>ADD TO CART</Link></Button>
    <Button variant="dark" className='Dbutn'><Link to={`/SmartWatchesDetails/${top.sub_catagory_id}`} className='Dlink'>DETAILS</Link></Button>
  </Card.Body>
           </Card>
                    )
                    
                }
          
          
            </div>
        </>
    )
}
