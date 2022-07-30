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
};

export const convertTemperature = ({
  temperature,
  originFormat = metricsConstants.TEMPERATURE.FORMATS.CELSIUS,
  targetFormat = metricsConstants.TEMPERATURE.FORMATS.CELSIUS,
}: MetricsConvertTemperature): number => {
  const standarizedTempreature: number = standarizeTemperature({ temperature, originFormat });
  const transformedTempreature: number = transformTemperature({
    temperature: standarizedTempreature,
    targetFormat,
  });

  return transformedTempreature;
};

export default { convertTemperature };
