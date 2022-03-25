import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
      <>
      <ul>
          <li><Link to="/">News_App</Link></li>
          <li><Link to="business">Business</Link></li>
          <li><Link to="entertainment">Entertainment</Link></li>
          <li><Link to="health">Health</Link></li>
          <li><Link to="science">Science</Link></li>
          <li><Link to="sports">Sports</Link></li>
          <li><Link to="technology">Technology</Link></li>
      </ul>
    </>
    )
}

export default Navbar
