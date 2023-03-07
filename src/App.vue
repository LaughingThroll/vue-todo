<script setup lang="ts">
import { ref, onMounted } from 'vue'

import MainCard from './components/MainCard.vue'
import DateNavigation from './components/DateNavigation.vue'
import TodoList from './components/TodoList.vue'
import PlusButton from './components/common/PlusButton.vue'
import Modal from './components/common/Modal.vue'

import type { Id, Todo } from './types'
import { addTodo, getTodos, toggleTodo } from './api/TodoService'

const isVisible = ref(false)
const todoTitle = ref('')
const todos = ref<Todo[]>([])

onMounted(() => {
  todos.value = getTodos()
})

const openModal = () => {
  isVisible.value = true
  todoTitle.value = ''
}

const closeModal = () => {
  isVisible.value = false
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  todoTitle.value = target.value
}

const saveTodo = () => {
  const newTodo = {
    id: Math.random().toString(),
    title: todoTitle.value,
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
    <Modal :isVisible="isVisible" @on-close="closeModal">
      <template #body>
        <div class="modal-body">
          <h2>Add Todo</h2>
          <div>
            <input :value="todoTitle" @input="handleInput" />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="modal-footer">
          <button @click="closeModal">Cancel</button>
          <button @click="saveTodo">Save</button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.modal-body {
  text-align: center;
}
</style>
