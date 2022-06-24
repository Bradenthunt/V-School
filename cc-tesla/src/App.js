import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Battery from "./pages/Battery"
import Climate from "./pages/Climate"
import Controls from "./pages/Controls"
import Home from "./pages/Home"

export default function App() {

  return (
    <div className="App">
      <Header />
      
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/controls">
          Controls
        </Link>
        <Link to="/climate">
          Climate
        </Link>
        <Link to="/battery">
          Battery
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/controls" element={<Controls />} />
          <Route path="/climate" element={<Climate />} />
          <Route path="/battery" element={<Battery />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}