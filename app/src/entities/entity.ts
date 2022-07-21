export default class Entity implements IEntity {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  serialize(): string {
    return this.name.toString();
  }

  equal(other: IEntity): boolean {
    return this.name === other.name;
  }
}
