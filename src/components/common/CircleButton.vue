<script setup lang="ts">
import TrashIcon from '@/assets/trash.svg?component'
import PencilIcon from '@/assets/pencil.svg?component'

interface CircleButton {
  // icon: 'plus' | 'trash' | 'pencil'
  icon: string
}

withDefaults(defineProps<CircleButton>(), {
  icon: 'plus',
})
</script>
<template>
  <button
    class="circleButton"
    :class="{
      'circleButton--plus': $props.icon === 'plus',
      'circleButton--trash': $props.icon === 'trash',
      'circleButton--pencil': $props.icon === 'pencil',
    }"
  >
    <TrashIcon v-if="$props.icon === 'trash'" />
    <PencilIcon v-if="$props.icon === 'pencil'" />
  </button>
</template>
<style scoped lang="scss">
@import '@/styles/colors';

.circleButton {
  position: relative;
  width: 75px;
  height: 75px;
  border-radius: 50%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 20px;
  }

  &.circleButton--plus {
    background-color: $main-green;

    &::before,
    &::after {
      background-color: $plus-icon;
      width: 3px;
      border-radius: 3px;
    }

    &::before {
      transform: translate(-50%, -50%);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }

  &.circleButton--trash {
    background-color: $main-red;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      transform: translate(-45%, -50%);
      fill: $trash-icon;
    }
  }

  &.circleButton--pencil {
    background-color: $main-blue;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      transform: translate(-45%, -50%);
      fill: $pencil-icon;
    }
  }
}
</style>
