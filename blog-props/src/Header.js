import React from 'react'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div className="header">
            <div className='overlay'>
                <Navbar />
                <div className="blog--title--pair">
                    <h1 className="blog--title">Clean Blog</h1>
                    <span className="blog--subtitle">A Blog Theme by Start Bootstrap</span>
                </div>
            </div>
        </div>
    )
}