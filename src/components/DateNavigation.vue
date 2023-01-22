<script setup lang="ts">
import ArrowButton from './ArrowButton.vue'
import DateDetails from './DateDetails.vue'

const currentDate = new Date()
</script>

<template>
  <div class="dateNavigation">
    <ArrowButton />
    <DateDetails class="dateNavigation__date" :date="currentDate" />
    <ArrowButton direction="right" />
  </div>
</template>

<style scoped lang="scss">
.dateNavigation {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__date {
    min-width: 250px;
  }
}
</style>
