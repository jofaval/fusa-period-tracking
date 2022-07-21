// Vendors
import { describe, expect, it } from 'vitest';
// Entities
import Gender from '../gender/gender.entity';
import Pronouns from '../pronouns/pronouns.entity';
import Profile from './profile.entity';

describe('Entity / Profile', () => {
  it('should construct properly', () => {
    let mainProfile;
    expect(
      () =>
        (mainProfile = new Profile(
          'Main',
          'José',
          'Fabra Valverde',
          'Pepe',
          new Pronouns('Male', 'he', 'him', 'his', 'his'),
          [new Gender('Male', new Pronouns('Male', 'he', 'him', 'his', 'his'))]
        ))
    ).not.toThrowError();
    expect(mainProfile).not.toBeNull();
  });

  it('should print with all the details', () => {
    const person = new Profile(
      'Main',
      'José',
      'Fabra Valverde',
      'Pepe',
      new Pronouns('Male', 'he', 'him', 'his', 'his'),
      [new Gender('Male', new Pronouns('Male', 'he', 'him', 'his', 'his'))]
    );

    expect(person.toString()).toBe('Profile "Main" for José "Pepe" Fabra Valverde, (he/him/his)');
  });

  it('should serialize properly', () => {
    const gender = new Profile(
      'Main',
      'José',
      'Fabra Valverde',
      'Pepe',
      new Pronouns('Male', 'he', 'him', 'his', 'his'),
      [new Gender('Male', new Pronouns('Male', 'he', 'him', 'his', 'his'))]
    );
    expect(gender.serialize()).toBe(
      [
        '{',
        '"name":"Main","firstName":"José","lastName":"Fabra Valverde","surName":"Pepe",',
        '"prefferedPronouns":"{\\"name\\":\\"Male\\",\\"they\\":\\"he\\",\\"them\\":\\"him\\",\\"their\\":\\"his\\",\\"theirs\\":\\"his\\"}",',
        '"genders":["{\\"name\\":\\"Male\\",\\"pronouns\\":{\\"name\\":\\"Male\\",\\"they\\":\\"he\\",\\"them\\":\\"him\\",\\"their\\":\\"his\\",\\"theirs\\":\\"his\\"}}"]',
        '}',
      ].join('')
    );
  });

  it('should equal properly', () => {
    const person = new Profile(
      'Main',
      'José',
      'Fabra Valverde',
      'Pepe',
      new Pronouns('Male', 'he', 'him', 'his', 'his'),
      [new Gender('Male', new Pronouns('Male', 'he', 'him', 'his', 'his'))]
    );

    const clonedPerson = Object.assign(Object.create(Object.getPrototypeOf(person)), person);
    expect(person.equal(clonedPerson)).toBe(true);
  });

  it('should equal differently correctly', () => {
    const person = new Profile(
      'Main',
      'José',
      'Fabra Valverde',
      'Pepe',
      new Pronouns('Male', 'he', 'him', 'his', 'his'),
      [new Gender('Male', new Pronouns('Male', 'he', 'him', 'his', 'his'))]
    );

    const clonedPerson = Object.assign(Object.create(Object.getPrototypeOf(person)), person);
    clonedPerson.name = 'Different';
    expect(person.equal(clonedPerson)).toBe(false);
  });
});
