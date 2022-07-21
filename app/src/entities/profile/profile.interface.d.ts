/**
 * The details about a profile
 */
interface IProfileEntity extends IEntity {
  /**
   * The name given to a profile, suppose you want to have a "mine"/"main" and a friend's one
   */
  name: string;

  /**
   * The name of the gender
   */
  firstName: string;

  /**
   * The last name(s) of a person
   */
  lastName: string;

  /**
   * The preferred name of a person
   */
  surName: string;

  /**
   * The set of preferred pronouns for a profile
   */
  prefferedPronouns: IPronounsEntity;

  /**
   * A person may have multiple genders and they may want to specify them
   */
  genders: IGenderEntity[];
}
