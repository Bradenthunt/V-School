import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import { ThemeContext } from "./themeContext";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}
