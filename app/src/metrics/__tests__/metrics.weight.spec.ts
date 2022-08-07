import { describe, expect, it } from 'vitest';
import { convertWeight } from '../metrics.utils';

describe('Metrics weight', () => {
  it('should not convert from kgs to kgs', () => {
    expect(convertWeight({ weight: 88.56, originFormat: 0, targetFormat: 0 })).toBe(88.56);
  });

  it('should not convert from lbs to lbs', () => {
    expect(convertWeight({ weight: 88.56, originFormat: 1, targetFormat: 1 })).toBe(88.56);
  });

  it('should convert from kgs to lbs', () => {
    expect(convertWeight({ weight: 88.56, originFormat: 0, targetFormat: 1 })).toBe(195.24);
  });

  it('should convert from lbs to kgs', () => {
    expect(convertWeight({ weight: 195.24, originFormat: 1, targetFormat: 0 })).toBe(88.56);
  });

  it('should take into account the decimals', () => {
    expect(convertWeight({ weight: 88.56, originFormat: 0, targetFormat: 1, decimal: 5 })).toBe(
      195.24154
    );
  });
});
