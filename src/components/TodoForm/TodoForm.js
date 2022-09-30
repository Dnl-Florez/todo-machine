import React from 'react';
import { TodoContext } from '../../TodoContext/TodoContext.js';
import { TodoIcon } from '../TodoIcon/TodoIcon.js';
import './TodoForm.css';

function TodoForm (){
  const { 
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    if(newTodoValue){
      event.preventDefault();
      addTodo(newTodoValue); 
      setOpenModal(false);
    }else{
      event.preventDefault();
    }
  };

  const handleKeyDown = (event) => {
    if ((event.keyCode == 13) ) {
      if(newTodoValue){
	event.preventDefault();
        addTodo(newTodoValue); 
        setOpenModal(false);
      }else{
	event.preventDefault();
      }    
    }
  };

  return(
    <form onSubmit={onSubmit}>
      <TodoIcon 
	icon={'backIcon'}
	clickAction={onCancel}
      />
      <label>Write your new To Do</label>
      <textarea 
	value={newTodoValue}
	onChange={onChange}
	onKeyDown={handleKeyDown}
      />
      <button
	  className='TodoForm-button--add'
	  type='submit'
      > Create!(enter) </button>
    </form>
  );
}

export { TodoForm };
