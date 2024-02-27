import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) //Here useState is a hook that tells to make state as count and set it's initial value as 0 and setCount is a function that will be used to update the value of count.

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => {setCount(count+1)}} onDoubleClick={() => {setCount(count**2)}}>Click to update</button>
    </>
  )
}

export default App
