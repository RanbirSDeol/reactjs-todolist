import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import Title from "./components/Title"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function saveData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo) {
    // Appending our newTodo
    const newTodoToggle = { text: newTodo, status: 'pending' };
    const newTodoList = [...todos, newTodoToggle]
    saveData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    saveData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited.text)
    handleDeleteTodo(index)
  }

  function toggleTodoStatus(index) {
    // Creating a new list of todos, by copying the existing one
    const newTodoList = [...todos]

    // Update the status ofthe todo at the specified index
    if (newTodoList[index].status === 'pending') {
      newTodoList[index].status = 'completed'
    } else {
      newTodoList[index].status = 'pending'
    }
    saveData(newTodoList)
    setTodos(newTodoList)
  }
  
  useEffect(() => {
    if(!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <Title></Title>
      <TodoInput 
        todoValue={todoValue} 
        setTodoValue = {setTodoValue} 
        handleAddTodos={handleAddTodos}
        />
      <TodoList
       handleEditTodo={handleEditTodo}
       handleDeleteTodo={handleDeleteTodo} 
       todos={todos} 
       toggleTodoStatus={toggleTodoStatus}
       />
    </>
  )
}

export default App
