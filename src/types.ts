export type Id = string

export interface Todo {
  id: Id
  title: string
  isCompleted: boolean
}

export interface TodoList {
  [key: string]: Todo[]
}
