import React, { useEffect } from 'react'
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  useEffect(() => {
    initMDB({ Dropdown, Collapse });
  }, [])
  

  return (
    <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        data-mdb-collapse-init=""
        className="navbar-toggler"
        type="button"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
        {/* <a className="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height={15}
            alt="MBD Logo"
            loading="lazy"
          />
          Handmade Wonders
        </a> */}
       
        <div
       style={{
        textAlign: "center",
        fontFamily: '"cursive"',
        fontSize: 24,
        color: "#336699"
       }}
        >
      Handmade <span style={{ fontSize: 24, color: "#FF6600" }}>Wonders</span>
      </div>



        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink className="nav-link" href="#" to={"/login"}>
          Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#" to={"/signup"}>
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#" to={"/managehandicraft"}>
              Manage Handicraft
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#" to={"/listhandicraft"}>
             Handicraft List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#" to={"/addhandicraft"}>
             Add Handicraft
            </NavLink>
          </li>
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}
      <div className="d-flex align-items-center">
        {/* Icon */}
        <a className="text-reset me-3" href="#">
          <i className="fas fa-shopping-cart" />
        </a>
        {/* Notifications */}
        <div className="dropdown">
          <a
            data-mdb-dropdown-init=""
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            aria-expanded="false"
          >
            <i className="fas fa-bell" />
            <span className="badge rounded-pill badge-notification bg-danger">
              1
            </span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">
                Some news
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another news
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        {/* Avatar */}
        <div className="dropdown">
          <a
            data-mdb-dropdown-init=""
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            aria-expanded="false"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              height={25}
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a className="dropdown-item" href="#">
                My profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Right elements */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

  )
}


export default Navbar