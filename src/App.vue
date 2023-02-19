<script setup lang="ts">
import MainCard from './components/MainCard.vue'
import DateNavigation from './components/DateNavigation.vue'
import TodoList from './components/TodoList.vue'
import PlusButton from './components/PlusButton.vue'
import Modal from './components/Modal.vue'
import type { Todo } from './types'
import { ref } from 'vue'

const isVisible = ref(false)

const openModal = () => {
  isVisible.value = true
}

const closeModal = () => {
  isVisible.value = false
}

const todos: Todo[] = [
  {
    id: 1,
    content: 'Hello World',
    isCompleted: false,
  },
  {
    id: 2,
    content: 'Hello World',
    isCompleted: false,
  },
  {
    id: 3,
    content: 'Hello World',
    isCompleted: false,
  },
  {
    id: 4,
    content: 'Hello World',
    isCompleted: false,
  },
  {
    id: 5,
    content: 'Hello World',
    isCompleted: false,
  },
  {
    id: 6,
    content: 'Hello World',
    isCompleted: false,
  },
  {
    id: 7,
    content: 'Hello World',
    isCompleted: true,
  },
  {
    id: 8,
    content: 'Hello World',
    isCompleted: false,
  },
  {
    id: 9,
    content: 'Hello World',
    isCompleted: false,
  },
  {
    id: 10,
    content: 'Hello World',
    isCompleted: false,
  },
  {
    id: 11,
    content: 'Hello World',
    isCompleted: false,
  },
  {
    id: 12,
    content: 'Hello World',
    isCompleted: false,
  },
  {
    id: 13,
    content: 'Hello World',
    isCompleted: false,
  },
  {
    id: 14,
    content: 'Hello World',
    isCompleted: false,
  },
]
</script>

<template>
  <div class="main">
    <MainCard>
      <template #header>
        <DateNavigation />
      </template>
      <template #body>
        <TodoList :todos="todos" />
      </template>
      <template #footer>
        <PlusButton @click="openModal" />
      </template>
    </MainCard>
    <Modal :isVisible="isVisible" @on-close="closeModal" />
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
