// Vendors
import { describe, expect, it } from 'vitest';
// Entities
import Pronouns from './pronouns.entity';

describe('Entity / Pronouns', () => {
  it('should construct properly', () => {
    let malePronouns;
    expect(
      () => (malePronouns = new Pronouns('Male', 'he', 'him', 'his', 'his'))
    ).not.toThrowError();
    expect(malePronouns).not.toBeNull();
  });

  it('should print with all the details', () => {
    const nonbinary = new Pronouns('Non-Binary', 'they', 'them', 'their', 'theirs');
    expect(nonbinary.toString()).toBe('Pronouns named "Non-Binary" are: (they/them/their/theirs)');
  });

  it('should serialize properly', () => {
    const nonbinary = new Pronouns('Non-Binary', 'they', 'them', 'their', 'theirs');
    expect(nonbinary.serialize()).toBe(
      '{"name":"Non-Binary","they":"they","them":"them","their":"their","theirs":"theirs"}'
    );
  });

  it('should equal properly', () => {
    const pronouns = new Pronouns('Non-Binary', 'they', 'them', 'their', 'theirs');

    const clonedPronouns = Object.assign(Object.create(Object.getPrototypeOf(pronouns)), pronouns);
    expect(pronouns.equal(clonedPronouns)).toBe(true);
  });

  it('should equal differently properly', () => {
    const nonbinaryPronouns = new Pronouns('Non-Binary', 'they', 'them', 'their', 'theirs');
    const femalePronouns = new Pronouns('Female', 'she', 'her', 'hers', 'hers');

    expect(nonbinaryPronouns.equal(femalePronouns)).toBe(false);
  });
});
