<script setup lang="ts">
import CircleButton from './CircleButton.vue'

interface CircleButtons {
  icons: string[]
}

defineProps<CircleButtons>()
</script>
<template>
  <div
    class="circleButtons"
    :class="{
      'circleButtons--two': $props.icons.length === 2,
      'circleButtons--three': $props.icons.length === 3,
    }"
  >
    <CircleButton
      class="circleButtons__item"
      v-for="icon in $props.icons"
      :key="icon"
      :icon="icon"
    />
  </div>
</template>
<style scoped lang="scss">
.circleButtons {
  position: relative;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  overflow: hidden;

  &__item {
    position: absolute;
  }

  &.circleButtons--two {
    .circleButtons__item {
      height: 110%;
      width: 50%;
      transform: translate(0, -2%);
      top: 0;

      &:nth-child(1) {
        left: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:nth-child(2) {
        right: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  &.circleButtons--three {
    .circleButtons__item {
      &:nth-child(1) {
        top: 0;
        left: 0;
        height: 50%;
        width: 100%;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      &:nth-child(2) {
        bottom: 0;
        left: 0;
        width: 50%;
        height: 50%;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-bottom-right-radius: 0;

        :deep(svg) {
          transform: translate(-30%, -65%);
        }
      }

      &:nth-child(3) {
        bottom: 0;
        right: 0;
        width: 50%;
        height: 50%;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;

        :deep(svg) {
          transform: translate(-65%, -65%);
        }
      }
    }
  }
}
</style>
