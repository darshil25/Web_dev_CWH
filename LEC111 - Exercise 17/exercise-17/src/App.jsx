import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const fetchData = async () =>{
    const a = await fetch('https://jsonplaceholder.typicode.com/posts')
    const b = await a.json()
    setData(b)
    console.log(b);
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <>
  <div className="container">
    {data.map((card)=>{
      return(
        <div key={card.id} className="card">
          <h1>{card.title}</h1>
          <p>{card.body}</p>
          <span>By: User Id: {card.userId}</span>
        </div>
      )
    })}
  </div>
    </>
  )
}

export default App
