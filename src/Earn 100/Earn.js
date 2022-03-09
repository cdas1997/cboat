import React from 'react'
import './Earn.scss'

function Earn() {
  return (
    <>
    
            <div className="row" id='earn100'>

            <div className="col-6 col-lg-6">
            <img src="../../../../Images/earn2.png" alt="earn100" className='earn2'/>
           </div>
           
           <div className="col-6 col-lg-6">
           <img src="../../../../Images/earn1.png" alt="earn100" className='earn1'/>
                </div>

            </div>

            <div className='earn3'>
                <div className='earn4'>
                <button className='earnbtn'><a className='earna' href="/login">EARN 100  </a></button>
                    <div className='earn5'>
                        
                        <p>The referral program is open to only existing boAt Lifestyle users who have placed an order through the website or app before.
                            <br />
                            Over 65000 boAtheads have earned over 80 lac rupees with the boAt Referral Program. Refer now.
                        </p>
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default Earn