import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({email:'', phone:''})

  const handleClick = () => {
    alert(`Hey why click me`)
  }
  const handleMouseOver = () => {
    alert(`Ghuso mat mere me`)
  }
  const handleChange =(e) =>{
    setForm({...form, [e.target.name]:e.target.value}) //htis is asyncronous so it will not update the state immediately, there fore log will print before it completes
    console.log(form);
  }

  return (
    <>
    <div className="btn">
      <button onClick={handleClick}>Click This</button>
    </div>
      
      <input type="text" name='email' value={form.email} onChange={handleChange}/>
      <input type="text" name='phone' value={form.phone} onChange={handleChange}/>
    </>
    
  )
}

export default App
