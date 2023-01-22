<script setup lang="ts">
import ArrowButton from './ArrowButton.vue'
import DateDetails from './DateDetails.vue'
</script>

<template>
  <div class="dateNavigation">
    <ArrowButton />

    <div class="dateNavigation__date date">
      <DateDetails class="date__details" />
      <div class="date__day">Thursday</div>
    </div>

    <ArrowButton direction="right" />
  </div>
</template>

<style scoped lang="scss">
@import './../styles/mixins';

.dateNavigation {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__date {
    min-width: 250px;
  }
}

.date {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__day {
    font-size: 14px;
    @include medium-date;
  }
}
</style>
