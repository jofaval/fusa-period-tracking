// Vendors
import { describe, expect, it } from 'vitest';
// Constants
import configConstants from '../config.constants';

describe('Config constants', () => {
  it('should return production and dev public paths', () => {
    expect(Object.values(configConstants.ENVIRONTMENTS)).toEqual(
      expect.arrayContaining(['production', 'dev'])
    );
  });

  it('should return production and dev public paths', () => {
    expect(configConstants.PUBLIC_PATHS).toEqual(
      expect.objectContaining({
        production: '/fusa-period-tracking/',
        dev: '/',
      })
    );
  });
});
