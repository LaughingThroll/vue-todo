<script setup lang="ts">
import { ref } from 'vue'
import Check from './../assets/check.svg?component'

interface CheckboxEmits {
  toggleCheckbox?: (isCompleted: boolean) => void
}

defineEmits<CheckboxEmits>()

const isCompleted = ref(false)

const toggleCheckbox = () => {
  isCompleted.value = !isCompleted.value
}
</script>

<template>
  <button
    class="checkbox"
    :class="{ 'checkbox--isCompleted': isCompleted }"
    @click="
      () => {
        toggleCheckbox()
        $emit('toggleCheckbox', isCompleted)
      }
    "
  >
    <Check class="checkbox__icon" v-if="isCompleted" />
  </button>
</template>

<style scoped lang="scss">
@import './../styles/colors';

.checkbox {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid $main-border;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    max-width: 100%;
    max-height: 100%;
    fill: $main-green;
  }

  &--isCompleted {
    border: 1px solid $main-green;
  }
}
</style>
