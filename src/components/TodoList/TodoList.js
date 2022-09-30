import React from 'react';
import './TodoList.js';

function TodoList(props) {
  return(
    <section className='section'>
    <ul className='ul'>
      {props.children}
    </ul>
    </section>
 );
}

export { TodoList };

