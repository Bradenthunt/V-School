import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Battery from "./pages/Battery"
import Climate from "./pages/Climate"
import Controls from "./pages/Controls"
import Overview from "./pages/Overview"
import SignIn from "./pages/SignIn"

export default function App() {

  const linkStyling = {
    textDecoration: 'none', 
    color: 'maroon',
    fontWeight: 'bold'
  }

  return (
    <div className="App">
      <Header />
      
      <nav>
        <Link to="/" style={linkStyling}>
          Sign In
        </Link>
        <Link to="/overview" style={linkStyling}>
          Overview
        </Link>
        <Link to="/controls" style={linkStyling}>
          Controls
        </Link>
        <Link to="/climate" style={linkStyling}>
          Climate
        </Link>
        <Link to="/battery" style={linkStyling}>
          Battery
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/controls" element={<Controls />} />
          <Route path="/climate" element={<Climate />} />
          <Route path="/battery" element={<Battery />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}