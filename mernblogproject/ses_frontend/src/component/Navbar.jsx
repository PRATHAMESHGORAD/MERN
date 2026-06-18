import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark"
    >
        <div
            className="container"
        >
            <NavLink className="navbar-brand" to="/">Blog app</NavLink>
        <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/" aria-current="page"
                        >Home <span className="visually-hidden">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/add">add blog</NavLink>
                </li>
                
            </ul>
            
        </div>
        </div>
        
    </nav>
    
    </>
  )
}

export default Navbar
