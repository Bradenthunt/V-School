import React, { useContext } from 'react'
import { ThemeContext } from './themeContext'

export default function Main() {

    const {theme, selectTheme} = useContext(ThemeContext)

    return (
        <div className={`main ${theme}`}>
            <h1 className='title'>Select your theme!</h1>
            <select id="theme" className={`theme--menu ${theme}`} onChange={selectTheme}>
                <option value='light'>Light</option>
                <option value='dark'>Dark</option>
                <option value='funky'>Funky</option>
            </select>
            <h2 className='theme--text'>* You are currently enjoying the {theme} theme *</h2>
        </div>
    )
}