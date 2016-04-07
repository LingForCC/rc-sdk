import Wrapper from './wrapper';

const BRAND = Symbol();
const PUBLIC_TOKEN = Symbol();

async function getPublicToken() {

}

export default class Platform extends Wrapper {
  constructor({
    sdk,
    brandSettings
  }) {
    super(sdk.base.platform());

    if(!brandSettings) {
      throw new Error('brandSettings is undefined...');
    }
    if(!brandSettings.id) {
      throw new Error('brand id is undefined...');
    }

    this[BRAND] = brandSettings.id;

  }

  async login() {

  }
  async logout() {

  }
  async loggedIn() {
    //check of token exists
    //check token type
    //if user => platform.loggedIn
    //if public => check if token expiring -> request if necessary
    //if not logged in => requestClientCredential
  }

  async requestClientCredential() {

  }

  async getAllowedLoginCountries() {
    await loggedIn();
    //get login countries;
  }

  async parseNumber() {
    await loggedIn();
  }


}
