<script setup lang="ts">
import MainCard from './components/MainCard.vue'
</script>

<template>
  <main class="main">
    <MainCard>
      <template #header>
        <div>Hello header</div>
      </template>
      <template #body>
        <div>Hello Body</div>
      </template>
      <template #footer>
        <div>Hello Footer</div>
      </template>
    </MainCard>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
