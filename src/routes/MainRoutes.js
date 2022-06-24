import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from '../component/Layout/Footer'
import Header from '../component/Layout/Header'
import HomePage from '../pages/HomePage'
import PropertyListPage from '../pages/PropertyListPage'
import PropertyDetails from '../pages/PropertyDetails'
import Payment from '../component/user/payment/Payment'
import BecomeHost from '../pages/BecomeHost'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import Privacy from '../pages/Privacy'
import Terms from '../pages/Terms'
import Favourites from '../component/user/favourites/Favourites'
import Wishlist from '../component/user/whishlist/Wishlist'
import Message from '../component/user/message/Message'
import CreateYourListing from '../component/create-your-listing/CreateYourListing'

const MainRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/propery-list" element={<PropertyListPage />} />
        <Route path="/propery-details" element={<PropertyDetails />} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/become-host" element={<BecomeHost/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/privacy-policy" element={<Privacy/>} />
        <Route path="/terms-of-service" element={<Terms/>} />
        <Route path="/favourites" element={<Favourites/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/message" element={<Message/>} />
        <Route path="/create-your-listing" element={<CreateYourListing/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default MainRoutes;
