import React from 'react'
import TodoCard from "./TodoCard"

export default function TodoList(props) {
  // Destructure our todo list
  const {todos} = props
   return (
    // Creating an unordered list
    <ul className='main'>      
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })
      }
    </ul>
  )
}
