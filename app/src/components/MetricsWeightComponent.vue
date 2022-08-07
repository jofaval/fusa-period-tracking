<template>
  <div
    class="metrics__weight__container rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white p-3"
  >
    <div class="metrics__weight__label font-bold">
      <span class="metrics__weight__label__title">{{ $t('metrics.weight.title') }}</span>
    </div>
    <div class="metrics__weight">
      <span class="metrics__weight__value">{{ getFormattedWeight() }}</span
      >&nbsp;<span class="metrics__weight__suffix">{{ $t(getWeightSuffixLabel()) }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Vendors
import { defineComponent } from 'vue';
// Constants
import metricsConstants from '@/metrics/metrics.constants';
// Utilities
import { convertWeight } from '@/metrics/metrics.utils';

const props = defineProps({
  weight: { type: Number, required: true },
  originFormat: { type: Number, default: metricsConstants.WEIGHT.FORMATS.KGS },
  targetFormat: { type: Number, default: metricsConstants.WEIGHT.FORMATS.KGS },
});

const getFormattedWeight = (): number =>
  convertWeight({
    weight: props.weight,
    originFormat: props.originFormat,
    targetFormat: props.targetFormat,
  });

const getWeightSuffixLabel = (): string => {
  let suffix = '';

  switch (props.targetFormat) {
    case metricsConstants.WEIGHT.FORMATS.KGS:
      suffix = 'kgs';
      break;
    case metricsConstants.WEIGHT.FORMATS.LBS:
      suffix = 'lbs';
      break;
  }

  return `metrics.weight.suffix.${suffix}`;
};
defineComponent({
  name: 'MetricsWeightComponent',
});
</script>

<style scoped>
.metrics__weight__container {
  max-width: 150px;
}
</style>
