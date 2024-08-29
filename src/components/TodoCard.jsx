import React from 'react'
import { useState } from 'react';

export default function TodoCard(props) {
  const {children, handleDeleteTodo, index, handleEditTodo, toggleTodoStatus} = props
 
  const todo = children.props.children;
  
  const cardClass = todo.status === 'pending' ? 'pending' : 'completed';

  return (
    // Returning the todo as a list
    <li className='todoItem'>
      <p>{todo.text}</p>
      <div className='actionsContainer'>

        <button className={cardClass} onClick={() => {
          toggleTodoStatus(index)
        }}>
          <i className="fa-solid fa-check"></i>
        </button>
        
        <button onClick={() => {
          handleEditTodo(index)
        }}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        
        <button onClick={() => {
          handleDeleteTodo(index)
        }}>
          <i className="fa-solid fa-trash"></i>
        
        </button>
        
      </div>
    </li>
  )
}
