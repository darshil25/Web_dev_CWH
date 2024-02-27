import {React, useEffect} from 'react'

const Navbar = ({color}) => {
  useEffect(() => {
    confirm("want to change color?")
  }, [color])

  //Example of cleanup function
  useEffect(() => {
    alert("First render of App.jsx")

    return () =>{
      alert("Compound was unmounted") //if we remove Navbar component from App.jsx then this alert will be shown
    }
  }, [color])
  
  return (
    <div>This izz Navbarr of {color} color</div>
  )
}

export default Navbar