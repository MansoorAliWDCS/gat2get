import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from '../component/Layout/Footer'
import Header from '../component/Layout/Header'
import HomePage from '../pages/HomePage'
import PropertyListPage from '../pages/PropertyListPage'
import PropertyDetails from '../pages/PropertyDetails'
import Payment from '../pages/Payment'
import BecomeHost from '../pages/BecomeHost'
import GoToTop from '../GoToTop'

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
      </Routes>
      <Footer />
    </Router>
  )
}

export default MainRoutes;
