<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import type { Todo } from './../types'

interface TodoListProps {
  todos: Todo[]
}

defineProps<TodoListProps>()
</script>
<template>
  <ul class="todoList">
    <li class="todoList__item" v-for="todo of todos" :key="todo.id">
      <TodoItem :content="todo.content" :is-completed="todo.isCompleted" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.todoList__item:not(:last-child) {
  margin-bottom: 10px;
}
</style>
