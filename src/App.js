import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import User from './components/User';

function App() {
  const [name] = useState('John Doe');
  return (
    <div className="App">
      <User name={name} />
      <Counter />
    </div>
  );
}

export default App;
