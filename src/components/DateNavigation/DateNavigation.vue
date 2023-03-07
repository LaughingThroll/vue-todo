<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import ArrowButton from '../common/ArrowButton.vue'
import DateDetails from './DateDetails.vue'

import { getFormattedDate } from '@/utils'

interface DateNavigationProps {
  (e: 'onChangeDate', date: string): void
}

const emit = defineEmits<DateNavigationProps>()

const DEFAULT_INTERVAL_DATE = 1
const currentDate = ref(new Date())

const getPreviousDate = (date: Date) => {
  const newDate = date.setDate(date.getDate() - DEFAULT_INTERVAL_DATE)
  currentDate.value = new Date(newDate)
}
const getNextDate = (date: Date) => {
  const newDate = date.setDate(date.getDate() + DEFAULT_INTERVAL_DATE)
  currentDate.value = new Date(newDate)
}

watchEffect(() => {
  emit('onChangeDate', getFormattedDate(currentDate.value))
})
</script>

<template>
  <div class="dateNavigation">
    <ArrowButton @click="getPreviousDate(currentDate)" />
    <DateDetails class="dateNavigation__date" :date="currentDate" />
    <ArrowButton @click="getNextDate(currentDate)" direction="right" />
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
