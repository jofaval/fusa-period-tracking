import { describe, expect, it } from 'vitest';
import Entity from './entity';

describe('Entity', () => {
  it('should serialize correctly', () => {
    expect(new Entity('Unkown').serialize()).toBe('Unkown');
  });

  it('should flag as equal two identical entities', () => {
    expect(new Entity('Unkown').equal(new Entity('Unkown'))).toBe(true);
  });

  it('should not flag as equal two different entities', () => {
    expect(new Entity('Unkown').equal(new Entity('Different'))).toBe(false);
  });
});
