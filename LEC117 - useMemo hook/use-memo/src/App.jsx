import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//usememo is used when app runs intensive tasks and we want to avoid re-rendering

//3 million size array filled with 0 
const num = new Array(30_00_000).fill(0).map((_, i) =>{ //in .map there is (item, i) here we not use item so we leave it as '_
  return{
    index: i,
    isMagical: i===29_00_000 //if i is 29_00_000 then isMagical is true, so in all 3M enteries only one is true
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(num)

  // const magical = numbers.find(item=>item.isMagical == true) //find the magical number from the array
  const magical = useMemo(() => numbers.find(item=>item.isMagical == true), [numbers]) //so when by any chance the numbers array changes, the magical number will not be computed again. So we have to pass numbers in [] (dependency array)field
  //basically we are telling to compute it one time and save it and during rendering keep it saved do not compute again. 
  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          if(count == 10){
            setNumbers(new Array(10_00_000).fill(0).map((_, i) =>{
              return{
                index: i,
                isMagical: i===9_00_000
              }
            }))
          }

          }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
