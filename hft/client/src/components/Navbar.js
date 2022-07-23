import React from "react";
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const {logout} = props

    return (
        <div className="navbar">
            <Link to='/profile'>Profile</Link>
            <Link to='/workout'>Workout</Link>
            <Link to='/community'>Community</Link>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default Navbar