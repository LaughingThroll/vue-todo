<script setup lang="ts">
import CloseButton from './CloseButton.vue'

interface ModalProps {
  isVisible: boolean
}

interface ModalEmits {
  onClose?: () => void
}

const { isVisible } = defineProps<ModalProps>()
defineEmits<ModalEmits>()
</script>
<template>
  <div v-if="isVisible" class="overlay" @click="$emit('onClose')">
    <div class="modal" @click.stop>
      <header class="modal__header">
        <CloseButton class="modal__close" @click="$emit('onClose')" />
      </header>
      <main class="modal__body">
        <slot name="body"></slot>
      </main>
      <footer class="modal__footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './../styles/colors';

.overlay {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $overlay;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  max-width: 450px;
  min-width: 320px;
  min-height: 300px;
  border-radius: 6px;
  overflow: hidden;
  background-color: $white;

  &__header {
    position: relative;
    background-color: $main-green;
    height: 25px;
    padding: 0 10px;
  }

  &__close {
    position: absolute;
    top: 0;
    right: 10px;
    transform: translate(0, 30%);
  }
}
</style>
