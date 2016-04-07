import { expect } from 'chai';
import config from '../config';

import RcPhone from '../src/rc-phone';

describe('rc-phone', () => {
  it('should work', () => {
    let phone = new RcPhone({
      sdkSettings: {
        ...config.sdk
      }
    });
  });
});

