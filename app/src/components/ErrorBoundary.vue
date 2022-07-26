<script setup lang="ts">
// Vendors
import { onErrorCaptured } from 'vue';

/**
 * Debugs a `console.log()` only if the environment is not on production
 * @param args The elements to display
 * @returns nothing
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dLog = (...args: any[]): void => {
  // Don't debug if the app is on production
  if (process.env.NODE_ENV === 'production') return;

  console.log(...args);
};

const props = defineProps({
  /** The error message to display */
  errorMessage: { type: String, default: 'Ooops! Something failed.' },
  /** If the error will continue upwards */
  shouldPropagate: { type: Boolean, default: false },
  /** The extra CSS classes that may be added to the container */
  cssClass: { type: String, default: '' },
});

let hasError = false;

onErrorCaptured(function (err, vm, info) {
  dLog('An unhandled error happened', err, vm, info);
  // eslint-disable-next-line
  hasError = true;
  return false;
});
</script>

<template>
  <div :class="`error-boundary__container ${cssClass}`">
    <div :class="`error-boundary ${cssClass}`">
      <div class="error-boundary--failure" v-if="hasError">
        <div class="error-boundary--failure__message">
          {{ errorMessage }}
        </div>
      </div>
      <div class="error-boundary--success" v-else>
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-boundary {
  &,
  &__container,
  &--failure,
  &--success {
    width: 100%;
    height: 100%;
  }
  &--failure {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
