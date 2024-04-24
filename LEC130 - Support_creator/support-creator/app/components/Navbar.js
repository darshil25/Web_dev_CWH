'use client'

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import CBbutton from '../reusable/CB_button'

const Navbar = () => {

  const { data: session } = useSession()
  
  return (
    
    <nav className='bg-black text-white flex justify-between px-4 h-16 items-center'>
      <div className='logo font-bold text-lg'>Support Creator</div>
      {/* <ul className='flex gap-8 justify-between'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}

      <div>
        <Link href={'/login'}>
          <CBbutton text={'Login'} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar