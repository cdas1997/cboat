import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Login from '../Authentications/Login/Login'

import Registration from '../Authentications/Register/Registration'
import DailyDealsProducts from '../BoatProducts/DailyDeals/DailyDealsProducts'
import Productdetails from '../BoatProducts/ProductDetails/Productdetails'
import SunburnProductsdetails from '../BoatSunburn/Sunburnproductdetails/SunburnProductsdetails'
import SunburnProducts from '../BoatSunburn/SunburnProducts/SunburnProducts'
import Home from '../Components/Home/Home'
import PNF from '../Components/PageNotFound/PNF'
import GiftCard from '../Gift Cards/GiftCard'
import Footer from '../Page_layouts/Footer/Footer'
import Header from '../Page_layouts/Header/Header'
import SmartWatches from '../Shop/Smart Watches/SmartWatches'
import SmartWatchesDetails from '../Shop/Smart Watches/SmartWatchesDetails'
import WiredEarphones from '../Shop/Wired Earphones/WiredEarphones'
import WiredEarphonesDetails from '../Shop/Wired Earphones/WiredEarphonesDetails'
import WirelessEarbuds from '../Shop/Wireless earbuds/WirelessEarbuds'
import WirelessEarbudsDetails from '../Shop/Wireless earbuds/WirelessEarbudsDetails'
import WirelessHeadphone from '../Shop/Wireless Headphones/WirelessHeadphone'
import WirelessHeadphoneDetails from '../Shop/Wireless Headphones/WirelessHeadphoneDetails'
import WirelessSpeakers from '../Shop/Wireless Speakers/WirelessSpeakers'
import WirelessSpeakersDetails from '../Shop/Wireless Speakers/WirelessSpeakersDetails'


 function Routing() {
    
    return (
        <>
            <Router>
               <Header />
                 <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="WirelessEarbuds" element={<WirelessEarbuds />} />
                    <Route path="WirelessEarbudsDetails/:pid" element={<WirelessEarbudsDetails/>} />

                    <Route path="WirelessHeadphones" element={<WirelessHeadphone />} />
                    <Route path="WirelessHeadphonesDetails/:pid" element={<WirelessHeadphoneDetails />} />
                    <Route path="SmartWatches" element={<SmartWatches />} />
                    <Route path="SmartWatchesDetails/:pid" element={<SmartWatchesDetails />} />
                    <Route path="WiredEarphones" element={<WiredEarphones />} />
                    <Route path="WiredEarphonesDetails/:pid" element={<WiredEarphonesDetails />} />
                    <Route path="WirelessSpeakers" element={<WirelessSpeakers />} />
                    <Route path="WirelessSpeakersDetails/:pid" element={<WirelessSpeakersDetails />} />


                    <Route path="Dailydeals" element={<DailyDealsProducts />} />
                    <Route path="ProductDetails/:pid" element={<Productdetails />} />
                    <Route path="SunburnProducts" element={<SunburnProducts />} />
                    <Route path="SunburnProductsdetails/:pid" element={<SunburnProductsdetails />} />

                    <Route path="login" element={<Login />} />
                    <Route path="registration" element={<Registration />} />
                 
                    <Route path="gift-cards" element={<GiftCard />} />

                    <Route path="*" element={<PNF />} />
                </Routes>
                <Footer />
            </Router>
           
        </>
        
    )
}
export default Routing
