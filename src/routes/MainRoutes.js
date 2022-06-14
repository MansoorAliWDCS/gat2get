import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from '../component/Layout/Footer'
import Header from '../component/Layout/Header'
import HomePage from '../pages/HomePage'
import PropertyListPage from '../pages/PropertyListPage'
import PropertyDetails from '../pages/PropertyDetails'

const MainRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/propery-list" element={<PropertyListPage />} />
        <Route path="/propery-details" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default MainRoutes;
