import React from 'react';
import { useLocalStorage } from './useLocalStorage.js';

const TodoContext = React.createContext();

function TodoProvider(props){
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('LS_V1', []);

  const [openModal, setOpenModal] = React.useState(false);

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const temp = [...todos];
    temp[todoIndex].completed = !temp[todoIndex].completed;
    saveTodos(temp);
  } 

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const temp = [...todos];
    temp.splice(todoIndex, 1);
    saveTodos(temp);
  }

  const addTodo = (text) => {
    const temp = [...todos];
    temp.push({
      completed:false,
      text
    });
    saveTodos(temp);
  } 

  const [filter, setFilter] = React.useState('All') 

  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const totalTodos = todos.length;

  const [searchValue, setSearchValue] = React.useState('');

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    if(filter === 'All'){
      searchedTodos = todos;
    }else if(filter === 'Completed'){
      searchedTodos = todos.filter(todo => {
	return todo.completed === true;
      });  
    }else{
      searchedTodos = todos.filter(todo => {
	return todo.completed === false;
      });  
    }
  }else{
    if(filter === 'All'){
      searchedTodos = todos.filter(todo => {
	const todoText = todo.text.toLowerCase();
        return todoText.includes(searchValue);
      });     
    }else if(filter === 'Completed'){
      searchedTodos = todos.filter(todo => {
	const todoText = todo.text.toLowerCase();
	return (todoText.includes(searchValue) && todo.completed === true);
      });  
    }else{
      searchedTodos = todos.filter(todo => {
	const todoText = todo.text.toLowerCase();
	return (todoText.includes(searchValue) && todo.completed === false);
      });  
    }
  }
  
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      setFilter,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
