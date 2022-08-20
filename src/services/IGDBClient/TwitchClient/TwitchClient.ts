import axios from 'axios';

type TwitchCredentials = {
  access_token: string;
  expires_in: number;
  token_type: 'bearer';
};

export class TwitchClient {
  private readonly CREDENTIALS_KEY = 'credentials';
  private readonly CLIENT_ID = process.env.CLIENT_ID;
  private readonly CLIENT_SECRET = process.env.CLIENT_SECRET;
  private credentials: TwitchCredentials;

  constructor() {
    this.credentials = this.getCredentialsFromStorage();
  }

  public getToken = async (): Promise<string> => {
    if (!this.isValidCredentials()) {
      await this.fetchCredentials();
      this.saveCredentialsToStorage();
    }

    return this.credentials.access_token;
  };

  public getClientId = (): string => {
    return this.CLIENT_ID;
  };

  private fetchCredentials = async (): Promise<void> => {
    const url = 'https://id.twitch.tv/oauth2/token';
    const clientId = this.CLIENT_ID;
    const clientSecret = this.CLIENT_SECRET;
    const grantType = 'client_credentials';
    const requestUrl = `${url}?client_id=${clientId}&client_secret=${clientSecret}&grant_type=${grantType}`;
    const { data: credentials } = await axios.post<TwitchCredentials>(requestUrl);
    this.credentials = {
      ...credentials,
      /**
       * Twitch API return the `expires_in` value for indicating the number of seconds that token is valid after requested.
       * This step override this value with time value in milliseconds for easier checking
       */
      expires_in: new Date().getTime() + credentials.expires_in * 1000
    };
  };

  private saveCredentialsToStorage = (): void => {
    const stringify = JSON.stringify(this.credentials || {});
    localStorage.setItem(this.CREDENTIALS_KEY, stringify);
  };

  private getCredentialsFromStorage = (): TwitchCredentials => {
    const stringify = localStorage.getItem(this.CREDENTIALS_KEY);
    return stringify && JSON.parse(stringify);
  };

  private isValidCredentials = (): boolean => {
    const { access_token, expires_in } = this.credentials || {};
    const isHavingToken = !!access_token;
    const isExpired = new Date().getTime() > expires_in - 5 * 60 * 1000; // Valid time smaller than 5 minutes considered stale
    return isHavingToken && !isExpired;
  };
}
