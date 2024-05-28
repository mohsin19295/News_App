import React from 'react'
import { Link } from "react-router-dom"
import { Nav, Ul } from '../assets/styles'

function Navbar() {
  return (
    <Nav>
      <Ul>
        <Link to="general">Home</Link>
      </Ul>
      <Ul>
        <Link to="business">Business</Link>
        <Link to="entertainment">Entertainment</Link>
        <Link to="health">Health</Link>
        <Link to="science">Science</Link>
        <Link to="sports">Sports</Link>
        <Link to="technology">Technology</Link>
      </Ul>
    </Nav>
  )
}

export default Navbar
