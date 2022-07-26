import React from "react";
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const {logout} = props

    const link = {
        textDecoration: 'none',
        color: 'navy',
        fontWeight: 'bold'
    }

    return (
        <div className="navbar">
            <Link style={link} to='/profile'>Profile</Link>
            <Link style={link} to='/workout'>Workout</Link>
            <Link style={link} to='/community'>Community</Link>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default Navbar