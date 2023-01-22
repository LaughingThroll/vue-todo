<script setup lang="ts">
interface DateDetailsProps {
  date: Date
}

defineProps<DateDetailsProps>()

const getNumberDay = (date: Date) => date.getDate()
const getCurrentYear = (date: Date) => date.getFullYear()
const getStringMonth = (date: Date) => {
  return date.toLocaleDateString('default', { month: 'short' })
}
const getStringDay = (date: Date) => {
  return date.toLocaleDateString('default', { weekday: 'long' })
}
</script>

<template>
  <div class="date-details">
    <div class="date-details__inner">
      <div class="date-details__number-day">{{ getNumberDay(date) }}</div>
      <div class="date-details__other">
        <div class="date-details__month">{{ getStringMonth(date) }}</div>
        <div class="date-details__year">{{ getCurrentYear(date) }}</div>
      </div>
    </div>
    <div class="date-details__day">{{ getStringDay(date) }}</div>
  </div>
</template>

<style scoped lang="scss">
@import './../styles/mixins';
.date-details {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__day {
    font-size: 14px;
    @include medium-date;
  }
  &__inner {
    display: flex;
    align-items: center;
  }

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
