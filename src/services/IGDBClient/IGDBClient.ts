import { HTTPClient } from './HTTPClient';
import { TwitchClient } from './TwitchClient';

export class IGDBClient {
  private static _instance: IGDBClient;

  public static get instance(): IGDBClient {
    return IGDBClient._instance || new IGDBClient();
  }

  private readonly BASE_URL = getBaseURL();
  private httpClient = new HTTPClient({ baseURL: this.BASE_URL });
  private twitchClient = new TwitchClient();

  private getHeaders = async (): Promise<any> => {
    const token = await this.twitchClient.getToken();
    const clientId = this.twitchClient.getClientId();
    return {
      'Client-ID': clientId,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'text/plain'
    };
  };

  public getGames = async (): Promise<any> => {
    const headers = await this.getHeaders();
    const body = 'fields *;';
    const result = await this.httpClient.post('/games', body, { headers });
    return result.data;
  };
}

const getBaseURL = (): string => {
  return process.env.MODE === 'DEV' ? 'http://localhost:8080/https://api.igdb.com/v4' : 'https://api.igdb.com/v4';
};
