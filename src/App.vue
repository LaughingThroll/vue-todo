<script setup lang="ts">
import { ref, watchEffect, onMounted } from 'vue'

import MainCard from './components/MainCard.vue'
import DateNavigation from './components/DateNavigation/DateNavigation.vue'
import TodoList from './components/Todo/TodoList.vue'
import CircleButtons from './components/common/CircleButtons.vue'
import TodoModal from './components/Todo/TodoModal.vue'

import { addTodo, getTodos, toggleTodo } from './api/TodoService'
import { getFormattedDate } from './utils'
import type { Id, Todo } from './types'

const isVisible = ref(false)
const todos = ref<Todo[]>([])
const currentDate = ref(getFormattedDate(new Date()))
const selectedTodo = ref<Todo | null>(null)

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

  addTodo(currentDate.value, newTodo)
  todos.value.push(newTodo)

  closeModal()
}

const onToggleTodo = (todoId: Id) => {
  toggleTodo(currentDate.value, todoId)
  todos.value = getTodos(currentDate.value)
}

const selectTodo = (todo: Todo) => {
  selectedTodo.value = selectedTodo.value?.id === todo.id ? null : todo
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
          :selected-todo="selectedTodo"
          @toggle-todo="onToggleTodo"
          @select-todo="selectTodo"
        />
        <div v-else>Create your first Todo</div>
      </template>
      <template #footer>
        <div class="main__button">
          <CircleButtons :icons="['plus', 'trash', 'pencil']" />
        </div>
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

  &__button {
    display: flex;
    justify-content: center;
    transform: translate(0, 50%);
  }
}
</style>
