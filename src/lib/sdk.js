import RingCentral from 'ringcentral';
import Wrapper from './wrapper';

/**
 * wrapper around RingCentral
 */
export default class Sdk extends Wrapper {
  constructor({
    appKey,
    appSecret,
    cachePrefix,
    server,
    sdk
  }, storage) {
    let {
      appKey,
      appSecret,
      cachePrefix,
      server,
      sdk
    } = options;

    if(!sdk) {
      let tmp = RingCentral.Externals.localStorage;
      if(storage) {
        RingCentral.Externals.localStorage = storage;
      }
      sdk = new RingCentral({
        appKey,
        appSecret,
        cachePrefix,
        server
      });
      if(storage) {
        RingCentral.Externals.localStorage = tmp;
      }
    }
    super(sdk);
  }
}
