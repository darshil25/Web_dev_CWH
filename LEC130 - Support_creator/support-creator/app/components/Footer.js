import React from 'react'
import Link from 'next/link'
import CBbutton from '../reusable/CB_button'

const Footer = () => {
  return (
    <footer className='bg-black text-white flex justify-center px-4 py-2 h-21 items-center flex-col gap-2'>
      <p className='text-center '>Copyright &copy; Support Creator - All Rights Reserved</p>
      <Link href='https://darshil25.github.io/' target="_blank">
        <CBbutton text={"Contact Developer"} />
      </Link>
    </footer>
  )
}

export default Footer