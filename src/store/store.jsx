import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/todos/todoSlice';
import walletReducer from '../redux/wallets/walletSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    wallets: walletReducer,
  },
});

export default store;
