import Image from 'next/image'
import React from 'react'
import profile from '../../public/assets/profile.gif'

const Username = ({params}) => {
  return (
    <>
    <div className='cover w-full relative bg-gray-300'>
      <img className='object-cover h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/6289370/d0d76f6fb03e474382ae7867dfaa779b/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/3.png?token-time=1714780800&token-hash=Qbc0q9XTj-y4kzxntQbH-tr5CqP9gPuEHiHc-jBnMX0%3D" alt="" />
    <div className='absolute -bottom-10 right-[50%]'>
      <Image src={profile} width={120} height={120} alt="sfv" />
    </div>
    </div>
    </>
  )
}

export default Username