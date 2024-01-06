import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"
import { ParentList } from '../views/styles'

function Navbar() {
  return (
    <ParentList>
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
    </ParentList>
  )
}

export default Navbar
