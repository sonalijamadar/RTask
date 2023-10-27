import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <div className="d-flex flex-row justify-content-center footer">
      <div className="d-flex flex-column innerFooter ">
        <div className="p-2">
          <img alt="headerLogo" className="footerLogo" src="Assets\headerLogo.png" />
        </div>
        <div className="p-2">
          <p>+1 209 684 8664. M-W 12 - 6pm, TH-F 12 - 2pm</p>
        </div>
        <div className="p-2">
          <nav className="footerNav">
            <ul className="footerNav">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/menu">menu</Link>
              </li>
              <li>
                <Link to="/services">services</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer