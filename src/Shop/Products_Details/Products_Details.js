import React from 'react'
import { useParams } from 'react-router-dom'
import ShopData from '../Shop.json'
import {Card} from 'react-bootstrap'
import './Products_Details.scss'
import {Link} from 'react-router-dom'
import { Nav,Button } from 'react-bootstrap'


export default function Details() {
    const val=useParams();
    console.log("params value for details",val);
    const topic_data=ShopData.ShopProducts.find((top)=>top.catagory===val.pid);
    console.log("topic data",topic_data);
    const topic_data1=topic_data.sub_catagory.find((top1)=>top1.sub_name===val.sid);
    console.log("topic data1",topic_data1);

    return (
      <>
        <div className="Dcontainer" >
          <div className='naviga'>
          <Nav.Link className='pagepath2' as={Link} to="/">Home</Nav.Link> 
          <h5 className='pagepath1'>/ {topic_data1.sub_name} </h5>
          </div>



          
          
                 
          {
                 
              <Card className='div23' key={topic_data1.sub_catagory_id} style={{ width: '25rem' }}>
<Card.Img className='Dimg' variant="top" src={topic_data1.sub_image1} />
<Card.Body>
<Card.Title ><Link to={`/shopproductdetails/${topic_data1.sub_catagory_id}`} className='Dlink'>{topic_data1.sub_name} </Link></Card.Title>
<Card.Text>
  <div>
  Price: {topic_data1.sub_price}
  <br />
  Product_id: {topic_data1.sub_catagory_id}
  </div>
  <div className='Ddescription'>
      {topic_data1.sub_description}
      
   
  </div>

</Card.Text>

<Button variant="dark" className='Dbutn' disabled><Link to={`/shopproductdetails/${topic_data1.sub_catagory_id}`} className='Dlink1'>ADD TO CART</Link></Button>
<Button variant="dark" className='Dbutn' disabled><Link to={`/shopproductdetails/${topic_data1.sub_catagory_id}`} className='Dlink1'>BUY NOW</Link></Button>
</Card.Body>
     </Card>
              
              
          }
                 
        
        
          </div>
      </>
  )
}
