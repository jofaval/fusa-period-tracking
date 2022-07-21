// Entities
import Entity from '../entity';
// Helpers
import { serialize } from '../../architecture/helpers/entity.helpers';

export default class Profile extends Entity implements IProfileEntity {
  public firstName: string;
  public lastName: string;
  public surName: string;
  public prefferedPronouns: IPronounsEntity;
  public genders: IGenderEntity[];

  constructor(
    name: string,
    firstName: string,
    lastName: string,
    surName: string,
    prefferedPronouns: IPronounsEntity,
    genders: IGenderEntity[]
  ) {
    super(name);
    this.firstName = firstName;
    this.lastName = lastName;
    this.surName = surName;
    this.prefferedPronouns = prefferedPronouns;
    this.genders = genders;
  }

  serialize(): string {
    return serialize({
      name: this.name,
      firstName: this.firstName,
      lastName: this.lastName,
      surName: this.surName,
      prefferedPronouns: this.prefferedPronouns.serialize(),
      genders: this.genders?.map(serialize),
    });
  }

  toString(): string {
    const {
      name,
      firstName,
      surName,
      lastName,
      prefferedPronouns: { they, them, their },
    } = this;

    return `Profile "${name}" for ${firstName} "${surName}" ${lastName}, (${they}/${them}/${their})`;
  }
}
