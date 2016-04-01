import RC from 'ringcentral';
import Webphone from 'ringcentral-web-phone';

import Subscription from './lib/subscription';

const SDK = Symbol();
const WEBPHONE = Symbol();
const SUB = Symbol();


export default class RcSdk {
  constructor(props) {
    let {
      ringcentral,
      webphone,
      brand,
      subscription = true,
    } = props;



    if(!ringcentral) {
      throw new Error('property `ringcentral` is missing...');
    }
    this[SDK] = (ringcentral instanceof RC) ? ringcentral : new RC(ringcentral);

    if(subscription) {
      this[SUB] = (subscription instanceof Subscription) ? subscription : new Subscription(this[SDK]);
    }

    this[WEBPHONE] = webphone instanceof Webphone ? webphone : new Webphone();
  }
  get subscription() {
    return this[SUB];
  }
}
