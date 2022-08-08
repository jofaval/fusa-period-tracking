<template>
  <div
    class="metrics__birth-control__container rounded-md bg-orange-500 shadow-lg shadow-orange-500/50 text-white p-3"
  >
    <div class="metrics__birth-control__label font-bold">
      <span class="metrics__birth-control__label__title">{{
        $t('metrics.birthControl.title')
      }}</span>
    </div>
    <div class="metrics__birth-control">
      <span class="metrics__birth-control__value"></span>&nbsp;<span
        class="metrics__birth-control__suffix"
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
  name: 'MetricsBirthControlComponent',
});
</script>

<style scoped></style>
