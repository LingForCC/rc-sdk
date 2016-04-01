
const SDK = Symbol();
const HANDLERS = Symbol();
const SUB = Symbol();
const FILTERS = Symbol();

export default class Subscription {
  constructor(sdk) {
    this[SDK] = sdk;
    this[SUB] = this[SDK].createSubscription();
    this[FILTERS] = new Set();
    this[HANDLERS] = new Map();
    this[SUB].on(this.events.notification, m => {
      if(this[HANDLERS].has(m.event)) {
        this[HANDLERS].get(m.event).forEach(handler => {
          try {
            handler(m);
          } catch(e) {
            console.error(`Error occurs when invoking subscription notification handler for "${m.event}":`, e);
          }
        });
      }
    });
  }
  get events() {
    return this[SUB].events;
  }
  subscribe(event, handler) {
    if(event && typeof handler === 'function') {
      if(!this[HANDLERS].has(event)) {
        this[HANDLERS].set(event, new Set());
      }
      if(!this[FILTERS].has(event)) {
        this[FILTERS].add(event);
        this[SUB].setEventFilters(Array.from(this[FILTERS]));
        this[SUB].register();
      }
      this[HANDLERS].get(event).add(handler);
    }
  }
}
