const BASE = Symbol();

export default class Wrapper {
  constructor(base) {
    this[BASE] = base;
  }
  get base() {
    return this[BASE];
  }
}
