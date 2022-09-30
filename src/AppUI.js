import React from 'react';
import { TodoContext} from './TodoContext/TodoContext.js';
import { TodoCounter } from './components/TodoCounter/TodoCounter.js';
import { TodoSearch } from './components/TodoSearch/TodoSearch.js';
import { TodoFilter } from './components/TodoFilter/TodoFilter.js'
import { TodoList } from './components/TodoList/TodoList.js';
import { TodoItem } from './components/TodoItem/TodoItem.js';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton.js';
import { Modal } from './components/modal/Modal.js';
import { TodoForm } from './components/TodoForm/TodoForm.js';
import { TaskListLoader } from './components/LoadingSkeleton/LoadingSkeleton.js'

function AppUI(){

  const {
    error,
    loading,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    setFilter,
    openModal
  }= React.useContext(TodoContext);

  return (
  <React.Fragment> 
    <div className = 'body'>
      <h2 className = 'title'>To Do Machine</h2>

      <TodoCounter />

      <TodoSearch />

      <TodoFilter 
	onFilter={setFilter}
      />

      <TodoList>
        {error && <p>Ohhh no, there was an error :(...</p>}
	{loading && <TaskListLoader />}
        {(!loading && !totalTodos) && <p>Let's make your first To Do! :)</p>}
	{searchedTodos.map(todo => (
	  <TodoItem 
	    key={todo.text} 
	    text={todo.text} 
	    completed={todo.completed} 
	    onComplete={() => completeTodo(todo.text)}
	    onDelete={() => deleteTodo(todo.text)}
	  />
	))}
      </TodoList>

      {openModal && (
	<Modal>
	  <TodoForm />
	</Modal>
      )}
           
      <CreateTodoButton />
    </div>
    </React.Fragment>

  );
}

export { AppUI };
