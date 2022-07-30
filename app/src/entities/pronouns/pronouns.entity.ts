// Entities
import Entity from '../entity';
// Helpers
import { serialize } from '@/architecture/helpers/entity.helpers';

export default class Pronouns extends Entity implements IPronounsEntity {
  public they: string;
  public them: string;
  public their: string;
  public theirs: string;

  constructor(name: string, they: string, them: string, their: string, theirs: string) {
    super(name);
    this.they = they;
    this.them = them;
    this.their = their;
    this.theirs = theirs;
  }

  serialize(): string {
    return serialize({
      name: this.name,
      they: this.they,
      them: this.them,
      their: this.their,
      theirs: this.theirs,
    });
  }

  toString(): string {
    const { name, they, them, their, theirs } = this;
    return `Pronouns named "${name}" are: (${they}/${them}/${their}/${theirs})`;
  }
}
