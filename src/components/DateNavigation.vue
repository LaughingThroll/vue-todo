<script setup lang="ts">
import ArrowButton from './ArrowButton.vue'
</script>

<template>
  <div class="dateNavigation">
    <ArrowButton />

    <div class="dateNavigation__date date">
      <div class="date__details date-details">
        <div class="date-details__number-day">19</div>
        <div class="date-details__other">
          <div class="date-details__month">JAN</div>
          <div class="date-details__year">2023</div>
        </div>
      </div>
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

.date-details {
  display: flex;
  align-items: center;

  &__number-day {
    font-size: 38px;
    font-weight: 700;
    margin-right: 5px;
  }
  &__other {
    font-size: 14px;
  }
  &__month {
    @include medium-date;
    margin-bottom: 2px;
  }
}
</style>
