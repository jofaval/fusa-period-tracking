/**
 * All the information related to a set of pronouns, for this application's purposes that is
 */
interface IPronounsEntity extends IEntity {
  /**
   * The name of the pronouns pack
   */
  name: string;

  /**
   *
   */
  they: string;

  /**
   *
   */
  them: string;

  /**
   *
   */
  their: string;

  /**
   *
   */
  theirs: string;
}
