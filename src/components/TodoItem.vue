<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from './Checkbox.vue'

interface TodoItemProps {
  content: string
  isCompleted?: boolean
}

const props = withDefaults(defineProps<TodoItemProps>(), {
  isCompleted: false,
})

const isCompleted = ref(props.isCompleted)

const toggleTodoItem = (isOutCompleted: boolean) => {
  isCompleted.value = isOutCompleted
}
</script>

<template>
  <div class="todoItem" :class="{ 'todoItem--isCompleted': isCompleted }">
    <div class="todoItem__content">{{ content }}</div>
    <div class="todoItem__actions">
      <Checkbox
        class="todoItem__action"
        @toggle-checkbox="toggleTodoItem"
        :is-completed="isCompleted"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './../styles/colors';
.todoItem {
  display: flex;
  align-items: center;
  justify-content: space-between;

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

  &--isCompleted {
    color: $main-disable;
  }
}
</style>
