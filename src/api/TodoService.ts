import { Id, Todo } from '../types'

const TODO_KEY = 'todos'

export const getTodos = (): Todo[] => {
  const todos = localStorage.getItem(TODO_KEY)
  if (todos) {
    return JSON.parse(todos)
  }
  return []
}

export const addTodo = (todo: Todo) => {
  const todos = getTodos()
  localStorage.setItem(TODO_KEY, JSON.stringify([...todos, todo]))
}

export const toggleTodo = (todoId: Id) => {
  const todos = getTodos()
  const newTodos = todos.map((todo) => {
    if (todo.id === todoId) {
      return {
        ...todo,
        isCompleted: !todo.isCompleted,
      }
    }
    return todo
  })

  localStorage.setItem(TODO_KEY, JSON.stringify(newTodos))
}
