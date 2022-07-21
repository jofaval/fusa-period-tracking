// Vendors
import { describe, expect, it } from 'vitest';
// Entities
import Gender from './gender.entity';
import Pronouns from '../pronouns/pronouns.entity';

describe('Entity / Profile', () => {
  it('should construct properly', () => {
    let gender;
    expect(
      () => (gender = new Gender('Male', new Pronouns('Male', 'he', 'him', 'his', 'his')))
    ).not.toThrowError();
    expect(gender).not.toBeNull();
  });

  it('should print with all the details', () => {
    const female = new Gender('Female', new Pronouns('Female', 'she', 'her', 'hers', 'hers'));
    expect(female.toString()).toBe(
      'Gender "Female" uses the pronouns: {"name":"Female","they":"she","them":"her","their":"hers","theirs":"hers"}'
    );
  });

  it('should serialize properly', () => {
    const gender = new Gender('Female', new Pronouns('Female', 'she', 'her', 'hers', 'hers'));
    expect(gender.serialize()).toBe(
      '{"name":"Female","pronouns":"{\\"name\\":\\"Female\\",\\"they\\":\\"she\\",\\"them\\":\\"her\\",\\"their\\":\\"hers\\",\\"theirs\\":\\"hers\\"}"}'
    );
  });

  it('should equal properly', () => {
    const gender = new Gender('Female', new Pronouns('Female', 'she', 'her', 'hers', 'hers'));

    const clonedGender = Object.assign(Object.create(Object.getPrototypeOf(gender)), gender);
    expect(gender.equal(clonedGender)).toBe(true);
  });

  it('should equal differently properly', () => {
    const gender = new Gender('Female', new Pronouns('Female', 'she', 'her', 'hers', 'hers'));

    const clonedGender = Object.assign(Object.create(Object.getPrototypeOf(gender)), gender);
    clonedGender.name = 'Different';
    expect(gender.equal(clonedGender)).toBe(false);
  });
});
