import React from 'react';
import { TodoIcon } from '../TodoIcon/TodoIcon.js'
import './TodoItem.css';

function TodoItem(props) {

return(
    <li className='Item'>
      <TodoIcon 
	icon='checkIcon'
	clickAction={props.onComplete}
	addClass={props.completed && 'Icon-check-active'}
      />
      <p className={`Item-p ${props.completed && 'Item-p--complete'}`}>
        {props.text}
      </p>
     <TodoIcon 
	icon='deleteIcon'
	clickAction={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };

