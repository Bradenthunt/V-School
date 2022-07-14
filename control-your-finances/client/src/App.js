import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header'
import Advice from './components/pages/Advice'
import Expenses from './components/pages/Expenses'
import Income from './components/pages/Income'
import Overview from './components/pages/Overview'

export default function App() {

  const linkStyling = {
    textDecoration: 'none', 
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div className="app">
      <Header />
      
      <nav>
        <Link to="/" style={linkStyling}>
          Overview
        </Link>
        <Link to="/expenses" style={linkStyling}>
          Expenses
        </Link>
        <Link to="/income" style={linkStyling}>
          Income
        </Link>
        <Link to="/advice" style={linkStyling}>
          Advice
        </Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/income" element={<Income />} />
          <Route path="/advice" element={<Advice />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}