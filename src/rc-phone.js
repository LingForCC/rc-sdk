import Sdk from './lib/sdk';
import Subscription from './lib/subscription';

const SDK = Symbol();
const SUBSCRIPTION = Symbol();

export default class RcPhone {
  constructor({
    sdkSettings,
    storage
  }) {

    this[SDK] = new Sdk({
      sdkSettings,
      storage
    });

    this[SUBSCRIPTION] = new Subscription({
      sdk: this[SDK]
    });
  }

  get sdk() {
    return this[SDK];
  }

  get api() {

  }

  login() {

  }

  logout() {

  }

  get brand() {

  }

  get cache() {
    this[SDK].base._cache;
  }

  get contact() {

  }


  get conference() {

  }

  get meeting() {

  }

  get message() {

  }

  get subscription() {
    return this[SUBSCRIPTION];
  }



}
