<script setup lang="ts">
import { ref, watch } from 'vue'
import CheckIcon from './../assets/check.svg?component'

interface CheckboxEmits {
  toggleCheckbox?: (isCompleted: boolean) => void
}

defineEmits<CheckboxEmits>()

interface CheckboxProps {
  isCompleted?: boolean
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  isCompleted: false,
})

const isCompleted = ref(props.isCompleted)

const toggleCheckbox = () => {
  isCompleted.value = !isCompleted.value
}

watch(
  () => props.isCompleted,
  (value: boolean) => {
    isCompleted.value = value
  }
)
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
    <CheckIcon class="checkbox__icon" v-if="isCompleted" />
  </button>
</template>

<style scoped lang="scss">
@import './../styles/colors';

.checkbox {
  width: 25px;
  height: 25px;
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
