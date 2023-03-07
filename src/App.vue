<script setup lang="ts">
import { ref, watchEffect, onMounted } from 'vue'

import MainCard from './components/MainCard.vue'
import DateNavigation from './components/DateNavigation/DateNavigation.vue'
import TodoList from './components/Todo/TodoList.vue'
import PlusButton from './components/common/PlusButton.vue'
import TodoModal from './components/Todo/TodoModal.vue'

import { addTodo, getTodos, toggleTodo } from './api/TodoService'
import { getFormattedDate } from './utils'
import type { Id, Todo } from './types'

const isVisible = ref(false)
const todos = ref<Todo[]>([])
const currentDate = ref(getFormattedDate(new Date()))

onMounted(() => {
  todos.value = getTodos(currentDate.value)
})

watchEffect(() => {
  todos.value = getTodos(currentDate.value)
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
  console.log('title', title)

  addTodo(currentDate.value, newTodo)
  todos.value.push(newTodo)

  closeModal()
}

const onToggleTodo = (todoId: Id) => {
  toggleTodo(currentDate.value, todoId)
  todos.value = getTodos(currentDate.value)
}

const onChangeDate = (date: string) => {
  currentDate.value = date
}
</script>

<template>
  <div class="main">
    <MainCard>
      <template #header>
        <DateNavigation @on-change-date="onChangeDate" />
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
