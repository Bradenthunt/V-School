import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    const {logout} = props

    const link = {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div className="navbar">
            <Link style ={link} to='/profile'>Profile</Link>
            <Link style ={link} to='/public'>Public</Link>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}