import './App.css';
import Component from './Component.jsx';
import Context from './context/Context.jsx';
function App() {
  return (
    <Context>
      <Component />
    </Context>
  );
}

export default App;
