<template>
  <div
    class="metrics__intercourse__container rounded-md bg-orange-500 shadow-lg shadow-orange-500/50 text-white p-3"
  >
    <div class="metrics__intercourse__label font-bold">
      <span class="metrics__intercourse__label__title">{{ $t('metrics.intercourse.title') }}</span>
    </div>
    <div class="metrics__intercourse">
      <span class="metrics__intercourse__value"></span>&nbsp;<span
        class="metrics__intercourse__suffix"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vendors
import { defineComponent } from 'vue';

const props = defineProps({
  value: { type: String, required: true },
});

defineComponent({
  name: 'MetricsIntercourseComponent',
});
</script>

<style scoped></style>
