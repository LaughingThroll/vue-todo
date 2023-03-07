<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import type { Id, Todo } from '../../types'

interface TodoListEmits {
  (e: 'toggleTodo', todoId: Id): void
  (e: 'selectTodo', todo: Todo): void
}

interface TodoListProps {
  todos: Todo[]
  selectedTodo: Todo | null
}
defineProps<TodoListProps>()
defineEmits<TodoListEmits>()
</script>
<template>
  <ul class="todoList">
    <li
      class="todoList__item"
      :class="{
        'todoList__item--selected': selectedTodo?.id === todo.id,
      }"
      v-for="todo of todos"
      :key="todo.id"
    >
      <TodoItem
        :todo="todo"
        :is-selected="selectedTodo?.id === todo.id"
        @toggle-todo="$emit('toggleTodo', todo.id)"
        @select-todo="$emit('selectTodo', todo)"
      />
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import '@/styles/colors';
.todoList__item {
  padding: 0 14px;
}

.todoList__item:not(:last-child) {
  margin-bottom: 10px;
}
.todoList__item--selected {
  background-color: $selected-item;
}
</style>
