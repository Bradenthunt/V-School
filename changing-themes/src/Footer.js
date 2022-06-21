import React, { useContext } from 'react'
import { ThemeContext } from './themeContext'

export default function Footer() {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={`footer ${theme}`}>
            <h5 className='footer'>Copyrighted by Ohota Dev</h5>
        </div>
    )
}