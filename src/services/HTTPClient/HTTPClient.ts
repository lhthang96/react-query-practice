import axios, { AxiosRequestConfig } from 'axios';

type ClientCredentials = {
  access_token: string;
  expires_in: number;
  token_type: 'bearer';
};

export class HTTPClient {
  private static _instance: HTTPClient;

  public static get instance(): HTTPClient {
    return HTTPClient._instance || new HTTPClient();
  }

  private readonly BASE_URL = getBaseURL();
  private readonly CLIENT_ID = process.env.CLIENT_ID;
  private readonly CLIENT_SECRET = process.env.CLIENT_SECRET;

  private client = axios.create({
    baseURL: this.BASE_URL
  });

  private credentials: ClientCredentials = getCredentialsFromStorage();

  private fetchCredentials = async (): Promise<void> => {
    const url = 'https://id.twitch.tv/oauth2/token';
    const clientId = this.CLIENT_ID;
    const clientSecret = this.CLIENT_SECRET;
    const grantType = 'client_credentials';
    const requestUrl = `${url}?client_id=${clientId}&client_secret=${clientSecret}&grant_type=${grantType}`;
    const { data: credentials } = await axios.post<ClientCredentials>(requestUrl);
    this.credentials = {
      ...credentials,
      /**
       * Twitch API return the `expires_in` value for indicating the number of seconds that token is valid after requested.
       * This step override this value with time value in milliseconds for easier checking
       */
      expires_in: new Date().getTime() + credentials.expires_in * 1000
    };
    saveCredentialsToStorage(this.credentials);
  };

  private getToken = async (): Promise<string> => {
    if (!isValidCredentials(this.credentials)) {
      await this.fetchCredentials();
    }

    return this.credentials.access_token;
  };

  private getHeaders = async (): Promise<any> => {
    const token = await this.getToken();
    return {
      'Client-ID': this.CLIENT_ID,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'text/plain'
    };
  };

  public getGames = async (): Promise<any> => {
    const headers = await this.getHeaders();
    const body = 'fields *;';
    console.log({ headers });
    const result = await this.client.post('/games', body, { headers });
    return result.data;
  };
}

/**
 * LOCAL FUNCTIONS
 */
const getBaseURL = (): string => {
  return process.env.MODE === 'DEV' ? 'http://localhost:8080/https://api.igdb.com/v4' : 'https://api.igdb.com/v4';
};

// #region SAVE_CREDENTIAL_TO_LOCAL_STORAGE
const CREDENTIALS_KEY = 'credentials';
const saveCredentialsToStorage = (credentials: ClientCredentials): void => {
  const stringify = JSON.stringify(credentials || {});
  localStorage.setItem(CREDENTIALS_KEY, stringify);
};

const getCredentialsFromStorage = (): ClientCredentials => {
  const stringify = localStorage.getItem(CREDENTIALS_KEY);
  return stringify && JSON.parse(stringify);
};
// #endregion SAVE_CREDENTIAL_TO_LOCAL_STORAGE

const isValidCredentials = (credentials: ClientCredentials): boolean => {
  const { access_token, expires_in } = credentials || {};
  const isHavingToken = !!access_token;
  const isExpired = new Date().getTime() > expires_in - 5 * 60 * 1000; // Valid time smaller than 5 minutes considered stale
  return isHavingToken && !isExpired;
};
