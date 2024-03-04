import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux' 
import { increment, decrement, multiply, incrementByAmount } from './redux/counter/counterSlice'

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  //with redux store we can use props to pass the count to the Navbar component without prop drilling
  //App.jsx will connect with redux, Navbar connect with redux. Navbar and App not connect with eachother they will connect with redux store an receive or give data from the store

  return (
    <>
    <Navbar />
      <div>
        <button onClick={() =>dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() =>dispatch(increment())}>+</button>
        <button onClick={() =>dispatch(multiply())}>*</button>
        <button onClick={() =>dispatch(incrementByAmount(6))}> Big increament</button>
      </div>
    </>
  )
}

export default App
