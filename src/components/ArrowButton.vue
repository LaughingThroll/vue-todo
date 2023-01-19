<script setup lang="ts">
import Arrow from '../assets/arrow.svg?component'

interface ArrowButtonProps {
  direction: 'left' | 'right'
}

withDefaults(defineProps<ArrowButtonProps>(), {
  direction: 'left',
})
</script>

<template>
  <button :class="`arrow arrow--${direction}`">
    <Arrow />
  </button>
</template>

<style scope lang="scss">
@import './../styles/colors';

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;

  &--left svg {
    transform: rotate(180deg);
  }
}

.arrow svg {
  width: 15px;
  height: 15px;
}
</style>
