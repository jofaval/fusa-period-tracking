/**
 * The global entity interface of the Fusa App
 */
interface IEntity {
  name: string;
  serialize: () => string;
  equal: (other: IEntity) => boolean;
}
