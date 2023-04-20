import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"


const initialState = []
const init = () => {
  return JSON.parse(localStorage.getItem('todos') ) || initialState
}

export const useTodos = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  

  const handleNewTodo = (todo) => { 
    dispatch({
      type: '[TODO] Add Todo',
      payload: todo
    })
  }

  const handleDeleteTodo = (id) => { 
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
  }

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  }

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(t => !t.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}