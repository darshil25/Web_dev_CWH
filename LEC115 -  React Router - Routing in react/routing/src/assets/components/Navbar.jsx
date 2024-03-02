import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
      <NavLink className={(e) => {return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
      <NavLink className={(e) => {return e.isActive?"red":""}} to="/details"><li>Details</li></NavLink>
      <NavLink className={(e) => {return e.isActive?"red":""}} to="/adress"><li>Adress</li></NavLink>
    </nav>
  )
}

export default Navbar