import React from 'react'
import { NavLink } from "react-router-dom"
import { Nav, Ul } from '../assets/styles'

function Navbar() {
  return (
    <Nav>
      <Ul>
        <NavLink to="general">Home</NavLink>
      </Ul>
      <Ul>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="business">Business</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="entertainment">Entertainment</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="health">Health</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="science">Science</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="sports">Sports</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="technology">Technology</NavLink>
      </Ul>
    </Nav>
  )
}

export default Navbar
