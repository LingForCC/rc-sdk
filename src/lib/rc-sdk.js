import RingCentral from 'ringcentral';
import Wrapper from './wrapper';

/**
 * wrapper around RingCentral
 */
export default class RcSdk extends Wrapper {
  constructor(options) {
    let {
      appKey,
      appSecret,
      cache,
      server,
      sdk
    } = options;

    if(!sdk) {

    }

    super(sdk);

  }
}
