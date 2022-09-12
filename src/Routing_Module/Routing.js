import React,{lazy,Suspense} from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Login from '../Authentications/Login/Login'
import Registration from '../Authentications/Register/Registration'
import DailyDealsProducts from '../BoatProducts/DailyDeals/DailyDealsProducts'
// import Productdetails from '../BoatProducts/ProductDetails/Productdetails'
// import SunburnProductsdetails from '../BoatSunburn/Sunburnproductdetails/SunburnProductsdetails'
import SunburnProducts from '../BoatSunburn/SunburnProducts/SunburnProducts'
import Home from '../Components/Home/Home'
import PNF from '../Components/PageNotFound/PNF'
import Earn from '../Earn 100/Earn'
import BulkOrder from '../BulkOrder/BulkOrder'
import GiftCard from '../Gift Cards/GiftCard'
import Footer from '../Page_layouts/Footer/Footer'
import Header from '../Page_layouts/Header/Header'
import RockInIndia from '../Rock In India/RockInIndia'
import Products_Catagory from '../Shop/Products_Catagory/Products_Catagory'
// import Products_Sub_Catagory from '../Shop/Products_Sub_Catagory/Products_Sub_Catagory'
// import Products_Details from '../Shop/Products_Details/Products_Details'
import BoatHead from '../BoatHead/BoatHead'
import About from '../Components/About/About'
import News from '../Components/News/News'
import Security from '../Components/Security/Security'
import Cart1 from '../Components/Cart/Cart1'
import ProtectedRouting from './ProtectedRouting'
import Contact from '../Components/Contact/Contact'

const Productdetails=lazy(()=>import('../BoatProducts/ProductDetails/Productdetails'));
const SunburnProductsdetails=lazy(()=>import('../BoatSunburn/Sunburnproductdetails/SunburnProductsdetails'));
const Products_Sub_Catagory=lazy(()=>import('../Shop/Products_Sub_Catagory/Products_Sub_Catagory'));

const Products_Details=lazy(()=>import('../Shop/Products_Details/Products_Details'));
// const Home=lazy(()=>import('../Components/Home/Home'));






 function Routing() {
    
    return (
        <>
            <Router>
               <Header />
               <Suspense fallback={<h1>Loading......</h1>}>
                 <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="home" element={<Home />} />

                      
                    <Route path="shopproduct" element={<Products_Catagory />} />
                    <Route path="shopproduct/:pid" element={<Products_Sub_Catagory />} />
                    <Route path="shopproductdetails/:pid/:sid" element={<Products_Details />} />
                   
                    <Route path="Dailydeals" element={<DailyDealsProducts />} />
                    <Route path="ProductDetails/:pid" element={<Productdetails />} />
             <Route element={<ProtectedRouting />}>
                    <Route path="gift-cards" element={<GiftCard />} />
                    <Route path="cart" element={<Cart1 />} />
                    <Route path="SunburnProducts" element={<SunburnProducts />} />
             </Route>
                    <Route path="SunburnProductsdetails/:pid" element={<SunburnProductsdetails />} />

                    <Route path="login" element={<Login />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="boathead" element={<BoatHead />} />
                    <Route path="contact" element={<Contact />} />
                    

                    <Route path="about" element={<About />} />
                    <Route path="news" element={<News />} />
                    <Route path="security" element={<Security />} />
                   
                    <Route path="RockInIndia" element={<RockInIndia />} />
                    <Route path="Earn" element={<Earn />} />
                    <Route path="BulkOrder" element={<BulkOrder />} />

                    <Route path="*" element={<PNF />} />
                </Routes>
                </Suspense>
                <Footer />
     
            </Router>
           
        </>
        
    )
}
export default Routing
