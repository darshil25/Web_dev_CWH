import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [finishedTodos, setFinishedTodos] = useState([])

  useEffect(() => {
    let todoString = localStorage.getItem('todos')
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem('todos'))
      setTodos(todos)
    }
  }, [])

  const toggleFinished = (e) => {
    setFinishedTodos(!finishedTodos)
  }
  const saveToLS = (e) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && todo.length > 2) {
      handleAdd();
    }
  }


  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS()
  }
  const handleDelete = (e, id) => {
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    if (window.confirm("Are you sure you want to delete this todo?")) {
      let newTodos = todos.filter(item => {
        return item.id !== id;
      });
      setTodos(newTodos);
    }
    saveToLS()
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto mx-3 my-3 rounded-xl p-5 bg-[#beb6aa] min-h-[80vh] md:w-1/2">
        <h1 className="font-bold text-center text-2xl">TaskTracer - Navigate Your Day with Ease</h1>
        <div className="addTodo my-5 flex flex-col gap-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <div className="flex">
            <input onChange={handleChange} value={todo} type="text" className='w-full rounded-lg px-5 py-1' onKeyDown={handleKeyDown} />

            <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-[#4D4637] p-4 py-2 text-sm font-bold rounded-lg mx-2 text-white hover:bg-[#3b352a] disabled:bg-[#857862] transition-all duration-100'>Save</button>
          </div>
        </div>

        <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={finishedTodos} />
        <label className='mx-2' htmlFor="show">Show Finished</label>
        <div className="h-[1px] bg-black opacity-15 mx-auto my-2"></div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {(todos.length === 0) && <div className='m-5'>No todos Created</div>}

          {todos.map(item => {
            return (finishedTodos || !item.isCompleted) && <div key={item.id} className={"todo flex my-3 justify-between"}>
              <div className='flex gap-5'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>

              <div className="buttons flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-[#4D4637] p-2 text-sm font-bold py-1 rounded-lg text-white hover:bg-[#3b352a] mx-1 transition-all duration-100'>Edit</button>

                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-[#8c3419] p-2 text-sm font-bold py-1 rounded-lg text-white hover:bg-[#522b18] mx-1 transition-all duration-100'>Delete</button>
              </div>
            </div>
          })}
        </div>

      </div>
    </>
  )
}

export default App
