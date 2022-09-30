import React from 'react';
import { TodoProvider } from './TodoContext/TodoContext.js';
import { AppUI } from './AppUI.js';
import './App.css';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Tomar curso de intro a React', completed: false},
//   {text: 'Llorar con la llorona', completed: false}
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
