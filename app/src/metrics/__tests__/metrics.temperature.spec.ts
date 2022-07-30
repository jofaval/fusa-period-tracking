// Utilities
import { convertTemperature } from '../metrics.utils';
// Vendors
import { describe, it, expect } from 'vitest';

describe('Metrics temperature', () => {
  it('should convert from celsius to fahrenheit', () => {
    expect(convertTemperature({ temperature: 30, originFormat: 0, targetFormat: 1 })).toBe(86);
    expect(convertTemperature({ temperature: -30, originFormat: 0, targetFormat: 1 })).toBe(-22);
  });

  it('should not mutate while converting from celsius to celsius', () => {
    expect(convertTemperature({ temperature: 30, originFormat: 0, targetFormat: 0 })).toBe(30);
    expect(convertTemperature({ temperature: -30, originFormat: 0, targetFormat: 0 })).toBe(-30);
  });

  it('should convert from celsius to kelvin', () => {
    expect(convertTemperature({ temperature: 30, originFormat: 0, targetFormat: 2 })).toBe(303.15);
    expect(convertTemperature({ temperature: -30, originFormat: 0, targetFormat: 2 })).toBe(243.15);
  });

  it('should convert from kelvin to celsius', () => {
    expect(convertTemperature({ temperature: 30, originFormat: 2, targetFormat: 0 })).toBe(-243.15);
    expect(convertTemperature({ temperature: -30, originFormat: 2, targetFormat: 0 })).toBe(
      -303.15
    );
  });

  it('should convert from kelvin to fahrenheit', () => {
    expect(convertTemperature({ temperature: 30, originFormat: 2, targetFormat: 1 })).toBe(-405.67);
    expect(convertTemperature({ temperature: -30, originFormat: 2, targetFormat: 1 })).toBe(
      -513.67
    );
  });

  it('should not mutate while converting from kelvin to kelvin', () => {
    expect(convertTemperature({ temperature: 30, originFormat: 2, targetFormat: 2 })).toBe(30);
    expect(convertTemperature({ temperature: -30, originFormat: 2, targetFormat: 2 })).toBe(-30);
  });

  it('should convert from fahrenheit to celsius', () => {
    expect(convertTemperature({ temperature: 30, originFormat: 1, targetFormat: 0 })).toBe(-1.11);
    expect(convertTemperature({ temperature: -30, originFormat: 1, targetFormat: 0 })).toBe(-34.44);
  });

  it('should convert from fahrenheit to kelvin', () => {
    expect(convertTemperature({ temperature: 30, originFormat: 1, targetFormat: 2 })).toBe(272.04);
    expect(convertTemperature({ temperature: -30, originFormat: 1, targetFormat: 2 })).toBe(238.71);
  });

  it('should not mutate while converting from fahrenheit to fahrenheit', () => {
    expect(convertTemperature({ temperature: 30, originFormat: 1, targetFormat: 1 })).toBe(30);
    expect(convertTemperature({ temperature: -30, originFormat: 1, targetFormat: 1 })).toBe(-30);
  });
});
