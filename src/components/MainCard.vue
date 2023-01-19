<script setup lang="ts"></script>

<template>
  <div class="mainCard">
    <div class="mainCard__header">
      <slot name="header"></slot>
    </div>
    <div class="mainCard__body"><slot name="body"></slot></div>
    <div class="mainCard__footer"><slot name="footer"></slot></div>
  </div>
</template>

<style scoped lang="scss">
@import './../styles/_colors.scss';

.mainCard {
  width: 320px;
  min-height: 400px;
  background-color: $white;
  padding: 40px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;

  &__body {
    margin: 40px 0 20px 0;
  }

  &__footer {
    justify-self: flex-end;
  }
}
</style>
