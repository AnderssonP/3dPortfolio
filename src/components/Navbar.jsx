import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>PA</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium blue-gradient_text'>
            <NavLink to="/about" className={({isActive }) => isActive ? "text-black font-bold" : ""}>
            About
            </NavLink>
            <NavLink to="/projects" className={({isActive }) => isActive ? "text-black font-bold" : ""}>
            Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar