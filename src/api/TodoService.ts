import { Id, Todo, TodoList } from '../types'

const TODO_KEY = 'todos'

const getTodoList = (): TodoList => {
  return JSON.parse(localStorage.getItem(TODO_KEY) || '{}')
}

export const getTodos = (date: string): Todo[] => {
  return getTodoList()[date] || []
}

export const addTodo = (date: string, todo: Todo) => {
  const todos = getTodos(date)
  localStorage.setItem(
    TODO_KEY,
    JSON.stringify({
      ...getTodoList(),
      [date]: [...todos, todo],
    })
  )
}

export const toggleTodo = (date: string, todoId: Id) => {
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
    JSON.stringify({ ...getTodoList(), [date]: newTodos })
  )
}
