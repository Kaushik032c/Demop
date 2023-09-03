import React from 'react'
import logo from '../logo.svg';
export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
            {props.appName}
          </a>
        </div>
      </nav>
    </div>
  )
}
