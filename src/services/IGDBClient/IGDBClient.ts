import { Game, GameScope, IGDBQuery } from 'src/shared/interfaces';
import { HTTPClient } from './HTTPClient';
import { QueryHelper } from './QueryHelper';
import { TwitchClient } from './TwitchClient';

export class IGDBClient {
  private static _instance: IGDBClient;

  public static get instance(): IGDBClient {
    return IGDBClient._instance || new IGDBClient();
  }

  private readonly BASE_URL = process.env.IGDB_BASE_URL;
  private http = new HTTPClient({ baseURL: this.BASE_URL });
  private twitch = new TwitchClient();
  private queryHelper = new QueryHelper();

  private getHeaders = async (): Promise<any> => {
    const token = await this.twitch.getToken();
    const clientId = this.twitch.getClientId();
    return {
      Authorization: `Bearer ${token}`,
      'Client-ID': clientId,
      'Content-Type': 'text/plain'
    };
  };

  public getGames = async (query: IGDBQuery<Game, GameScope>): Promise<Game[]> => {
    const headers = await this.getHeaders();
    const body = this.queryHelper.getGameQuery(query);
    const result = await this.http.post<Game[]>('/games', body, { headers });
    return result.data;
  };
}
