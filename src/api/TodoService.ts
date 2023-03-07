import { Id, Todo } from '../types'

const TODO_KEY = 'todos'

export const getTodos = (date: string): Todo[] => {
  const todoList = localStorage.getItem(TODO_KEY)
  if (todoList) {
    return JSON.parse(todoList)[date] || []
  }
  return []
}

export const addTodo = (date: string, todo: Todo) => {
  const todoList = JSON.parse(localStorage.getItem(TODO_KEY) || '')
  const todos = getTodos(date)
  localStorage.setItem(
    TODO_KEY,
    JSON.stringify({
      ...todoList,
      [date]: [...todos, todo],
    })
  )
}

export const toggleTodo = (date: string, todoId: Id) => {
  const todoList = JSON.parse(localStorage.getItem(TODO_KEY) || '')
  const todos = getTodos(date)
  const newTodos = todos.map((todo) => {
    if (todo.id === todoId) {
      return {
        ...todo,
        isCompleted: !todo.isCompleted,
      }
    }
    return todo
  })

  localStorage.setItem(
    TODO_KEY,
    JSON.stringify({ ...todoList, [date]: newTodos })
  )
}
