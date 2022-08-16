import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div><>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Container wrapper */}
      <div className="container-fluid">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
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
          <NavLink className="navbar-brand mt-2 mt-lg-0" to="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height={15}
              alt="MDB Logo"
              loading="lazy"
            />
          </NavLink>
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Singup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addproduct">
                AddProduct
              </NavLink>
            </li>
          </ul>
          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}
        {/* Right elements */}
        <div className="d-flex align-items-center">
          {/* Icon */}
          <NavLink className="text-reset me-3" to="#">
            <i className="fas fa-shopping-cart" />
          </NavLink>
          {/* Notifications */}
          <div className="dropdown">
            <NavLink
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bell" />
              <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </NavLink>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <NavLink className="dropdown-item" to="#">
                  Some news
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Another news
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Something else here
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Avatar */}
          <div className="dropdown">
            <NavLink
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              to="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height={25}
                alt="Black and White Portrait of NavLink Man"
                loading="lazy"
              />
            </NavLink>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <NavLink className="dropdown-item" to="#">
                  My profile
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Logout
                </NavLink>
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
  </div>
  )
}

export default Header