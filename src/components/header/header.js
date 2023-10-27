import React from 'react';
import { Link } from 'react-router-dom';
import "../home/home.css";

function Header() {
  return (
    <>
      <header>
          <div className="mainHeader">
          <div className="contactDiv">
            <div className="igLogo">
              <img src="Assets/ig.png" alt="igLogo" />
            </div>
            <div className="contactInfo">
              Order online ||
              <span>
                <a
                  id="igLink"
                  href="https://www.instagram.com/peachysfoodtogollc/?hl=en"
                >
                  @peachysfoodtogollc
                </a>
              </span>
              || Send me a DM on Instagram
            </div>
          </div>
          <div className="centerHeader">
            <div className="logoDiv">
              <a href="index.html">
                <img className="logoPic" src="Assets/headerLogo.png" alt="logo pic" />
              </a>
            </div>
            <nav className="headerNav">
              <ul className="mainNav">
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
          <div className="doordashDiv">
            <div className="innerlogoDiv">
               <img src="Assets/logo.png" alt="doordash" />
            </div>
          </div>
        </div>
      </header>
    </>

  )
}

export default Header;