import React from 'react'

import ShopData from '../Shop/Shop.json'

import { Link } from 'react-router-dom'

import './Search_Result.scss'

export default function Search_Result(props) {

const data7=ShopData.ShopProducts.filter((prod)=>prod.catagory===props.nam);

console.log("props value",props.nam);
console.log("filtered data7",data7);
const data8=ShopData.ShopProducts;
console.log("data8",data8);
const data9=data8.catagory;
console.log("data9",data9);


    return (
        <>
        <div >
            
            {
           data7.map((dat)=>(
            
                   <h1 key={dat.catagory_id} className='searchresult'>
                
                 <Link to={`/shopproduct/${dat.catagory}`} className='linksearch'> {dat.catagory}</Link>

                    </h1>
                    
                    
           ))} 
                
        </div>

        </>
    )
}
