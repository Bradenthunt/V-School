import './App.css'
import React from 'react'
import BlogList from './BlogList'
import Footer from './Footer'
import Header from './Header'

export default function App() {
  return (
    <div>
        <Header />
        <BlogList />
        <Footer />
    </div>
  )
}