import React, { memo } from 'react'


const Navbar = ({adjective, getAdjective}) => {
  console.log('navbar is rendered');
  return (
    <div>This is a Navbar and created by {adjective}
    <button onClick={() => {getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)