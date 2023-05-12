import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar3 = () => {
  return (
    <div>
        <div>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg nav-log-bg pt-4 pb-4"  >
    {/* Container wrapper */}
    <div className="container bg-white">
      {/* Navbar brand */}
      <div>

      <a className="navbar-brand me-2" href="https://mdbgo.com/">
        <img
          src="/form (1).png"
          height={50}
          alt="Liquid Forms"
          loading="lazy"
          style={{ marginTop: "-1px" }}
        />
       
        <div>
          <h5 className='d-block m-auto align-item-center liquid-font fw-bold' style={{color:"rgb(3 4 110)"}}>Liquid Forms</h5>
        </div>
      </a>
      </div>
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarButtonsExample">
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
        {/* Left links */}
        <div className="d-flex align-items-center">
            <NavLink to="/main/login">

          <button type="button" className="btn btn-link px-3 me-2 fw-bold">
            Login
          </button>
            </NavLink>
            <NavLink to="/main/sign">

          <button type="button" className="btn me-3 fw-bold text-white" style={{backgroundColor:"rgb(2 2 88)"}}>
            Sign up for free
          </button>
            </NavLink>
          
        </div>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</div>

    </div>
  )
}

export default Navbar3