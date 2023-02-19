<template>
  <button class="closeButton"></button>
</template>
<style scoped lang="scss">
@import './../styles/colors';

.closeButton {
  position: relative;
  padding: 2px;
  height: 15px;
  width: 15px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    width: 2px;
    border-radius: 3px;
    background-color: $white;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
</style>
