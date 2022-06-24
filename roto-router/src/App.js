import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Footer from "./Footer.js";
import About from "./pages/About.js";
import Home from './pages/Home.js'
import Services from "./pages/Services.js";

export default function App() {
  return (
    <div>
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/services">
          Services
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </div>
  )
}
