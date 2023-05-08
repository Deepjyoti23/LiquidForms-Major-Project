import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="/form.png" alt="" height={40}/>
        <div>
          <h5 className='d-block m-auto align-item-center liquid-font' style={{color:"rgb(3 4 110)"}}>Liquid Forms</h5>
        </div>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/Sign">
              SignUp
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/Live">
              LiveForm
            </NavLink>
          </li>
        </ul>
        </div>
        <div className='d-flex justify-content-end'>
          <form className=" input-group w-auto">
            <input
              type="search"
              className="form-control rounded "
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search" />
            </span>
          </form>
        </div>
      </div>
    
  </nav>
  

	)
}

export default Navbar