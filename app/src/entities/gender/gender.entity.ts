// Entities
import Entity from '../entity';
// Helpers
import { serialize } from '@/architecture/helpers/entity.helpers';

export default class Gender extends Entity implements IGenderEntity {
  public pronouns: IPronounsEntity;

  constructor(name: string, pronouns: IPronounsEntity) {
    super(name);
    this.pronouns = pronouns;
  }

  serialize(): string {
    return serialize({
      name: this.name,
      pronouns: this.pronouns.serialize(),
    });
  }

  toString(): string {
    const { name, pronouns } = this;
    return `Gender "${name}" uses the pronouns: ${pronouns.serialize()}`;
  }
}
