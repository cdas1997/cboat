import React from 'react'
import ShopData from '../Shop.json'
// import './WirelessEarbuds.scss'
import {Link} from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
export default function SmartWatchesDetails() {

    const value=useParams();
    console.log("useParams value",value);
    const data=ShopData.ShopProducts[2];
    console.log("data is",data);
    let data1=data.sub_catagory.find((prod)=>prod.sub_catagory_id===value.pid);
    console.log("passed value1",data1);


   
    
    return (
        <>
          <div className="Dcontainer" >
            <div className='naviga'>
            <a className='pagepath2' href="/">Home</a> 
            <h5 className='pagepath1'>/{data1.sub_name} </h5>
            </div>



            
            
                   
            {
                   
                <Card className='div23' key={data1.sub_catagory_id} style={{ width: '25rem' }}>
<Card.Img className='Dimg' variant="top" src={data1.sub_image1} />
<Card.Body>
<Card.Title ><Link to={`/SunburnProductsdetails/${data1.sub_catagory_id}`} className='Dlink'>{data1.sub_name} </Link></Card.Title>
<Card.Text>
    <div>
    Price: {data1.sub_price}
    </div>
    <div className='Ddescription'>
        {data1.sub_description}
    </div>
 
</Card.Text>

<Button variant="dark" className='Dbutn'><Link to={`/sub_catagory/${data1.sub_catagory_id}`} className='Dlink'>ADD TO CART</Link></Button>
<Button variant="dark" className='Dbutn'><Link to={`/SunburnProductsdetails/${data1.sub_catagory_id}`} className='Dlink'>BUY NOW</Link></Button>
</Card.Body>
       </Card>
                
                
            }
                   
          
          
            </div>
        </>
    )
}
