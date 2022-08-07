// Constants
import metricsConstants from './metrics.constants';

export const celsiusToFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32;
export const fahrenheitToCelsius = (fahrenheit: number): number => ((fahrenheit - 32) * 5) / 9;
export const celsiusToKelvin = (celsius: number): number => celsius + 273.15;
export const kelvinToCelsius = (kelvin: number): number => kelvin - 273.15;

type MetricsStandarizeTemperature = {
  temperature: number;
  originFormat: MetricsTemperatureFormat;
};

export const standarizeTemperature = ({
  temperature,
  originFormat = metricsConstants.TEMPERATURE.FORMATS.CELSIUS,
}: MetricsStandarizeTemperature): number => {
  let standarizedTempreature: number = temperature;

  switch (originFormat) {
    case metricsConstants.TEMPERATURE.FORMATS.FAHRENHEIT:
      standarizedTempreature = fahrenheitToCelsius(temperature);
      break;
    case metricsConstants.TEMPERATURE.FORMATS.KELVIN:
      standarizedTempreature = kelvinToCelsius(temperature);
      break;
  }

  return standarizedTempreature;
};

type MetricsTransformTemperature = {
  temperature: number;
  targetFormat: MetricsTemperatureFormat;
};

export const transformTemperature = ({
  temperature,
  targetFormat = metricsConstants.TEMPERATURE.FORMATS.CELSIUS,
}: MetricsTransformTemperature): number => {
  let transformedTempreature: number = temperature;

  switch (targetFormat) {
    case metricsConstants.TEMPERATURE.FORMATS.FAHRENHEIT:
      transformedTempreature = celsiusToFahrenheit(temperature);
      break;
    case metricsConstants.TEMPERATURE.FORMATS.KELVIN:
      transformedTempreature = celsiusToKelvin(temperature);
      break;
  }

  return transformedTempreature;
};

type MetricsConvertTemperature = {
  temperature: number;
  originFormat: MetricsTemperatureFormat;
  targetFormat: MetricsTemperatureFormat;
  decimals?: number;
};

export const convertTemperature = ({
  temperature,
  originFormat = metricsConstants.TEMPERATURE.FORMATS.CELSIUS,
  targetFormat = metricsConstants.TEMPERATURE.FORMATS.CELSIUS,
  decimals = 2,
}: MetricsConvertTemperature): number => {
  const standarizedTempreature: number = standarizeTemperature({ temperature, originFormat });
  const transformedTempreature: number = transformTemperature({
    temperature: standarizedTempreature,
    targetFormat,
  });

  return Number(transformedTempreature.toFixed(decimals));
};

export const convertWeight = ({
  weight,
  originFormat = metricsConstants.WEIGHT.FORMATS.KGS,
  targetFormat = metricsConstants.WEIGHT.FORMATS.KGS,
  decimal = 2,
}: {
  weight: number;
  originFormat: number;
  targetFormat: number;
  decimal?: number;
}): number => {
  if (originFormat === targetFormat) {
    return Number(weight.toFixed(decimal));
  }

  let newWeight = weight;
  const conversor = 2.2046244;
  if (targetFormat === metricsConstants.WEIGHT.FORMATS.KGS) {
    newWeight /= conversor;
  } else if (targetFormat === metricsConstants.WEIGHT.FORMATS.LBS) {
    newWeight *= conversor;
  }

  return Number(newWeight.toFixed(decimal));
};

export default { convertTemperature, convertWeight };
