
const ID = Symbol();
const NAME = Symbol();
const PREFIX = Symbol();
const PLATFORM = Symbol();

export default class Brand {
  constructor({
    id,
    name,
    prefix,
    platform,
  }) {
    this[ID] = id;
    this[NAME] = name;
    this[PREFIX] = prefix;
    this[PLATFORM] = platform;
  }

  get id() {
    return this[ID];
  }
  get name() {
    return this[NAME];
  }
  get prefix() {
    return this[PREFIX]
  }
}
