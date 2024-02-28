import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: 'get up',
      desc: 'wake up early'
    },
    {
      title: 'get ready',
      desc: 'get ready for the day'
    },
    {
      title: 'find work',
      desc: 'find work and apply on different jobs'
    },
  ])

  //we can make small components and use them here
  const Todo = ({ todo }) => {
  return (
    <>
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
    </>
  );
};

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
      {/* {showbtn ? <button>Only shown when another clicked</button>:'oo magu thurulab'} bcz this is js we wrote it in {}*/}
      {showbtn && <button>Only shown when another clicked</button>}  {/* means when showbtn is true then show btn alternate ternary for above*/}

      {/*in react to render whole todo like render list below format is used */}
      {todos.map(todo=>{
        return <Todo todo={todo}/>
      })}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Hide/Unhide Showbtn
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
