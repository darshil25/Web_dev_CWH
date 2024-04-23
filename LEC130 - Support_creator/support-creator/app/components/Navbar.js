import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-between px-4 h-16 items-center'>
      <div className='logo font-bold '>Support Creator</div>
      <ul className='flex gap-4 justify-between'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar