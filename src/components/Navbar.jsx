import React from 'react'
import { Link } from "react-router-dom"
import { NavList } from '../views/styles'

function Navbar() {
  return (
    <NavList>
      <ul>
        <li><Link to="general">Home</Link></li>
      </ul>
      <ul>
        <li><Link to="business">Business</Link></li>
        <li><Link to="entertainment">Entertainment</Link></li>
        <li><Link to="health">Health</Link></li>
        <li><Link to="science">Science</Link></li>
        <li><Link to="sports">Sports</Link></li>
        <li><Link to="technology">Technology</Link></li>
      </ul>
    </NavList>
  )
}

export default Navbar
