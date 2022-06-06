import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from '../component/Layout/Footer'
import Header from '../component/Layout/Header'
import HomePage from '../pages/HomePage'

const MainRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default MainRoutes;
