import React from 'react'
import {NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    // <div className='container'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">React CRUD</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
             <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>

              <li className="nav-item">
             <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>      
              </li>

              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <NavLink className='btn btn-warning w-20' to="/user/add">Add New User</NavLink>
        </div>
      </nav>
    //   </div>
  )
}

export default Navbar