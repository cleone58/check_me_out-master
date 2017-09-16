import React from 'react'


export default (props) => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="single-page-nav sticky-wrapper" id="tmNavbar">
          <ul className="nav navbar-nav">
            <li><a href="#section1">Homepage</a></li>
            <li><a href="#section2">Projects</a></li>
            <li><a href="#section3">About Me</a></li>
            <li><a href="#section4">Contact</a></li>
            <li><a href="https://github.com/cleone58" className="external" target="_blank">Github</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
