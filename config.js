import accounts from './accounts';
import RingCentral from 'ringcentral';

export default {
  sdk: {
    ...accounts.sdk,
    server: RingCentral.server.production
  }
}
