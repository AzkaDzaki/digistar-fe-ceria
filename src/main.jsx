import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.jsx';
// import TodoApp from './pages/Todo.jsx';
import Wallet from './pages/Wallet.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Wallet />
    </Provider>
  </StrictMode>
);
