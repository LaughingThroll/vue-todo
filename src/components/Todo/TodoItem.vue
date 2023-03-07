<script setup lang="ts">
import Checkbox from '../common/Checkbox.vue'

interface TodoItemEmits {
  toggleTodo?: () => void
}

interface TodoItemProps {
  title: string
  isCompleted?: boolean
}

withDefaults(defineProps<TodoItemProps>(), {
  isCompleted: false,
})

defineEmits<TodoItemEmits>()
</script>

<template>
  <button
    class="todoItem"
    @click="$emit('toggleTodo')"
    :class="{ 'todoItem--isCompleted': isCompleted }"
  >
    <div class="todoItem__content">{{ title }}</div>
    <div class="todoItem__actions">
      <Checkbox class="todoItem__action" :is-completed="isCompleted" />
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

  &--isCompleted {
    color: $main-disable;
  }
}
</style>
