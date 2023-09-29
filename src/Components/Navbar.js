import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" style={{ fontSize: "14px" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-1">
                <Link className="nav-link" aria-current="page" to="/culturalartifacts">CULTURAL ARTIFACTS</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/publicblog">PUBLIC BLOG & EXPERIENCES</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/cultureofindia">CULTURE OF INDIA</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/goanCulture">GOAN CULTURE</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/eventsCalender">EVENT CALENDER</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/login&signup">LOGIN & SIGNUP</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
