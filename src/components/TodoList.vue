<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import type { Id, Todo } from './../types'

interface TodoListEmits {
  toggleTodo?: (todoId: Id) => void
}

interface TodoListProps {
  todos: Todo[]
}

defineProps<TodoListProps>()
defineEmits<TodoListEmits>()
</script>
<template>
  <ul class="todoList">
    <li class="todoList__item" v-for="todo of todos" :key="todo.id">
      <TodoItem
        :title="todo.title"
        :is-completed="todo.isCompleted"
        @toggle-todo="$emit('toggleTodo', todo.id)"
      />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.todoList__item:not(:last-child) {
  margin-bottom: 10px;
}
</style>
