<script setup lang="ts"></script>

<template>
  <div class="mainCard">
    <header class="mainCard__header">
      <slot name="header"></slot>
    </header>
    <main class="mainCard__body"><slot name="body"></slot></main>
    <footer class="mainCard__footer"><slot name="footer"></slot></footer>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/_colors.scss';

.mainCard {
  position: relative;
  width: 320px;
  min-height: 400px;
  background-color: $white;
  padding: 40px 0;
  text-align: center;
  display: flex;
  flex-direction: column;

  &__body {
    margin: 30px 0 20px 0;
    max-height: 220px;
    height: 100%;
    overflow-y: auto;
  }

  &__header,
  &__footer {
    padding: 0 14px;
  }

  &__footer {
    justify-self: flex-end;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translate(100%, 50%);
  }
}
</style>
