import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //const a = useRef(0); in react when app render the val of a will be 0, with use of useRef it will be increase after every render
  //if we change val of component then state will be reset but useRef will not be reset

  const btnref = useRef(); //use of this is that without DOM manipulation we can change componant
  useEffect(() => {
    // a.current = a.current + 1;
    // console.log(`app rendered and value of a is ${a.current}`) 
    btnref.current.style.background = "blue" //it will change the color of button(which we gave ref) after every render
    console.log(`First render`);
  }); //with }, []); it will be called only once if we not include [] then it will be called after every render
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/*we can use ref multiple times */}
      <button onClick={() => {btnref.current.style.display = "none"}}>Hide upperwala Button</button> {/*this will hide count button*/}
    </>
  )
}

export default App
