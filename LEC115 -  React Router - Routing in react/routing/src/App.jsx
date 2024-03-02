import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/components/Home'
import Adress from './assets/components/Adress'
import Details from './assets/components/Details'
import User from './assets/components/User'


//So when we click on anchor tag it relods page and take to link but to overcome this we can use routing propery of react

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home/></>
    },
    {
      path: '/adress',
      element: <><Navbar /><Adress/></>
    },
    {
      path: '/details',
      element: <><Navbar /><Details/></>
    },
    {
      path: '/user/:username',
      element: <><Navbar /><User/></>
    }
  ])

  return (
    <>
    
    <RouterProvider router = {router} />
    </>
  )
}

export default App
