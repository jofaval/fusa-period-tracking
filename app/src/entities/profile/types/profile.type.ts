// Types
import type GenderEntityType from 'entities/gender/types/gender.type';
import type PronounsEntityType from 'entities/pronouns/types/pronouns.type';

/**
 * The details about a profile
 */
export type ProfileEntityType = {
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

  prefferedPronouns: PronounsEntityType;

  /**
   * A person may have multiple genders and they may want to specify them
   */
  genders: GenderEntityType[];
};

export default ProfileEntityType;
