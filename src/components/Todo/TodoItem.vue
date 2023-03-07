<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/common/Checkbox.vue'
import { Id, Todo } from '@/types'

interface TodoItemEmits {
  (e: 'toggleTodo', todoId: Id): void
  (e: 'selectTodo', todo: Todo): void
}

interface TodoItemProps {
  todo: Todo
  isSelected?: boolean
}

const { todo } = defineProps<TodoItemProps>()
const emit = defineEmits<TodoItemEmits>()

const counterClicks = ref(0)
const timerId = ref<number>(0)

const singleClick = () => {
  counterClicks.value++
  if (counterClicks.value === 1) {
    timerId.value = setTimeout(() => {
      emit('selectTodo', todo)
      counterClicks.value = 0
    }, 200)
  }
}

const dblClick = () => {
  counterClicks.value++
  if (counterClicks.value !== 1) {
    clearTimeout(timerId.value)
    emit('toggleTodo', todo.id)
    counterClicks.value = 0
  }
}
</script>

<template>
  <button
    class="todoItem"
    @click="singleClick"
    @dblclick="dblClick"
    :class="{
      'todoItem--is-completed': todo.isCompleted,
      'todoItem--is-selected': isSelected,
    }"
  >
    <div class="todoItem__content">{{ todo.title }}</div>
    <div class="todoItem__actions">
      <Checkbox
        class="todoItem__action"
        :is-selected="isSelected"
        :is-completed="todo.isCompleted"
      />
    </div>
  </button>
</template>

<style scoped lang="scss">
@import '@/styles/colors';
.todoItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  &__content {
    text-align: left;
    vertical-align: baseline;
    margin-right: 15px;
  }

  &__actions {
    display: flex;
    align-items: center;
  }

  &__action:not(:last-child) {
    margin-right: 5px;
  }

  &--is-selected.todoItem--is-selected {
    color: $white;
  }

  &--is-completed {
    color: $main-disable;
  }
}
</style>
