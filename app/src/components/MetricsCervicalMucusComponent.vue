<template>
  <div
    class="metrics__cervical-mucus__container rounded-md bg-orange-500 shadow-lg shadow-orange-500/50 text-white p-3"
  >
    <div class="metrics__cervical-mucus__label font-bold">
      <span class="metrics__cervical-mucus__label__title">{{
        $t('metrics.cervicalMucus.title')
      }}</span>
    </div>
    <div class="metrics__cervical-mucus">
      <span class="metrics__cervical-mucus__value"></span>&nbsp;<span
        class="metrics__cervical-mucus__suffix"
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
  name: 'MetricsCervicalMucusComponent',
});
</script>

<style scoped></style>
