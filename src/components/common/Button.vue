<script setup lang="ts">
interface ButtonProps {
  isSecondary?: boolean
}

defineProps<ButtonProps>()
</script>

<template>
  <button
    class="button"
    :class="{
      'button--secondary': isSecondary,
    }"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
@import '@/styles/colors';

.button {
  padding: 10px;
  border-radius: 10px;
  background-color: $main-green;
  color: $white;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: $button-hover;
  }

  &--secondary {
    background-color: transparent;
    border: 2px solid $main-green;
    color: $black;

    &:hover {
      background-color: $main-green;
      color: $white;
    }
  }
}
</style>
