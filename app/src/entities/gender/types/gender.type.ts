// Types
import type PronounsEntityType from 'entities/pronouns/types/pronouns.type';

/**
 * All the information related to a gender, for this application's purposes that is
 */
export type GenderEntityType = {
  /**
   * The name of the gender
   */
  name: string;

  /**
   * All the information related to the pronouns this gender uses
   */
  pronouns: PronounsEntityType;
};

export default GenderEntityType;
