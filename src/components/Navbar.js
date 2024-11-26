import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-md bg-${props.toggleMode} custom`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "80px" }}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/contactus'>Contact Us</Link>
            </li>
          </ul>
          <div className='d-flex'>
            <div className="bg-primary mx-2 rounded" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px'}}></div>
            <div className="bg-warning mx-2 rounded" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px'}}></div>
            <div className="bg-danger mx-2 rounded" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px'}}></div>
            <div className="bg-success mx-2 rounded" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px'}}></div>
            <div className="bg-dark mx-2 rounded btn" disabled onClick={()=>{props.toggleMode('dark')}} style={{height:'30px',width:'30px'}}></div>
            <div className="bg-light mx-2 rounded" onClick={()=>{props.toggleMode('light')}} style={{height:'30px',width:'30px'}}></div>
          </div>
          {/* <label className="switch">
            <input type="checkbox" onClick={()=>{props.toggleMode(null)}} />
            <span className="slider"></span>
          </label> */}
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set title here"
}