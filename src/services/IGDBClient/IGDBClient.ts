import { Game } from 'src/shared/interfaces';
import { HTTPClient } from './HTTPClient';
import { IGDBQuery, QueryHelper } from './QueryHelper';
import { TwitchClient } from './TwitchClient';

export class IGDBClient {
  private static _instance: IGDBClient;

  public static get instance(): IGDBClient {
    return IGDBClient._instance || new IGDBClient();
  }

  private readonly BASE_URL = process.env.IGDB_BASE_URL;
  private httpClient = new HTTPClient({ baseURL: this.BASE_URL });
  private twitchClient = new TwitchClient();
  private queryHelper = new QueryHelper();

  private getHeaders = async (): Promise<any> => {
    const token = await this.twitchClient.getToken();
    const clientId = this.twitchClient.getClientId();
    return {
      Authorization: `Bearer ${token}`,
      'Client-ID': clientId,
      'Content-Type': 'text/plain'
    };
  };

  public getGames = async (query: IGDBQuery<Game>): Promise<Game[]> => {
    const headers = await this.getHeaders();
    const body = this.queryHelper.getQueryBody(query);
    const result = await this.httpClient.post<Game[]>('/games', body, { headers });
    return result.data;
  };
}
