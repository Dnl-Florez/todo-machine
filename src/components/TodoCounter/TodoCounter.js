import React from 'react';
import { TodoContext } from '../../TodoContext/TodoContext.js';
import './TodoCounter.css'

function TodoCounter() {

  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return(
    <p className='counter'> {completedTodos}/{totalTodos} tasks done </p>
  );
}

export { TodoCounter };
