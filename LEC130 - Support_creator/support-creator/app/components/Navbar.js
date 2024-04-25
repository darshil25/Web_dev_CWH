'use client'

import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import CBbutton from '../reusable/CB_button'
import { useRouter } from 'next/navigation'

const Navbar = () => {

  const { data: session } = useSession()
  // console.log("🚀 ~ Navbar ~ session:", session)
  const [showDropDown, setshowDropDown] = useState(false)
  const router = useRouter()

  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <CBbutton text={'Sign out'} func={() => signOut()} />
  //   </>
  // }

  return (

    <nav className='bg-black text-white flex justify-between px-4 h-16 items-center'>
      <Link href='/'>
        <div className='logo font-bold text-lg'>Support Creator</div>

      </Link>
      {/* <ul className='flex gap-8 justify-between'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}

      <div className='relative'>
        {session &&
          <>

            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" onClick={() => setshowDropDown(!showDropDown)} 
            onBlur={() => {
              setTimeout(() => {
                setshowDropDown(!showDropDown)
              }, 300);
            }} className=" mx-4 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center
            text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" type="button">Welcome {session.user.name}<svg className="w-2.5 h-2.5 ms-3 " ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            <div id="dropdown" className={`z-10 ${showDropDown ? "" : 'hidden'} absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" ariaLabelledby="dropdownDefaultButton">
                <li>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >Home</Link>
                </li>
                <li>
                  <Link href='/dashboard' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                </li>
                <li>
                  <Link onClick={() => signOut()} href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                </li>
              </ul>
            </div>


          </>}
        {session && <CBbutton text={"Logout"} func={() => { signOut() }} />}
        {!session &&
          <Link href={'/login'}>
            <CBbutton text={'Login'} />
          </Link>}
      </div>
    </nav>
  )
}

export default Navbar