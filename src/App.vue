<script setup lang="ts">
import MainCard from './components/MainCard.vue'
import DateNavigation from './components/DateNavigation.vue'
import TodoItem from './components/TodoItem.vue'
</script>

<template>
  <main class="main">
    <MainCard>
      <template #header>
        <DateNavigation />
      </template>
      <template #body>
        <TodoItem content="Hello World" />
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
