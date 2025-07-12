import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light p-3 mb-4'>
            <div className='container'>
                <Link className='navbar-brand fw-bold' to='/'>Fit Goal 🏋️‍♂️</Link>
                <div>
                    <Link className='nav-link d-inline' to='/'>Home</Link>
                    <Link className="nav-link d-inline mx-3" to="/dashboard">Dashboard</Link>
                    <Link className="nav-link d-inline" to="/progress">Progress</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar