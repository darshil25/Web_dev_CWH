import React from 'react'
import Button from './Button'

const Navbar = ({count}) => {
  return (
  <>
    <div>Navbar</div>
    {/* received count from App and giving it to Button.jsx */}
  <Button count={count}/>
  </>
  )
}

export default Navbar