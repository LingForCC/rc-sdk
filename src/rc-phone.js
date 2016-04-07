import Sdk from './lib/sdk';
import Subscription from './lib/subscription';

const SDK = Symbol();
const SUBSCRIPTION = Symbol();

export default class RcPhone {
  constructor({
    sdkInstance,
    sdkSettings,
    sdkProvider = Sdk,
    storage,

  }) {

    if(!sdkInstance) {
      if(!sdkSettings) {
        throw new Error('no sdk settings found...');
      }
      sdkInstance = new sdkProvider(sdkSettings, storage);
    }
    this[SDK] = sdkInstance;


    this[SUBSCRIPTION] = new Subscription({
      sdk: this[SDK]
    });
  }

   get sdk() {
    return this[SDK];
  }

  get api() {

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
