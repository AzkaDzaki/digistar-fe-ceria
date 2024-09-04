import './App.css'
import { useEffect, useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library

function App() {
  // Todo: ["main", "makan", "tidur"] array biasa
  /* 
  Todo: [
  {
  id: 1,
  name: 'main',
  },
  {
  id: 2,
  name: 'makan',
  }
  ]
  array of object
  */ 

  // Inisiasi variabel list dan newTodo
  const [list, setList] = useState([])
  const [newTodo, setNewTodo] = useState('')

  // Fungsi untuk menginisalisasi todo jika ada di local storage
  useEffect(() => {
    // getItem untuk mengambil nilai dari localStorage
   const storedTodos = localStorage.getItem('todos')
    console.log(storedTodos)
   if(storedTodos) {
    setList(JSON.parse(storedTodos))
   }
  }, [])

  // Fungsi untuk menyimpan todo ketika ada perubahan pada list
  useEffect(() => {
    if(newTodo) {
      // setItem( nama, nilai )
      // setItem untuk menyimpan nilai ke localStorage 
      localStorage.setItem('todos', JSON.stringify(list))
      setNewTodo('')
    }
  }, [list])

  // Fungsi untuk menambahkan todo
  const handleSubmit = (event) => {
    // onClick onSubmit dari form dan button
    event.preventDefault(); // Mencegah form untuk melakukan submit / reload halaman
    if(newTodo.trim()) { // trim untuk menghapus spasi pada awal dan akhir string
      const newTodoObject = {
        id: uuidv4(), //
        name: newTodo
      }
      setList([...list, newTodoObject]) // Menambahkan newTodo ke list
    }
  }

  // Fungsi untuk menghapus semua todo
  const handleRemoveAllList = () => {
    localStorage.removeItem('todos')
    setList([])
  }

  // Fungsi untuk menghapus todo berdasarkan id
  const handleRemoveTodo = (id) => {
    // filter untuk menghapus todo yang dipilih
    console.log('parameter', id) // parameter yang dipassing
    const newTodos = list.filter((todo) => todo.id !== id)
    console.log('newTodos', newTodos)
    // setItem untuk menyimpan nilai ke localStorage
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setList(newTodos)
  }
  
  // Inisiasi variabel inputRef
  const inputRef = useRef(null)
  const handleButton = () => {
    inputRef.current.focus()
  }

  return (
    <>
     <h1>Todo list</h1>
     <form onSubmit={handleSubmit}>
       <input 
        ref={inputRef}
        type="text" 
        value={newTodo} 
        placeholder='Add new todo'
        onChange={(event) => setNewTodo(event.target.value)} // ngetik di input
       />
       <button onClick={handleButton} type="submit">Add List function from Form</button>
       <button onClick={handleRemoveAllList}>Remove All List</button>
      </form>
       {/* <button onClick={handleSubmit} type="submit">Add List function from Button</button> */}
       <div>
        {list.map((todo, index) => (
          <div key={index} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <p style={{marginRight: '12px'}} key={index}>{todo.id} {todo.name}</p>
          <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </div>
        ))}
        </div>
    </>
  )
}

export default App
