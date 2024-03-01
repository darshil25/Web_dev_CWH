import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-[#CBC6BA] text-[#32312D] py-2'>
      <div className="logo">
        <span className="font-bold text-xl mx-8">TaskTracer</span>
      </div>
      <ul className="flex gap-8 mx-8">
        <li className="cursor-pointer hover:font-bold transition-all duration-100"><a target="_blank" href="https://github.com/darshil25">My GitHub</a></li>
        <li className='cursor-pointer hover:font-bold transition-all duration-100'><a target="_blank" href="https://www.linkedin.com/in/darshilt/">Linkedln</a></li>
      </ul>
    </nav>
  )
}

export default Navbar