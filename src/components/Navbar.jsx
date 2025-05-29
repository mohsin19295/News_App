import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Nav, Ul, Hamburger, Bar, MobileMenu } from '../assets/styles';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <Nav>
      <Ul>
        <NavLink to="general" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</NavLink>
      </Ul>

      <Hamburger onClick={toggleMenu} className={isOpen ? 'is-active' : ''}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>

      <MobileMenu isOpen={isOpen}>
        <NavLink onClick={toggleMenu} to="business" className={({ isActive }) => isActive ? 'active' : ''}>Business</NavLink>
        <NavLink onClick={toggleMenu} to="entertainment" className={({ isActive }) => isActive ? 'active' : ''}>Entertainment</NavLink>
        <NavLink onClick={toggleMenu} to="health" className={({ isActive }) => isActive ? 'active' : ''}>Health</NavLink>
        <NavLink onClick={toggleMenu} to="science" className={({ isActive }) => isActive ? 'active' : ''}>Science</NavLink>
        <NavLink onClick={toggleMenu} to="sports" className={({ isActive }) => isActive ? 'active' : ''}>Sports</NavLink>
        <NavLink onClick={toggleMenu} to="technology" className={({ isActive }) => isActive ? 'active' : ''}>Technology</NavLink>
      </MobileMenu>
    </Nav>
  );
}

export default Navbar;
