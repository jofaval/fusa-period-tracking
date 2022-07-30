<template>
  <div
    class="metrics__temperature__container rounded-md bg-orange-500 shadow-lg shadow-orange-500/50 text-white p-3"
  >
    <div class="metrics__temperature__label font-bold">
      <span class="metrics__temperature__label__title">{{ $t('metrics.temperature.title') }}</span>
    </div>
    <div class="metrics__temperature">
      <span class="metrics__temperature__value">{{ getFormattedTemperature() }}</span
      >&nbsp;<span class="metrics__temperature__suffix">{{ $t(getTemperatureSuffixLabel()) }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Vendors
import { defineComponent } from 'vue';
// Constants
import metricsConstants from '@/metrics/metrics.constants';
// Utilities
import { convertTemperature } from '@/metrics/metrics.utils';

const props = defineProps({
  temperature: { type: Number, required: true },
  originFormat: { type: Number, default: metricsConstants.TEMPERATURE.FORMATS.CELSIUS },
  targetFormat: { type: Number, default: metricsConstants.TEMPERATURE.FORMATS.CELSIUS },
});

const getFormattedTemperature = (): number =>
  convertTemperature({
    temperature: props.temperature,
    originFormat: props.originFormat,
    targetFormat: props.targetFormat,
  });

const getTemperatureSuffixLabel = (): string => {
  let suffix = '';

  switch (props.targetFormat) {
    case metricsConstants.TEMPERATURE.FORMATS.CELSIUS:
      suffix = 'celsius';
      break;
    case metricsConstants.TEMPERATURE.FORMATS.FAHRENHEIT:
      suffix = 'fahrenheit';
      break;
    case metricsConstants.TEMPERATURE.FORMATS.KELVIN:
      suffix = 'kelvin';
      break;
  }

  return `metrics.temperature.suffix.${suffix}`;
};
defineComponent({
  name: 'MetricsTemperatureComponent',
});
</script>

<style scoped>
.metrics__temperature__container {
  max-width: 150px;
}
</style>
