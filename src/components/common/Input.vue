<script setup lang="ts">
interface InputEmits {
  (e: 'update:value', value: string): void
}

interface InputProps {
  id: string
  value: string
  labelTitle?: string
  errorMessage?: string
  isRequired?: boolean
  placeholder?: string
}

const { value, id, errorMessage, isRequired, placeholder } =
  defineProps<InputProps>()
const emit = defineEmits<InputEmits>()

const updateValue = (event: Event) => {
  const value = (event.target as HTMLInputElement).value

  emit('update:value', value)
}
</script>

<template>
  <div
    class="input"
    :class="{
      'input--error': !!errorMessage,
    }"
  >
    <label
      class="input__label"
      :class="{
        'input__label--is-required': isRequired,
      }"
      :for="id"
    >
      {{ labelTitle }}
    </label>
    <input
      class="input__field"
      :value="value"
      :id="id"
      @input.trim="updateValue"
      :required="isRequired"
      :placeholder="placeholder"
    />
    <div v-if="!!errorMessage" class="input__error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/styles/colors';

.input {
  text-align: left;
  font-size: 16px;

  &__label {
    display: inline-block;
    cursor: pointer;
    margin-bottom: 5px;

    &--is-required {
      position: relative;

      &::after {
        content: '*';
        position: absolute;
        top: 50%;
        right: -10px;
        transform: translate(0, -50%);
        color: $main-error;
      }
    }
  }

  &__field {
    display: block;
    width: 100%;
    outline: none;
    border: none;
    padding: 5px 10px;

    font-size: 16px;
    border-bottom: 2px solid $input-border;
  }

  &__error-message {
    color: $main-error;
    margin-top: 5px;
  }

  &--error {
    .input__label {
      color: $main-error;
    }

    .input__field {
      border-bottom: 2px solid $main-error;
    }
  }
}
</style>
