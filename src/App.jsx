import './App.css';
import TodoApp from './Todo';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => state.todos);

  console.log(todos);

  return (
    <>
      <TodoApp />
    </>
  );
}

export default App;
