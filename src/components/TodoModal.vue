<script setup lang="ts">
import { ref } from 'vue'
import Modal from '@/components/common/Modal.vue'
import Button from '@/components/common/Button.vue'

interface TodoModalEmits {
  (e: 'onClose'): void
  (e: 'onSave', title: string): void
}

interface TodoModalProps {
  isVisible: boolean
}

const todoTitle = ref('')

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  todoTitle.value = target.value
}

const { isVisible } = defineProps<TodoModalProps>()
const emit = defineEmits<TodoModalEmits>()

const onCloseModal = () => {
  emit('onClose')
  todoTitle.value = ''
}

const onSave = () => {
  if (!todoTitle.value) return
  emit('onSave', todoTitle.value)
}
</script>

<template>
  <Modal class="todo-modal" :isVisible="isVisible" @on-close="onCloseModal">
    <template #body>
      <div class="todo-modal__body">
        <h2>Add Todo</h2>
        <div>
          <input :value="todoTitle" @input.trim="handleInput" />
        </div>
      </div>
    </template>
    <template #footer>
      <div class="todo-modal__footer">
        <Button class="todo-modal__button" @click="onCloseModal" is-secondary
          >Cancel</Button
        >
        <Button class="todo-modal__button" @click="onSave">Save</Button>
      </div>
    </template>
  </Modal>
</template>
<style scoped lang="scss">
.todo-modal {
  &__body {
    text-align: center;
    flex: 1 1 auto;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
  }

  &__button {
    max-width: 100px;
    & + .todo-modal__button {
      margin-left: 10px;
    }
  }
}
</style>
