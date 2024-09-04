// TodoApp.js
import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './services/todo/actions';

function TodoApp() {
  const [input, setInput] = useState(''); // usestate: state lokal
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch(); // dispatch: fungsi untuk memanggil aksi dari actions.jsx

  const handleAddTodo = () => {
    if (input) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
