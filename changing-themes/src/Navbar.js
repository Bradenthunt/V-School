import React, { useContext } from 'react'
import { ThemeContext } from './themeContext'

export default function Navbar() {
    
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`navbar ${theme}`}>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>
        </div>
    )
}