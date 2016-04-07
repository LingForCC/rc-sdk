import Sdk from './lib/sdk';
import Subscription from './lib/subscription';
import Brand from './lib/brand';
import Platform from './lib/platform';

const SDK = Symbol();
const SUBSCRIPTION = Symbol();
const BRAND = Symbol();
const PLATFORM = Symbol();


/**
 * @class RcPhone
 * RingCentral phone class, provide feature complete ringcentral phone without UI.
 */
export default class RcPhone {
  constructor({
    sdkInstance,
    sdkSettings,
    sdkProvider = Sdk,
    storage,
    brandSettings,
    brandProvider = Brand,
    platformProvider = Platform,
  }) {

    if(!sdkInstance) {
      if(!sdkSettings) {
        throw new Error('no sdk settings found...');
      }
      sdkInstance = new sdkProvider({
        ...sdkSettings,
        storage
      });
    }
    this[SDK] = sdkInstance;

    this[PLATFORM] = new platformProvider({
      sdk: this[SDK],
      brandSettings,
    });

    this[SUBSCRIPTION] = new Subscription({
      sdk: this[SDK],
    });

    this[BRAND] = new brandProvider({
      ...brandSettings,
      platform: this[PLATFORM]
    });


  }

  get sdk() {
    return this[SDK];
  }


  get platform() {
    return this[PLATFORM];
  }


  get brand() {
    return this[BRAND];
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
