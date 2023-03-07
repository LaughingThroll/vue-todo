<script setup lang="ts">
import { ref, onMounted } from 'vue'

import MainCard from './components/MainCard.vue'
import DateNavigation from './components/DateNavigation.vue'
import TodoList from './components/TodoList.vue'
import PlusButton from './components/common/PlusButton.vue'
import TodoModal from './components/TodoModal.vue'

import { addTodo, getTodos, toggleTodo } from './api/TodoService'
import type { Id, Todo } from './types'

const isVisible = ref(false)
const todos = ref<Todo[]>([])

onMounted(() => {
  todos.value = getTodos()
})

const openModal = () => {
  isVisible.value = true
}

const closeModal = () => {
  isVisible.value = false
}

const saveTodo = (title: string) => {
  const newTodo = {
    id: Math.random().toString(),
    title,
    isCompleted: false,
  }
  addTodo(newTodo)
  todos.value.push(newTodo)

  closeModal()
}

const onToggleTodo = (todoId: Id) => {
  toggleTodo(todoId)
  todos.value = getTodos()
}
</script>

<template>
  <div class="main">
    <MainCard>
      <template #header>
        <DateNavigation />
      </template>
      <template #body>
        <TodoList
          v-if="!!todos.length"
          :todos="todos"
          @toggle-todo="onToggleTodo"
        />
        <div v-else>Create your first Todo</div>
      </template>
      <template #footer>
        <PlusButton @click="openModal" />
      </template>
    </MainCard>
    <TodoModal
      :is-visible="isVisible"
      @on-close="closeModal"
      @on-save="saveTodo"
    />
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
