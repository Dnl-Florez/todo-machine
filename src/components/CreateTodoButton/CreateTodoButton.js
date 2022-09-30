import React from 'react';
import { TodoContext } from '../../TodoContext/TodoContext.js';
import { TodoIcon } from '../TodoIcon/TodoIcon.js'
import './CreateTodoButton.css';


function CreateTodoButton(){
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(true);
  };

  return(
    <TodoIcon 
      icon='createIcon'
      clickAction={onClickButton}
      addClass={'button'}
    />
  );
};

export { CreateTodoButton };

