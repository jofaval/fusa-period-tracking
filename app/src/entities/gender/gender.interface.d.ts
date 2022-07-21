/**
 * All the information related to a gender, for this application's purposes that is
 */
interface IGenderEntity extends Entity {
  /**
   * The name of the gender
   */
  name: string;

  /**
   * All the information related to the pronouns this gender uses
   */
  pronouns: IPronounsEntity;
}
