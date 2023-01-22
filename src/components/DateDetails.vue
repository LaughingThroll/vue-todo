<script setup lang="ts"></script>

<template>
  <div class="date-details">
    <div class="date-details__number-day">19</div>
    <div class="date-details__other">
      <div class="date-details__month">JAN</div>
      <div class="date-details__year">2023</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './../styles/mixins';
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
