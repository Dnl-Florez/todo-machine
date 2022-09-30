import React from 'react';
import './TodoFilter.css';

function TodoFilter(props) {

  const filters = (name) => {
    props.onFilter(name);
  }

  return(
    <span className='filter'>
      <p 
	className='filter-item'
	onClick={() => filters('All')}
      > All </p>
      <p 
	className='filter-item'
	onClick={() => filters('Completed')}
      > Completed </p>
      <p 
	className='filter-item'
	onClick={() => filters('Uncompleted')}
      > Uncompleted </p>
    </span>
  );
};

export { TodoFilter };
