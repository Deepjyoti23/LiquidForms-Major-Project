import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar2 = () => {
	return (
		<div>
        <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* Container wrapper */}
    <div className="container">
      {/* Navbar brand */}
      <a className="navbar-brand me-2" href="https://mdbgo.com/">
        <img
          src="/form.png"
          height={40}
          alt="Liquid Forms"
          loading="lazy"
          style={{ marginTop: "-1px" }}
        />
        <div>
          <h5 className='fw-bold d-block m-auto align-item-center liquid-font' style={{color:"rgb(3 4 110)"}}>Liquid Forms</h5>
        </div>
      </a>
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
            <NavLink className="nav-link" to="/user/UserProfile">
              UserProfile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/user/ManageForm">
              ManageForm
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/user/EditForm">
              EditForm
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/main/Live">
              LiveForm
            </NavLink>
          </li> */}
        </ul>
        {/* Left links */}
        <div className="d-flex align-items-center">
        <NavLink to="/main/login">

        <button type="button" className="btn btn-link px-3 me-2 fw-bold">
          Login
        </button>
          </NavLink>
            <NavLink to=" ">

          <button type="button" className="btn btn-lg fw-bold " style={{backgroundColor:"greenyellow"}}>
            <img className='pe-1' src="https://i.pinimg.com/564x/9d/08/cc/9d08cc2022b1d219c5cc54ac8d8ebe31.jpg"height={30} width={35} alt="" style={{borderRadius:"100px"}}/>
          {/* <i className="fas fa-plus-square  p-2  "></i> */}
            Create New Form
          </button>
            </NavLink>
          
        </div>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

    </div>
	  
	)
}

export default Navbar2