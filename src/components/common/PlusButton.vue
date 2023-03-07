<template>
  <button class="plusButton"></button>
</template>
<style scoped lang="scss">
@import '@/styles/colors';

.plusButton {
  position: relative;
  background-color: $main-green;
  width: 75px;
  height: 75px;
  border-radius: 50%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 20px;
    border-radius: 3px;
    background-color: $plus-icon-green;
  }

  &::before {
    transform: translate(-50%, -50%);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
}
</style>
